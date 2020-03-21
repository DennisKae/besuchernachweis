using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Backend.Core.ViewModels
{
    public class NeuerBesuchViewModel
    {
        [Required]
        public DateTime Startzeit { get; set; }

        public DateTime Endzeit { get; set; }

        /// <summary>Benutzer-IDs der Besucher</summary>
        [Required]
        public List<int> Besucher { get; set; }

        /// <summary>IDs der Räume</summary>
        [Required]
        public List<int> Raeume { get; set; }

        [Required]
        public ZugangsberechtigungViewModel Zugangsberechtigung { get; set; }
    }
}
