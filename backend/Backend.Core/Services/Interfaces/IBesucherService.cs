using Backend.Core.ViewModels;

namespace Backend.Core.Services
{
    public interface IBesucherService
    {
        BesucherViewModel AddBesucher(BesucherViewModel besucherViewModel);
    }
}