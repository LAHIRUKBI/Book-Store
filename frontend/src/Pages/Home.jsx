import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FaRecycle } from "react-icons/fa";
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
            <FaRecycle className="inline mr-2" /> Get Started
          </Link>
        </div>
      </section>

      {/* Section 1 & 2 arranged horizontally */}
      <section className="py-16 bg-white text-gray-800">
        <div className="container mx-auto px-4 flex flex-col md:flex-row space-y-12 md:space-y-0 md:space-x-12">
          {/* Card Layout for Section 1 */}
          <div className="w-full md:w-1/2 flex flex-col items-start bg-white shadow-xl rounded-lg p-6 border border-gray-200 hover:shadow-2xl transition duration-300">
            <div className="w-full mb-8 md:mb-0">
              <div className="w-full mb-4">
                <h2 className="text-4xl font-bold text-teal-600 mb-4">
                  Welcome to Our Book Store
                </h2>
              </div>
              <img
                src="src/images/book1.jpg" // Replace with your image path
                alt="Books"
                className="w-full h-64 object-cover rounded-xl shadow-2xl"
              />
            </div>
            <div className="w-full md:w-2/3 md:pl-12 animate__animated animate__fadeIn animate__delay-2s">
              <p className="text-lg text-gray-700 mb-6">
                At Book Haven, we offer a curated selection of books that not only entertain but also educate and inspire. 
                Our collection is designed to foster a love of reading while promoting sustainable living practices.
              </p>
              <p className="text-lg text-gray-700 mb-8">
                Whether you are looking to dive into environmental topics, explore new fiction, or find an educational resource,
                you'll find something special in our catalog. Join us on this exciting journey of discovery, knowledge, and sustainability!
              </p>
              <div className="flex justify-center mt-8">
                <Link
                  to="/books"
                  className="bg-teal-600 hover:bg-teal-700 text-white py-3 px-6 rounded-full text-lg shadow-xl transform hover:scale-105 transition duration-300"
                >
                  Explore Our Books
                </Link>
              </div>
            </div>
          </div>

          {/* Card Layout for Section 2 */}
          <div className="w-full md:w-1/2 flex flex-col items-start bg-white shadow-xl rounded-lg p-6 border border-gray-200 hover:shadow-2xl transition duration-300">
            <div className="w-full mb-8 md:mb-0">
              <div className="w-full mb-4">
                <h2 className="text-4xl font-bold text-teal-600 mb-4">
                  Welcome to Our Book Store
                </h2>
              </div>
              <img
                src="src/images/book1.jpg" // Replace with your image path
                alt="Books"
                className="w-full h-64 object-cover rounded-xl shadow-2xl"
              />
            </div>
            <div className="w-full md:w-2/3 md:pl-12 animate__animated animate__fadeIn animate__delay-2s">
              <p className="text-lg text-gray-700 mb-6">
                At Book Haven, we offer a curated selection of books that not only entertain but also educate and inspire. 
                Our collection is designed to foster a love of reading while promoting sustainable living practices.
              </p>
              <p className="text-lg text-gray-700 mb-8">
                Whether you are looking to dive into environmental topics, explore new fiction, or find an educational resource,
                you'll find something special in our catalog. Join us on this exciting journey of discovery, knowledge, and sustainability!
              </p>
              <div className="flex justify-center mt-8">
                <Link
                  to="/books"
                  className="bg-teal-600 hover:bg-teal-700 text-white py-3 px-6 rounded-full text-lg shadow-xl transform hover:scale-105 transition duration-300"
                >
                  Explore Our Books
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
