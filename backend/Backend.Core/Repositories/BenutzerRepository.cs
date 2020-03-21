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
    public class BenutzerRepository : BaseRepository
    {
        private readonly DatabaseContext _databaseContext;

        public BenutzerRepository(DatabaseContext databaseContext) : base(databaseContext)
        {
            _databaseContext = databaseContext;
        }

        public Benutzer GetByEmail(string email)
        {
            return _databaseContext.Benutzer
                .Include(x => x.Person)
                .FirstOrDefault(x => x.Person.Email == email);
        }

        public List<Benutzer> GetAll()
        {
            return _databaseContext.Benutzer.ToList();
        }
    }
}
