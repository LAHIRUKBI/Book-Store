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
        <video
          className="absolute top-0 left-0 w-full h-full object-cover opacity-80"
          src="src/videos/Tea2.mp4"
          autoPlay
          muted
          loop
          playsInline
        ></video>

        {/* Overlay to darken video */}
        <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50"></div>

        {/* Hero Content */}
        <div className="relative container mx-auto text-center z-10">
          <h1 className="text-6xl font-extrabold mb-4 text-white drop-shadow-lg">
            Welcome to Our Service Page
          </h1>
          <p className="text-xl mb-8 text-gray-200 drop-shadow-md">
            Discover how we can help you manage waste effectively.
          </p>
          <Link
            to="/register"
            className="bg-teal-600 hover:bg-teal-700 text-white py-4 px-8 rounded-full text-lg shadow-lg transition duration-300"
          >
            <FaRecycle className="inline mr-2" /> Get Started
          </Link>
        </div>
      </section>

      {/* Product List Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8 text-teal-600">
            Browse Our Products
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.length > 0 ? (
              products.map((product) => (
                <div
                  key={product._id}
                  className="bg-white p-6 rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300 ease-in-out hover:shadow-2xl"
                >
                  <div className="mb-4">
                    <h3 className="text-2xl font-bold text-teal-600">{product.mainCategory}</h3>
                  </div>

                  <div className="mb-4">
                    <h4 className="text-xl text-gray-700 font-semibold">{product.type}</h4>
                  </div>

                  <p className="text-sm text-gray-600 mb-4">
                    <strong>Introduction:</strong> {product.introduction}
                  </p>

                  <div className="flex justify-between items-center text-sm text-gray-600">
                    <p><strong>Weight:</strong> {product.weight}</p>
                    <p><strong>Price:</strong> ${product.price}</p>
                  </div>

                  {/* Replace Update and Delete buttons with Buy button */}
                  <div className="mt-4 text-center">
                    <Link
                      to={`/buy/${product._id}`}  // Assuming you have a buy page
                      className="bg-teal-500 hover:bg-teal-600 text-white py-2 px-4 rounded-lg font-semibold shadow-md transition-colors duration-300"
                    >
                      Buy Now
                    </Link>
                  </div>
                </div>
              ))
            ) : (
              <p className="text-center text-gray-600">No products available</p>
            )}
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8 text-teal-600">
            Learn More About Our Offerings
          </h2>
          <p className="text-center text-gray-700">
            Here, we provide detailed insights into how we work towards
            sustainable and eco-friendly waste management solutions.
          </p>
        </div>
      </section>
    </div>
  );
}
