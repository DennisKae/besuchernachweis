//using System;
//using System.Collections.Generic;
//using System.Linq;
//using System.Text;
//using System.Threading.Tasks;
//using Backend.Core.ViewModels;
//using Microsoft.AspNetCore.Authorization;
//using Microsoft.AspNetCore.Mvc;
//using Microsoft.Extensions.Logging;

//namespace Backend.WebApi.Controllers
//{
//    [ApiController]
//    [Route("api/[controller]")]
//    public class PersonController : BaseController<PersonController>
//    {
//        public PersonController(ILogger<PersonController> logger) : base(logger)
//        {
//        }

//        /// <summary>Liefert alle Personen</summary>
//        [Route("")]
//        [HttpGet]
//        public IActionResult GetAll()
//        {
//            return Execute(() =>
//            {
//                return new List<PersonViewModel> { PersonViewModel.GetMock() };
//            });
//        }
//    }
//}
