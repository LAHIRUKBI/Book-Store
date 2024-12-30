import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FaBookOpen } from 'react-icons/fa';
import axios from "axios";

export default function Home() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch products when the Home page is loaded
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get("http://localhost:3000/api/products");
        setProducts(response.data.products);
      } catch (error) {
        setError("Error fetching products");
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();

    // Auto-scroll to Introduction section after 3 seconds
    setTimeout(() => {
      window.scrollTo({
        top: document.getElementById("introduction").offsetTop,
        behavior: "smooth",
      });
    }, 3000); // Adjust time as needed
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div className="min-h-screen bg-gray-100 text-gray-800">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-teal-500 to-cyan-500 py-24">
        {/* Video Background */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
          <video
            className="w-full h-full object-cover opacity-80"
            src="src/videos/Home Video.mp4"
            autoPlay
            muted
            loop
            playsInline
          ></video>
        </div>

        {/* Overlay to darken video for better text visibility */}
        <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50"></div>

        {/* Hero Content */}
        <div className="relative container mx-auto text-center z-10 flex flex-col items-center justify-center h-full">
          <h1 className="text-6xl font-extrabold mb-4 text-white drop-shadow-lg animate__animated animate__fadeIn animate__delay-1s">
            Welcome to Our Service Page
          </h1>
          <p className="text-xl mb-8 text-gray-200 drop-shadow-md animate__animated animate__fadeIn animate__delay-1.5s">
            Discover how we can help you manage waste effectively.
          </p>
          <Link
            to="/register"
            className="bg-teal-600 hover:bg-teal-700 text-white py-4 px-8 rounded-full text-lg shadow-xl transform hover:scale-105 transition duration-300 animate__animated animate__fadeIn animate__delay-2s"
          >
            <FaBookOpen className="inline mr-2" /> Get Started
          </Link>
        </div>
      </section>

      




      {/* Section with Curated Book Collection */}
            <section className="py-16 bg-white text-gray-800">
              <div className="container mx-auto px-4">
                <h2 className="text-4xl font-bold text-teal-600 mb-12 text-center">
                  Learning Pool
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
                  {/* Learning 1 */}
                  <div className="flex flex-col items-center bg-white shadow-xl rounded-lg p-6 border border-gray-200 hover:shadow-2xl transition duration-300">
                    <img
                      src="src/images/book1.jpg" // Replace with your image path
                      alt="Book 1"
                      className="w-full h-60 object-cover rounded-xl shadow-2xl"
                    />
                    <h3 className="text-2xl font-semibold text-teal-600 mt-6 mb-4">Imagination Unbound</h3>
                    <p className="text-lg text-gray-700 mb-4 text-center">
                      Dive into a world of creativity with books that break the boundaries of your imagination.
                    </p>
                    <Link
                      to="/bookDetails/1"
                      className="bg-teal-600 hover:bg-teal-700 text-white py-2 px-4 rounded-full text-lg shadow-xl transform hover:scale-105 transition duration-300"
                    >
                      Learn More
                    </Link>
                  </div>
      
                  {/* Learning 2 */}
                  <div className="flex flex-col items-center bg-white shadow-xl rounded-lg p-6 border border-gray-200 hover:shadow-2xl transition duration-300">
                    <img
                      src="src/images/book2.jpg" // Replace with your image path
                      alt="Book 2"
                      className="w-full h-60 object-cover rounded-xl shadow-2xl"
                    />
                    <h3 className="text-2xl font-semibold text-teal-600 mt-6 mb-4">Endless Possibilities</h3>
                    <p className="text-lg text-gray-700 mb-4 text-center">
                      Experience the power of ideas that can transform lives and reshape your world.
                    </p>
                    <Link
                      to="/bookDetails/2"
                      className="bg-teal-600 hover:bg-teal-700 text-white py-2 px-4 rounded-full text-lg shadow-xl transform hover:scale-105 transition duration-300"
                    >
                      Learn More
                    </Link>
                  </div>
      
                  {/* Learning 3 */}
                  <div className="flex flex-col items-center bg-white shadow-xl rounded-lg p-6 border border-gray-200 hover:shadow-2xl transition duration-300">
                    <img
                      src="src/images/book3.jpg" // Replace with your image path
                      alt="Book 3"
                      className="w-full h-60 object-cover rounded-xl shadow-2xl"
                    />
                    <h3 className="text-2xl font-semibold text-teal-600 mt-6 mb-4">The Art of Storytelling</h3>
                    <p className="text-lg text-gray-700 mb-4 text-center">
                      Discover the craft of storytelling and its impact on personal growth and creativity.
                    </p>
                    <Link
                      to="/bookDetails/3"
                      className="bg-teal-600 hover:bg-teal-700 text-white py-2 px-4 rounded-full text-lg shadow-xl transform hover:scale-105 transition duration-300"
                    >
                      Learn More
                    </Link>
                  </div>
                </div>
              </div>
            </section>




    </div>
  );
}
