using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Backend.Data;
using Backend.Data.Models;

namespace Backend.Core.Repositories
{
    public class BesucherRepository : BaseRepository
    {
        public BesucherRepository(DatabaseContext databaseContext) : base(databaseContext)
        {
        }

        public void AddBesucher(Besucher besucher)
        {
            _databaseContext.Add(besucher);
        }
    }
}
