import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faLock, faSpinner } from "@fortawesome/free-solid-svg-icons";

export default function Signin() {
  const [formData, setFormData] = useState({ email: '', password: '' });
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      const res = await fetch("http://localhost:3000/api/signup/signin", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      const data = await res.json();
      setLoading(false);

      if (!res.ok) {
        setError(data.message || 'Signin failed. Please try again.');
        return;
      }

      setError(null);
      navigate("/");  // Navigate to the home page or dashboard
    } catch (error) {
      console.error("Error:", error.message);
      setLoading(false);
      setError("An unexpected error occurred. Please try again.");
    }
  };

  return (
    <div className="flex flex-col min-h-screen justify-center items-center bg-gray-100 py-6">
      <div className="w-full max-w-md bg-white border border-gray-300 shadow-lg rounded-lg p-8">
        {/* Introduction Section */}
        <div className="mb-6">
          <h2 className="text-3xl font-extrabold text-center mb-2 text-green-600">Welcome to SmartBIN</h2>
          <p className="text-gray-600 text-center text-sm mb-4">
            We're thrilled to have you on board! Sign in to access your account and start managing your recycling with us.
          </p>
          <p className="text-gray-600 text-center text-sm mb-6">
            Already have an account? Use the form below to sign in and get started with our eco-friendly solutions.
          </p>
        </div>

        {/* Sign In Form */}
        <form onSubmit={handleSubmit}>
          {error && <div className="text-red-500 text-sm mb-4">{error}</div>}

          <div className="mb-5">
            <label className="block text-sm font-medium text-green-600" htmlFor="email">Email:</label>
            <div className="relative">
              <input
                type="email"
                id="email"
                placeholder="Email"
                className="mt-1 block w-full px-10 py-3 border border-gray-300 rounded-md shadow-sm bg-gray-50 text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-green-400 focus:border-green-400 sm:text-sm"
                onChange={handleChange}
                required
              />
              <FontAwesomeIcon icon={faEnvelope} className="absolute left-3 top-3 text-gray-500" />
            </div>
          </div>

          <div className="mb-5">
            <label className="block text-sm font-medium text-green-600" htmlFor="password">Password:</label>
            <div className="relative">
              <input
                type="password"
                id="password"
                placeholder="Password"
                className="mt-1 block w-full px-10 py-3 border border-gray-300 rounded-md shadow-sm bg-gray-50 text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-green-400 focus:border-green-400 sm:text-sm"
                onChange={handleChange}
                required
              />
              <FontAwesomeIcon icon={faLock} className="absolute left-3 top-3 text-gray-500" />
            </div>
          </div>

          <button
            type="submit"
            className={`w-full bg-gradient-to-r from-green-600 to-green-500 text-white py-3 px-4 rounded-md hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-green-400 focus:ring-offset-2 shadow-md ${loading ? 'opacity-50 cursor-not-allowed' : ''}`}
            disabled={loading}
          >
            {loading ? (
              <>
                <FontAwesomeIcon icon={faSpinner} spin className="mr-2" />
                Signing In...
              </>
            ) : 'Sign In'}
          </button>
        </form>
      </div>
    </div>
  );
}
