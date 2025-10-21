import { Outlet } from 'react-router-dom';
import Menu from '../components/Menu'; 

function Even() {
  return (
    <div>
      <Menu />
      <Outlet /> 
    </div>
  );
}

export default Even;
