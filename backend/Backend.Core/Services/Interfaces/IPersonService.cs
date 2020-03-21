using Backend.Core.ViewModels;

namespace Backend.Core.Services.Interfaces
{
    public interface IPersonService
    {
        void AddPerson(PersonViewModel personViewModel);
    }
}