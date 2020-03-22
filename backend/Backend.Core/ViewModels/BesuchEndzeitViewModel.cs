using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Backend.Core.ViewModels
{
    public class BesuchEndzeitViewModel
    {
        [Required]
        public int BesuchId { get; set; }

        [Required]
        public DateTime Endzeit { get; set; }
    }
}
