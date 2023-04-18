 const userList = [
      {
        id:1,
        name:"Anurag",
        username:"anurag-asr",
        age:19,
        nationality:"CANADA",
        friend:[
          {
            id:2,
            name:"Eslok",
            username:"eslok-asr",
            age:42,
            nationality:"BRAZIL",
           },
           {
            id:3,
            name:"Trival",
            username:"trival-asr",
            age:29,
            nationality:"GERMANY",
           }
        ]
       },
       {
        id:2,
        name:"Eslok",
        username:"eslok-asr",
        age:42,
        nationality:"BRAZIL",
        friend:[
          {
            id:4,
            name:"Tannu",
            username:"Tannu-asr",
            age:32,
            nationality:"INDIA",
          },
          {
            id:5,
            name:"Ashoke",
            username:"ashok-asr",
            age:22,
            nationality:"USA",
           }        
        ]
       },
       {
        id:3,
        name:"Trival",
        username:"trival-asr",
        age:29,
        nationality:"GERMANY",
       },
       {
        id:4,
        name:"Tannu",
        username:"Tannu-asr",
        age:32,
        nationality:"INDIA",
       },
       {
        id:5,
        name:"Ashoke",
        username:"ashok-asr",
        age:22,
        nationality:"USA",
       },
       {
        id:6,
        name:"Manish",
        username:"manish-asr",
        age:23,
        nationality:"INDIA",
       },
       {
        id:7,
        name:"Tenure",
        username:"temnure-asr",
        age:32,
        nationality:"GERMANY",
       }   
]

const MovieList = [
  {
    id:1,
    name : "Avengers Endgame",
    yearOfPublications: 2019,
    isInTheaters: true
  },
  {
    id:2,
    name : "InterSteller",
    yearOfPublications: 2012,
    isInTheaters: true
  },
  {
    id:3,
    name : "SuperBad",
    yearOfPublications: 2015,
    isInTheaters: true
  }, 
  {
    id:4,
    name : "Unicorn",
    yearOfPublications: 2016,
    isInTheaters: true
  }
]

module.exports={
  userList,MovieList
}