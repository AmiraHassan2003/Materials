using System;
using App.Api.Dtos;
using App.Api.Entities;

namespace App.Api.Mapping;

public static class CourseMapping
{
    public static Course ToEntity(this CreateCoursesDto game){
        return new Course()
        {
            Title = game.Title,
            Date = game.Date,
            Price = game.Price,
            Description = game.Description
        };
    }

    // public static CourseSummaryDto ToSummaryDto(this Course game)
    // {
    //     return new(
            
    //     );
        
    // }
}
