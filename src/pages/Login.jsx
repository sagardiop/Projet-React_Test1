import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
  const [formulaire, setFormulaire] = useState({
    email: '',
    motdepasse: '',
    term: false, 
  });

  const [message, setMessage] = useState('');
  const [messagePartiel, setMessagePartiel] = useState({});
  const [erreurBoleen, setErreurBoleen] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormulaire((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const erreurs = {};
    if (!formulaire.email.trim()) erreurs.email = "L'email est requis.";
    if (!formulaire.motdepasse) erreurs.motdepasse = "Le mot de passe est requis.";
    if (!formulaire.term) erreurs.term = "Vous devez accepter les termes et conditions.";

    if (Object.keys(erreurs).length > 0) {
      setMessagePartiel(erreurs);
      setMessage("Veuillez corriger les erreurs.");
      setErreurBoleen(false);
      return;
    }

    
    if (
      formulaire.email === "admin@example.com" &&
      formulaire.motdepasse === "admin123"
    ) {
      setMessage("Connexion réussie !");
      setErreurBoleen(true);
      setMessagePartiel({});
      setFormulaire({ email: '', motdepasse: '', term: false }); 
    } else {
      setMessage("Email ou mot de passe incorrect.");
      setErreurBoleen(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <form onSubmit={handleSubmit} className="bg-white p-8 rounded-lg shadow-md w-full max-w-sm">
        <h2 className="text-2xl font-bold mb-6 text-center">  Connectez-vous en tant que Admin </h2>
        
       
        {message && (
          <div className={`mb-4 text-center text-sm ${erreurBoleen ? 'text-green-600' : 'text-red-600'}`}>
            {message}
          </div>
        )}

      
        <div className="mb-6">
          <label htmlFor="email" className="block text-gray-700 mb-1">Email</label>
          <input  type="text"  name="email" id="email"  value={formulaire.email} onChange={handleChange} className="w-full border-b-2 border-gray-300 focus:outline-none focus:border-blue-500 py-2 px-1 bg-transparent"
              placeholder="Ex: admin@example.com"/>
             {messagePartiel.email && (
             <span className="text-red-500 text-sm">{messagePartiel.email}</span>
          )}
        </div>

  
        <div className="mb-6">
          <label htmlFor="motdepasse" className="block text-gray-700 mb-1">Mot de passe</label>
          <input type="password" name="motdepasse" id="motdepasse" value={formulaire.motdepasse} onChange={handleChange}className="w-full border-b-2 border-gray-300 focus:outline-none focus:border-blue-500 py-2 px-1 bg-transparent"
            placeholder="********" />
          {messagePartiel.motdepasse && (
            <span className="text-red-500 text-sm">{messagePartiel.motdepasse}</span>
          )}
        </div>

        
        <div className="flex flex-col items-start mb-6">
          <div className="flex items-center gap-2">
            <input  type="checkbox"  name="term" id="term"  className="w-5 h-5 border-[#8692A6] rounded focus:ring-blue-500" checked={formulaire.term} onChange={(e) =>setFormulaire({ ...formulaire, term: e.target.checked })
                
              }
            />
             <label htmlFor="term">Gardez-moi connecte</label>
          </div>
          {messagePartiel.term && (
            <span className="text-red-500 text-sm">{messagePartiel.term}</span>
          )}
        </div>

       <div className="mt-4 text-sm text-center">
              <Link to="/forgotpass" className="text-blue-500 hover:underline">forgotpass ? </Link>  
       </div>

        <button 
             type="submit" className="w-full bg-green-500 hover:bg-green-600 text-white p-2 rounded-md">Se conecter</button>
         <p className="text-sm text-center mt-4">
             Pas encore de compte ?{' '}
            <a href="/register" className="text-green-500 hover:underline">S'inscrire</a>
        </p>
      </form>
    </div>
  );
};

export default Login;
