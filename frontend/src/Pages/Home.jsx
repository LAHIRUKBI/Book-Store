import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FaBookOpen } from "react-icons/fa";
import axios from "axios";

export default function Home() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentStep, setCurrentStep] = useState(1);

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
    setCurrentStep(1); // Reset the step when closing the modal
  };

  const nextStep = () => {
    if (currentStep < 4) {
      setCurrentStep(currentStep + 1);
    }
  };

  const finishGuide = () => {
    closeModal();
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
        <div className="absolute inset-0 overflow-hidden">
    <video
      className="w-full h-full object-cover"
      src="src/videos/Home Video.mp4"
      autoPlay
      muted
      loop
      playsInline
      aria-label="Background Video"
    ></video>
  </div>

        {/* Overlay to darken video for better text visibility */}
        <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50"></div>

        {/* Hero Content */}
        <div className="relative container mx-auto text-center z-10 flex flex-col items-center justify-center h-full">
  <h1 className="text-6xl font-extrabold mb-4 text-white drop-shadow-lg animate__animated animate__fadeIn animate__delay-1s">
    Welcome to Our Bookstore
  </h1>
  <p className="text-xl mb-8 text-gray-200 drop-shadow-md animate__animated animate__fadeIn animate__delay-1.5s">
    Explore a world of stories, knowledge, and imagination.
  </p>
  <button
    onClick={openModal}
    className="bg-teal-600 hover:bg-teal-700 text-white py-4 px-8 rounded-full text-lg shadow-xl transform hover:scale-105 transition duration-300 animate__animated animate__fadeIn animate__delay-2s"
  >
    <FaBookOpen className="inline mr-2" /> Browse Our Store
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
            
            {/* Step Content */}
            {currentStep === 1 && (
              <div>
                <p className="mt-4 text-lg text-gray-700">
                  Welcome to our service guide! In this guide, you will learn
                  how to get started with our platform and take full advantage
                  of our waste management services.
                </p>
              </div>
            )}

            {currentStep === 2 && (
              <div>
                <p className="mt-4 text-lg text-gray-700">
                  To begin buying books from our collection, you need to
                  register and sign in. Once registered, a "Books" tab will
                  appear in the navigation bar where you can purchase books.
                </p>
              </div>
            )}

            {currentStep === 3 && (
              <div>
                <p className="mt-4 text-lg text-gray-700">
                  On the homepage, you'll find the curated book collection in
                  the "Learning Pool" section. Additionally, there are various
                  categories and resources to explore and enjoy.
                </p>
              </div>
            )}

            {currentStep === 4 && (
              <div>
                <p className="mt-4 text-lg text-gray-700">
                  That's it! You've completed the guide. Now, you're ready to
                  explore our services. If you need help at any time, feel free
                  to revisit this guide.
                </p>
              </div>
            )}

            {/* Navigation buttons */}
            <div className="mt-6 text-center space-x-4">
              {currentStep < 4 ? (
                <button
                  onClick={nextStep}
                  className="bg-teal-600 hover:bg-teal-700 text-white py-2 px-6 rounded-full text-lg"
                >
                  Next
                </button>
              ) : (
                <button
                  onClick={finishGuide}
                  className="bg-teal-600 hover:bg-teal-700 text-white py-2 px-6 rounded-full text-lg"
                >
                  Finish
                </button>
              )}
            </div>
          </div>
        </div>
      )}

      {/* Section with Curated Book Collection */}
      <section className="py-16 bg-gradient-to-r from-teal-50 to-white text-gray-800">
  <div className="container mx-auto px-4">
    <h2 className="text-4xl font-bold text-teal-600 mb-12 text-center tracking-wide uppercase">
      Learning Pool
    </h2>
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
      {/* Learning 1 */}
      <div className="flex flex-col items-center bg-white shadow-xl rounded-lg p-6 border border-gray-200 hover:shadow-2xl hover:scale-105 transition duration-300 transform">
        <div className="w-full h-60 overflow-hidden rounded-xl mb-6">
          <img
            src="src/images/The Importance of Learning.jpeg" // Replace with your image path
            alt="The Importance of Learning"
            className="w-full h-full object-cover transform hover:scale-110 transition duration-500"
          />
        </div>
        <h3 className="text-2xl font-semibold text-teal-600 mt-6 mb-4">
          The Importance of Learning
        </h3>
        <p className="text-lg text-gray-700 mb-4 text-center px-2">
          Discover the profound impact of continuous learning on personal growth, career advancement, and overall well-being.
        </p>
        <Link
          to="/importance_of_Learning"
          className="bg-teal-600 hover:bg-teal-700 text-white py-2 px-6 rounded-full text-lg shadow-lg transform hover:scale-105 transition duration-300"
        >
          Learn More
        </Link>
      </div>

      {/* Learning 2 */}
      <div className="flex flex-col items-center bg-white shadow-xl rounded-lg p-6 border border-gray-200 hover:shadow-2xl hover:scale-105 transition duration-300 transform">
        <div className="w-full h-60 overflow-hidden rounded-xl mb-6">
          <img
            src="src/images/book5.jpg" // Replace with an image that fits the theme of knowledge and growth
            alt="Learning makes a person rich"
            className="w-full h-full object-cover transform hover:scale-110 transition duration-500"
          />
        </div>
        <h3 className="text-2xl font-semibold text-teal-600 mt-6 mb-4">
          Learning Makes a Person Rich
        </h3>
        <p className="text-lg text-gray-700 mb-4 text-center px-2">
          Knowledge is wealth that never depreciates. Every lesson learned and every skill gained adds value to your life and opens doors to endless opportunities.
        </p>
        <Link
          to="/learning_Makes_a_Person_Rich"
          className="bg-teal-600 hover:bg-teal-700 text-white py-2 px-6 rounded-full text-lg shadow-lg transform hover:scale-105 transition duration-300"
        >
          Learn More
        </Link>
      </div>

      {/* Learning 3 */}
      <div className="flex flex-col items-center bg-white shadow-xl rounded-lg p-6 border border-gray-200 hover:shadow-2xl hover:scale-105 transition duration-300 transform">
        <div className="w-full h-60 overflow-hidden rounded-xl mb-6">
          <img
            src="src/images/book3.jpg" // Replace with your image path
            alt="Book 3"
            className="w-full h-full object-cover transform hover:scale-110 transition duration-500"
          />
        </div>
        <h3 className="text-2xl font-semibold text-teal-600 mt-6 mb-4">
          Benefits of Learning to Read
        </h3>
        <p className="text-lg text-gray-700 mb-4 text-center px-2">
          Reading opens doors to a world of knowledge, imagination, and endless possibilities. Here are some of the key benefits of learning to read:
        </p>
        <Link
          to="/benefits_of_learning_to_read"
          className="bg-teal-600 hover:bg-teal-700 text-white py-2 px-6 rounded-full text-lg shadow-lg transform hover:scale-105 transition duration-300"
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

{/* Testimonials Section */}
<section className="py-16 bg-yellow-50 text-gray-800">
  <div className="container mx-auto px-4 text-center">
    <h2 className="text-4xl font-bold text-teal-600 mb-12">
      What Our Readers Are Saying
    </h2>
    <div className="flex flex-wrap justify-center gap-8">
      {/* Testimonial 1 */}
      <div className="w-full md:w-1/3 bg-white p-8 rounded-lg shadow-xl">
        <div className="flex justify-center mb-4">
          <i className="fas fa-book-open text-3xl text-teal-600"></i>
        </div>
        <p className="text-lg text-gray-700 mb-4">
          "An incredible selection of books! I always find something new to read. The staff is super helpful and friendly!"
        </p>
        <p className="font-semibold text-teal-600">Sarah Miller</p>
        <p className="text-sm text-gray-500">Regular Customer</p>
      </div>
      
      {/* Testimonial 2 */}
      <div className="w-full md:w-1/3 bg-white p-8 rounded-lg shadow-xl">
        <div className="flex justify-center mb-4">
          <i className="fas fa-book-reader text-3xl text-teal-600"></i>
        </div>
        <p className="text-lg text-gray-700 mb-4">
          "The bookstore has a charming atmosphere. I can easily find my favorite genres, and the cozy seating area makes it a perfect spot to read!"
        </p>
        <p className="font-semibold text-teal-600">David Roberts</p>
        <p className="text-sm text-gray-500">Book Lover</p>
      </div>
      
      {/* Testimonial 3 */}
      <div className="w-full md:w-1/3 bg-white p-8 rounded-lg shadow-xl">
        <div className="flex justify-center mb-4">
          <i className="fas fa-bookmark text-3xl text-teal-600"></i>
        </div>
        <p className="text-lg text-gray-700 mb-4">
          "A wonderful experience every time I visit. The recommendations are always spot on, and I love the community events!"
        </p>
        <p className="font-semibold text-teal-600">Emma Johnson</p>
        <p className="text-sm text-gray-500">Frequent Visitor</p>
      </div>
    </div>
  </div>
</section>



{/* Call to Action Section */}
<section className="py-16 bg-teal-600 text-white text-center">
  <div className="container mx-auto px-4">
    <h2 className="text-4xl font-bold mb-6">Join Our Book Lovers' Community</h2>
    <p className="text-lg mb-6">
      Discover your next favorite book, connect with fellow readers, and stay
      updated on the latest releases. Sign up today and start your literary journey!
    </p>
    <Link
      to="/signup"
      className="bg-white text-teal-600 py-3 px-8 rounded-full text-xl font-semibold shadow-lg transform hover:scale-105 transition duration-300"
    >
      Become a Member
    </Link>
  </div>
</section>





    </div>
  );
}
