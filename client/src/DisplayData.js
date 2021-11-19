import React, { useState } from "react";
import { useQuery, useLazyQuery, gql } from "@apollo/client";

const QUERY_USERS_DATA = gql`
  query getAllUsers {
    users {
      id
      name
      username
      age
      nationality
    }
  }
`;

const QUERY_MOVIES_DATA = gql`
  query getAllMovies {
    movies {
      name
      yearOfPublication
      isInTheaters
    }
  }
`;

const QUERY_MOVIE_BY_NAME = gql`
  query Movie($name: String!) {
    movie(name: $name) {
      name
      yearOfPublication
    }
  }
`;

const DisplayData = () => {
  const [searchMovie, setSearchMovie] = useState("");
  const { data, loading, error } = useQuery(QUERY_USERS_DATA);
  const {
    data: movieData,
    loading: movieLoading,
    error: movieError,
  } = useQuery(QUERY_MOVIES_DATA);

  const [
    fetchData,
    {
      data: searchMovieData,
      loading: searchMovieLoading,
      error: errorMovieLoading,
    },
  ] = useLazyQuery(QUERY_MOVIE_BY_NAME);

  if (loading) {
    return <h2>Data Loading......</h2>;
  }

  if (errorMovieLoading) {
    console.log(errorMovieLoading);
  }

  return (
    <div>
      {data &&
        data.users.map((user) => {
          return (
            <div>
              <h4>name: {user.name}</h4>
              <h4>username: {user.username}</h4>
              <h4>age: {user.age}</h4>
              <h4>nationality: {user.nationality}</h4>
            </div>
          );
        })}

      {movieData &&
        movieData.movies.map((movie) => {
          return <h4>Movie Name: {movie.name}</h4>;
        })}

      <div>
        <input
          type="text"
          placeholder="search movie...."
          onChange={(event) => setSearchMovie(event.target.value)}
        />
        <button
          onClick={() => {
            fetchData({
              variables: {
                name: searchMovie,
              },
            });
          }}
        >
          Fetch Movie
        </button>
        <div>
          {searchMovieData && (
            <div>
              <h2>MovieName: {searchMovieData.movie.name}</h2>
              <h2>
                Year of Publication: {searchMovieData.movie.yearOfPublication}
              </h2>
            </div>
          )}
          {errorMovieLoading && <h2>Error while fetching the data....</h2>}
        </div>
      </div>
    </div>
  );
};

export default DisplayData;
