const {userList, MovieList} = require("../FakeData");
const _ = require("lodash");

const resolvers = {
 Query:{
    users() {
        return userList
    },
    movies(){
        return MovieList
    },
    movie : (parents, args, context, info) => {
        console.log(context,parents) 
        const {name} =  args;
        const movie = _.find(MovieList,{name:name});
        return movie;      
      } 
 },
 User:{
    favouriteMovies:() => {
    return _.filter(
      MovieList,(movie) => 
        movie.yearOfPublications >=2000 && movie.yearOfPublications<=2018)
   }},
 User:{
    friends:()=>{
        return userList
    }
 },

 // MUTATION STARTS FROM HERE

  Mutation: {
    createUser : (parents,args) => {
        const user = args.input;
        const lastId = userList[userList.length-1].id;
        user.id = lastId + 1;
        userList.push(user);
        return user
    },
    updateUsername : (parents,args) => {
        const {id, newUsername} = args.input;
        let userUpdated;
        userList.forEach((user)=>{
            if(user.id === Number(id)){
                user.name = newUsername;
                userUpdated = user
            }
        });
        return userUpdated;
    },
    deleteUser : (parents, args) => {
        const id = args.id;
        _.remove(userList,(user) => user.id === Number(id))
        return null
     }
  } 
}

module.exports = { resolvers }