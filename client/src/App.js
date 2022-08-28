import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Category from './component/admin/Category';
import Dashboard from './component/admin/Dashboard';
import ProvinceInfo from './component/admin/ProvinceInfo';
import Provinces from './component/admin/Provinces';
import Regions from './component/admin/Regions';
import LandingPage from'./component/landing/LandingPage'
import Profile from'./component/profile/Profile'
function App() {
  return (
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
  );
}

export default App;
