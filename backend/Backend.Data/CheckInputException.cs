using System;
using System.Collections.Generic;
using System.Linq;
using System.Runtime.Serialization;
using System.Text;
using System.Threading.Tasks;

namespace Backend.Data
{

    [Serializable]
    public class CheckInputException : Exception
    {
        public CheckInputException() { }
        public CheckInputException(string message) : base(message) { }
        public CheckInputException(string message, Exception inner) : base(message, inner) { }
        protected CheckInputException(
          SerializationInfo info,
          StreamingContext context) : base(info, context) { }
    }
}
