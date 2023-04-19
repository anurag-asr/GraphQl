
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
username:String!
nationality:Nationality = BRAZIL
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

enum Nationality {
CANADA
BRAZIL
INDIA
GERMANY
USA
}
`
module.exports={
    typeDefs
}

//HOW TO MUTATE THE DATA 


//Fragments Concept
// query GetAllUsers {
//     users {
//     ...GetUser
//     }
//   }
//   //How To Use Fragments:
//   fragment GetUser on User{
//     name
//     age
//   }

// Error Handling By Unions and Result Boxes

// What is Aliases and use of Aliases
// query{
//   product1:product(id:"gid://shopify/Product/4360166998038"){
//     title
//     description
//   }
//   product2:product(id:"gid://shopify/Product/4360167030806"){
//     title
//     description
//   }
// }
//The technique we used above is called Aliases else we only get the error in response