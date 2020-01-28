using System.ComponentModel.DataAnnotations;

namespace datingapp.API.DTOs
{
    public class RegisterUserDTO
    {
        [Required]
        public string UserName { get; set; }
        [Required]
        [StringLength(8, MinimumLength = 4, ErrorMessage = "Password should be in between 4 and 8")]
        public string Password { get; set; }
    }
}