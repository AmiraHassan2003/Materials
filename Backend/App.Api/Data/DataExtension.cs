using System;
using Microsoft.EntityFrameworkCore;

namespace App.Api.Data;

public static class DataExtension
{
    public static void MigrateDb(this WebApplication app){
        using var scope = app.Services.CreateScope();
        var DbContext = scope.ServiceProvider.GetRequiredService<CoursesContext>();
        DbContext.Database.Migrate();
    }
}
