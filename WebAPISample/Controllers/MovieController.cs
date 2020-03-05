using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using WebAPISample.Data;
using WebAPISample.Models;

namespace WebAPISample.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class MovieController : ControllerBase
    {
        private ApplicationContext _context;
        public MovieController(ApplicationContext context)
        {
            _context = context;
        }
        // GET api/movie
        [HttpGet]
        public IEnumerable<Movie> Get()
        {
            //retrieve all movies from dblogic
            var movieList = _context.Movies.ToList();
            return movieList;
        }

        // GET api/movie/5
        [HttpGet("{id}")]
        public Movie Get(int id)
        {
            var movieSelected = _context.Movies.Where(m => m.MovieId == id).FirstOrDefault();
            return movieSelected;
        }

        // POST api/movie
        [HttpPost]
        public void Post([FromBody]Movie value)
        {
            // Create movie in db logic. Needs input values before it can be completed. 
            _context.Movies.Add(value);
            _context.SaveChanges();
        }

        // PUT api/movie/5
        [HttpPut]

        public void Put([FromBody]Movie movie)
        {
            var movieToChange = _context.Movies.Where(x => x.MovieId == movie.MovieId).FirstOrDefault();
            movieToChange.Director = movie.Director;
            movieToChange.Genre = movie.Genre;
            movieToChange.Title = movie.Title;
            _context.Update(movieToChange);
            _context.SaveChanges();
        }

        // DELETE api/movie/5
        [HttpDelete]
        public void Delete(int id)
        {
            // Delete movie from db logic
            var movieToDelete = _context.Movies.Where(m => m.MovieId == id).FirstOrDefault();
            _context.Movies.Remove(movieToDelete);
            _context.SaveChanges();
        }
    }
}