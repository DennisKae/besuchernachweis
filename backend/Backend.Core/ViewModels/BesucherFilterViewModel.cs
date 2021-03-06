﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Backend.Core.ViewModels
{
    public class BesucherFilterViewModel
    {
        public DateTime? Startzeit { get; set; }

        public DateTime? Endzeit { get; set; }

        public bool? IstBeendet { get; set; }

        public string Name { get; set; }

        public string Vorname { get; set; }

        public string Email { get; set; }


        public int? Skip { get; set; }

        public int? Take { get; set; }

    }
}
