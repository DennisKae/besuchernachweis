using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.IO;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Backend.Data.Models
{
    public class AllgemeineKonfiguration
    {
        [Required]
        public string Datenbankordner { get; set; }

        public string Datenbankpfad
        {
            get
            {
                if (string.IsNullOrWhiteSpace(Datenbankordner))
                {
                    return null;
                }

                return Path.Combine(Datenbankordner, "Besuchernachweis.db");
            }
        }
    }
}
