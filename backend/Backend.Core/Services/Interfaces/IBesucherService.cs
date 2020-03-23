using System.Collections.Generic;
using Backend.Core.ViewModels;

namespace Backend.Core.Services.Interfaces
{
    public interface IBesucherService
    {
        int GetAnzahlAktiverBesucher();
        BesucherViewModel Create(BesucherViewModel besucherViewModel);
        List<BesucherViewModel> GetByFilterViewModel(BesucherFilterViewModel besucherFilterViewModel);
        BesucherViewModel Update(BesucherViewModel besucherViewModel);
    }
}