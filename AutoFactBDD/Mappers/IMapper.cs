namespace AutoFactBDD.Mappers;

public interface IMapper<TCore, TDb>
{
    TCore ToCore(TDb entity);
    TDb ToDb(TCore entity);
}