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
    [Route("api/[controller]")]
    [ApiController]
    public class GebaeudeController : BaseController<GebaeudeController>
    {
        public GebaeudeController(ILogger<GebaeudeController> logger) : base(logger)
        {
        }

        /// <summary>Liefert alle Gebäude</summary>
        [Route("")]
        [HttpGet]
        public IActionResult GetAll()
        {
            return Execute(() =>
            {
                return GebaeudeViewModel.GetMock();
            });
        }

        /// <summary>Liefert alle Gebäude</summary>
        [Route("")]
        [HttpPost]
        public IActionResult Create(GebaeudeViewModel gebaeudeViewModel)
        {
            return Execute<string>(() =>
            {
                return null;
            });
        }
    }
}
