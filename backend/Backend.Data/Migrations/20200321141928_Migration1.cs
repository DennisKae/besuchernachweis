using System;
using Microsoft.EntityFrameworkCore.Migrations;

namespace Backend.Data.Migrations
{
    public partial class Migration1 : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
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
                name: "Benutzer",
                columns: table => new
                {
                    Id = table.Column<int>(nullable: false)
                        .Annotation("Sqlite:Autoincrement", true),
                    PersonId = table.Column<int>(nullable: false),
                    Passwort = table.Column<string>(nullable: true),
                    Sicherheitsfrage = table.Column<string>(nullable: true),
                    SicherheitsfrageAntwort = table.Column<string>(nullable: true),
                    Rolle = table.Column<string>(nullable: true),
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

            migrationBuilder.InsertData(
                table: "Person",
                columns: new[] { "Id", "Email", "Name", "SysStampIn", "Telefon", "Vorname" },
                values: new object[] { 1, "max.mustermann@test.de", "Mustermann", new DateTime(2020, 3, 21, 12, 0, 0, 0, DateTimeKind.Unspecified), "0561 123 4567", "Max" });

            migrationBuilder.InsertData(
                table: "Person",
                columns: new[] { "Id", "Email", "Name", "SysStampIn", "Telefon", "Vorname" },
                values: new object[] { 2, "martina.mustermann@test.de", "Mustermann", new DateTime(2020, 3, 21, 12, 1, 0, 0, DateTimeKind.Unspecified), "0561 123 4568", "Martina" });

            migrationBuilder.InsertData(
                table: "Benutzer",
                columns: new[] { "Id", "LetzterLogin", "Passwort", "PersonId", "Rolle", "Sicherheitsfrage", "SicherheitsfrageAntwort" },
                values: new object[] { 1, new DateTime(1, 1, 1, 0, 0, 0, 0, DateTimeKind.Unspecified), null, 1, "Pförtner", "Wie hieß Ihr erstes Haustier?", "Hundi" });

            migrationBuilder.InsertData(
                table: "Besucher",
                columns: new[] { "Id", "Gesundheitsstatus", "PersonId" },
                values: new object[] { 1, "gesund", 2 });

            migrationBuilder.CreateIndex(
                name: "IX_Benutzer_PersonId",
                table: "Benutzer",
                column: "PersonId");

            migrationBuilder.CreateIndex(
                name: "IX_Besucher_PersonId",
                table: "Besucher",
                column: "PersonId");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "Benutzer");

            migrationBuilder.DropTable(
                name: "Besucher");

            migrationBuilder.DropTable(
                name: "Konfiguration");

            migrationBuilder.DropTable(
                name: "Person");
        }
    }
}
