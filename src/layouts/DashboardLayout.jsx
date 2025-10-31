import { Outlet } from 'react-router-dom';
import Menu from '../components/Menu'; 

 function DashboardLayout() {
  return (
    <div className="flex">
      <Menu />
      <div className="flex-1 md:ps-25 ps-30">
        <Outlet />
      </div>
    </div>
  );
}

export default DashboardLayout


//  <Route path="/dashboard" element={<DashboardLayout />}>
