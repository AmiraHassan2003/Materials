namespace App.Api.Dtos;

public record class CreateCoursesDto(
    string Title,
    string Description,
    DateOnly Date,
    decimal Price
);
