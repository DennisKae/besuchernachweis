using System.Collections.Generic;
using Backend.Core.ViewModels;

namespace Backend.Core.Services
{
    public interface IBesuchService
    {
        BesuchViewModel Create(NeuerBesuchViewModel neuerBesuchViewModel);
        List<BesuchViewModel> GetBesucheOfBesucher(int besucherId);
        List<BesuchViewModel> GetByFilterViewModel(BesuchFilterViewModel filterViewModel);
        void SetEndzeitpunkt(BesuchEndzeitViewModel besuchEndzeitViewModel);
        void Update(BesuchViewModel besuchViewModel);
    }
}