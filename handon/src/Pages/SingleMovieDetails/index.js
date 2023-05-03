import React from 'react'
import { useParams, useSearchParams } from 'react-router-dom'
import { useQuery, gql } from "@apollo/client";

export const MOVIESBYID_QUERY = gql`
  query MovieByid($id:ID!){
  movie(id:$id){
    message
    data{
      id
      title
      originalTitle
    }
  }
}
`;

const SingleMovieDetails = () => {
    const {id}=useParams();
    const {data} = useQuery(MOVIESBYID_QUERY,{
        variables:{
            "id":`${id}`
        }
    });

    const singleMovieData = data?.movie?.data
    
  return (
    <div>
        {
            singleMovieData && <h1>SingleMovieDetails</h1>
        }
    </div>
  )
}

export default SingleMovieDetails
