using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using AutoMapper;
using Backend.Core.Repositories;
using Backend.Core.Services.Interfaces;
using Backend.Core.ViewModels;
using Backend.Data;
using Backend.Data.Models;

namespace Backend.Core.Services
{
    public class BesuchService : IBesuchService
    {
        private readonly IMapper _mapper;

        public BesuchService(
            IMapper mapper)
        {
            _mapper = mapper;
        }

        public BesuchViewModel Create(NeuerBesuchViewModel neuerBesuch)
        {
            Guard.IsNotNull(neuerBesuch, nameof(neuerBesuch));
            Guard.IsNotNull(neuerBesuch.Besucher, nameof(neuerBesuch.Besucher));
            Guard.IsNotNull(neuerBesuch.Raeume, nameof(neuerBesuch.Raeume));

            using (var unit = new UnitOfWork())
            {
                var besucherRepo = unit.GetRepository<BesucherRepository>();
                neuerBesuch.Besucher.ForEach(x =>
                {
                    if (besucherRepo.GetBesucherById(x) == null)
                    {
                        throw new CustomException("Der Besucher wurde nicht gefunden: " + x);
                    }
                });

                var gebaeudeRepo = unit.GetRepository<GebaeudeRepository>();
                neuerBesuch.Raeume.ForEach(x =>
                {
                    if (gebaeudeRepo.GetRaumById(x) == null)
                    {
                        throw new CustomException("Der Raum wurde nicht gefunden: " + x);
                    }
                });


                var besuchRepo = unit.GetRepository<BesuchRepository>();
                var newBesuch = new Besuch { Startzeit = DateTime.Now };
                besuchRepo.Create(newBesuch);
                unit.SaveChanges();

                var besuchBesucher = neuerBesuch.Besucher?.Select(x => new BesuchBesucher { BesuchId = newBesuch.Id, BesucherId = x })?.ToList();
                if (besuchBesucher?.Count > 0)
                {
                    besuchRepo.Create(besuchBesucher);
                }

                var besuchRaeume = neuerBesuch.Raeume?.Select(x => new BesuchRaum { BesuchId = newBesuch.Id, RaumId = x })?.ToList();
                if (besuchRaeume?.Count > 0)
                {
                    besuchRepo.Create(besuchRaeume);
                }
                unit.SaveChanges();

                Besuch result = besuchRepo.GetById(newBesuch.Id);
                return GetBesuchViewModelFromBesuch(unit, result);
            }
        }

        public List<BesuchViewModel> GetByFilterViewModel(BesuchFilterViewModel filterViewModel)
        {
            Guard.IsNotNull(filterViewModel);

            using (var unit = new UnitOfWork())
            {
                var besuchRepo = unit.GetRepository<BesuchRepository>();
                var result = besuchRepo.GetByFilter(filterViewModel);
                return GetBesuchViewModelsFromBesuche(unit, result);
                // TODO: Kann das noch optimiert werden?
                //List<Besuch> besuche = besuchRepo.GetByZeitraum(filterViewModel.DatumVon, filterViewModel.DatumBis);
                //if (besuche == null || besuche.Count == 0)
                //{
                //    return null;
                //}

                //var result = GetBesuchViewModelsFromBesuche(unit, besuche);
                //if (!string.IsNullOrWhiteSpace(filterViewModel?.Name))
                //{
                //    result.ForEach(x => x.Besucher = x.Besucher?.Where(y => y.Person?.Name.Contains(filterViewModel.Name) == true).ToList());
                //}

                //if (!string.IsNullOrWhiteSpace(filterViewModel?.Vorname))
                //{
                //    result.ForEach(x => x.Besucher = x.Besucher?.Where(y => y.Person?.Name.Contains(filterViewModel.Vorname) == true).ToList());
                //}

                //return result;
            }
        }

        public List<BesuchViewModel> GetBesucheOfBesucher(int besucherId)
        {
            using (var unit = new UnitOfWork())
            {
                var besuchRepo = unit.GetRepository<BesuchRepository>();
                var besuche = besuchRepo.GetByBesucherId(besucherId);
                return GetBesuchViewModelsFromBesuche(unit, besuche);
            }
        }

        public void Update(BesuchViewModel besuchViewModel)
        {
            using (var unit = new UnitOfWork())
            {
                var besuchRepo = unit.GetRepository<BesuchRepository>();

                var dbModel = _mapper.Map<Besuch>(besuchViewModel);
                besuchRepo.Update(dbModel);
            }
        }

        public void SetEndzeitpunkt(BesuchEndzeitViewModel besuchEndzeitViewModel)
        {
            using (var unit = new UnitOfWork())
            {
                var besuchRepo = unit.GetRepository<BesuchRepository>();
                Besuch besuch = besuchRepo.GetById(besuchEndzeitViewModel.BesuchId);
                if (besuch == null)
                {
                    throw new CustomException("Der Besuch wurde nicht gefunden.");
                }

                if (besuch.Endzeit <= besuch.Startzeit)
                {
                    throw new CustomException("Die Endzeit eines Besuchs darf nicht vor seiner Startzeit liegen.");
                }

                besuch.Endzeit = besuchEndzeitViewModel.Endzeit;

                besuchRepo.Update(besuch);
            }
        }

        private BesuchViewModel GetBesuchViewModelFromBesuch(UnitOfWork unit, Besuch besuch) => GetBesuchViewModelsFromBesuche(unit, new List<Besuch> { besuch })?.FirstOrDefault();
        private List<BesuchViewModel> GetBesuchViewModelsFromBesuche(UnitOfWork unit, List<Besuch> besuche)
        {
            var besucherRepo = unit.GetRepository<BesucherRepository>();
            var gebaeudeRepo = unit.GetRepository<GebaeudeRepository>();

            var result = new List<BesuchViewModel>();
            foreach (var besuch in besuche)
            {
                var newResultItem = _mapper.Map<BesuchViewModel>(besuch);
                var besucher = besucherRepo.GetBesucherByBesuch(besuch);
                newResultItem.Besucher = _mapper.Map<List<BesucherViewModel>>(besucher);

                var raeume = gebaeudeRepo.GetRaeumeByBesuch(besuch);
                newResultItem.Raeume = _mapper.Map<List<RaumViewModel>>(raeume);
                result.Add(newResultItem);
            }

            return result;
        }
    }
}
