import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const Login = () => {
  const [formulaire, setFormulaire] = useState({
    email: "",
    password: "",
    term: false,
  });

  const [message, setMessage] = useState("");
  const [messagePartiel, setMessagePartiel] = useState({});
  const [erreurBoleen, setErreurBoleen] = useState(false);

  const navigate = useNavigate();

  // 🔹 Gère la saisie des champs du formulaire
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormulaire((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };
  
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post( "http://127.0.0.1:8000/api/login", {
        email: formulaire.email,
        password: formulaire.password,
      });

       console.log("✅ Réponse API :", response.data);

      setMessage("Connexion réussie !");
      setErreurBoleen(true);
      setMessagePartiel({});

      // 🔹 Stocker le token pour les futures requêtes
      if (response.data.data?.token) {
        localStorage.setItem("token", response.data.data.token);
      }

      // 🔹 Redirection vers le tableau de bord
      setTimeout(() => {
        navigate("/dashboard");
      }, 1000);
    } catch (error) {
      console.error("❌ Erreur :", error);

      if (error.response) {
        setMessage(error.response.data.message || "Erreur de connexion.");
        setMessagePartiel(error.response.data.errors || {});
      } else {
        setMessage("Erreur réseau. Vérifie ta connexion.");
      }
    }
  };

   return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
  <div className="flex flex-col items-center mb-8">
    <img src="/image1/Link → SVG.svg" alt="profil" className="w-32 h-32 object-contain" />
    <p className="mt-4 text-xl font-semibold text-gray-700">RED PRODUCT</p>
  </div>
      <form onSubmit={handleSubmit} className="bg-white p-6 sm:p-8 rounded-lg shadow-md w-full max-w-sm" >
        <h2 className="text-xl sm:text-2xl font-bold mb-6 text-center">Connectez-vous en tant que Admin</h2>
        {message && (
          <div
            className={`mb-4 text-center text-sm ${
              erreurBoleen ? 'text-green-600' : 'text-red-600'
            }`}
          >
            {message}
          </div>
        )}

        <div className="mb-6">
          <label htmlFor="email" className="block text-gray-700 mb-1">E mail</label>
          <input type="text" name="email" id="email" value={formulaire.email} onChange={handleChange}
            className="w-full border-b-2 border-gray-300 focus:outline-none focus:border-blue-500 py-2 px-1 bg-transparent"
            placeholder="Ex: admin@example.com"
          />
          {messagePartiel.email && (
            <span className="text-red-500 text-sm">{messagePartiel.email}</span>
          )}
        </div>

        <div className="mb-6">
          <label htmlFor="password" className="block text-gray-700 mb-1">password </label>
          <input type="password" name="motdepasse" id="motdepasse" value={formulaire.password}onChange={handleChange}
            className="w-full border-b-2 border-gray-300 focus:outline-none focus:border-blue-500 py-2 px-1 bg-transparent"
            placeholder="********"
          />
          {messagePartiel.password && (
            <span className="text-red-500 text-sm">{messagePartiel.password}</span>
          )}
        </div>

        <div className="flex flex-col items-start mb-6">
          <div className="flex items-center gap-2">
            <input type="checkbox"  name="term"  id="term"  className="w-5 h-5 border-[#8692A6] rounded focus:ring-blue-500"
              checked={formulaire.term}  onChange={(e) => setFormulaire({ ...formulaire, term: e.target.checked }) 
              }
            />
            <label htmlFor="term">Gardez-moi connecter</label>
          </div>
          {messagePartiel.term && (
            <span className="text-red-500 text-sm">{messagePartiel.term}</span>
          )}
        </div>

         <button type="submit" className="w-full bg-green-500 hover:bg-green-600 text-white py-2 px-4 rounded-md transition duration-300">
          Se connecter
        </button>

        <div className="mt-4 text-sm text-center">
          <Link to="/forgotpass" className="text-green-500 hover:underline">
            Mot de passe oublie ?
          </Link>
        </div>

        {/* <button type="submit" className="w-full bg-green-500 hover:bg-green-600 text-white py-2 px-4 rounded-md transition duration-300">
          Se connecter
        </button> */}

        <p className="text-sm text-center mt-4">
          Pas encore de compte ?{' '}
          <Link to="/register" className="text-green-500 hover:underline">
            S'inscrire
          </Link>
        </p>
      </form>
    </div>
  );
};

export default Login;