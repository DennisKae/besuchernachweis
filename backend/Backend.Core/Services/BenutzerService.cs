using Backend.Core.Repositories;
using Backend.Core.Services.Interfaces;
using Backend.Data.Models;

namespace Backend.Core.Services
{
    public class BenutzerService : IBenutzerService
    {
        public Benutzer GetByEmail(string email)
        {
            if (string.IsNullOrWhiteSpace(email))
            {
                return null;
            }

            using (var unit = new UnitOfWork())
            {
                var benutzerRepo = unit.GetRepository<BenutzerRepository>();
                return benutzerRepo.GetByEmail(email);
            }
        }
    }
}
