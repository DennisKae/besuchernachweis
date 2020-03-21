using Backend.Core.ViewModels;
using Backend.Data.Models;

namespace Backend.Core.Services.Interfaces
{
    public interface IBenutzerService
    {
        Benutzer GetByEmail(string email);
        LoginResultViewModel Login(LoginViewModel loginViewModel);
    }
}