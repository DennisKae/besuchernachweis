using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Backend.Core.ViewModels
{
    public class LoginResultViewModel : BenutzerViewModel
    {
        /// <summary>JWT-Token</summary>
        public string Token { get; set; }
    }
}
