using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Backend.Core.ViewModels;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;

namespace Backend.WebApi.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class AuthController : BaseController<AuthController>
    {
        public AuthController(ILogger<AuthController> logger) : base(logger)
        {
        }

        [HttpPost("[action]")]
        public IActionResult Login(LoginViewModel loginViewModel)
        {
            return Execute(() =>
            {
                _logger.LogDebug($"Login durch {loginViewModel?.Email}.");
                return BenutzerViewModel.GetMock();
            });
        }

        [HttpPost("[action]")]
        public IActionResult Register(BenutzerViewModel benutzerViewModel)
        {
            return Execute(() =>
            {
                _logger.LogDebug($"Benutzerregistrierung durch {benutzerViewModel?.Person?.Email}.");
                return BenutzerViewModel.GetMock();
            });
        }
    }
}