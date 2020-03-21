using Backend.Data.Models;

namespace Backend.Core.Services.Interfaces
{
    public interface IBenutzerService
    {
        Benutzer GetByEmail(string email);
    }
}