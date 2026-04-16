using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Countdown.Data
{
    public class Event
    {
        public int Id { get; set; }
        public DateTime DateAndTime { get; set; }
        public string Title { get; set; }
        public string Address { get; set; }
        public string Description { get; set; }
        public string WithWhomName { get; set; }
        public int Importance { get; set; }
    }
}
