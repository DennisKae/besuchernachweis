using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Backend.Core.ViewModels
{
    public class BesuchFilterViewModel
    {
        public DateTime? DatumVon { get; set; }

        public DateTime? DatumBis { get; set; }

        public string Name { get; set; }

        public string Vorname { get; set; }

        /// <summary>IDs der Räume</summary>
        public List<int> Raeume { get; set; }
        // TODO: Räume aufnehmen
    }
}
