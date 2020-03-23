using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using AutoMapper;
using Backend.Core.Repositories;
using Backend.Core.Services.Interfaces;
using Backend.Core.ViewModels;
using Backend.Data;
using Backend.Data.Models;
using Microsoft.Extensions.Logging;

namespace Backend.Core.Services
{
    public class AuthService : IAuthService
    {
        private readonly IBenutzerService _benutzerService;
        private readonly IPasswordHashingService _passwordHashingService;
        private readonly ILogger<AuthService> _logger;
        private readonly IMapper _mapper;

        public AuthService(
            IBenutzerService benutzerService,
            IPasswordHashingService passwordHashingService,
            ILogger<AuthService> logger,
            IMapper mapper)
        {
            _benutzerService = benutzerService;
            _passwordHashingService = passwordHashingService;
            _logger = logger;
            _mapper = mapper;
        }

        public LoginResultViewModel Login(LoginViewModel loginViewModel)
        {
            var user = _benutzerService.GetByEmail(loginViewModel?.Email?.ToLowerInvariant());
            var errorMessage = "Benutzername oder Passwort falsch.";
            if (user == null)
            {
                throw new CustomException(errorMessage);
            }

            // TODO: Sperrung aktivieren, wenn Entsperrung möglich ist
            //if (user.IstGesperrt)
            //{
            //    throw new CustomException("Ihr Benutzer ist gesperrt. Kontaktieren Sie einen Administrator zur Entsperrung.");
            //}

            PasswordVerificationResult verificationResult = _passwordHashingService.VerifyHashedPassword(user.Passwort, loginViewModel.Passwort);

            if (verificationResult == PasswordVerificationResult.Failed)
            {
                using (var unit = new UnitOfWork())
                {
                    var benutzerRepo = unit.GetRepository<BenutzerRepository>();
                    user.LoginVersuche += 1;
                    //if (user.LoginVersuche >= EnvironmentVariableValues.Loginversuche)
                    //{
                    //user.IstGesperrt = true;
                    //}
                    _logger.LogInformation("Erfolgloser Login durch " + loginViewModel.Email);
                    benutzerRepo.Update(user);
                }

                throw new CustomException(errorMessage);
            }
            else if (user.LoginVersuche > 0)
            {
                using (var unit = new UnitOfWork())
                {
                    var benutzerRepo = unit.GetRepository<BenutzerRepository>();
                    user.LoginVersuche = 0;
                    benutzerRepo.Update(user);
                }
            }

            _logger.LogInformation($"Erfolgreicher Loginversuch des Benutzers {loginViewModel?.Email}.");

            SetLastLoginResetLoginversuche(user);

            return _mapper.Map<LoginResultViewModel>(user);
        }

        public LoginResultViewModel Register(ExtendedBenutzerViewModel benutzer)
        {
            Guard.IsNotNull(benutzer, nameof(benutzer));
            Guard.IsNotNull(benutzer.Person, nameof(benutzer.Person));
            Guard.IsNotNull(benutzer.Person.Email, nameof(benutzer.Person.Email));
            Guard.IsNotNull(benutzer.Person.Vorname, nameof(benutzer.Person.Email));
            Guard.IsNotNull(benutzer.Person.Name, nameof(benutzer.Person.Email));

            benutzer.Person.Email = benutzer.Person.Email.ToLowerInvariant();

            if (benutzer.PasswortWiederholung != benutzer.Passwort)
            {
                throw new CustomException("Passwort und Passwortwiederholung sind nicht identisch.");
            }

            var dbBenutzer = _mapper.Map<Benutzer>(benutzer);
            dbBenutzer.Passwort = _passwordHashingService.HashPassword(benutzer.Passwort);
            dbBenutzer.IstGesperrt = false;
            dbBenutzer = _benutzerService.CreateBenutzer(dbBenutzer);

            _logger.LogInformation("Neuer Benutzer registriert: " + benutzer.Person.Email);

            return _mapper.Map<LoginResultViewModel>(dbBenutzer);
        }

        private void SetLastLoginResetLoginversuche(Benutzer benutzer)
        {
            benutzer.LetzterLogin = DateTime.Now;
            benutzer.LoginVersuche = 0;

            using (var unit = new UnitOfWork())
            {
                var benutzerRepo = unit.GetRepository<BenutzerRepository>();
                benutzerRepo.Update(benutzer);
                unit.SaveChanges();
            }
        }
    }
}
