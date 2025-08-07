namespace AutoFactBDD.Seeders;

public class DepartmentsSeeder(
    AutoFactDbContext context, IMapper<Department, Entities.Department> mapper
) : ISeeder {
    private readonly AutoFactDbContext _context = context;
    private readonly IMapper<Department, Entities.Department> _mapper = mapper;

    public void Seed()
    {
        if (!_context.Departments.Any())
        {
            var departments = new[]
                {
                    new Department { Id = "PHARMA", Label = "Service de Pharmacie" },
                    new Department { Id = "PROTHESES", Label = "Service de Prothèses" },
                    new Department { Id = "BLOC", Label = "Service de Bloc" },
                    new Department { Id = "BIOMED", Label = "Service Biomédical" },
                    new Department { Id = "CARDIO", Label = "Service de Cardiologie" },
                    new Department { Id = "CUISINE", Label = "Service de Cuisine" },
                    new Department { Id = "ACHATS", Label = "Service des Achats généraux" },
                    new Department { Id = "INFORMATIQUE", Label = "Service Informatique" },
                    new Department { Id = "FORMATION", Label = "Service de Formation" },
                    new Department { Id = "PRESTATIONS", Label = "Service de Prestations de services" },
                    new Department { Id = "HONORAIRES", Label = "Service d'Honoraires" },
                    new Department { Id = "TECHNIQUE", Label = "Service Techniques, Énergie et Entretien" },
                    new Department { Id = "CONFORMITE", Label = "Service de Mise en conformité" },
                    new Department { Id = "LOCATION", Label = "Service de Location (financière, loyer, divers)" }
                };
            _context.Departments.AddRange(departments.Select(_mapper.ToDb));
            _context.SaveChanges();
        }
    }
}