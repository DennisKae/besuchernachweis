using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Backend.Core.Services.Interfaces;
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
        private readonly IBenutzerService _benutzerService;


        public AuthController(
            ILogger<AuthController> logger,
            IBenutzerService benutzerService) : base(logger)
        {
            _benutzerService = benutzerService;
        }

        [HttpPost("[action]")]
        [ProducesResponseType(typeof(LoginResultViewModel), StatusCodes.Status200OK)]
        public IActionResult Login(LoginViewModel loginViewModel)
        {
            return Execute(() =>
            {
                _logger.LogDebug($"Login durch {loginViewModel?.Email}.");
                //return BenutzerViewModel.GetMock();
                return _benutzerService.GetByEmail(loginViewModel?.Email);
            });
        }

        [HttpPost("[action]")]
        [ProducesResponseType(typeof(LoginResultViewModel), StatusCodes.Status200OK)]
        public IActionResult Register(BenutzerViewModel benutzerViewModel)
        {
            return Execute(() =>
            {
                _logger.LogDebug($"Benutzerregistrierung durch {benutzerViewModel?.Person?.Email}.");
                return BenutzerViewModel.GetMock() as LoginResultViewModel;
            });
        }
    }
}