using System;
using Microsoft.EntityFrameworkCore.Migrations;

namespace Backend.Data.Migrations
{
    public partial class Migration2 : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
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

            migrationBuilder.UpdateData(
                table: "Person",
                keyColumn: "Id",
                keyValue: 3,
                column: "SysStampIn",
                value: new DateTime(2020, 3, 21, 12, 1, 0, 0, DateTimeKind.Unspecified));
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
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

            migrationBuilder.UpdateData(
                table: "Person",
                keyColumn: "Id",
                keyValue: 3,
                column: "SysStampIn",
                value: new DateTime(2020, 3, 21, 12, 1, 0, 0, DateTimeKind.Unspecified));
        }
    }
}
