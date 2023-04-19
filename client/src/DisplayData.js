import React, { useState } from "react";
import { useQuery, gql, useLazyQuery, useMutation } from "@apollo/client";

const QUERY_ALL_USERS = gql`
  query GetAllUsers {
    users {
      id
      name
      age
    }
  }
`;
const QUERY_ALL_MOVIES = gql`
  query GetMovies {
    movies {
      name
      isInTheaters
    }
  }
`;

const GET_MOVIE_BY_NAME = gql`
  query Movie($name: String!) {
    movie(name: $name) {
      name
      yearOfPublications
    }
  }
`;

// mutation CreateUser($input: createUser!){
//   #   createUser(input: $input) {
//   #     id
//   #     name
//   #     age
//   #   }
//   # }

const CREATE_USER = gql`
mutation CreateUser($input:createUserInput!){
createUser(input:$input){
id
name
}
}
`

// uery GetSingleMovieByName($name: String!) {
//   movie(name: $name) {
//   name
//   yearOfPublications
//   }
// }
const DisplayData = () => {
  //InputTag State for MOvies;
  const [moviesSearched, setMovieSearched] = useState("");

  // Create UserName States
  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [age, setAge] = useState(0);
  const [nationality,setNationality] = useState("")

  //Here I am showing the exaples of useQuery 
  const { data, loading, refetch } = useQuery(QUERY_ALL_USERS);
  const { data: Moviedata } = useQuery(QUERY_ALL_MOVIES);

  //Here I am showing the examples of useLazyQuery()
  const [fetchMovie, { data: moviesSearchedData, error: movieError }] =
  useLazyQuery(GET_MOVIE_BY_NAME);

  //UseMutaion for creating and Updating the Data  
  const [createUser] = useMutation(CREATE_USER);

  if (loading) { return <h1>..........Loading</h1> }

  if(data){console.log(data)}
  // if (movieError) {
  //   console.log(movieError);
  // }

  return (
    <div>
      <div>
        <input
          type="text"
          placeholder="Name..."
          onChange={(event) => {
            setName(event.target.value);
          }}
        />
        <input
          type="number"
          placeholder="Age..."
          onChange={(event) => {
            setAge(event.target.value);
          }}
        />
        <input
          type="text"
          placeholder="Username..."
          onChange={(event) => {
            setUsername(event.target.value);
          }}
        />
          <input
          type="text"
          placeholder="Nationality..."
          onChange={(event) => {
            setNationality(event.target.value.toUpperCase());
          }}
        />
        <button onClick={() => {createUser({variables:{input:{
          name, username, age:Number(age), nationality
        }}})}}> Create Store </button>
      </div>
      

     <br/>
     <br/>

      <input
        type="text"
        placeholder="Interstellar..."
        onChange={(event) => {
          setMovieSearched(event.target.value);
        }}
      />
      <button
        onClick={() => {
          fetchMovie({ variables: { name: moviesSearched } });
          refetch();
        }
          
          
          
        }
      >
        Fetch Data
      </button>
      <div>
        {moviesSearchedData && (
          <div>
            {""}
            <h1>MovieName: {moviesSearchedData.movie.name}</h1>
          </div>
        )}
        {movieError && <h1>There Was An Error:</h1>}
      </div>
    </div>
  );
};

export default DisplayData;
