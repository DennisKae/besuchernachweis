using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Backend.Core.ViewModels
{
    public class BesuchViewModel
    {
        public int Id { get; set; }

        public DateTime Startzeit { get; set; }

        public DateTime Endzeit { get; set; }

        public List<BesucherViewModel> Besucher { get; set; }

        public List<RaumViewModel> Raeume { get; set; }
    }
}
