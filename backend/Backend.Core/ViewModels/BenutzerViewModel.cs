using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Backend.Core.ViewModels
{
    public class BenutzerViewModel
    {
        public int Id { get; set; }

        public string Sicherheitsfrage { get; set; }

        public DateTime LetzterLogin { get; set; }

        public string Rolle { get; set; }

        public PersonViewModel Person { get; set; }

        public static BenutzerViewModel GetMock()
        {
            return new BenutzerViewModel
            {
                Id = 999,
                Sicherheitsfrage = "Wie hieß Ihr erstes Haustier?",
                LetzterLogin = DateTime.Now.AddMinutes(-30),
                Rolle = "Portier",
                Person = PersonViewModel.GetMock()
            };
        }
    }
}
