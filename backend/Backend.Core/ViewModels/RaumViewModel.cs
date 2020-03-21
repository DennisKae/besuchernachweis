using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Backend.Core.ViewModels
{
    public class RaumViewModel
    {
        public int Id { get; set; }

        public string Bezeichnung { get; set; }

        public static List<RaumViewModel> GetMocks()
        {
            return new List<RaumViewModel>
            {
                new RaumViewModel
                {
                    Id = 98,
                    Bezeichnung = "Raum 1"
                },
                new RaumViewModel
                {
                    Id = 99,
                    Bezeichnung = "Raum 2"
                }
            };
        }
    }
}
