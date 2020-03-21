using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.IO;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Backend.Core.Services.Interfaces;
using Microsoft.Extensions.Configuration;

namespace Backend.Core.Services
{
    public class ConfigurationFileService : IConfigurationFileService
    {
        /// <summary>Liefert die Konfiguration des angegebenen Typs aus einer eigenen JSON-Datei im Anwendungsverzeichnis.</summary>
        public T GetConfigFromJsonFile<T>()
        {
            string targetFile = Path.Combine(AppContext.BaseDirectory, typeof(T).Name + ".json");

            if (!File.Exists(targetFile))
            {
                throw new FileNotFoundException($"Im Anwendungsverzeichnis konnte keine {typeof(T).Name} gefunden werden.");
            }

            var builder = new ConfigurationBuilder()
                .SetBasePath(AppContext.BaseDirectory)
                .AddJsonFile(typeof(T).Name + ".json", optional: false, reloadOnChange: true);

            IConfigurationRoot configuration = builder.Build();

            var result = Activator.CreateInstance<T>();
            configuration.Bind(result);

            // Validierung der Konfigurationen
            var validationContext = new ValidationContext(result);
            Validator.ValidateObject(result, validationContext);

            return result;
        }
    }
}
