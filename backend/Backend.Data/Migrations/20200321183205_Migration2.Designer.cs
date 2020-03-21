﻿// <auto-generated />
using System;
using Backend.Data;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Migrations;
using Microsoft.EntityFrameworkCore.Storage.ValueConversion;

namespace Backend.Data.Migrations
{
    [DbContext(typeof(DatabaseContext))]
    [Migration("20200321183205_Migration2")]
    partial class Migration2
    {
        protected override void BuildTargetModel(ModelBuilder modelBuilder)
        {
#pragma warning disable 612, 618
            modelBuilder
                .HasAnnotation("ProductVersion", "3.1.2");

            modelBuilder.Entity("Backend.Data.Models.Benutzer", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("INTEGER");

                    b.Property<DateTime>("LetzterLogin")
                        .HasColumnType("TEXT");

                    b.Property<string>("Passwort")
                        .HasColumnType("TEXT");

                    b.Property<int>("PersonId")
                        .HasColumnType("INTEGER");

                    b.Property<string>("Rolle")
                        .HasColumnType("TEXT");

                    b.Property<string>("Sicherheitsfrage")
                        .HasColumnType("TEXT");

                    b.Property<string>("SicherheitsfrageAntwort")
                        .HasColumnType("TEXT");

                    b.HasKey("Id");

                    b.HasIndex("PersonId");

                    b.ToTable("Benutzer");

                    b.HasData(
                        new
                        {
                            Id = 1,
                            LetzterLogin = new DateTime(1, 1, 1, 0, 0, 0, 0, DateTimeKind.Unspecified),
                            PersonId = 1,
                            Rolle = "Pförtner",
                            Sicherheitsfrage = "Wie hieß Ihr erstes Haustier?",
                            SicherheitsfrageAntwort = "Hundi"
                        });
                });

            modelBuilder.Entity("Backend.Data.Models.Besucher", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("INTEGER");

                    b.Property<string>("Gesundheitsstatus")
                        .HasColumnType("TEXT");

                    b.Property<int>("PersonId")
                        .HasColumnType("INTEGER");

                    b.HasKey("Id");

                    b.HasIndex("PersonId");

                    b.ToTable("Besucher");

                    b.HasData(
                        new
                        {
                            Id = 1,
                            Gesundheitsstatus = "gesund",
                            PersonId = 2
                        });
                });

            modelBuilder.Entity("Backend.Data.Models.Gebaeude", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("INTEGER");

                    b.Property<string>("Bezeichnung")
                        .HasColumnType("TEXT");

                    b.HasKey("Id");

                    b.ToTable("Gebaeude");

                    b.HasData(
                        new
                        {
                            Id = 1,
                            Bezeichnung = "Gebäude 1"
                        },
                        new
                        {
                            Id = 2,
                            Bezeichnung = "Gebäude 2"
                        });
                });

            modelBuilder.Entity("Backend.Data.Models.Konfiguration", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("INTEGER");

                    b.Property<string>("Paramater")
                        .HasColumnType("TEXT");

                    b.Property<string>("Wert")
                        .HasColumnType("TEXT");

                    b.HasKey("Id");

                    b.ToTable("Konfiguration");
                });

            modelBuilder.Entity("Backend.Data.Models.Person", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("INTEGER");

                    b.Property<string>("Email")
                        .HasColumnType("TEXT");

                    b.Property<string>("Name")
                        .HasColumnType("TEXT");

                    b.Property<DateTime>("SysStampIn")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("TEXT")
                        .HasDefaultValueSql("datetime('now','localtime')");

                    b.Property<string>("Telefon")
                        .HasColumnType("TEXT");

                    b.Property<string>("Vorname")
                        .HasColumnType("TEXT");

                    b.HasKey("Id");

                    b.ToTable("Person");

                    b.HasData(
                        new
                        {
                            Id = 1,
                            Email = "max.mustermann@test.de",
                            Name = "Mustermann",
                            SysStampIn = new DateTime(2020, 3, 21, 12, 0, 0, 0, DateTimeKind.Unspecified),
                            Telefon = "0561 123 4567",
                            Vorname = "Max"
                        },
                        new
                        {
                            Id = 2,
                            Email = "martina.mustermann@test.de",
                            Name = "Mustermann",
                            SysStampIn = new DateTime(2020, 3, 21, 12, 1, 0, 0, DateTimeKind.Unspecified),
                            Telefon = "0561 123 4568",
                            Vorname = "Martina"
                        });
                });

            modelBuilder.Entity("Backend.Data.Models.Raum", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("INTEGER");

                    b.Property<string>("Bezeichnung")
                        .HasColumnType("TEXT");

                    b.Property<int>("GebaeudeId")
                        .HasColumnType("INTEGER");

                    b.HasKey("Id");

                    b.HasIndex("GebaeudeId");

                    b.ToTable("Raum");

                    b.HasData(
                        new
                        {
                            Id = 1,
                            Bezeichnung = "Raum 1.1",
                            GebaeudeId = 1
                        },
                        new
                        {
                            Id = 2,
                            Bezeichnung = "Raum 2.2",
                            GebaeudeId = 2
                        });
                });

            modelBuilder.Entity("Backend.Data.Models.Benutzer", b =>
                {
                    b.HasOne("Backend.Data.Models.Person", "Person")
                        .WithMany()
                        .HasForeignKey("PersonId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();
                });

            modelBuilder.Entity("Backend.Data.Models.Besucher", b =>
                {
                    b.HasOne("Backend.Data.Models.Person", "Person")
                        .WithMany()
                        .HasForeignKey("PersonId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();
                });

            modelBuilder.Entity("Backend.Data.Models.Raum", b =>
                {
                    b.HasOne("Backend.Data.Models.Gebaeude", "Gebaeude")
                        .WithMany("Raeume")
                        .HasForeignKey("GebaeudeId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();
                });
#pragma warning restore 612, 618
        }
    }
}
