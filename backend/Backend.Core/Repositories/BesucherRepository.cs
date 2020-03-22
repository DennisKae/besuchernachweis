using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Backend.Core.ViewModels;
using Backend.Data;
using Backend.Data.Models;
using Microsoft.EntityFrameworkCore;

namespace Backend.Core.Repositories
{
    public class BesucherRepository : BaseRepository
    {
        public BesucherRepository(DatabaseContext databaseContext) : base(databaseContext)
        {
        }

        public void Create(Besucher besucher)
        {
            _databaseContext.Add(besucher);
        }

        public Besucher GetBesucherById(int id) => _databaseContext.Besucher.FirstOrDefault(x => x.Id == id);

        public List<Besucher> GetBesucherByBesuch(List<Besuch> besuche)
        {
            return _databaseContext.BesuchBesucher
                .Where(x => besuche.Select(y => y.Id).Contains(x.BesuchId) && x.Besucher != null)
                .Include(x => x.Besucher.Person)
                .Select(x => x.Besucher)
                .ToList();
        }

        public List<Besucher> GetBesucherByBesuch(Besuch besuch)
        {
            return _databaseContext.BesuchBesucher
                .Where(x => x.BesuchId == besuch.Id && x.Besucher != null)
                .Include(x => x.Besucher.Person)
                .Select(x => x.Besucher)
                .ToList();
        }

        public int GetAnzahlAktiveBesucher()
        {
            return _databaseContext.BesuchBesucher.Where(x => x.Besuch != null && x.Besuch.Endzeit == null).Count();
        }

        public List<Besucher> GetByFilter(BesucherFilterViewModel besucherFilterViewModel)
        {
            var query = _databaseContext.Besucher.AsQueryable();


            if (!string.IsNullOrWhiteSpace(besucherFilterViewModel.Vorname))
            {
                query = query.Where(x => x.Person != null && x.Person.Vorname.ToLower().Contains(besucherFilterViewModel.Vorname.ToLower()));
            }

            if (!string.IsNullOrWhiteSpace(besucherFilterViewModel.Name))
            {
                query = query.Where(x => x.Person != null && x.Person.Name.ToLower().Contains(besucherFilterViewModel.Name.ToLower()));
            }

            if (besucherFilterViewModel.Startzeit.HasValue && !besucherFilterViewModel.Endzeit.HasValue)
            {
                var start = besucherFilterViewModel.Startzeit.Value;
                List<int> relevanteBesucheBesucherIds = _databaseContext.BesuchBesucher
                    .Where(x => x.Besuch != null && x.Besuch.Startzeit >= start && (x.Besuch.Endzeit == null || x.Besuch.Endzeit <= start))
                    .Select(x => x.BesucherId).ToList();

                if (relevanteBesucheBesucherIds?.Count > 0)
                {
                    query = query.Where(x => relevanteBesucheBesucherIds.Contains(x.Id));
                }
                else
                {
                    return null;
                }
            }
            else if (!besucherFilterViewModel.Startzeit.HasValue && besucherFilterViewModel.Endzeit.HasValue)
            {
                var ende = besucherFilterViewModel.Endzeit.Value;
                List<int> relevanteBesucheBesucherIds = _databaseContext.BesuchBesucher
                    .Where(x => x.Besuch != null && x.Besuch.Startzeit <= ende && (x.Besuch.Endzeit == null || x.Besuch.Endzeit <= ende))
                    .Select(x => x.BesucherId)
                    .ToList();

                if (relevanteBesucheBesucherIds?.Count > 0)
                {
                    query = query.Where(x => relevanteBesucheBesucherIds.Contains(x.Id));
                }
                else
                {
                    return null;
                }
            }
            else if (besucherFilterViewModel.Startzeit.HasValue && besucherFilterViewModel.Endzeit.HasValue)
            {
                var start = besucherFilterViewModel.Startzeit.Value;
                var ende = besucherFilterViewModel.Endzeit.Value;
                List<int> relevanteBesucheBesucherIds = _databaseContext.BesuchBesucher
                    .Where(x => x.Besuch != null && x.Besuch.Startzeit >= start && (x.Besuch.Endzeit == null || x.Besuch.Endzeit <= ende))
                    .Select(x => x.BesucherId)
                    .ToList();

                if (relevanteBesucheBesucherIds?.Count > 0)
                {
                    query = query.Where(x => relevanteBesucheBesucherIds.Contains(x.Id));
                }
                else
                {
                    return null;
                }
            }

            if (besucherFilterViewModel.Skip.HasValue)
            {
                query = query.Skip(besucherFilterViewModel.Skip.Value);
            }

            if (besucherFilterViewModel.Take.HasValue)
            {
                query = query.Take(besucherFilterViewModel.Take.Value);
            }

            return query.ToList();
        }
    }
}
