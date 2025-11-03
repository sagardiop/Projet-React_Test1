import { Link } from 'react-router-dom';

function Menu() {
  return (
    <div className="fixed top-0 left-0 w-30 h-screen bg-gray-800 text-white p-4 flex flex-col justify-between">
      
     
      <div>
        <div className="mb-6">
          <img src="/image1/Link → SVG.svg" alt="Logo profil" className="mb-2" />
         <p className="font-semibold text-xs">RED PRODUCT</p>

          <p className="text-gray-400 uppercase text-xs mt-1">Principal</p>
        </div>

        <ul className="space-y-6">
  <li className="flex flex-col items-start space-y-2">
    <i className="fa-solid fa-dice"></i>
    <Link to="/dashboard" className="hover:underline text-xs">Dashboard</Link>
  </li>

  <li className="flex flex-col items-start space-y-2">
    <i className="fa-solid fa-hotel"></i>
    <Link to="/dashboard/hotel" className="hover:underline text-xs">Hotels</Link>
  </li>

  {/* <li className="flex flex-col items-start space-y-2">
    <i className="fa-solid fa-plus"></i>
    <Link to="/dashboard/hotelform" className="hover:underline text-xs">Ajouter un hotel</Link>
  </li> */}
</ul>
      </div>

     
      <div className="mt-10">
        <div className="border-t-2 border-[#aeaeb2]/70 rounded-full mb-4"></div>

        <div className="flex items-center space-x-3">
          <div className="w-14 h-14 p-1 rounded-full overflow-hidden -mb-1">
            <img src="/image1/Picture.png" alt="Profil" className="w-full h-full object-cover rounded-full" />
          </div>
          <h5>ligne</h5>
        </div>
      </div>

    </div>
  );
}

export default Menu;






