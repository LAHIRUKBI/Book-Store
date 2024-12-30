import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { FaRecycle } from "react-icons/fa";

export default function Books() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch products when the Books page is loaded
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
      {/* Product List Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8 text-teal-600">
            Browse Our Books
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
              <p className="text-center text-gray-600">No books available</p>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}
