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

        public static GebaeudeViewModel GetMock()
        {
            return new GebaeudeViewModel
            {
                Id = 99,
                Bezeichnung = "Gebäude 1",
                Raeume = RaumViewModel.GetMocks()
            };
        }
    }
}
