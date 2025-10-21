import React, { useState } from "react";

function HotelForm() {
  const [formData, setFormData] = useState({
    nom: "",
    email: "",
    prix: "",
    adresse: "",
    telephone: "",
    devise: "",
    photo: "", 
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Formulaire soumis :", formData);
  };

  return (
    <div  className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <form onSubmit={handleSubmit}>
         <div className="max-w-4xl mx-auto mt-10 p-6 bg-white rounded shadow  mb-10">
                <h2 className="text-2xl font-bold mb-6 text-center">CREER UN  NOUVEAU HOTEL</h2>
                 <div className="border-t-2 rounded-full border-[#aeaeb2]/70 w-full mb-8"></div>
                  <div className="grid grid-cols-2 gap-4 mb-4">
          <div>
            <label className="block text-sm font-medium mb-1">Nom de l'hotel</label>
                <input type="text" name="nom" value={formData.nom}  onChange={handleChange}  placeholder="CSP Marniane"  required  
                   className="w-full px-3 py-2 border border-gray-300 rounded"   />
          </div>

           <div>
              <label className="block text-sm font-medium mb-1">Adresse</label>
                 <input  type="text"  name="adresse" value={formData.adresse}  onChange={handleChange}  placeholder="Les iles du Saloum, MarLodj" required
                  className="w-full px-3 py-2 border border-gray-300 rounded"/>
          </div>
          
           <div className="grid grid-cols-2 gap-4 mb-4">

            <div>
              <label className="block text-sm font-medium mb-1">E-mail</label>
                <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="Ex:information@example.com"  required
                 className="w-full px-3 py-2 border border-gray-300 rounded"/>
          </div>
            
         
        </div>

          <div>
              <label className="block text-sm font-medium mb-1">Telephone</label>
                  <input type="tel" name="telephone" value={formData.telephone} onChange={handleChange} placeholder="77 880 25 34"  required 
                    className="w-full px-3 py-2 border border-gray-300 rounded"  />
          </div>

           <div>
              <label className="block text-sm font-medium mb-1">Prix par nuit</label>
              <input  type="number" name="prix" value={formData.prix} onChange={handleChange}  placeholder="25.000 XOF" required  className="w-full px-3 py-2 border border-gray-300 rounded"/>
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">Devise</label>
            <select  name="devise"  value={formData.devise} onChange={handleChange} required  className="w-full px-3 py-2 border border-gray-300 rounded"> 
                  <option value="">Choisir une devise</option>
                     <option value="EUR">EUR (€)</option>
                       <option value="USD">USD ($)</option>
                        <option value="XOF">XOF (CFA)</option>
                    <option value="GBP">GBP (£)</option>
             </select>
          </div>
        </div>

          <div className="mb-6">
                <label className="block text-sm font-medium mb-1">Ajouter une photo</label>
                       <div className="relative w-full">
                              <textarea  name="photo" rows={5} value={formData.photo}  onChange={handleChange} placeholder="Photo" className="w-full px-3 py-2 border border-gray-300 text-center rounded resize-y"></textarea>
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                      <i className="fa-regular fa-image text-3xl text-gray-300"></i>
            </div>
         </div>
       </div>


      <div className="text-right">
             <button  type="submit" className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600">Enregistrer </button>
       </div>
     </div>
</form>
</div>
   
  );
}

export default HotelForm;
