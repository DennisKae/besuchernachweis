﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Backend.Core.ViewModels
{
    public class BesucherViewModel
    {
        public int Id { get; set; }

        public PersonViewModel Person { get; set; }

        public string Gesundheitsstatus { get; set; }
    }
}
