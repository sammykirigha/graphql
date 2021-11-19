import React from "react";
import { useQuery, gql } from "@apollo/client";

const QUERY_MOVIES_DATA = gql`
  query getAllMovies {
    movies {
      name
      yearOfPublication
      isInTheaters
    }
  }
`;

const DisplayMovies = () => {
  const { data } = useQuery(QUERY_MOVIES_DATA);
  if (data) {
    console.log(data);
  }
  return (
    <div>
      {data &&
        data.movies.map((movie) => {
          return (
            <div>
              <h5>name: {movie.name}</h5>
            </div>
          );
        })}
    </div>
  );
};

export default DisplayMovies;
