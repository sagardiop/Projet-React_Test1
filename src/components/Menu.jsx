import { Link } from 'react-router-dom';

 function Menu() {
  return (
    <div className="w-64 bg-gray-800 text-white h-screen p-4">
      <ul className="space-y-4">
           <li><Link to="/dashboard">Dashboard</Link></li>
           <li><Link to="/hotel">Liste des hotels</Link></li>
           <li><Link to="/hotelform">Ajouter un hotel</Link></li>
      </ul>
    </div>
  );
}

export default Menu

