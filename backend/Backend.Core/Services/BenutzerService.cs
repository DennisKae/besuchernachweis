using System;
using AutoMapper;
using Backend.Core.Repositories;
using Backend.Core.Services.Interfaces;
using Backend.Core.ViewModels;
using Backend.Data;
using Backend.Data.Models;
using Microsoft.Extensions.Logging;

namespace Backend.Core.Services
{
    public class BenutzerService : IBenutzerService
    {
        private readonly IMapper _mapper;
        private readonly ILogger<BenutzerService> _logger;
        private readonly IPasswordHashingService _passwordHashingService;

        public BenutzerService(
            IMapper mapper,
            ILogger<BenutzerService> logger,
            IPasswordHashingService passwordHashingService)
        {
            _mapper = mapper;
            _logger = logger;
            _passwordHashingService = passwordHashingService;
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

        public Benutzer CreateBenutzer(Benutzer benutzer)
        {
            Guard.IsNotNull(benutzer, nameof(benutzer));
            benutzer.LetzterLogin = DateTime.Now;
            using (var unit = new UnitOfWork())
            {
                var benutzerRepo = unit.GetRepository<BenutzerRepository>();
                benutzerRepo.CreateBenutzer(benutzer);

                unit.SaveChanges();
                return benutzer;
            }
        }

        public BenutzerViewModel Update(ExtendedBenutzerViewModel benutzer)
        {
            Guard.IsNotNull(benutzer, nameof(benutzer));

            if (benutzer.Passwort != benutzer.PasswortWiederholung)
            {
                throw new CustomException("Das Passwort wurde nicht korrekt wiederholt.");
            }

            using (var unit = new UnitOfWork())
            {
                var benutzerRepo = unit.GetRepository<BenutzerRepository>();
                var dbBenutzer = benutzerRepo.GetByEmail(benutzer?.Person?.Email);
                if (dbBenutzer == null)
                {
                    throw new CustomException("Der Benutzer wurde nicht gefunden");
                }

                dbBenutzer = _mapper.Map(benutzer, dbBenutzer);
                benutzerRepo.Update(dbBenutzer);

                unit.SaveChanges();
                return _mapper.Map<BenutzerViewModel>(dbBenutzer);
            }
        }

    }
}
