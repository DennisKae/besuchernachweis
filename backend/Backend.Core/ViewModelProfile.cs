using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using AutoMapper;
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
        }
    }
}
