using AutoMapper;
using Backend.Core.Repositories;
using Backend.Core.Services.Interfaces;
using Backend.Core.ViewModels;
using Backend.Data.Models;

namespace Backend.Core.Services
{
    public class PersonService : IPersonService
    {
        private readonly IMapper _mapper;

        public PersonService(
            IMapper mapper)
        {
            _mapper = mapper;
        }

        public void AddPerson(PersonViewModel personViewModel)
        {
            using (var unitOfWork = new UnitOfWork())
            {
                var personRepo = unitOfWork.GetRepository<PersonRepository>();
                personRepo.AddPerson(_mapper.Map<Person>(personViewModel));
            }
        }
    }
}
