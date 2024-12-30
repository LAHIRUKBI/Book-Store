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
    <div className="flex flex-col min-h-screen justify-between">
        {/* Background color changed to white */}
        <div className="flex justify-center items-center flex-grow bg-white relative">
            <div className="relative z-10 flex w-full max-w-4xl bg-white shadow-lg rounded-lg p-9 backdrop-filter backdrop-blur-lg transition-all duration-800 hover:shadow-2xl">
                {/* Left Side: Form Section */}
                <div className="w-10dp p-4dp">
                    <h2 className="text-green-600 text-3xl font-extrabold text-center mb-4">Signup</h2>
                    {/* Introduction Section */}
                    <p className="text-green-700 text-base text-center mb-4">
                        Welcome! Please fill in the form below to create your account and join our community.
                        We are excited to have you on board!
                    </p>

                    <form onSubmit={handleSubmit}>
                        {error && <div className="text-red-500 text-sm mb-4">{error}</div>}
                        {/* Email Field */}
                        <div className="mb-5">
                            <label className="block text-sm font-medium text-green-600" htmlFor="email">Email:</label>
                            <input
                                type="email"
                                id="email"
                                placeholder="Email"
                                className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm bg-white text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-green-400 focus:border-green-400 sm:text-sm transition-all"
                                onChange={handleChange}
                                required
                            />
                        </div>

                        {/* Password Field */}
                        <div className="mb-5">
                            <label className="block text-sm font-medium text-green-600" htmlFor="password">Password:</label>
                            <input
                                type="password"
                                id="password"
                                placeholder="Password"
                                className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm bg-white text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-green-400 focus:border-green-400 sm:text-sm transition-all"
                                onChange={handleChange}
                                required
                            />
                        </div>

                        

                        {/* Submit Button */}
                        <button
                            type="submit"
                            className={`w-full bg-gradient-to-r from-green-600 to-green-500 text-white py-3 px-4 rounded-md hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-green-400 focus:ring-offset-2 shadow-md transition-all transform hover:scale-105 ${loading ? 'opacity-50 cursor-not-allowed' : ''}`}
                            disabled={loading}
                        >
                            {loading ? 'Signing Up...' : 'Sign Up'}
                        </button>
                    </form>

                    <div className="text-center mt-4 text-green-600 text-sm">
                        <Link to="/signin" className="underline hover:text-green-800">Already have an account? Sign in</Link>
                    </div>
                </div>

                {/* Right Side: Image Section */}
                <div className="w-12dp p-4">
                    <img src="src/images/tea.png" alt="Signup" className="w-full h-auto rounded-lg shadow-lg transition-all duration-300 transform hover:scale-105" />
                </div>
            </div>
        </div>

    </div>
);
}
