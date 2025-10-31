import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function HotelForm() {
  const naviguer = useNavigate();
  const [formData, setFormData] = useState({
    nom: "",
    email: "",
    prix: "",
    adresse: "",
    telephone: "",
    devise: "",
    photo: null,
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === "photo") {
      setFormData((prev) => ({ ...prev, photo: files[0] }));
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = new FormData();
    for (let key in formData) {
      if (formData[key] !== "") data.append(key, formData[key]);
    }

    try {
      const res = await axios("http://localhost:8000/api/hotels", {
        method: "POST",
        body: data,
      });

      const result = await res.json();
      console.log(result);
      alert("Hotel créé avec succès !");
      naviguer("/hotels"); 
    } catch (err) {
      console.error(err);
      alert("Erreur lors de la création de l'hôtel.");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-4xl bg-white rounded shadow p-6"
      >
        <h2 className="text-2xl font-bold mb-6 text-center">
          CRÉER UN NOUVEAU HOTEL
        </h2>
        <div className="border-t-2 rounded-full border-[#aeaeb2]/70 w-full mb-8"></div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
          <div>
            <label className="block text-sm font-medium mb-1">Nom de l'hotel</label>
            <input  type="text"  name="nom"  value={formData.nom} onChange={handleChange} placeholder="CSP Marniane" required 
              className="w-full px-3 py-2 border border-gray-300 rounded"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">Adresse</label>
            <input  type="text"   name="adresse" value={formData.adresse}  onChange={handleChange} placeholder="Les îles du Saloum, Mar Lodj"
              required  className="w-full px-3 py-2 border border-gray-300 rounded"
             
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">E-mail</label>
            <input type="email"  name="email" value={formData.email}  onChange={handleChange}  placeholder="Ex : information@example.com"
              required className="w-full px-3 py-2 border border-gray-300 rounded"
              
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">Téléphone</label>
            <input  type="tel"  name="telephone"  value={formData.telephone}   onChange={handleChange}  placeholder="77 880 25 34"
              required  className="w-full px-3 py-2 border border-gray-300 rounded"
             
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">Prix par nuit</label>
            <input  type="number"  name="prix"  value={formData.prix} onChange={handleChange}   placeholder="25 000"
              required  className="w-full px-3 py-2 border border-gray-300 rounded"
              
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">Devise</label>
            <select  name="devise"  value={formData.devise}  onChange={handleChange} required className="w-full px-3 py-2 border border-gray-300 rounded">
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
          <input  type="file"  name="photo"  accept="image/*"  onChange={handleChange}  className="w-full px-3 py-2 border border-gray-300 rounded"/>
           
          {formData.photo && (
            <img src={URL.createObjectURL(formData.photo)} alt="Aperçu" className="w-32 h-32 object-cover rounded mt-2" />
              )}
        </div>

        <div className="text-right">
          <button  type="submit" className="px-6 py-2 bg-green-500 text-white rounded hover:bg-green-600 transition"
             >Enregistrer
          </button>
        </div>
      </form>
    </div>
  );
}

export default HotelForm;
