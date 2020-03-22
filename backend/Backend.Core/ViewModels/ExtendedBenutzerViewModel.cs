using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Backend.Core.ViewModels
{
    public class ExtendedBenutzerViewModel : BenutzerViewModel
    {
        [Required]
        public string Passwort { get; set; }

        [Required]
        public string PasswortWiederholung { get; set; }

        [Required]
        public string SicherheitsfrageAntwort { get; set; }
    }
}
