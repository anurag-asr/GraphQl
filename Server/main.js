const {ApolloServer} = require("apollo-server");
const {resolvers} = require("./Schema/Resolver")
const {typeDefs} = require("./Schema/type-defs")
const server = new ApolloServer({typeDefs,resolvers,context:() => {
  return {name:"Pedro"}
}
});

server.listen().then(({url})=>{
    console.log(`YOUR APP IS RUNNING ON PORT ${url}`)
});