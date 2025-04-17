using App.Api.Data;
using App.Api.Endpoints;
using App.Api.Entities;
using Microsoft.EntityFrameworkCore;

var builder = WebApplication.CreateBuilder(args);



var connString = builder.Configuration.GetConnectionString("CoursesApp");
builder.Services.AddDbContext<CoursesContext>(options => {
    options.UseSqlite(connString);
});

builder.Services.AddCors(options =>
{
    options.AddDefaultPolicy(policy =>
    {
        policy.AllowAnyOrigin()   // Domain
              .AllowAnyMethod()   // GET, POST, PUT, ...
              .AllowAnyHeader();  // Content-Type, Authorization, ...
    });
});

var app = builder.Build();

app.UseCors();

app.MapCourseEndpoints();

app.MigrateDb();

app.Run();
