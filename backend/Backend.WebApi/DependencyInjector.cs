using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Backend.Data.Repositories;
using Backend.Data.Repositories.Interfaces;
using Microsoft.Extensions.DependencyInjection;

namespace Backend.WebApi
{
    public static class DependencyInjector
    {
        /// <summary>Injiziert alle benötigten Dependencies</summary>
        public static void InjectDependencies(this IServiceCollection services)
        {
            services.AddSingleton<IConfigurationFileRepository, ConfigurationFileRepository>();
        }
    }
}
