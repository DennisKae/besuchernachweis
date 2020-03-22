using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Backend.Core.ViewModels
{
    public class GebaeudeViewModel
    {
        public int Id { get; set; }

        public string Bezeichnung { get; set; }

        public List<RaumViewModel> Raeume { get; set; }
    }
}
