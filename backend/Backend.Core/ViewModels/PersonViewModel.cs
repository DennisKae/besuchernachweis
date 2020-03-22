using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Backend.Core.ViewModels
{
    public class PersonViewModel
    {
        public int Id { get; set; }

        [Required]
        public string Name { get; set; }

        [Required]
        public string Vorname { get; set; }

        public string Email { get; set; }

        [Required]
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
