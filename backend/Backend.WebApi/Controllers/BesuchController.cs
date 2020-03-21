using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Backend.Core.Services;
using Backend.Core.ViewModels;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;

namespace Backend.WebApi.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class BesuchController : BaseController<BesuchController>
    {
        public BesuchController(
            ILogger<BesuchController> logger) : base(logger)
        {
        }

        /// <summary>Liefert alle Besuche</summary>
        [Route("")]
        [HttpGet]
        [ProducesResponseType(typeof(List<BesuchViewModel>), StatusCodes.Status200OK)]
        public IActionResult GetAll()
        {
            return Execute(() =>
            {
                return new List<BesuchViewModel>() { BesuchViewModel.GetMock() };
            });
        }

        /// <summary>Speichert einen neuen Besuch</summary>
        [Route("")]
        [HttpPost]
        public IActionResult Create(NeuerBesuchViewModel neuerBesuchViewModel)
        {
            return Execute<string>(() =>
            {
                // Startzeit serverseitig setzen
                return null;
            });
        }

        /// <summary>Liefert alle Besuche</summary>
        [Route("[action]")]
        [HttpGet]
        [ProducesResponseType(typeof(List<BesuchViewModel>), StatusCodes.Status200OK)]
        public IActionResult GetByFilter(BesuchFilterViewModel besuchFilterViewModel)
        {
            return Execute(() =>
            {
                return new List<BesuchViewModel>() { BesuchViewModel.GetMock() };
            });
        }


        // Endpunkt zum Besuch beenden
    }
}
