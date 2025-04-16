using System;
using App.Api.Entities;
using Microsoft.EntityFrameworkCore;

namespace App.Api.Data;

public class CoursesContext: DbContext
{
    public CoursesContext(DbContextOptions<CoursesContext> options ) : base(options)
    {
        
    }

    public DbSet<Course> Courses => Set<Course>();

}
