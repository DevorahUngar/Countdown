using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Countdown.Data
{
    public class EventRepo
    {
        private readonly string _connectionString;
        public EventRepo(string connectionString)
        {
            _connectionString = connectionString;
        }

        public void Add(Event e)
        {
            var context = new CountdownDataContext(_connectionString);
            context.Appointments.Add(e);
            context.SaveChanges();
        }

        public List<Event> GetAllEvents()
        {
            var context = new CountdownDataContext(_connectionString);
            var events = context.Appointments.ToList();
            return events;
        }

        public Event GetEventById(int id)
        {
            var context = new CountdownDataContext(_connectionString);
            return (Event)context.Appointments.Where(a => a.Id == id);
        }


        public Event GetEventForDate(DateTime d)
        {
            var context = new CountdownDataContext(_connectionString);
            return (Event)context.Appointments.Where(a => a.DateAndTime == d);
        }
    }
}
