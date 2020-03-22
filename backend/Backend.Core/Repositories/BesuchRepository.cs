using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Backend.Core.ViewModels;
using Backend.Data;
using Backend.Data.Models;

namespace Backend.Core.Repositories
{
    public class BesuchRepository : BaseRepository
    {
        public BesuchRepository(DatabaseContext databaseContext) : base(databaseContext)
        {
        }

        public List<Besuch> GetByZeitraum(DateTime? startzeit, DateTime? endzeit)
        {
            var query = _databaseContext.Besuch.AsQueryable();
            if (startzeit.HasValue)
            {
                query = query.Where(x => x.Startzeit >= startzeit.Value);
            }
            if (endzeit.HasValue)
            {
                query = query.Where(x => x.Endzeit == null || x.Endzeit <= endzeit.Value);
            }

            return query.ToList();
        }

        public Besuch GetById(int id) => _databaseContext.Besuch.FirstOrDefault(x => x.Id == id);

        public List<Besuch> GetByBesucherId(int besucherId) => _databaseContext.BesuchBesucher.Where(x => x.BesucherId == besucherId).Select(x => x.Besuch).ToList();

        public void Update(Besuch besuch) => _databaseContext.Update(besuch);

        public void Create(Besuch besuch) => _databaseContext.Add(besuch);
        public void Create(List<BesuchBesucher> besuchBesucher) => _databaseContext.AddRange(besuchBesucher);
        public void Create(List<BesuchRaum> besuchRaeume) => _databaseContext.AddRange(besuchRaeume);

        public List<Besuch> GetByFilter(BesuchFilterViewModel filter)
        {
            var query = _databaseContext.BesuchBesucher.AsQueryable();

            if (filter.DatumVon.HasValue)
            {
                query = query.Where(x => x.Besuch != null && x.Besuch.Startzeit >= filter.DatumVon.Value);
            }

            if (filter.DatumBis.HasValue)
            {
                query = query.Where(x => x.Besuch != null && (x.Besuch.Endzeit == null || x.Besuch.Endzeit <= filter.DatumBis.Value));
            }

            if (filter.BesucherId.HasValue)
            {
                query = query.Where(x => x.BesucherId == filter.BesucherId);
            }

            if (filter.Raeume?.Count > 0)
            {
                query = query.Where(x => x.Besuch != null && x.Besuch.BesuchRaeume.Any(y => filter.Raeume.Contains(y.Id)));
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
                .Select(x => x.Besuch)
                .ToList();
        }
    }
}
