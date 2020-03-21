using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
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
    }
}
