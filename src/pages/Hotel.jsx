import React, { Component } from 'react';

class Hotel extends Component {
  handleCreateHotel = () => {
    console.log("Creer un nouveau hotel clique !");
   
  };

  
  render() {
    return (
      <div  className="p-6 bg-gray-100 min-h-screen">
        <div className="shadow-lg bg-white flex flex-col gap-3 p-6 rounded-lg w-full mb-15">
           <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6 gap-4">
                    <h1 className="text-2xl font-bold text-gray-800">Liste des Hotels</h1>
                     <div className="flex items-center space-x-2">
                       <input type="text" placeholder="Rechercher..." className="w-full md:w-96 p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-yellow-400"/>
                               <div className="relative inline-block">
                                       <i className="fa-regular fa-bell text-2xl"></i>
                         <span className="absolute -top-1 -right-1.5 bg-yellow-400 text-black text-[10px] font-bold rounded-full h-4 w-4 flex items-center justify-center">3 </span>
                    </div>
                          <div className="w-14 h-14 p-1 rounded-full overflow-hidden flex-shrink-0">
                      <img  src="/image1/Picture.png" alt=""  className="w-full h-full object-cover rounded-full"/>
                   </div>
                    <i class="fa-solid fa-right-to-bracket" onClick={'index'}></i>
               </div>
          </div>

          <div className="border-t-2 rounded-full border-[#aeaeb2]/70 w-full"></div>
     <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6 gap-4">
            <h1 className="text-2xl font-bold text-gray-800">Hotels</h1>
            <button type="button" onClick={this.handleCreateHotel} className="px-4 py-2 bg-white text-black border border-gray-300 rounded hover:bg-gray-100" >+ Creer un nouveau hotel</button>
          
          </div>
        </div>
  
      <div className="grid grid-cols-4 gap-4">
              <div className="md:py-5 pb-11 pt-5">
           <img src="/image/image (1).png" alt="Hotel 1" className="w-full h-auto rounded shadow" />
        <div className="bg-white p-4 rounded shadow ">
      <h2 className="text-l font-bold text-red-700 mb-2">Boulevard Martin Luther King Dakar, 11 500 </h2>
      <h3 className="text-black text-lg font-semibold">Hotel Terrou-Bi</h3>
      <h4 className="text-gray-600 text-base">25.000 XOF par nuit</h4>
    </div>
  </div>



   <div className="md:py-5 pb-11 pt-5">
          <img src="/image/image (5).png" alt="Hotel 5" className="w-full h-auto rounded shadow" />
           <div className="bg-white p-4 rounded shadow ">
          <h2 className="text-l font-bold text-red-700 mb-8">Rte des Almadies,Dakar</h2>
      <h3 className="text-black text-lg font-semibold">King Fahd  Place</h3>
      <h4 className="text-gray-600 text-base">20.000 XOF par nuit</h4>
  </div>
  </div>

   <div className="md:py-5 pb-11 pt-5">
          <img src="/image/image (3).png" alt="Hotel 3" className="w-full h-auto rounded shadow" />
           <div className="bg-white p-4 rounded shadow ">
           <h2 className="text-l font-bold text-red-700 mb-8">Rte de la Corniche O,Dakar 16868</h2>
      <h3 className="text-black text-lg font-semibold">Radisson Blue Hotel</h3>
      <h4 className="text-gray-600 text-base">22.000 XOF par nuit</h4>
         </div>
         </div>
    <div className="md:py-5 pb-11 pt-5">
        <img src="/image/image (2).png" alt="Hotel 2" className="w-full h-auto rounded shadow" />
          <div className="bg-white p-4 rounded shadow ">
          <h2 className="text-l font-bold text-red-700 mb-2">Place de l'independance, 10 Rue PL 29,Dakar</h2>
      <h3 className="text-black text-lg font-semibold">Pullman Dakar Teranga</h3>
      <h4 className="text-gray-600 text-base">30.000 XOF par nuit</h4>
      </div>
      </div>

       <div className="md:py-5 pb-11 pt-5">  
                 <img src="/image/image (6).png" alt="Hotel 6" className="w-full h-auto rounded shadow" />
                  <div className="bg-white p-4 rounded shadow ">
                       <h2 className="text-l font-bold text-red-700 mb-6">Lac Rose, Dakar</h2>
      <h3 className="text-black text-lg font-semibold">Hotel Lac Rose</h3>
      <h4 className="text-gray-600 text-base">25.000 XOF par nuit</h4>
           </div>
           </div> 
      
         <div className="md:py-5 pb-11 pt-5">
          <img src="/image/image (4).png" alt="Hotel 4" className="w-full h-auto rounded shadow" />
           <div className="bg-white p-4 rounded shadow ">
                  <h2 className="text-lg font-bold text-red-700 mb-6">Mbour, Senegal</h2>
      <h3 className="text-black text-lg font-semibold">Hotel Saly</h3>
      <h4 className="text-gray-600 text-base">20.000 XOF par nuit</h4>
         </div>
         </div>
         
          <div className="md:py-5 pb-11 pt-5">  
                   <img src="/image/image (7).png" alt="Hotel 7" className="w-full h-auto rounded shadow" />
                    <div className="bg-white p-4 rounded shadow ">
                   <h2 className="text-l font-bold text-red-700 mb-6">BP64, Saly 23000</h2>
      <h3 className="text-black text-lg font-semibold">Palm Beach Resort & Spa</h3>
      <h4 className="text-gray-600 text-base">22.000 XOF par nuit</h4>
         </div>
         </div>
         <div className="md:py-5 pb-11 pt-5">   
                 <img src="/image/image (9).png" alt="Hotel 8" className="w-full h-auto rounded shadow" />
                  <div className="bg-white p-4 rounded shadow ">
                 <h2 className="text-l font-bold text-red-700 mb-2x">Place de l'independance, 10 Rue PL 29,Dakar</h2>
                       <h3 className="text-black text-lg font-semibold">Pullman Dakar Teranga</h3>
                    <h4 className="text-gray-600 text-base">30.000 XOF par nuit</h4>
             </div>
             </div>
        </div>
      </div>
    );
  }
}

export default Hotel;
