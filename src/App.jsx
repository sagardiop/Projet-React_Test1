import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';

import Login from './pages/Login';
import Register from './pages/Register';
import ForgotPassword from './ForgotPassworld';

import Dashboard from './pages/Dashboard';
import Hotel from './pages/Hotel';
import HotelForm from './pages/HotelForm';

import DashboardLayout from './layouts/DashboardLayout';
import PublicLayout from './layouts/PublicLayout';

function App() {
  return (
    <Router>
      <Routes>
      
        <Route element={<PublicLayout />}>
          <Route path="/" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/forgotpass" element={<ForgotPassword />} />
        </Route>

       
        <Route element={<DashboardLayout />}>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/hotel" element={<Hotel />} />
          <Route path="/hotelform" element={<HotelForm />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
