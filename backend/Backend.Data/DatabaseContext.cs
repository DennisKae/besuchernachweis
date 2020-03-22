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

        public DbSet<Gebaeude> Gebaeude { get; set; }
        public DbSet<Raum> Raum { get; set; }

        public DbSet<Besuch> Besuch { get; set; }
        public DbSet<BesuchBesucher> BesuchBesucher { get; set; }
        public DbSet<BesuchRaum> BesuchRaum { get; set; }


        public DatabaseContext(string datenbankPfad)
        {
            _datenbankPfad = datenbankPfad;
        }

        public DatabaseContext()
        {
            _datenbankPfad = EnvironmentVariableValues.Datenbankpfad;
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
                entity.HasIndex(x => x.Email);
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
                    },
                    new Person
                    {
                        Id = 3,
                        Name ="Mustermann",
                        Vorname = "Erika",
                        Email = "erika.mustermann@test.de",
                        Telefon = "0561 123 4569",
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
                    Passwort = "AYgdFleLHESvoYA29zlEZrdl4z5Be36ibZWa+ozs4r6lPBkxhIEReGvXWEsIunduCQ==",
                    Sicherheitsfrage = "Wie hieß Ihr erstes Haustier?",
                    SicherheitsfrageAntwort = "Hundi",
                    HasExtendedRights = false,
                    PersonId = 1
                },
                new Benutzer
                {
                    Id = 2,
                    Passwort = "AYgdFleLHESvoYA29zlEZrdl4z5Be36ibZWa+ozs4r6lPBkxhIEReGvXWEsIunduCQ==",
                    Sicherheitsfrage = "Wie hieß Ihr erstes Haustier?",
                    SicherheitsfrageAntwort = "Hundi",
                    HasExtendedRights = true,
                    PersonId = 2
                }
                });
            });

            modelBuilder.Entity<Besucher>(entity =>
            {
                entity.HasData(new Besucher[]{
                    new Besucher
                    {
                        Id = 1,
                        PersonId = 3,
                        Gesundheitsstatus = "gesund"
                    }
                });
            });

            modelBuilder.Entity<Raum>(entity =>
            {
                entity.HasData(new Raum[]
                {
                    new Raum
                    {
                        Id = 1,
                        Bezeichnung = "Raum 1.1",
                        GebaeudeId = 1
                    },
                    new Raum
                    {
                        Id = 2,
                        Bezeichnung = "Raum 2.2",
                        GebaeudeId = 2
                    }
                });
            });

            modelBuilder.Entity<Gebaeude>(entity =>
            {
                entity.HasData(new Gebaeude[]
                {
                    new Gebaeude
                    {
                        Id = 1,
                        Bezeichnung = "Gebäude 1"
                    },
                    new Gebaeude
                    {
                        Id = 2,
                        Bezeichnung = "Gebäude 2"
                    }
                });
            });
        }
    }
}
