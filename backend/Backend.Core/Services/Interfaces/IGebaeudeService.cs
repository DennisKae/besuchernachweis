﻿using System.Collections.Generic;
using Backend.Core.ViewModels;

namespace Backend.Core.Services.Interfaces
{
    public interface IGebaeudeService
    {
        GebaeudeViewModel Create(GebaeudeViewModel gebaeudeViewModel);
        RaumViewModel Create(RaumViewModel raumViewModel);
        void DeleteGebaeude(int gebaeudeId);
        void DeleteRaum(int raumId);
        List<GebaeudeViewModel> GetAll();
        GebaeudeViewModel Update(GebaeudeViewModel gebaeudeViewModel);
        RaumViewModel Update(RaumViewModel raumViewModel);
    }
}