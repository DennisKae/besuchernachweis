using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Backend.Data
{
    public static class EnvironmentVariableValues
    {
        private static readonly string _appSecret = "APPSECRET";
        private static readonly string _datenbankPfad = "DATENBANKPFAD";
        private static readonly string _tokenLifeTime = "TOKENLIFETIME";

        public static string AppSecret { get => Environment.GetEnvironmentVariable(_appSecret); }
        public static string Datenbankpfad { get => Environment.GetEnvironmentVariable(_datenbankPfad); }
        public static int TokenLifetime { get => int.TryParse(Environment.GetEnvironmentVariable(_tokenLifeTime), out int parsedLifetime) ? parsedLifetime : default; }
    }
}
