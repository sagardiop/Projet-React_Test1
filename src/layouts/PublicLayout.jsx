import { Outlet } from 'react-router-dom';

 function PublicLayout() {
  return (
    <div className="p-6">
      <Outlet />
    </div>
  );
}

export default PublicLayout
