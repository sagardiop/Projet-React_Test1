import React from 'react';
import { useNavigate } from 'react-router';

const Dashboard = () => {
  const naviguer = useNavigate();

  return (
    <div className=" sm:p-6 bg-gray-100 min-h-screen ">
      <div className="shadow-lg bg-white flex flex-col gap-4 p-6 rounded-lg w-full mb-10">
       
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
          <h1 className="text-2xl font-bold text-gray-800">Dashboard</h1>

          <div className="flex flex-wrap items-center gap-3 w-full md:w-auto">
            <input  type="text" placeholder="Rechercher..."
              className="flex-1 min-w-[200px] md:w-96 p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-yellow-400"
            />
            <div className="relative inline-block">
              <i className="fa-regular fa-bell text-2xl"></i>
              <span className="absolute -top-1 -right-1.5 bg-yellow-400 text-black text-[10px] font-bold rounded-full h-4 w-4 flex items-center justify-center">3</span>
            </div>
            <div className="w-14 h-14 p-1 rounded-full overflow-hidden">
              <img src="/image1/Picture.png" alt="profil" className="w-full h-full object-cover rounded-full" />
            </div>

            <i
              className="fa-solid fa-right-to-bracket text-xl cursor-pointer hover:text-yellow-500 transition"
              onClick={() => {
                naviguer('/');
              }}
              title="Connexion"
            ></i>
          </div>
        </div>

        <div className="border-t-2 rounded-full border-[#aeaeb2]/70 w-full"></div>

        <div>
          <h2 className="text-xl font-bold text-gray-800">Bienvenue sur RDE Product</h2>
          <p className="text-base text-[#242565] mt-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </div>
      </div>
     <div className="flex flex-col md:flex-row gap-6 mb-6">
        <div className="shadow-lg bg-white flex items-center gap-3 p-3 rounded-lg w-full md:w-1/3">
          <div className="flex items-center justify-center bg-purple-500 rounded-full w-12 h-12"><i className="fa-regular fa-envelope-open text-white text-lg"></i>

          </div>

          <div>
            <h3 className="font-bold text-gray-700 text-[0.9em]">125 Formulaire</h3>
            <p className="text-gray-700">Je ne sais pas quoi mettre</p>
          </div>
        </div>

        <div className="shadow-lg bg-white flex items-center gap-3 p-4 rounded-lg w-full md:w-1/3">
          <div className="flex items-center justify-center bg-green-500 rounded-full w-12 h-12">
            <i className="fa-solid fa-p text-white text-lg"></i>
          </div>

          <div>
            <h3 className="font-bold text-gray-700 text-[0.9em]">40 Messages</h3>
            <p className="text-gray-700">Je ne sais pas quoi mettre</p>
          </div>
        </div>

        <div className="shadow-lg bg-white flex items-center gap-3 p-4 rounded-lg w-full md:w-1/3">
          <div className="flex items-center justify-center bg-yellow-300 rounded-full w-12 h-12"><i className="fa-solid fa-users text-white text-xl"></i></div>
          <div>
            <h3 className="font-bold text-gray-700 text-[0.9em]">600 Utilisateur</h3>
            <p className="text-gray-700">Je ne sais pas quoi mettre</p>
          </div>
        </div>
      </div>


      <div className="flex flex-col md:flex-row gap-6">
        <div className="shadow-lg bg-white flex items-center gap-3 p-4 rounded-lg w-full md:w-1/3">
          <div className="flex items-center justify-center bg-red-500 rounded-full w-12 h-12"><i className="fa-regular fa-envelope-open text-white text-lg"></i></div>
          <div>
            <h3 className="font-bold text-gray-700 text-[0.9em]">25 E-mail</h3>
            <p className="text-gray-700">Je ne sais pas quoi mettre</p>
          </div>
        </div>

        <div className="shadow-lg bg-white flex items-center gap-3 p-4 rounded-lg w-full md:w-1/3">
          <div className="flex items-center justify-center bg-indigo-500 rounded-full w-12 h-12"><i className="fa-solid fa-p text-white text-lg"></i></div>
          <div>
            <h3 className="font-bold text-gray-700 text-[0.9em]">40 Hotel</h3>
            <p className="text-gray-700">Je ne sais pas quoi mettre</p>
          </div>
        </div>

        <div className="shadow-lg bg-white flex items-center gap-3 p-4 rounded-lg w-full md:w-1/3">
          <div className="flex items-center justify-center bg-blue-500 rounded-full w-12 h-12"><i className="fa-solid fa-users text-white text-lg"></i></div>
          <div>
            <h3 className="font-bold text-gray-700 text-[0.9em]">02 Entite</h3>
            <p className="text-gray-700">Je ne sais pas quoi mettre</p>
          </div>
        </div>
      </div>
    </div>

  );
};

export default Dashboard ;