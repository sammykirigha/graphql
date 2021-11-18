const UserList = [
  {
    id: 1,
    name: "john",
    username: "John",
    age: 20,
    nationality: "KENYA",
    friends: [
      {
        id: 3,
        name: "Dorcis",
        username: "Dorcis",
        age: 24,
        nationality: "UGANDA",
      },
      {
        id: 4,
        name: "Edwin",
        username: "Edwin",
        age: 25,
        nationality: "RWANDA",
      },
    ],
  },
  {
    id: 2,
    name: "sammy",
    username: "sammy",
    age: 22,
    nationality: "TANZANIA",
  },
  {
    id: 3,
    name: "Dorcis",
    username: "Dorcis",
    age: 24,
    nationality: "UGANDA",
  },
  {
    id: 4,
    name: "Edwin",
    username: "Edwin",
    age: 25,
    nationality: "RWANDA",
    friends: [
      {
        id: 5,
        name: "Alex",
        username: "Alex",
        age: 26,
        nationality: "ETHIOPIA",
      },
    ],
  },
  {
    id: 5,
    name: "Alex",
    username: "Alex",
    age: 26,
    nationality: "ETHIOPIA",
  },
];

const MovieList = [
  {
    id: 1,
    name: "Avengers Endgame",
    yearOfPublication: 2019,
    isInTheaters: true,
  },
  {
    id: 2,
    name: "Interstellar",
    yearOfPublication: 2009,
    isInTheaters: true,
  },
  {
    id: 3,
    name: "SuperBad",
    yearOfPublication: 2007,
    isInTheaters: true,
  },
  {
    id: 4,
    name: "SamTec The Movie",
    yearOfPublication: 2021,
    isInTheaters: false,
  },
];

module.exports = { UserList, MovieList };
