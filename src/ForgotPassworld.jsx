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
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-6 rounded shadow-md w-full max-w-md">
        <h2 className="text-2xl font-semibold mb-4 text-center">Mot de passe oublié</h2>
        <h2 className="text-2xl font-semibold mb-4 text-center">Entre vortre adresse e-mail
          ci dessous et nous vous envoyons des instructions sur facon de modifier votre mot de passe
        </h2>

        {message && <div className="bg-green-100 text-green-800 p-2 mb-4 rounded">{message}</div>}
        {error && <div className="bg-red-100 text-red-800 p-2 mb-4 rounded">{error}</div>}

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">Votre e-mail</label>
            <input id="email" type="email" className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded shadow-sm focus:outline-none focus:ring focus:border-blue-500" value={email}
              onChange={(e) => setEmail(e.target.value)} placeholder="exemple@email.com" required />
          </div>

          <button
            type="submit" className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition" >Envoyer </button>
          <Link to="/" className="text-blue-500 hover:underline text-center">
            connexion
          </Link>
        </form>
      </div>
    </div>
  );
}
export default ForgotPassword