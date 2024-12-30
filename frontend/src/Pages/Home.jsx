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
        <video
          className="absolute top-0 left-0 w-full h-full object-cover opacity-80"
          src="src/videos/Home Video.mp4"
          autoPlay
          muted
          loop
          playsInline
        ></video>

        {/* Overlay to darken video */}
        <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50"></div>

        {/* Hero Content */}
        <div className="relative container mx-auto text-center z-10">
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

      {/* Introduction About Us Section */}
      <section
  id="introduction"
  className="py-16 bg-white text-gray-800"
>
  <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between">
    {/* Image on the left */}
    <div className="w-full md:w-1/3 mb-8 md:mb-0"> {/* Resize width to 1/3 for smaller image */}
      <img
        src="src/images/book1.jpg" // Replace with your image path
        alt="Books"
        className="w-full h-auto rounded-xl shadow-2xl object-cover transform hover:scale-105 transition duration-300"
      />
    </div>

    {/* Introduction on the right */}
    <div className="w-full md:w-2/3 md:pl-12 animate__animated animate__fadeIn animate__delay-2s">
      <h2 className="text-4xl font-bold text-teal-600 mb-4">
        Welcome to Our Book Store
      </h2>
      <p className="text-lg text-gray-700 mb-6">
        At Book Haven, we offer a curated selection of books that not only entertain but also educate and inspire. 
        Our collection is designed to foster a love of reading while promoting sustainable living practices.
      </p>
      <p className="text-lg text-gray-700 mb-8">
        Whether you are looking to dive into environmental topics, explore new fiction, or find an educational resource,
        you'll find something special in our catalog. Join us on this exciting journey of discovery, knowledge, and sustainability!
      </p>
      <Link
        to="/books"
        className="bg-teal-600 hover:bg-teal-700 text-white py-3 px-6 rounded-full text-lg shadow-xl transform hover:scale-105 transition duration-300"
      >
        Explore Our Books
      </Link>
    </div>
  </div>
</section>



    </div>
  );
}
