import React, { useState } from "react";
import { useQuery, gql, useLazyQuery, useMutation } from "@apollo/client";

const QUERY_MOVIES = gql`
  query MovieList($sort: ListMoviesSort!, $filter: MoviesFilter!) {
    movies(sort: $sort, filter: $filter) {
      message
      count
      data {
        id
        adult
        tagline
        title
        movieVideo {
          id
        }
        revenue
        overview
        genres {
          id
        }
        releaseDate
        createdAt
      }
    }
  }
`;

const UPDATE_MOVIE = gql`
  mutation UpdateMovie($id: ID!, $data: UpdateMovieInput!) {
    updateMovie(id: $id, data: $data) {
      message
      data {
        posterData
        collections
        credits
        genres
      }
    }
  }
`;

const DisplayData = () => {
  const [fetchMovie, { data: moviesSearchedData, error: movieError }] =
    useLazyQuery(QUERY_MOVIES);
  const [updateMovie, { data, error }] = useMutation(UPDATE_MOVIE,{
    context:{
        headers:{
            token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiJmMGUyNWUwNi1lMGQwLTRjNzMtOTk2ZS1mMTdiZGQ4MGQzM2MiLCJpYXQiOjE2ODE5ODAwMjIsImV4cCI6MTY4MjU4NDgyMn0.fmVVGXi1Aqs84fxWBG92Bf0FQEKjXrwEf6Rb7WBUWjo"
        }
        }
    }
  );
  
  console.log(moviesSearchedData);

  if (error) return <h1>{error.message}</h1>;
  if (data) {
    console.log(data);
  }
   
  return (
    <div>
      <h1>Hey Mama</h1>
      <button
        onClick={() => {
          fetchMovie({
            variables: {
              sort: {
                field: "createdAt",
                order: "DESC",
              },
              filter: {},
            },
          });
        }}
      >
        Fetch Data
      </button>

      <h2> Update Movie </h2>
      <button
        onClick={() => {
          updateMovie({
            variables: {
              id: "3f394f9e-794b-4b04-a329-34d834687df7",
              data: {
                adult: true,
                budget: 1121212121210000,
                originalLanguage: "Hindi",
                originalTitle: "Trival",
                title: "The Express",
                overview: "Towars",
                releaseDate: "2023-03-28T07:39:16.471Z",
                revenue: 231213,
                runtime: 121,
                status: "completed",
                tagline: "The tiger zinda hai",
                countryIds: [],
                languageIds: [],
              },
            },
          });
        }}
      >
        {" "}
        Create Store
      </button>
    </div>
  );
};

export default DisplayData;
