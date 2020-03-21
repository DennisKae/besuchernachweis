using System;
using Backend.Data.Models;
using Microsoft.EntityFrameworkCore;

namespace Backend.Data
{
    public class DatabaseContext : DbContext
    {
        private readonly string _datenbankPfad;

        public DbSet<Person> Person { get; set; }
        public DbSet<Benutzer> Benutzer { get; set; }
        public DbSet<Besucher> Besucher { get; set; }
        public DbSet<Konfiguration> Konfiguration { get; set; }


        public DatabaseContext(string datenbankPfad)
        {
            _datenbankPfad = datenbankPfad;
        }

        public DatabaseContext()
        {
            _datenbankPfad = Environment.GetEnvironmentVariable("DATENBANKPFAD");
        }


        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            Guard.IsNotNull(_datenbankPfad, nameof(_datenbankPfad));

            optionsBuilder.UseSqlite("Data Source=" + _datenbankPfad);
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder?.Entity<Person>(entity =>
            {
                entity.Property(x => x.SysStampIn).HasDefaultValueSql("datetime('now','localtime')");
                entity.HasData(new Person[]{
                    new Person
                    {
                        Id = 1,
                        Name ="Mustermann",
                        Vorname = "Max",
                        Email = "max.mustermann@test.de",
                        Telefon = "0561 123 4567",
                        SysStampIn = new DateTime(2020,03,21,12,0,0)
                    },
                    new Person
                    {
                        Id = 2,
                        Name ="Mustermann",
                        Vorname = "Martina",
                        Email = "martina.mustermann@test.de",
                        Telefon = "0561 123 4568",
                        SysStampIn = new DateTime(2020,03,21,12,1,0)
                    }
                });
            });

            modelBuilder.Entity<Benutzer>(entity =>
            {
                entity.HasData(new Benutzer[] {
                new Benutzer
                {
                    Id = 1,
                    Sicherheitsfrage = "Wie hieß Ihr erstes Haustier?",
                    SicherheitsfrageAntwort = "Hundi",
                    Rolle = "Pförtner",
                    PersonId = 1
                }});
            });

            modelBuilder.Entity<Besucher>(entity =>
            {
                entity.HasData(new Besucher[]{
                    new Besucher
                    {
                        Id = 1,
                        PersonId = 2,
                        Gesundheitsstatus = "gesund"
                    }
                });
            });
        }
    }
}
