using Backend.Core.ViewModels;
using Backend.Data.Models;

namespace Backend.Core.Services.Interfaces
{
    public interface IBenutzerService
    {
        Benutzer CreateBenutzer(Benutzer benutzer);
        Benutzer GetByEmail(string email);
        BenutzerViewModel Update(ExtendedBenutzerViewModel benutzer);
    }
}