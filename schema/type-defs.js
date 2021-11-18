const { gql } = require("apollo-server");

const typeDefs = gql`
  type User {
    id: ID!
    name: String!
    username: String!
    age: Int!
    nationality: Nationality!
    friends: [User]
    favoriteMovies: [Movie]
  }

  type Movie {
    id: ID!
    name: String!
    yearOfPublication: Int!
    isInTheaters: Boolean!
  }

  type Query {
    users: [User!]!
    user(id: ID!): User!
    movies: [Movie!]!
    movie(name: String!): Movie!
  }

  input CreateUserInput {
    name: String!
    username: String!
    age: Int!
    nationality: Nationality = KENYA
  }

  input UpdateUserNameInput {
    id: ID!
    newUserName: String!
  }

  input DeleteUserInput {
    id: ID!
  }

  type Mutation {
    createUser(input: CreateUserInput!): User
    updateUserName(input: UpdateUserNameInput!): User
    deleteUser(input: DeleteUserInput!): User
  }

  enum Nationality {
    KENYA
    TANZANIA
    UGANDA
    ETHIOPIA
    RWANDA
  }
`;

module.exports = { typeDefs };
