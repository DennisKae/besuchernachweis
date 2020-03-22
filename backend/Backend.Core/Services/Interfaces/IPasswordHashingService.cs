using System.Security.Cryptography;

namespace Backend.Core.Services
{
    public interface IPasswordHashingService
    {
        HashAlgorithmName HashAlgorithmName { get; }
        int Pbkdf2IterCount { get; }
        int Pbkdf2SubkeyLength { get; }
        int SaltSize { get; }
        byte Version { get; }

        string HashPassword(string password);
        PasswordVerificationResult VerifyHashedPassword(string hashedPassword, string password);
    }
}