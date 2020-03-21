using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore.Design;

namespace Backend.Data
{
    /// <summary>
    /// Wird bei der Erstellung von Migrations benötigt: <see href="https://docs.microsoft.com/en-us/ef/core/miscellaneous/cli/dbcontext-creation#from-a-design-time-factory">Mehr dazu</see>
    /// </summary>
    public class DatabaseContextFactory : IDesignTimeDbContextFactory<DatabaseContext>
    {
        public DatabaseContext CreateDbContext(string[] args)
        {
            string datenbankPfad = @"C:\install\Besuchernachweis\Besuchernachweis.db";
            var result = new DatabaseContext(datenbankPfad);

            return result;
        }
    }
}
