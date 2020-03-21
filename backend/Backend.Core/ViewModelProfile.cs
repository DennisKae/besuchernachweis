using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using AutoMapper;
using Backend.Core.Repositories;
using Backend.Core.ViewModels;
using Backend.Data.Models;

namespace Backend.Core
{
    public class ViewModelProfile : Profile
    {
        public ViewModelProfile()
        {
            CreateMap<BesucherViewModel, Besucher>()
                .ReverseMap();

            CreateMap<PersonViewModel, Person>()
                .ReverseMap();

            CreateMap<Benutzer, BenutzerViewModel>()
                .ReverseMap();

            CreateMap<Benutzer, LoginResultViewModel>()
                .ReverseMap();

            CreateMap<BenutzerViewModel, LoginResultViewModel>()
                .ReverseMap();

            CreateMap<GebaeudeViewModel, Gebaeude>()
                .ReverseMap();

            CreateMap<RaumViewModel, Raum>()
                .ReverseMap();

            CreateMap<Besuch, BesuchViewModel>()
                .ReverseMap();
        }
    }
}
