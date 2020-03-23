using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Reflection;
using System.Text;
using System.Threading.Tasks;

namespace Backend.Data
{
    public static class EnvironmentVariableValues
    {
        public static readonly string AppSecretKey = "APPSECRET";
        public static readonly string DatenbankPfadKey = "DATENBANKPFAD";
        public static readonly string TokenLifeTimeKey = "TOKENLIFETIME";
        public static readonly string LoginversucheKey = "LOGINVERSUCHE";

        public static string AppSecret { get => Environment.GetEnvironmentVariable(AppSecretKey) ?? "AppSecret"; }
        public static string Datenbankpfad { get => Environment.GetEnvironmentVariable(DatenbankPfadKey) ?? Path.Combine(Path.GetDirectoryName(Assembly.GetExecutingAssembly().Location), "Besuchernachweis.db"); }
        public static int TokenLifetime { get => int.TryParse(Environment.GetEnvironmentVariable(TokenLifeTimeKey), out int parsedLifetime) ? parsedLifetime : 10; }
        public static int Loginversuche { get => int.TryParse(Environment.GetEnvironmentVariable(LoginversucheKey), out int parsedLoginVersuche) ? parsedLoginVersuche : 3; }
    }
}
