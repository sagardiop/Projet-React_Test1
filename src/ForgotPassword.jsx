import React, { useState } from 'react';
import { Link } from 'react-router';

function ForgotPassword() {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      if (!email) throw new Error("L'email est requis.");
      if (!email.includes('@')) throw new Error("Email invalide.");

      setTimeout(() => {
        setMessage("Un lien de réinitialisation a été envoyé à votre adresse email.");
        setError('');
      }, 1000);
    } catch (err) {
      setError(err.message);
      setMessage('');
    }
  };

  return (
<div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
  <div className="flex flex-col items-center mb-8">
    <img src="/image1/Link → SVG.svg" alt="profil" className="w-32 h-32 object-contain" />
    <p className="mt-4 text-xl font-semibold text-gray-700">RED PRODUCT</p>
  </div>
      <div className="bg-white p-6 rounded shadow-md w-full max-w-md">
        <h2 className="text-2xl font-semibold mb-4 text-center">Mot de passe oublie</h2>
        <h2 className="text-2xl font-semibold mb-4 text-center">Entre vortre adresse e-mail
          ci dessous et nous vous envoyons des instructions sur facon de modifier votre mot de passe
        </h2>

        {message && <div className="bg-green-100 text-green-800 p-2 mb-4 rounded">{message}</div>}
        {error && <div className="bg-red-100 text-red-800 p-2 mb-4 rounded">{error}</div>}

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="mt-4 text-sm text-center">
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">Votre e-mail</label>
            <input id="email" type="email" className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded shadow-sm focus:outline-none focus:ring focus:border-blue-500" value={email}
              onChange={(e) => setEmail(e.target.value)} placeholder="exemple@email.com" required />
          </div>

           <button 
             type="submit" className="w-full bg-green-500 hover:bg-green-600 text-white p-2 rounded-md">Envoyer</button>
             <div className="mt-4 text-sm text-center">
           <Link to="/" className="text-green-500 hover:underline text-center mt-4">Revenir a la connexion</Link>
           
          </div>
        </form>
      </div>
    </div>
  );
}
export default ForgotPassword