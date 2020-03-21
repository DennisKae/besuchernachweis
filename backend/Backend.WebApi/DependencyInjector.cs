using Backend.Core.Services;
using Backend.Core.Services.Interfaces;
using Microsoft.Extensions.DependencyInjection;

namespace Backend.WebApi
{
    public static class DependencyInjector
    {
        /// <summary>Injiziert alle benötigten Dependencies</summary>
        public static void InjectDependencies(this IServiceCollection services)
        {
            services.AddSingleton<IBenutzerService, BenutzerService>();
        }
    }
}
