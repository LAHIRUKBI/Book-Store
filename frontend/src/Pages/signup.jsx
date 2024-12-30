import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function Signup() {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    console.log("Component loaded");
  }, []);

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
      const res = await fetch("http://localhost:3000/api/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      const data = await res.json();
      setLoading(false);

      if (!res.ok) {
        setError(data.message || 'Signup failed. Please try again.');
        return;
      }

      setError(null);
      navigate("/signin");
    } catch (error) {
      console.error("Error:", error.message);
      setLoading(false);
      setError("An unexpected error occurred. Please try again.");
    }
  };

  return (
    <div className="flex flex-col min-h-screen bg-lightgray">
      {/* Background color changed to light gray */}
      <div className="flex justify-center items-center flex-grow p-6">
        <div className="relative z-10 flex w-full max-w-4xl bg-white bg-opacity-90 shadow-lg rounded-lg p-6 md:p-9 backdrop-filter backdrop-blur-lg transition-all duration-800 hover:shadow-2xl hover:bg-white hover:bg-opacity-100">
          {/* Left Side: Form Section */}
          <div className="w-full sm:w-3/5 md:w-2/3 p-4">
            <h2 className="text-gray-800 text-3xl font-extrabold text-center mb-4">Signup</h2>
            {/* Introduction Section */}
            <p className="text-gray-600 text-base text-center mb-4">
              Welcome! Please fill in the form below to create your account and join our community.
              We are excited to have you on board!
            </p>

            <form onSubmit={handleSubmit}>
              {error && <div className="text-red-500 text-sm mb-4">{error}</div>}
              {/* Email Field */}
              <div className="mb-5">
                <label className="block text-sm font-medium text-gray-800" htmlFor="email">Email:</label>
                <input
                  type="email"
                  id="email"
                  placeholder="Email"
                  className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm bg-white text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-blue-400 sm:text-sm transition-all"
                  onChange={handleChange}
                  required
                />
              </div>

              {/* Password Field */}
              <div className="mb-5">
                <label className="block text-sm font-medium text-gray-800" htmlFor="password">Password:</label>
                <input
                  type="password"
                  id="password"
                  placeholder="Password"
                  className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm bg-white text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-blue-400 sm:text-sm transition-all"
                  onChange={handleChange}
                  required
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className={`w-full bg-gradient-to-r from-blue-500 to-blue-400 text-white py-3 px-4 rounded-md hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 shadow-md transition-all transform hover:scale-105 ${loading ? 'opacity-50 cursor-not-allowed' : ''}`}
                disabled={loading}
              >
                {loading ? 'Signing Up...' : 'Sign Up'}
              </button>
            </form>

            <div className="text-center mt-4 text-gray-600 text-sm">
              <Link to="/signin" className="underline hover:text-blue-800">Already have an account? Sign in</Link>
            </div>
          </div>

          {/* Right Side: Image Section */}
          <div className="hidden sm:block sm:w-2/5 md:w-2/3 p-4 flex justify-center items-center">
            <img
              src="src/images/book1.jpg"
              alt="Signup"
              className="w-full h-full rounded-lg shadow-lg object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
