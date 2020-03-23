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

        public void Update(Besucher besucher)
        {
            _databaseContext.Update(besucher);
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

        public List<Besucher> GetByFilter(BesucherFilterViewModel filter)
        {
            var query = _databaseContext.BesuchBesucher.AsQueryable();

            if (filter.IstBeendet == true)
            {
                query = query.Where(x => x.Besuch.Endzeit != null);
            }

            if (filter.IstBeendet == false)
            {
                query = query.Where(x => x.Besuch.Endzeit == null);
            }

            if (!string.IsNullOrWhiteSpace(filter.Vorname))
            {
                query = query.Where(x => x.Besucher != null && x.Besucher.Person != null && x.Besucher.Person.Vorname.ToLower().Contains(filter.Vorname.ToLower()));
            }

            if (!string.IsNullOrWhiteSpace(filter.Name))
            {
                query = query.Where(x => x.Besucher != null && x.Besucher.Person != null && x.Besucher.Person.Name.ToLower().Contains(filter.Name.ToLower()));
            }

            if (!string.IsNullOrWhiteSpace(filter.Email))
            {
                query = query.Where(x => x.Besucher != null && x.Besucher.Person != null && x.Besucher.Person.Email.ToLower().Contains(filter.Email.ToLower()));
            }

            if (filter.Startzeit.HasValue)
            {
                query = query.Where(x => x.Besuch != null && x.Besuch.Startzeit >= filter.Startzeit.Value);
            }

            if (filter.Endzeit.HasValue)
            {
                query = query.Where(x => x.Besuch != null && x.Besuch.Endzeit <= filter.Endzeit.Value);
            }

            if (filter.Skip.HasValue)
            {
                query = query.Skip(filter.Skip.Value);
            }

            if (filter.Take.HasValue)
            {
                query = query.Take(filter.Take.Value);
            }

            return query
                .Include(x => x.Besucher.Person)
                .Select(x => x.Besucher)
                .ToList();
        }
    }
}
