using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using WebAPISample.Models;

namespace WebAPISample.Controllers
{
    public class MovieController : ApiController
    {
        ApplicationDbContext context;

        public MovieController()
        {
            context = new ApplicationDbContext();
        }

        
        // GET api/values
        [HttpGet]
        public IHttpActionResult Get()
        {
            var movies = context.Movies.ToList();
            
            // Retrieve all movies from db logic
            return Ok(movies);
        }

        // GET api/values/5
        [HttpGet]
        public IHttpActionResult Get(int id)
        {
            var movie = context.Movies.Where(m => m.MovieId == id).FirstOrDefault();

            // Retrieve specific movie based off id
            return Ok(movie);
        }

        [HttpPost]
        // POST api/values
        public void Post([FromBody]Movie value)
        {
            context.Movies.Add(value);
            context.SaveChanges(); 
        }

        [HttpPut]
        // PUT api/values/5
        public void Put(int id, [FromBody]Movie value)
        {
            var movieToBeUpdated = context.Movies.Where(m => m.MovieId == id).FirstOrDefault();

            movieToBeUpdated.Genre = value.Genre;
            movieToBeUpdated.Director = value.Director;
            movieToBeUpdated.Title = value.Title;
            movieToBeUpdated.MovieId = value.MovieId;

            context.SaveChanges(); 
        }

        [HttpDelete]
        // DELETE api/values/5
        public void Delete(int id)
        {
            var movieToBeDeleted = context.Movies.Where(m => m.MovieId == id).FirstOrDefault();
            context.Movies.Remove(movieToBeDeleted);
            context.SaveChanges();
        }
    }

}