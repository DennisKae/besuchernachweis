using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
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
    public class GebaeudeController : BaseController<GebaeudeController>
    {
        private readonly IGebaeudeService _gebaeudeService;

        public GebaeudeController(
            ILogger<GebaeudeController> logger,
            IGebaeudeService gebaeudeService) : base(logger)
        {
            _gebaeudeService = gebaeudeService;
        }

        /// <summary>Liefert alle Gebäude mit allen Räumen.</summary>
        [Route("")]
        [HttpGet]
        public IActionResult GetAll()
        {
            return Execute(() =>
            {
                return _gebaeudeService.GetAll();
            });
        }

        /// <summary>Erstellt ein neues Gebäude (mit Räumen)</summary>
        [Route("")]
        [HttpPost]
        [ProducesResponseType(typeof(GebaeudeViewModel), StatusCodes.Status200OK)]
        public IActionResult CreateGebaeude(GebaeudeViewModel gebaeudeViewModel)
        {
            return Execute(() =>
            {
                return _gebaeudeService.Create(gebaeudeViewModel);
            });
        }

        /// <summary>Aktualisiert ein Gebäude</summary>
        [Route("")]
        [HttpPut]
        [ProducesResponseType(typeof(GebaeudeViewModel), StatusCodes.Status200OK)]
        public IActionResult UpdateGebaeude(GebaeudeViewModel gebaeudeViewModel)
        {
            return Execute(() =>
            {
                return _gebaeudeService.Update(gebaeudeViewModel);
            });
        }

        /// <summary>Löscht ein Gebäude</summary>
        [Route("{id:int}")]
        [HttpDelete]
        public IActionResult DeleteGebaeude(int id)
        {
            return Execute<string>(() =>
            {
                _gebaeudeService.DeleteGebaeude(id);
                return null;
            });
        }

        /// <summary>Erstellt einen neuen Raum</summary>
        [Route("Raum")]
        [HttpPost]
        [ProducesResponseType(typeof(RaumViewModel), StatusCodes.Status200OK)]
        public IActionResult CreateRaum(RaumViewModel raumViewModel)
        {
            return Execute(() =>
            {
                return _gebaeudeService.Create(raumViewModel);
            });
        }

        /// <summary>Aktualisiert einen Raum</summary>
        [Route("Raum")]
        [HttpPut]
        [ProducesResponseType(typeof(RaumViewModel), StatusCodes.Status200OK)]
        public IActionResult UpdateRaum(RaumViewModel raumViewModel)
        {
            return Execute(() =>
            {
                return _gebaeudeService.Update(raumViewModel);
            });
        }

        /// <summary>Löscht einen Raum</summary>
        [Route("Raum/{id:int}")]
        [HttpDelete]
        public IActionResult DeleteRaum(int id)
        {
            return Execute<string>(() =>
            {
                _gebaeudeService.DeleteRaum(id);
                return null;
            });
        }
    }
}
