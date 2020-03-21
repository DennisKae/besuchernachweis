using AutoMapper;
using Backend.Core.Repositories;
using Backend.Core.ViewModels;
using Backend.Data.Models;

namespace Backend.Core.Services
{
    public class BesucherService : IBesucherService
    {
        private readonly IMapper _mapper;

        public BesucherService(
            IMapper mapper)
        {
            _mapper = mapper;
        }


        public BesucherViewModel AddBesucher(BesucherViewModel besucherViewModel)
        {
            using (var unit = new UnitOfWork())
            {
                var besucherRepo = unit.GetRepository<BesucherRepository>();
                var dbBesucher = _mapper.Map<Besucher>(besucherViewModel);
                besucherRepo.AddBesucher(dbBesucher);

                unit.SaveChanges();
                return _mapper.Map<BesucherViewModel>(dbBesucher);
            }
        }
    }
}
