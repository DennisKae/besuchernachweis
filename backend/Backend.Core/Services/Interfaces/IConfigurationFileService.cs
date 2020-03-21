namespace Backend.Core.Services.Interfaces
{
    public interface IConfigurationFileService
    {
        T GetConfigFromJsonFile<T>();
    }
}