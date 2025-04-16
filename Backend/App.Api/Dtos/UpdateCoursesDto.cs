namespace App.Api.Dtos;

public record class UpdateCoursesDto(
    string Title,
    string Description,
    DateOnly Date,
    decimal Price
);
