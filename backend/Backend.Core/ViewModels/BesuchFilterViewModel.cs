using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Backend.Core.ViewModels
{
    public class BesuchFilterViewModel
    {
        public DateTime? Startzeit { get; set; }

        public DateTime? Endzeit { get; set; }

        public bool? IstBeendet { get; set; }

        public int? BesucherId { get; set; }

        /// <summary>IDs der Räume</summary>
        public List<int> Raeume { get; set; }

        public int? Skip { get; set; }

        public int? Take { get; set; }
    }
}
