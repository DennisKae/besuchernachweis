using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Backend.Data.Models;
using Backend.Data.Repositories.Interfaces;
using Microsoft.EntityFrameworkCore;

namespace Backend.Data
{
    public class DatabaseContext : DbContext
    {
        private readonly string _datenbankPfad;
        private readonly IConfigurationFileRepository _configurationFileRepository;

        public DbSet<Benutzer> Benutzer { get; set; }


        public DatabaseContext(string datenbankPfad)
        {
            _datenbankPfad = datenbankPfad;
        }

        public DatabaseContext(
            IConfigurationFileRepository configurationFileRepository)
        {
            _configurationFileRepository = configurationFileRepository;
        }


        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            string datenbankPfad = _datenbankPfad;
            if (string.IsNullOrWhiteSpace(datenbankPfad))
            {
                var dateiKonfiguration = _configurationFileRepository.GetConfigFromJsonFile<AllgemeineKonfiguration>();
                Guard.IsNotNull(dateiKonfiguration, nameof(AllgemeineKonfiguration));
                Guard.IsNotNull(dateiKonfiguration.Datenbankpfad, nameof(dateiKonfiguration.Datenbankpfad));
                datenbankPfad = dateiKonfiguration.Datenbankpfad;
            }

            optionsBuilder.UseSqlite("Data Source=" + datenbankPfad);
        }
    }
}
