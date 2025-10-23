import React, { useState } from 'react';
import { useNavigate } from 'react-router';

const Register = () => {
  const [formulaire, setFormulaire] = useState({
    nom: '',
    email: '',
    motdepasse: '',
    term: false,
  });

  const [message, setMessage] = useState('');
  const [messagePartiel, setMessagePartiel] = useState({});
  const [erreurBoleen, setErreurBoleen] = useState(false);
  const naviguer = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormulaire((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // const erreurs = {};
    // if (!formulaire.nom.trim()) erreurs.nom = "Le nom est requis.";
    // if (!formulaire.email.trim()) erreurs.email = "L'email est requis.";
    // if (!formulaire.motdepasse) erreurs.motdepasse = "Le mot de passe est requis.";
    // if (!formulaire.term) erreurs.term = "Vous devez accepter les termes.";

    // if (Object.keys(erreurs).length > 0) {
    //   setMessagePartiel(erreurs);
    //   setMessage("Veuillez corriger les erreurs.");
    //   setErreurBoleen(false);
    //   return;
    // }

    naviguer('/dashboard');

    setMessage("Inscription réussie !");
    setErreurBoleen(true);
    setMessagePartiel({});

    setFormulaire({
      nom: '',
      email: '',
      motdepasse: '',
      term: false,
    });
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
  <div className="flex flex-col items-center mb-8">
    <img src="/image1/Link → SVG.svg" alt="profil" className="w-32 h-32 object-contain" />
    <p className="mt-4 text-xl font-semibold text-gray-700">RED PRODUCT</p>
  </div>
      <form  onSubmit={handleSubmit}  className="bg-white p-6 sm:p-8 rounded-lg shadow-md w-full max-w-sm">
        <h2 className="text-xl sm:text-2xl font-bold mb-6 text-center">Inscrivez-vous en tant que Admin</h2>
         
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
          <label htmlFor="nom" className="block text-gray-700 mb-1">Nom </label>
          <input  type="text"  name="nom"  id="nom"  value={formulaire.nom} onChange={handleChange}
            className="w-full border-b-2 border-gray-300 focus:outline-none focus:border-blue-500 py-2 px-1 bg-transparent"
            placeholder="Ex: John Doe"
          />
          {messagePartiel.nom && (
            <span className="text-red-500 text-sm">{messagePartiel.nom}</span>
          )}
        </div>

        <div className="mb-6">
          <label htmlFor="email" className="block text-gray-700 mb-1">E-mail</label>
          <input type="text"  name="email"  id="email"  value={formulaire.email}  onChange={handleChange}
            className="w-full border-b-2 border-gray-300 focus:outline-none focus:border-blue-500 py-2 px-1 bg-transparent"
            placeholder="Ex: abcd123@example.com"
          />
          {messagePartiel.email && (
            <span className="text-red-500 text-sm">{messagePartiel.email}</span>
          )}
        </div>

        <div className="mb-6">
          <label htmlFor="motdepasse" className="block text-gray-700 mb-1">Mot de passe </label>
          <input  type="password" name="motdepasse" id="motdepasse"  value={formulaire.motdepasse} onChange={handleChange}
            className="w-full border-b-2 border-gray-300 focus:outline-none focus:border-blue-500 py-2 px-1 bg-transparent"
            placeholder="********"
          />
          {messagePartiel.motdepasse && (
            <span className="text-red-500 text-sm">{messagePartiel.motdepasse}</span>
          )}
        </div>

        <div className="flex flex-col items-start mb-6">
          <div className="flex items-center gap-2">
            <input type="checkbox" name="term"  id="term"  className="w-5 h-5 border-[#8692A6] rounded focus:ring-blue-500"
              checked={formulaire.term}  onChange={(e) => setFormulaire({ ...formulaire, term: e.target.checked })
              }
            />
            <label htmlFor="term">Accepter les termes et conditions</label>
          </div>
          {messagePartiel.term && (
            <span className="text-red-500 text-sm">{messagePartiel.term}</span>
          )}
        </div>

        <button
          type="submit"
          className="w-full bg-green-500 hover:bg-green-600 text-white py-2 px-4 rounded-md transition duration-300"
        >
          S'inscrire
        </button>

        <p className="text-sm text-center mt-4">
          Vous avez déjà un compte ?{' '}
          <a href="/" className="text-green-500 hover:underline">
            Se connecter
          </a>
        </p>
      </form>
    </div>
  );
};

export default Register;
