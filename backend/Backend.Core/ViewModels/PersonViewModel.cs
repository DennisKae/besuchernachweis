using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Backend.Core.ViewModels
{
    public class PersonViewModel
    {
        public int Id { get; set; }

        public string Name { get; set; }

        public string Vorname { get; set; }

        public string Email { get; set; }

        public string Telefon { get; set; }

        public static PersonViewModel GetMock()
        {
            return new PersonViewModel
            {
                Id = 999,
                Name = "Mustermann",
                Vorname = "Max",
                Email = "Max.Mustermann@musterorganisation.de",
                Telefon = "0561 123 4567"
            };
        }
    }
}
