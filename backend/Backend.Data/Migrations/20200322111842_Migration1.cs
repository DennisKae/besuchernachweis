using System;
using Microsoft.EntityFrameworkCore.Migrations;

namespace Backend.Data.Migrations
{
    public partial class Migration1 : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "Besuch",
                columns: table => new
                {
                    Id = table.Column<int>(nullable: false)
                        .Annotation("Sqlite:Autoincrement", true),
                    Startzeit = table.Column<DateTime>(nullable: false),
                    Endzeit = table.Column<DateTime>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Besuch", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "Gebaeude",
                columns: table => new
                {
                    Id = table.Column<int>(nullable: false)
                        .Annotation("Sqlite:Autoincrement", true),
                    Bezeichnung = table.Column<string>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Gebaeude", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "Konfiguration",
                columns: table => new
                {
                    Id = table.Column<int>(nullable: false)
                        .Annotation("Sqlite:Autoincrement", true),
                    Paramater = table.Column<string>(nullable: true),
                    Wert = table.Column<string>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Konfiguration", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "Person",
                columns: table => new
                {
                    Id = table.Column<int>(nullable: false)
                        .Annotation("Sqlite:Autoincrement", true),
                    Name = table.Column<string>(nullable: true),
                    Vorname = table.Column<string>(nullable: true),
                    Email = table.Column<string>(nullable: true),
                    Telefon = table.Column<string>(nullable: true),
                    SysStampIn = table.Column<DateTime>(nullable: false, defaultValueSql: "datetime('now','localtime')")
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Person", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "Raum",
                columns: table => new
                {
                    Id = table.Column<int>(nullable: false)
                        .Annotation("Sqlite:Autoincrement", true),
                    Bezeichnung = table.Column<string>(nullable: true),
                    GebaeudeId = table.Column<int>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Raum", x => x.Id);
                    table.ForeignKey(
                        name: "FK_Raum_Gebaeude_GebaeudeId",
                        column: x => x.GebaeudeId,
                        principalTable: "Gebaeude",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "Benutzer",
                columns: table => new
                {
                    Id = table.Column<int>(nullable: false)
                        .Annotation("Sqlite:Autoincrement", true),
                    PersonId = table.Column<int>(nullable: false),
                    Passwort = table.Column<string>(nullable: true),
                    Sicherheitsfrage = table.Column<string>(nullable: true),
                    SicherheitsfrageAntwort = table.Column<string>(nullable: true),
                    IstGesperrt = table.Column<bool>(nullable: false),
                    LoginVersuche = table.Column<int>(nullable: false),
                    HasExtendedRights = table.Column<bool>(nullable: false),
                    LetzterLogin = table.Column<DateTime>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Benutzer", x => x.Id);
                    table.ForeignKey(
                        name: "FK_Benutzer_Person_PersonId",
                        column: x => x.PersonId,
                        principalTable: "Person",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "Besucher",
                columns: table => new
                {
                    Id = table.Column<int>(nullable: false)
                        .Annotation("Sqlite:Autoincrement", true),
                    PersonId = table.Column<int>(nullable: false),
                    Gesundheitsstatus = table.Column<string>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Besucher", x => x.Id);
                    table.ForeignKey(
                        name: "FK_Besucher_Person_PersonId",
                        column: x => x.PersonId,
                        principalTable: "Person",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "BesuchRaum",
                columns: table => new
                {
                    Id = table.Column<int>(nullable: false)
                        .Annotation("Sqlite:Autoincrement", true),
                    BesuchId = table.Column<int>(nullable: false),
                    RaumId = table.Column<int>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_BesuchRaum", x => x.Id);
                    table.ForeignKey(
                        name: "FK_BesuchRaum_Besuch_BesuchId",
                        column: x => x.BesuchId,
                        principalTable: "Besuch",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_BesuchRaum_Raum_RaumId",
                        column: x => x.RaumId,
                        principalTable: "Raum",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "BesuchBesucher",
                columns: table => new
                {
                    Id = table.Column<int>(nullable: false)
                        .Annotation("Sqlite:Autoincrement", true),
                    BesucherId = table.Column<int>(nullable: false),
                    BesuchId = table.Column<int>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_BesuchBesucher", x => x.Id);
                    table.ForeignKey(
                        name: "FK_BesuchBesucher_Besuch_BesuchId",
                        column: x => x.BesuchId,
                        principalTable: "Besuch",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_BesuchBesucher_Besucher_BesucherId",
                        column: x => x.BesucherId,
                        principalTable: "Besucher",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.InsertData(
                table: "Gebaeude",
                columns: new[] { "Id", "Bezeichnung" },
                values: new object[] { 1, "Gebäude 1" });

            migrationBuilder.InsertData(
                table: "Gebaeude",
                columns: new[] { "Id", "Bezeichnung" },
                values: new object[] { 2, "Gebäude 2" });

            migrationBuilder.InsertData(
                table: "Person",
                columns: new[] { "Id", "Email", "Name", "SysStampIn", "Telefon", "Vorname" },
                values: new object[] { 1, "max.mustermann@test.de", "Mustermann", new DateTime(2020, 3, 21, 12, 0, 0, 0, DateTimeKind.Unspecified), "0561 123 4567", "Max" });

            migrationBuilder.InsertData(
                table: "Person",
                columns: new[] { "Id", "Email", "Name", "SysStampIn", "Telefon", "Vorname" },
                values: new object[] { 2, "martina.mustermann@test.de", "Mustermann", new DateTime(2020, 3, 21, 12, 1, 0, 0, DateTimeKind.Unspecified), "0561 123 4568", "Martina" });

            migrationBuilder.InsertData(
                table: "Person",
                columns: new[] { "Id", "Email", "Name", "SysStampIn", "Telefon", "Vorname" },
                values: new object[] { 3, "erika.mustermann@test.de", "Mustermann", new DateTime(2020, 3, 21, 12, 1, 0, 0, DateTimeKind.Unspecified), "0561 123 4569", "Erika" });

            migrationBuilder.InsertData(
                table: "Benutzer",
                columns: new[] { "Id", "HasExtendedRights", "IstGesperrt", "LetzterLogin", "LoginVersuche", "Passwort", "PersonId", "Sicherheitsfrage", "SicherheitsfrageAntwort" },
                values: new object[] { 1, false, false, new DateTime(1, 1, 1, 0, 0, 0, 0, DateTimeKind.Unspecified), 0, "AYgdFleLHESvoYA29zlEZrdl4z5Be36ibZWa+ozs4r6lPBkxhIEReGvXWEsIunduCQ==", 1, "Wie hieß Ihr erstes Haustier?", "Hundi" });

            migrationBuilder.InsertData(
                table: "Benutzer",
                columns: new[] { "Id", "HasExtendedRights", "IstGesperrt", "LetzterLogin", "LoginVersuche", "Passwort", "PersonId", "Sicherheitsfrage", "SicherheitsfrageAntwort" },
                values: new object[] { 2, true, false, new DateTime(1, 1, 1, 0, 0, 0, 0, DateTimeKind.Unspecified), 0, "AYgdFleLHESvoYA29zlEZrdl4z5Be36ibZWa+ozs4r6lPBkxhIEReGvXWEsIunduCQ==", 2, "Wie hieß Ihr erstes Haustier?", "Hundi" });

            migrationBuilder.InsertData(
                table: "Besucher",
                columns: new[] { "Id", "Gesundheitsstatus", "PersonId" },
                values: new object[] { 1, "gesund", 3 });

            migrationBuilder.InsertData(
                table: "Raum",
                columns: new[] { "Id", "Bezeichnung", "GebaeudeId" },
                values: new object[] { 1, "Raum 1.1", 1 });

            migrationBuilder.InsertData(
                table: "Raum",
                columns: new[] { "Id", "Bezeichnung", "GebaeudeId" },
                values: new object[] { 2, "Raum 2.2", 2 });

            migrationBuilder.CreateIndex(
                name: "IX_Benutzer_PersonId",
                table: "Benutzer",
                column: "PersonId");

            migrationBuilder.CreateIndex(
                name: "IX_BesuchBesucher_BesuchId",
                table: "BesuchBesucher",
                column: "BesuchId");

            migrationBuilder.CreateIndex(
                name: "IX_BesuchBesucher_BesucherId",
                table: "BesuchBesucher",
                column: "BesucherId");

            migrationBuilder.CreateIndex(
                name: "IX_Besucher_PersonId",
                table: "Besucher",
                column: "PersonId");

            migrationBuilder.CreateIndex(
                name: "IX_BesuchRaum_BesuchId",
                table: "BesuchRaum",
                column: "BesuchId");

            migrationBuilder.CreateIndex(
                name: "IX_BesuchRaum_RaumId",
                table: "BesuchRaum",
                column: "RaumId");

            migrationBuilder.CreateIndex(
                name: "IX_Person_Email",
                table: "Person",
                column: "Email");

            migrationBuilder.CreateIndex(
                name: "IX_Raum_GebaeudeId",
                table: "Raum",
                column: "GebaeudeId");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "Benutzer");

            migrationBuilder.DropTable(
                name: "BesuchBesucher");

            migrationBuilder.DropTable(
                name: "BesuchRaum");

            migrationBuilder.DropTable(
                name: "Konfiguration");

            migrationBuilder.DropTable(
                name: "Besucher");

            migrationBuilder.DropTable(
                name: "Besuch");

            migrationBuilder.DropTable(
                name: "Raum");

            migrationBuilder.DropTable(
                name: "Person");

            migrationBuilder.DropTable(
                name: "Gebaeude");
        }
    }
}
