using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Backend.Data;

namespace Backend.Core.Repositories
{
    public class BaseRepository
    {
#pragma warning disable IDE0052 // Remove unread private members
        protected readonly DatabaseContext _databaseContext;
#pragma warning restore IDE0052 // Remove unread private members
        public BaseRepository(DatabaseContext databaseContext)
        {
            _databaseContext = databaseContext;
        }
    }
}
