import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function Hotel() {
  const naviguer = useNavigate();
  const [hotels, setHotels] = useState([]);

  useEffect(() => {
    const fetchHotels = async () => {
      try {
        const res = await axios.get("http://localhost:8000/api/hotels");
        setHotels(res.data); 
      } catch (err) {
        console.error("Erreur lors de la récupération des hôtels :", err);
      }
    };

    fetchHotels();
  }, []);

  const handleCreateHotel = () => {
    naviguer("/create-hotel");
  };

  return (
    <div className="p-4 sm:p-6 bg-gray-100 min-h-screen">
      <div className="shadow-lg bg-white flex flex-col gap-3 p-6 rounded-lg w-full mb-10">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6 gap-4">
          <h1 className="text-2xl font-bold text-gray-800">Liste des Hotels</h1>
          <div className="flex flex-wrap items-center gap-3 w-full md:w-auto">
            <input
              type="text"
              placeholder="Rechercher..."
              className="flex-1 min-w-[200px] md:w-96 p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-yellow-400"
            />
            <div className="relative inline-block">
              <i className="fa-regular fa-bell text-2xl"></i>
              <span className="absolute -top-1 -right-1.5 bg-yellow-400 text-black text-[10px] font-bold rounded-full h-4 w-4 flex items-center justify-center">
                3
              </span>
            </div>
            <div className="w-14 h-14 p-1 rounded-full overflow-hidden">
              <img
                src="/image1/Picture.png"
                alt="profil"
                className="w-full h-full object-cover rounded-full"
              />
            </div>
            <i
              className="fa-solid fa-right-to-bracket text-xl cursor-pointer hover:text-yellow-500"
              onClick={() => naviguer("/")}
            ></i>
          </div>
        </div>

        <div className="border-t-2 rounded-full border-[#aeaeb2]/70 w-full mb-8"></div>

        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6 gap-4">
          <h1 className="text-xl font-bold text-gray-800">Hotels</h1>
          <button  type="button"  onClick={handleCreateHotel}  className="px-4 py-2 bg-white text-black border border-gray-300 rounded hover:bg-gray-100"
          > + Créer un nouveau hotel
          </button>
        </div>

      
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {hotels.map((hotel) => (
            <div key={hotel.id} className="bg-white p-4 rounded shadow">
              {hotel.photo && (
                <img  src={`http://localhost:8000/storage/${hotel.photo}`}  alt={hotel.nom}
                  className="w-full h-48 object-cover mb-2 rounded"
                />
              )}
              <h2 className="text-lg font-bold">{hotel.nom}</h2>
              <p>{hotel.adresse}</p>
              <p>
                {hotel.prix} {hotel.devise}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Hotel;





      {/* <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
       
        <div className="bg-white rounded shadow overflow-hidden">
          <img src="/image/image (1).png" alt="Hotel 1" className="w-full h-48 object-cover" />
          <div className="p-4">
            <h2 className="text-sm font-bold text-red-700 mb-2">Boulevard Martin Luther King Dakar, 11 500</h2>
            <h3 className="text-black text-lg font-semibold">Hotel Terrou-Bi</h3>
            <h4 className="text-gray-600 text-base">25.000 XOF par nuit</h4>
          </div>
        </div>

      
        <div className="bg-white rounded shadow overflow-hidden">
          <img src="/image/image (5).png" alt="Hotel 2" className="w-full h-48 object-cover" />
          <div className="p-4">
            <h2 className="text-sm font-bold text-red-700 mb-2">Rte des Almadies, Dakar</h2>
            <h3 className="text-black text-lg font-semibold">King Fahd Place</h3>
            <h4 className="text-gray-600 text-base">20.000 XOF par nuit</h4>
          </div>
        </div>

       
        <div className="bg-white rounded shadow overflow-hidden">
          <img src="/image/image (3).png" alt="Hotel 3" className="w-full h-48 object-cover" />
          <div className="p-4">
            <h2 className="text-sm font-bold text-red-700 mb-2">Rte de la Corniche O, Dakar 16868</h2>
            <h3 className="text-black text-lg font-semibold">Radisson Blu Hotel</h3>
            <h4 className="text-gray-600 text-base">22.000 XOF par nuit</h4>
          </div>
        </div>

       
        <div className="bg-white rounded shadow overflow-hidden">
          <img src="/image/image (2).png" alt="Hotel 4" className="w-full h-48 object-cover" />
          <div className="p-4">
            <h2 className="text-sm font-bold text-red-700 mb-2">Place de l'independance, 10 Rue PL 29, Dakar</h2>
            <h3 className="text-black text-lg font-semibold">Pullman Dakar Teranga</h3>
            <h4 className="text-gray-600 text-base">30.000 XOF par nuit</h4>
          </div>
        </div>

      
        <div className="bg-white rounded shadow overflow-hidden">
          <img src="/image/image (6).png" alt="Hotel 5" className="w-full h-48 object-cover" />
          <div className="p-4">
            <h2 className="text-sm font-bold text-red-700 mb-2">Lac Rose, Dakar</h2>
            <h3 className="text-black text-lg font-semibold">Hotel Lac Rose</h3>
            <h4 className="text-gray-600 text-base">25.000 XOF par nuit</h4>
          </div>
        </div>

       
        <div className="bg-white rounded shadow overflow-hidden">
          <img src="/image/image (4).png" alt="Hotel 6" className="w-full h-48 object-cover" />
          <div className="p-4">
            <h2 className="text-sm font-bold text-red-700 mb-2">Mbour, Sénégal</h2>
            <h3 className="text-black text-lg font-semibold">Hotel Saly</h3>
            <h4 className="text-gray-600 text-base">20.000 XOF par nuit</h4>
          </div>
        </div>

       
        <div className="bg-white rounded shadow overflow-hidden">
          <img src="/image/image (7).png" alt="Hotel 7" className="w-full h-48 object-cover" />
          <div className="p-4">
            <h2 className="text-sm font-bold text-red-700 mb-2">BP64, Saly 23000</h2>
            <h3 className="text-black text-lg font-semibold">Palm Beach Resort & Spa</h3>
            <h4 className="text-gray-600 text-base">22.000 XOF par nuit</h4>
          </div>
        </div>

       
        <div className="bg-white rounded shadow overflow-hidden">
          <img src="/image/image (9).png" alt="Hotel 8" className="w-full h-48 object-cover" />
          <div className="p-4">
            <h2 className="text-sm font-bold text-red-700 mb-2">Place de l'independance, 10 Rue PL 29, Dakar</h2>
            <h3 className="text-black text-lg font-semibold">Pullman Dakar Teranga</h3>
            <h4 className="text-gray-600 text-base">30.000 XOF par nuit</h4>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hotel; */}
