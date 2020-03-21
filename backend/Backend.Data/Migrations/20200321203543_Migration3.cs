using System;
using Microsoft.EntityFrameworkCore.Migrations;

namespace Backend.Data.Migrations
{
    public partial class Migration3 : Migration
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
                    Endzeit = table.Column<DateTime>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Besuch", x => x.Id);
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

            migrationBuilder.UpdateData(
                table: "Person",
                keyColumn: "Id",
                keyValue: 1,
                column: "SysStampIn",
                value: new DateTime(2020, 3, 21, 12, 0, 0, 0, DateTimeKind.Unspecified));

            migrationBuilder.UpdateData(
                table: "Person",
                keyColumn: "Id",
                keyValue: 2,
                column: "SysStampIn",
                value: new DateTime(2020, 3, 21, 12, 1, 0, 0, DateTimeKind.Unspecified));

            migrationBuilder.CreateIndex(
                name: "IX_BesuchBesucher_BesuchId",
                table: "BesuchBesucher",
                column: "BesuchId");

            migrationBuilder.CreateIndex(
                name: "IX_BesuchBesucher_BesucherId",
                table: "BesuchBesucher",
                column: "BesucherId");

            migrationBuilder.CreateIndex(
                name: "IX_BesuchRaum_BesuchId",
                table: "BesuchRaum",
                column: "BesuchId");

            migrationBuilder.CreateIndex(
                name: "IX_BesuchRaum_RaumId",
                table: "BesuchRaum",
                column: "RaumId");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "BesuchBesucher");

            migrationBuilder.DropTable(
                name: "BesuchRaum");

            migrationBuilder.DropTable(
                name: "Besuch");

            migrationBuilder.UpdateData(
                table: "Person",
                keyColumn: "Id",
                keyValue: 1,
                column: "SysStampIn",
                value: new DateTime(2020, 3, 21, 12, 0, 0, 0, DateTimeKind.Unspecified));

            migrationBuilder.UpdateData(
                table: "Person",
                keyColumn: "Id",
                keyValue: 2,
                column: "SysStampIn",
                value: new DateTime(2020, 3, 21, 12, 1, 0, 0, DateTimeKind.Unspecified));
        }
    }
}
