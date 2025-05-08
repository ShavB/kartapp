using API.Entities;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;

namespace API.Data;

public class StoreContext(DbContextOptions options) : IdentityDbContext<User>(options)
{
    public required DbSet<Product> Products { get; set; }

    protected override void OnModelCreating(ModelBuilder builder)
    {
        base.OnModelCreating(builder);

        builder
            .Entity<IdentityRole>()
            .HasData(
                new IdentityRole
                {
                    Id = "16f6b774-89e6-49c7-acf4-f8387b076479",
                    Name = "Member",
                    NormalizedName = "MEMBER",
                },
                new IdentityRole
                {
                    Id = "d89035b3-9fb9-4a5c-989d-f50b038bfc79",
                    Name = "Admin",
                    NormalizedName = "ADMIN",
                }
            );
    }
}
