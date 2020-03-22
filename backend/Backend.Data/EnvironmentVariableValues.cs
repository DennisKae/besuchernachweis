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
        private static readonly string _appSecret = "APPSECRET";
        private static readonly string _datenbankPfad = "DATENBANKPFAD";
        private static readonly string _tokenLifeTime = "TOKENLIFETIME";
        private static readonly string _loginversuche = "LOGINVERSUCHE";

        public static string AppSecret { get => Environment.GetEnvironmentVariable(_appSecret) ?? "AppSecret"; }
        public static string Datenbankpfad { get => Environment.GetEnvironmentVariable(_datenbankPfad) ?? Path.Combine(Path.GetDirectoryName(Assembly.GetExecutingAssembly().Location), "Besuchernachweis.db"); }
        public static int TokenLifetime { get => int.TryParse(Environment.GetEnvironmentVariable(_tokenLifeTime), out int parsedLifetime) ? parsedLifetime : 12; }
        public static int Loginversuche { get => int.TryParse(Environment.GetEnvironmentVariable(_loginversuche), out int parsedLoginVersuche) ? parsedLoginVersuche : 5; }
    }
}
