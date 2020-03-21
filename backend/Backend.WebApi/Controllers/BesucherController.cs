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
    public class BesucherController : BaseController<BesucherController>
    {
        public BesucherController(ILogger<BesucherController> logger) : base(logger)
        {
        }

        /// <summary>Liefert alle Besucher</summary>
        [Route("")]
        [HttpGet]
        public IActionResult GetAll()
        {
            return Execute(() =>
            {
                return BesucherViewModel.GetMock();
            });
        }
    }
}
