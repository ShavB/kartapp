using API.Data;
using Microsoft.EntityFrameworkCore;

var builder = WebApplication.CreateBuilder(args);

builder.Services.AddControllers();
builder.Services.AddDbContext<StoreContext>(opt =>
{
    opt.UseSqlite(builder.Configuration.GetConnectionString("DefaultConnectionString"));
});

builder.Services.AddCors();
var app = builder.Build();
app.UseCors(opt => 
{
    opt.AllowAnyHeader().AllowAnyMethod().WithOrigins("https://localhost:3000", "http://localhost:5173");
});
app.MapControllers();

DbInitializer.InitDb(app);

app.Run();
