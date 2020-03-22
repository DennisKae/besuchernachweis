using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Backend.Data.Models
{
    public class Benutzer
    {
        [Key, Column(Order = 0)]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int Id { get; set; }

        public int PersonId { get; set; }

        public Person Person { get; set; }

        public string Passwort { get; set; }

        public string Sicherheitsfrage { get; set; }

        public string SicherheitsfrageAntwort { get; set; }

        public bool IstGesperrt { get; set; }

        public int LoginVersuche { get; set; }

        public bool HasExtendedRights { get; set; }

        public DateTime LetzterLogin { get; set; }

    }
}
