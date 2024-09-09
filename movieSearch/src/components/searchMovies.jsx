import { useState } from 'react'


export default function MoviesSearch() {
const searchMovies= async(e)=>{
  e.preventDeault()
  console.log('sub');
  const query= 'Rush'
  const url = `https://api.themoviedb.org/3/search/movie?api_key=5dc6f94e11e642682f8c373b3f0881ae0&language=en-US&query=${query}&page=1&include_adult=false`;
  const res = await fetch(url)
  const data = await res.json()
  console.log(data);
  

}
  return (

              <form className="form">
              <label className="label" htmlFor="query">Movie Name</label>
              <input className="input" type="text" name="query"
                  placeholder="i.e. Jurassic Park"/>
              <button className="button" type="submit">Search</button>
          </form>
  )
}
