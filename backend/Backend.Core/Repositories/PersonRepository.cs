using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Backend.Data;
using Backend.Data.Models;

namespace Backend.Core.Repositories
{
    public class PersonRepository : BaseRepository
    {
        public PersonRepository(DatabaseContext databaseContext) : base(databaseContext)
        {
        }


        public void AddPerson(Person person)
        {
            _databaseContext.Add(person);
        }
    }
}
