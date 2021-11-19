import React from "react";
import { useQuery, gql } from "@apollo/client";

const QUERY_USERS_DATA = gql`
  query getAllUsers {
    users {
      id
      name
      username
      age
    }
  }
`;

const DisplayData = () => {
  const { data, loading, error } = useQuery(QUERY_USERS_DATA);
  if (loading) {
    return <h2>Data Loading......</h2>;
  }

  if (error) {
    console.log(error.message);
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
            </div>
          );
        })}
    </div>
  );
};

export default DisplayData;
