using System;

namespace App.Api.Entities;

public class Course
{
    public int Id { get; set; }
    public required string Title { get; set; }
    public string? Description { get; set; }

    public DateOnly? Date { get; set; }
    public decimal Price { get; set; }
}
