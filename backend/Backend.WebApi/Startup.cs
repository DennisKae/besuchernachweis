using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Reflection;
using System.Text;
using System.Threading.Tasks;
using AutoMapper;
using Backend.Core;
using Backend.Core.Repositories;
using Backend.Data;
using Backend.Data.Objects;
using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;
using Microsoft.Extensions.Logging;
using Microsoft.IdentityModel.Tokens;
using Microsoft.OpenApi.Models;
using NetCore.AutoRegisterDi;

namespace Backend.WebApi
{
    public class Startup
    {
        public Startup(IConfiguration configuration)
        {
            Configuration = configuration;
        }

        public IConfiguration Configuration { get; }

        // This method gets called by the runtime. Use this method to add services to the container.
        public void ConfigureServices(IServiceCollection services)
        {
            services.AddControllers();

            LogEnvironmentVariables();

            var key = Encoding.UTF8.GetBytes(EnvironmentVariableValues.AppSecret);
            services.AddAuthentication(x =>
            {
                x.DefaultAuthenticateScheme = JwtBearerDefaults.AuthenticationScheme;
                x.DefaultChallengeScheme = JwtBearerDefaults.AuthenticationScheme;
            });
            //.AddJwtBearer(options =>
            //{
            //    options.RequireHttpsMetadata = false;
            //    options.SaveToken = true;
            //    options.TokenValidationParameters = new TokenValidationParameters
            //    {
            //        ValidateIssuerSigningKey = true,
            //        IssuerSigningKey = new SymmetricSecurityKey(key),
            //        ValidateIssuer = false,
            //        ValidateAudience = false
            //    };
            //});

            // Swagger
            services.AddSwaggerGen(c =>
            {
                c.SwaggerDoc("v1", new OpenApiInfo
                {
                    Title = "Besuchernachweis - " + Assembly.GetExecutingAssembly().GetName().Name + " API",
                    Version = "v1"
                });
                var xmlFile = $"{Assembly.GetExecutingAssembly().GetName().Name}.xml";
                var xmlPath = Path.Combine(AppContext.BaseDirectory, xmlFile);
                c.IncludeXmlComments(xmlPath);
            });

            EnsureMigration();

            //services.InjectDependencies();
            var assembliesToScan = new[]
            {
                Assembly.GetExecutingAssembly(),
                Assembly.GetAssembly(typeof(UnitOfWork)),
                Assembly.GetAssembly(typeof(DatabaseContext)),
            };


            services.RegisterAssemblyPublicNonGenericClasses(assembliesToScan)
              .Where(c => c.Name.EndsWith("Service"))
              .AsPublicImplementedInterfaces();

            services.AddAutoMapper(assembliesToScan);
        }

        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        public void Configure(IApplicationBuilder app, IWebHostEnvironment env, ILoggerFactory loggerFactory)
        {
            if (env.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();
            }

            app.UseCors(builder => builder
                .AllowAnyOrigin()
                .AllowAnyMethod()
                .AllowAnyHeader());

            loggerFactory.AddLog4Net();

            app.UseRouting();

            app.UseAuthorization();

            app.UseEndpoints(endpoints =>
            {
                endpoints.MapControllers();
            });


            app.UseSwagger();

            app.UseSwaggerUI(c =>
            {
                c.SwaggerEndpoint("/swagger/v1/swagger.json", Assembly.GetExecutingAssembly().GetName().Name + " API V1");
            });
        }

        /// <summary>Führt die Migrationen der Datenbank aus.</summary>
        private void EnsureMigration()
        {
            using (var databaseContext = new DatabaseContext())
            {
                databaseContext.Database.Migrate();
            }
        }

        private void LogEnvironmentVariables()
        {
            Console.WriteLine("Ausgelesene Environmentvariable: " + EnvironmentVariableValues.DatenbankPfadKey + ": " + EnvironmentVariableValues.Datenbankpfad);
            Console.WriteLine("Ausgelesene Environmentvariable: " + EnvironmentVariableValues.LoginversucheKey + ": " + EnvironmentVariableValues.Loginversuche);
            Console.WriteLine("Ausgelesene Environmentvariable: " + EnvironmentVariableValues.TokenLifeTimeKey + ": " + EnvironmentVariableValues.TokenLifetime);
            Console.WriteLine("Ausgelesene Environmentvariable: " + EnvironmentVariableValues.AppSecretKey + ": " + EnvironmentVariableValues.AppSecret);
        }
    }
}
