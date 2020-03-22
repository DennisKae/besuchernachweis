using Backend.Core.ViewModels;

namespace Backend.Core.Services.Interfaces
{
    public interface IAuthService
    {
        LoginResultViewModel Login(LoginViewModel loginViewModel);
        LoginResultViewModel Register(ExtendedBenutzerViewModel benutzer);
    }
}