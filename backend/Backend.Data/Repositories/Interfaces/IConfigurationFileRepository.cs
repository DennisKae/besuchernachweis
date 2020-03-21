namespace Backend.Data.Repositories.Interfaces
{
    public interface IConfigurationFileRepository
    {
        T GetConfigFromJsonFile<T>();
    }
}