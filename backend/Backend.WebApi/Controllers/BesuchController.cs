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
        private readonly IBesuchService _besuchService;

        public BesuchController(
            ILogger<BesuchController> logger,
            IBesuchService besuchService) : base(logger)
        {
            _besuchService = besuchService;
        }

        /// <summary>Speichert einen neuen Besuch und gibt ihn zurück.</summary>
        [Route("")]
        [HttpPost]
        public IActionResult Create(NeuerBesuchViewModel neuerBesuchViewModel)
        {
            return Execute(() =>
            {
                // Startzeit serverseitig setzen
                return _besuchService.Create(neuerBesuchViewModel);
            });
        }

        /// <summary>Setzt den Endzeitpunkt eines Besuchs</summary>
        [Route("[action]")]
        [HttpPut]
        public IActionResult SetEndzeitpunkt(BesuchEndzeitViewModel besuchEndzeitViewModel)
        {
            return Execute<string>(() =>
            {
                _besuchService.SetEndzeitpunkt(besuchEndzeitViewModel);
                return null;
            });
        }

        /// <summary>Liefert alle Besuche, die dem Filter entsprechen</summary>
        [Route("[action]")]
        [HttpPost]
        [ProducesResponseType(typeof(List<BesuchViewModel>), StatusCodes.Status200OK)]
        public IActionResult GetByFilter(BesuchFilterViewModel besuchFilterViewModel)
        {
            return Execute(() =>
            {
                return _besuchService.GetByFilterViewModel(besuchFilterViewModel);
            });
        }

        /// <summary>Liefert alle Besuche eines Besuchers</summary>
        [Route("[action]/{id:int}")]
        [HttpGet]
        [ProducesResponseType(typeof(List<BesuchViewModel>), StatusCodes.Status200OK)]
        public IActionResult ByBesucher(int id)
        {
            return Execute(() =>
            {
                return _besuchService.GetBesucheOfBesucher(id);
            });
        }
    }
}
