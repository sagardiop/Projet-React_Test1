import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { register } from "../Api/axios/VariableAxios";

const Register = () => {
  const [formulaire, setFormulaire] = useState({
    name: "",
    email: "",
    password: "",
    term: false,
  });

  const [message, setMessage] = useState("");
  const [messagePartiel, setMessagePartiel] = useState({});
  const [erreurBoleen, setErreurBoleen] = useState(false);
  const naviguer = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormulaire((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // console.log("🔍 Données envoyées :", formulaire);

      const response = await axios.post(register, {
        name: formulaire.name,
        email: formulaire.email,
        password: formulaire.password,
        term: formulaire.term,
      });
      naviguer("/dashboard");
      // console.log(" Réponse API :", response.data);

      const { success, message, data } = response.data;
      localStorage.setItem('user', JSON.stringify(data.user))

      setMessage("Inscription réussie !");
      setErreurBoleen(true);
      setMessagePartiel({});

      // Optionnel : stocker le token
      localStorage.setItem("token", data.token);


    } catch (error) {
      // console.error("❌ Erreur :", error);

      if (error.response) {
        // console.log("📩 Réponse Laravel complète :", error.response.data);
        setErreurBoleen(false);
        setMessage(error.response.data.message || "Erreur d'inscription.");
        setMessagePartiel(error.response.data.errors || {});
      } else {
        setMessage("Erreur réseau. Vérifie ta connexion.");
      }
    }
    // console.log(" Détails des erreurs :", error.response.data.errors);

    setFormulaire({
      name: "",
      email: "",
      password: "",
      term: false,
    });
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
      <div className="flex flex-col items-center mb-8">
        <img src="/image1/Link → SVG.svg" alt="profil" className="w-32 h-32 object-contain" />
        <p className="mt-4 text-xl font-semibold text-gray-700">RED PRODUCT</p>
      </div>

      <form onSubmit={handleSubmit} className="bg-white p-6 sm:p-8 rounded-lg shadow-md w-full max-w-sm">
        <h2 className="text-xl sm:text-2xl font-bold mb-6 text-center">Inscrivez-vous en tant qu’Admin </h2>
        {message && (
          <div
            className={`mb-4 text-center text-sm ${erreurBoleen ? "text-green-600" : "text-red-600"
              }`}
          >
            {message}
          </div>
        )}

        <div className="mb-6">
          <label htmlFor="name" className="block text-gray-700 mb-1">Nom</label>
          <input type="text" name="name" id="name" value={formulaire.name} onChange={handleChange}
            className="w-full border-b-2 border-gray-300 focus:outline-none focus:border-blue-500 py-2 px-1 bg-transparent"
            placeholder="Ex: John Doe"
          />
          {messagePartiel.name && (
            <span className="text-red-500 text-sm">{messagePartiel.name}</span>
          )}
        </div>

        <div className="mb-6">
          <label htmlFor="email" className="block text-gray-700 mb-1">Email</label>
          <input type="text" name="email" id="email" value={formulaire.email} onChange={handleChange}
            className="w-full border-b-2 border-gray-300 focus:outline-none focus:border-blue-500 py-2 px-1 bg-transparent"
            placeholder="Ex: abcd123@example.com"
          />
          {messagePartiel.email && (
            <span className="text-red-500 text-sm">{messagePartiel.email}</span>
          )}
        </div>

        <div className="mb-6">
          <label htmlFor="password" className="block text-gray-700 mb-1"> Mot de passe</label>
          <input type="password" name="password" id="password" value={formulaire.password} onChange={handleChange}
            className="w-full border-b-2 border-gray-300 focus:outline-none focus:border-blue-500 py-2 px-1 bg-transparent"
            placeholder="********"
          />
          {messagePartiel.password && (
            <span className="text-red-500 text-sm">
              {messagePartiel.password}
            </span>
          )}
        </div>

        <div className="flex flex-col items-start mb-6">
          <div className="flex items-center gap-2">
            <input type="checkbox" name="term" id="term" checked={formulaire.term} onChange={(e) =>
              setFormulaire({ ...formulaire, term: e.target.checked })
            }
              className="w-5 h-5 border-[#8692A6] rounded focus:ring-blue-500"
            />
            <label htmlFor="term">Accepter les termes et conditions</label>
          </div>
          {messagePartiel.term && (
            <span className="text-red-500 text-sm">{messagePartiel.term}</span>
          )}
        </div>

        <button
          type="submit"
          className="w-full bg-green-500 hover:bg-green-600 text-white py-2 px-4 rounded-md transition duration-300 cursor-pointer"
        >
          S'inscrire
        </button>

        <p className="text-sm text-center mt-4">
          Vous avez déjà un compte ?{" "}
          <a href="/" className="text-green-500 hover:underline cursor-pointer">
            Se connecter
          </a>
        </p>
      </form>
    </div>
  );
};

export default Register;
