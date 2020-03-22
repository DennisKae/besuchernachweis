using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Backend.Core.Services;
using Backend.Core.Services.Interfaces;
using Backend.Core.ViewModels;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;

namespace Backend.WebApi.Controllers
{

    [ApiController]
    [Route("api/[controller]")]
    public class BesucherController : BaseController<BesucherController>
    {
        private readonly IBesucherService _besucherService;

        public BesucherController(
            ILogger<BesucherController> logger,
            IBesucherService besucherService) : base(logger)
        {
            _besucherService = besucherService;
        }

        /// <summary>Liefert alle Besucher</summary>
        [Route("[action]")]
        [HttpPost]
        public IActionResult ByFilter(BesucherFilterViewModel besucherFilterViewModel)
        {
            return Execute(() =>
            {
                return _besucherService.GetByFilterViewModel(besucherFilterViewModel);
            });
        }

        /// <summary>Liefert die Anzahl der aktiven Besucher</summary>
        [Route("[action]")]
        [HttpGet]
        public IActionResult AktiveBesucher()
        {
            return Execute(() =>
            {
                return _besucherService.GetAnzahlAktiverBesucher();
            });
        }

        /// <summary>Erstellt einen neuen Besucher.</summary>
        [Route("")]
        [HttpPost]
        [ProducesResponseType(typeof(BesucherViewModel), StatusCodes.Status200OK)]
        public IActionResult Create(BesucherViewModel besucherViewModel)
        {
            return Execute(() =>
            {
                return _besucherService.Create(besucherViewModel);
            });
        }
    }
}
