using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;

namespace Backend.WebApi.Controllers
{
    public class BaseController<T> : ControllerBase
    {
        protected readonly ILogger<T> _logger;

        public BaseController(ILogger<T> logger)
        {
            _logger = logger;
        }

        protected IActionResult Execute<T2>(Func<T2> function)
        {
            try
            {
                return Ok(function());
            }
            catch (Exception exception)
            {
                _logger.LogCritical(exception, exception.Message);

                return StatusCode(500, "Es sit ein unerwarteter Fehler aufgetreten.");
            }
        }
    }
}
