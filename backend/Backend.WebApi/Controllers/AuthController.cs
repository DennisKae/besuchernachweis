using System;
using System.Collections.Generic;
using System.IdentityModel.Tokens.Jwt;
using System.Linq;
using System.Security.Claims;
using System.Text;
using System.Threading.Tasks;
using Backend.Core.Services.Interfaces;
using Backend.Core.ViewModels;
using Backend.Data;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using Microsoft.IdentityModel.Tokens;

namespace Backend.WebApi.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class AuthController : BaseController<AuthController>
    {
        private readonly IBenutzerService _benutzerService;


        public AuthController(
            ILogger<AuthController> logger,
            IBenutzerService benutzerService) : base(logger)
        {
            _benutzerService = benutzerService;
        }

        [AllowAnonymous]
        [HttpPost("[action]")]
        [ProducesResponseType(typeof(LoginResultViewModel), StatusCodes.Status200OK)]
        public IActionResult Login(LoginViewModel loginViewModel)
        {
            return Execute(() =>
            {
                var result = _benutzerService.Login(loginViewModel);
                SetToken(result);
                return result;
            });
        }

        [AllowAnonymous]
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

        private void SetToken(LoginResultViewModel loginResultViewModel)
        {
            if (loginResultViewModel == null)
            {
                return;
            }

            loginResultViewModel.TokenExpirationDate = DateTime.Now.AddHours(EnvironmentVariableValues.TokenLifetime);

            var tokenHandler = new JwtSecurityTokenHandler();
            var key = Encoding.UTF8.GetBytes(EnvironmentVariableValues.AppSecret);
            var tokenDescriptor = new SecurityTokenDescriptor
            {
                Subject = new ClaimsIdentity(new Claim[]
                {
                    new Claim(ClaimTypes.Name, loginResultViewModel.Id.ToString())
                }),
                Expires = loginResultViewModel.TokenExpirationDate,
                SigningCredentials = new SigningCredentials(new SymmetricSecurityKey(key), SecurityAlgorithms.HmacSha256Signature)
            };
            var token = tokenHandler.CreateToken(tokenDescriptor);
            loginResultViewModel.Token = tokenHandler.WriteToken(token);
        }
    }
}