
const {gql} = require("apollo-server");

const typeDefs = gql`
type User {
id:ID!
name:String!
age:Int!
favouriteMovies:[Movie!]
friends:[User!]
}

type Movie {
id:ID!
name:String!
yearOfPublications:Int!
isInTheaters:Boolean
}

type Query {
users:[User!]!
movies:[Movie!]!
movie(name:String!):Movie!
}

input createUserInput {
name:String!
age:Int!
}

input updateUserInput {
id:ID!
newUsername:String!
}

input DeleteUserInput{
id:ID!}

type Mutation {
createUser(input:createUserInput!):User
updateUsername(input:updateUserInput!):User
deleteUser(input:DeleteUserInput!):User
}
`
module.exports={
    typeDefs
}

//HOW TO MUTATE THE DATA 