using System;
using App.Api.Data;
using App.Api.Dtos;
using App.Api.Entities;
using App.Api.Mapping;



namespace App.Api.Endpoints;

public static class CoursesEndpoints
{
    const string GetCourseEndpointName = "GetCourse";

    public static RouteGroupBuilder MapCourseEndpoints(this WebApplication app){

        var group = app.MapGroup("courses");


        group.MapGet("/", (CoursesContext dbContext) => {
            var course = dbContext.Courses.ToList();
            return Results.Ok(course);
        });


        group.MapGet("/{id}", (int id, CoursesContext dbContext) => {
            Course? course = dbContext.Courses.Find(id);
            return course is null ? Results.NoContent() : Results.Ok(course);
        }).WithName(GetCourseEndpointName);


        group.MapPost("/", (CoursesContext db, CreateCoursesDto newCourse) =>
        {
            Course course = newCourse.ToEntity();
            db.Courses.Add(course);
            db.SaveChanges();
            return Results.CreatedAtRoute(GetCourseEndpointName, new {id = course.Id}, course);
        });

        group.MapPut("/{id}", (int id, UpdateCoursesDto updatedDto, CoursesContext db) =>
        {
            var existing = db.Courses.Find(id);
            if (existing is null)
                return Results.NotFound();

            existing.Title = updatedDto.Title;
            existing.Description = updatedDto.Description;
            existing.Price = updatedDto.Price;

            db.SaveChanges();
            return Results.Ok(existing);
        });

        group.MapDelete("/{id}", (int id, CoursesContext db) =>
        {
            var course = db.Courses.Find(id);
            if (course is null)
                return Results.NotFound();

            db.Courses.Remove(course);
            db.SaveChanges();
            return Results.NoContent();
        });

    return group;

    }

}
