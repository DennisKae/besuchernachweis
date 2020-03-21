using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using AutoMapper;
using Backend.Core.Repositories;
using Backend.Core.ViewModels;
using Backend.Data.Models;

namespace Backend.Core.Services
{
    public class GebaeudeService : IGebaeudeService
    {
        private readonly IMapper _mapper;

        public GebaeudeService(
            IMapper mapper)
        {
            _mapper = mapper;
        }

        public List<GebaeudeViewModel> GetAll()
        {
            using (var unit = new UnitOfWork())
            {
                var repo = unit.GetRepository<GebaeudeRepository>();
                var result = repo.GetAll();
                return _mapper.Map<List<GebaeudeViewModel>>(result);
            }
        }

        public GebaeudeViewModel Create(GebaeudeViewModel gebaeudeViewModel)
        {
            using (var unit = new UnitOfWork())
            {
                var repo = unit.GetRepository<GebaeudeRepository>();

                var dbModel = _mapper.Map<Gebaeude>(gebaeudeViewModel);
                repo.Create(dbModel);

                unit.SaveChanges();
                var result = _mapper.Map<GebaeudeViewModel>(dbModel);
                return result;
            }
        }

        public RaumViewModel Create(RaumViewModel raumViewModel)
        {
            using (var unit = new UnitOfWork())
            {
                var repo = unit.GetRepository<GebaeudeRepository>();

                var dbModel = _mapper.Map<Raum>(raumViewModel);
                repo.Create(dbModel);

                unit.SaveChanges();
                var result = _mapper.Map<RaumViewModel>(dbModel);
                return result;
            }
        }

        public void DeleteRaum(int raumId)
        {
            using (var unit = new UnitOfWork())
            {
                var repo = unit.GetRepository<GebaeudeRepository>();

                unit.SaveChanges();
                repo.DeleteRaum(raumId);
            }
        }

        public void DeleteGebaeude(int gebaeudeId)
        {
            using (var unit = new UnitOfWork())
            {
                var repo = unit.GetRepository<GebaeudeRepository>();

                unit.SaveChanges();
                repo.DeleteGebaeude(gebaeudeId);
            }
        }
    }
}
