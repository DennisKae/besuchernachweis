using System.Collections.Generic;
using AutoMapper;
using Backend.Core.Repositories;
using Backend.Core.Services.Interfaces;
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


        public BesucherViewModel Create(BesucherViewModel besucherViewModel)
        {
            using (var unit = new UnitOfWork())
            {
                var besucherRepo = unit.GetRepository<BesucherRepository>();
                var dbBesucher = _mapper.Map<Besucher>(besucherViewModel);
                besucherRepo.Create(dbBesucher);

                unit.SaveChanges();
                return _mapper.Map<BesucherViewModel>(dbBesucher);
            }
        }

        public int GetAnzahlAktiverBesucher()
        {
            using (var unit = new UnitOfWork())
            {
                var besucherRepo = unit.GetRepository<BesucherRepository>();
                return besucherRepo.GetAnzahlAktiveBesucher();
            }
        }

        public List<BesucherViewModel> GetByFilterViewModel(BesucherFilterViewModel besucherFilterViewModel)
        {
            if (besucherFilterViewModel.Take == 0)
            {
                return null;
            }

            using (var unit = new UnitOfWork())
            {
                var besucherRepo = unit.GetRepository<BesucherRepository>();
                var result = besucherRepo.GetByFilter(besucherFilterViewModel);
                return _mapper.Map<List<BesucherViewModel>>(result);
            }
        }

    }
}
