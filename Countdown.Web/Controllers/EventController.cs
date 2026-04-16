using Countdown.Data;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace Countdown.Web.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class EventController : ControllerBase
    {
        private readonly string _connectionString;
        public EventController(IConfiguration configuration)
        {
            _connectionString = configuration.GetConnectionString("ConStr");
        }

        [HttpPost]
        [Route("add")]
        public void AddEvent(Event e)
        {
            var repo = new EventRepo(_connectionString);
            repo.Add(e);
        }

        [HttpGet]
        [Route("get-all")]
        public List<Event> GetAllEvents()
        {
            var repo = new EventRepo(_connectionString);
            return repo.GetAllEvents();
        }

        [HttpGet]
        [Route("get-by-id")]
        public Event GetOneEventById(int id)
        {
            var repo = new EventRepo(_connectionString);
            return repo.GetEventById(id);
        }

        [HttpGet]
        [Route("get-by-date")]
        public Event GetOneEventByDate(DateTime d)
        {
            var repo = new EventRepo(_connectionString);
            return repo.GetEventForDate(d);
        }
    }
}
