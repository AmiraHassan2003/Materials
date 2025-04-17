using System;
using App.Api.Dtos;
using App.Api.Entities;

namespace App.Api.Mapping;

public static class CourseMapping
{
    public static Course ToEntity(this CreateCoursesDto course){
        return new Course()
        {
            Title = course.Title,
            Date = course.Date,
            Price = course.Price,
            Description = course.Description
        };
    }
}
