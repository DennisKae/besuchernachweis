using System;
using AutoMapper;
using Backend.Core.Repositories;
using Backend.Core.Services.Interfaces;
using Backend.Core.ViewModels;
using Backend.Data.Models;
using Microsoft.Extensions.Logging;

namespace Backend.Core.Services
{
    public class BenutzerService : IBenutzerService
    {
        private readonly IMapper _mapper;
        private readonly ILogger<BenutzerService> _logger;

        public BenutzerService(
            IMapper mapper,
            ILogger<BenutzerService> logger)
        {
            _mapper = mapper;
            _logger = logger;
        }

        public Benutzer GetByEmail(string email)
        {
            if (string.IsNullOrWhiteSpace(email))
            {
                return null;
            }

            using (var unit = new UnitOfWork())
            {
                var benutzerRepo = unit.GetRepository<BenutzerRepository>();
                return benutzerRepo.GetByEmail(email);
            }
        }

        public LoginResultViewModel Login(LoginViewModel loginViewModel)
        {
            var user = GetByEmail(loginViewModel?.Email);
            if (user == null)
            {
                throw new CustomException("Benutzername oder Passwort falsch.");
            }

            _logger.LogDebug($"Erfolgreicher Loginversuch des Benutzers {loginViewModel?.Email}.");

            SetLastLogin(user);

            return _mapper.Map<LoginResultViewModel>(user);
        }

        private void SetLastLogin(Benutzer benutzer)
        {
            benutzer.LetzterLogin = DateTime.Now;

            using (var unit = new UnitOfWork())
            {
                var benutzerRepo = unit.GetRepository<BenutzerRepository>();
                benutzerRepo.Update(benutzer);
                unit.SaveChanges();
            }
        }
    }
}
