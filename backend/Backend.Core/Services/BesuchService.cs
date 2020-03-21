using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Backend.Core.Services.Interfaces;
using Backend.Core.ViewModels;

namespace Backend.Core.Services
{
    public class BesuchService
    {
        private readonly IPersonService _personService;

        public BesuchService(IPersonService personService)
        {
            _personService = personService;
        }

        public void Create(NeuerBesuchViewModel neuerBesuchViewModel)
        {

        }
    }
}
