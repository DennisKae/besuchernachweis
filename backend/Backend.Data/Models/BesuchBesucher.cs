using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Backend.Data.Models
{
    public class BesuchBesucher
    {
        [Key, Column(Order = 0)]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int Id { get; set; }


        public int BesucherId { get; set; }

        public virtual Besucher Besucher { get; set; }


        public int BesuchId { get; set; }

        public virtual Besuch Besuch { get; set; }
    }
}
