using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Backend.Data
{
    public static class Guard
    {
        public static void IsNotNull(object target, string nameOrDescription)
        {
            if (target == null)
            {
                throw new ArgumentNullException(nameOrDescription);
            }
        }
    }
}
