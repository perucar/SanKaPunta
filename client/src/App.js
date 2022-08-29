import { BrowserRouter, Routes, Route, Outlet, Router } from 'react-router-dom';
import './App.css';
import Category from './component/admin/Category';
import Dashboard from './component/admin/Dashboard';
import ProvinceInfo from './component/admin/ProvinceInfo';
import Provinces from './component/admin/Provinces';
import Regions from './component/admin/Regions';
import LandingPage from'./component/landing/LandingPage'
import Profile from'./component/profile/Profile'
import { ApolloClient, InMemoryCache, ApolloProvider, HttpLink, from } from '@apollo/client';
import { onError } from '@apollo/client/link/error';

function App() {

  const errorLink = onError(({ graphqlErrors, networkError }) => {
    if (graphqlErrors) {
      graphqlErrors.map(({ message, location, path }) => {
        alert(`Graphql error ${message}`);
      });
    }
  });
  
  
  const link = from([
    errorLink,
    new HttpLink({ uri: 'http://localhost:4000/'})
  ]);
  
  const client = new ApolloClient({
    cache: new InMemoryCache(),
    link: link
  })

  return (
    <ApolloProvider client={client}>

      <BrowserRouter>
      <Routes>
      <Route path="/admin" element={<Dashboard />} >
        <Route path="regions" element={<Regions />} />
        <Route path="provinces" element={<Provinces />} />
        <Route path="province-info" element={<ProvinceInfo />} />
        <Route path="categories" element={<Category />} />
        
      </Route>
        <Route path="/" element={<LandingPage />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
      
      </BrowserRouter>
    </ApolloProvider>
    );
}

export default App;
