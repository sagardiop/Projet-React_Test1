import { Outlet } from 'react-router-dom';
import Menu from '../components/Menu'; 

 function DashboardLayout() {
  return (
    <div className="flex">
      <Menu />
      <div className="flex-1 p-6">
        <Outlet />
      </div>
    </div>
  );
}

export default DashboardLayout
