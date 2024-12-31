import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FaBookOpen } from "react-icons/fa";
import axios from "axios";

export default function Home() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

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

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

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
          <button
            onClick={openModal}
            className="bg-teal-600 hover:bg-teal-700 text-white py-4 px-8 rounded-full text-lg shadow-xl transform hover:scale-105 transition duration-300 animate__animated animate__fadeIn animate__delay-2s"
          >
            <FaBookOpen className="inline mr-2" /> Get Started
          </button>
        </div>
      </section>

      {/* Modal for Get Started */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-8 w-4/5 md:w-1/2 lg:w-1/3">
            <div className="flex justify-between items-center">
              <h2 className="text-2xl font-bold text-teal-600">Get Started</h2>
              <button
                onClick={closeModal}
                className="text-xl text-teal-600 hover:text-teal-700"
              >
                &times;
              </button>
            </div>
            <p className="mt-4 text-lg text-gray-700">
              Follow these steps to begin your journey with us:
            </p>
            <div className="mt-6 space-y-4">
              {/* Step 1 */}
              <div className="flex items-center space-x-3">
                <span className="text-teal-600">1.</span>
                <p className="text-gray-700">
                  Register for an account to get started with our services.
                </p>
              </div>
              {/* Step 2 */}
              <div className="flex items-center space-x-3">
                <span className="text-teal-600">2.</span>
                <p className="text-gray-700">
                  Select the services that best fit your needs.
                </p>
              </div>
              {/* Step 3 */}
              <div className="flex items-center space-x-3">
                <span className="text-teal-600">3.</span>
                <p className="text-gray-700">
                  Enjoy seamless waste management and recycling services.
                </p>
              </div>
            </div>
            <div className="mt-6 text-center">
              <button
                onClick={closeModal}
                className="bg-teal-600 hover:bg-teal-700 text-white py-2 px-6 rounded-full text-lg"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}

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
                src="src/images/The Importance of Learning.jpeg" // Replace with your image path
                alt="The Importance of Learning"
                className="w-full h-60 object-cover rounded-xl shadow-2xl"
              />
              <h3 className="text-2xl font-semibold text-teal-600 mt-6 mb-4">
                The Importance of Learning
              </h3>
              <p className="text-lg text-gray-700 mb-4 text-center">
                Discover the profound impact of continuous learning on personal
                growth, career advancement, and overall well-being.
              </p>
              <Link
                to="/importance_of_Learning"
                className="bg-teal-600 hover:bg-teal-700 text-white py-2 px-4 rounded-full text-lg shadow-xl transform hover:scale-105 transition duration-300"
              >
                Learn More
              </Link>
            </div>

            {/* Learning 2 */}
            <div className="flex flex-col items-center bg-white shadow-xl rounded-lg p-6 border border-gray-200 hover:shadow-2xl transition duration-300">
              <img
                src="src/images/book5.jpg" // Replace with an image that fits the theme of knowledge and growth
                alt="Learning makes a person rich"
                className="w-full h-60 object-cover rounded-xl shadow-2xl"
              />
              <h3 className="text-2xl font-semibold text-teal-600 mt-6 mb-4">
                Learning Makes a Person Rich
              </h3>
              <p className="text-lg text-gray-700 mb-4 text-center">
                Knowledge is wealth that never depreciates. Every lesson learned and every skill gained adds value to your life and opens doors to endless opportunities.
              </p>
              <Link
                to="/learning_Makes_a_Person_Rich"
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
              <h3 className="text-2xl font-semibold text-teal-600 mt-6 mb-4">
                Benefits of Learning to Read
              </h3>
              <p className="text-lg text-gray-700 mb-4 text-center">
                Reading opens doors to a world of knowledge, imagination, and endless possibilities. Here are some of the key benefits of learning to read:
              </p>
              <Link
                to="/benefits_of_learning_to_read"
                className="bg-teal-600 hover:bg-teal-700 text-white py-2 px-4 rounded-full text-lg shadow-xl transform hover:scale-105 transition duration-300"
              >
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Banner Section */}
      <section className="w-full mt-12">
  <img
    src="src/images/Banner.png" // Replace with your banner image path
    alt="Banner"
    className="w-full h-48 object-cover" // Adjust h-48 for a more suitable height
  />
</section>



    </div>
  );
}
