import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';

import Login from './pages/Login';
import Register from './pages/Register';
import Dashboard from './pages/Dashboard';
import Hotel from './pages/Hotel';
import HotelForm from './pages/HotelForm';

import DashboardLayout from './layouts/DashboardLayout';
import PublicLayout from './layouts/PublicLayout';
import ForgotPassword from './pages/ForgotPassword';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<PublicLayout />}>
          <Route index element={<Login />} />
          <Route path="register" element={<Register />} />
          <Route path="forgotpass" element={<ForgotPassword />} />
        </Route>

        <Route path="/dashboard" element={<DashboardLayout />}>
          <Route index element={<Dashboard />} />
          <Route path="hotel" element={<Hotel />} />
          <Route path="hotelform" element={<HotelForm />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;