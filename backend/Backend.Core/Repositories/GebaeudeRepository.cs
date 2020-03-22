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
    public class GebaeudeRepository : BaseRepository
    {
        public GebaeudeRepository(DatabaseContext databaseContext) : base(databaseContext)
        {
        }

        public List<Gebaeude> GetAll()
        {
            return _databaseContext
                .Gebaeude
                .Include(x => x.Raeume)
                .ToList();
        }

        public void Create(Gebaeude gebaeude)
        {
            _databaseContext.Add(gebaeude);
        }

        public void DeleteGebaeude(int id)
        {
            _databaseContext.Gebaeude.Remove(_databaseContext.Gebaeude.FirstOrDefault(x => x.Id == id));
        }

        public void Create(Raum raum)
        {
            _databaseContext.Add(raum);
        }

        public void DeleteRaum(int id)
        {
            _databaseContext.Raum.Remove(_databaseContext.Raum.FirstOrDefault(x => x.Id == id));
        }

        public List<Raum> GetRaeumeByBesuch(Besuch besuch)
        {
            return _databaseContext.BesuchRaum
                .Where(x => x.BesuchId == besuch.Id)
                .Select(x => x.Raum)
                .ToList();
        }
    }
}
