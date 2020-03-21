using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Backend.Core.ViewModels;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;

namespace Backend.WebApi.Controllers
{
    public class BesuchController : BaseController<BesuchController>
    {
        public BesuchController(ILogger<BesuchController> logger) : base(logger)
        {
        }

        /// <summary>Liefert alle Besuche</summary>
        [Route("")]
        [HttpGet]
        public IActionResult GetAll()
        {
            return Execute(() =>
            {
                return BesuchViewModel.GetMock();
            });
        }

        /// <summary>Speichert einen neuen Besuch</summary>
        [Route("")]
        [HttpPost]
        public IActionResult Create(NeuerBesuchViewModel neuerBesuchViewModel)
        {
            return Execute<string>(() =>
              {
                  return null;
              });
        }
    }
}
