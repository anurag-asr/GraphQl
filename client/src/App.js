
import './App.css';
import { ApolloClient, InMemoryCache, ApolloProvider, useQuery } from '@apollo/client';


function App() {
  const client = new ApolloClient({
    cache:new InMemoryCache(),
    uri:"https://tmdb-server-dev.logicwind.co/graphql"
  });
  return (
    <ApolloProvider client={client} className="App">
       <div className='App'>
        hello welcome pagess
       </div>
    </ApolloProvider>
  );
}

export default App;
