using System;
using Microsoft.EntityFrameworkCore.Migrations;

namespace Backend.Data.Migrations
{
    public partial class Migration2 : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
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

            migrationBuilder.InsertData(
                table: "Gebaeude",
                columns: new[] { "Id", "Bezeichnung" },
                values: new object[] { 1, "Gebäude 1" });

            migrationBuilder.InsertData(
                table: "Gebaeude",
                columns: new[] { "Id", "Bezeichnung" },
                values: new object[] { 2, "Gebäude 2" });

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

            migrationBuilder.InsertData(
                table: "Raum",
                columns: new[] { "Id", "Bezeichnung", "GebaeudeId" },
                values: new object[] { 1, "Raum 1.1", 1 });

            migrationBuilder.InsertData(
                table: "Raum",
                columns: new[] { "Id", "Bezeichnung", "GebaeudeId" },
                values: new object[] { 2, "Raum 2.2", 2 });

            migrationBuilder.CreateIndex(
                name: "IX_Raum_GebaeudeId",
                table: "Raum",
                column: "GebaeudeId");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "Raum");

            migrationBuilder.DropTable(
                name: "Gebaeude");

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
