import React, { useState }  from 'react'
import {useQuery, gql, useLazyQuery} from "@apollo/client";

const QUERY_ALL_USERS = gql`
query GetAllUsers  {
users  {
  id 
  name 
  age 
       }
}
`
const QUERY_ALL_MOVIES = gql`
query GetMovies {
movies {
 name
 isInTheaters
 }
}
` 
const GET_MOVIE_BY_NAME = gql`
query GetMoviesByName($name:String){
movie(name:$name){
  name
}
}
`
const DisplayData = () => {
    const [moviesSearched,setMovieSearched] = useState()
    const {data, loading} = useQuery(QUERY_ALL_USERS);
    const {data:Moviedata} = useQuery(QUERY_ALL_MOVIES);
    const [fetchMovie,{data:moviesSearchedData,error:movieError},] = useLazyQuery(GET_MOVIE_BY_NAME);
    
    if(loading){
      return <h1>...Loading</h1>
    }
    if(data){console.log(data,Moviedata)}
 console.log(moviesSearchedData)

    return (
        <div>
          <input type="text" placeholder='Interstellar...'
          onChange={(event) => {
            setMovieSearched(event.target.value)
          }}
          />
          <button onClick={fetchMovie}>Fetch Data</button>
          
          <div>
            {
              moviesSearchedData && (
                <div>
                  {""}
                  <h1>MovieName: {moviesSearchedData.movie.name}</h1>
                </div>
              )
            }
          </div>
       </div>
  )
}

export default DisplayData
