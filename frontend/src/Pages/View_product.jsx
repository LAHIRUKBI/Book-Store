import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

export default function View_product() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get('http://localhost:3000/api/products');
        setProducts(response.data.products);
      } catch (error) {
        setError('Error fetching products');
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:3000/api/products/${id}`);
      setProducts(products.filter((product) => product._id !== id));
    } catch (error) {
      setError('Error deleting product');
    }
  };

  if (loading) {
    return <div className="text-white text-center py-16">Loading...</div>;
  }

  if (error) {
    return <div className="text-red-500 text-center py-16">{error}</div>;
  }

  return (
    <section className="py-16 bg-gradient-to-br from-gray-900 via-gray-800 to-black min-h-screen">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12 text-teal-400 drop-shadow-lg">
          Our Products
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.length > 0 ? (
            products.map((product) => (
              <div
                key={product._id}
                className="bg-gray-800 bg-opacity-90 p-6 rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300 ease-in-out hover:shadow-2xl border border-gray-700"
              >
                <div className="mb-4">
                  <h3 className="text-2xl font-bold text-teal-400">{product.mainCategory}</h3>
                </div>

                <div className="mb-4">
                  <h4 className="text-xl text-gray-300 font-semibold">{product.type}</h4>
                </div>

                <p className="text-sm text-gray-400 mb-4">
                  <strong className="text-gray-300">Introduction:</strong> {product.introduction}
                </p>

                <div className="flex justify-between items-center text-sm text-gray-400">
                  <p>
                    <strong className="text-gray-300">Weight:</strong> {product.weight}
                  </p>
                  <p>
                    <strong className="text-gray-300">Price:</strong> ${product.price}
                  </p>
                </div>

                <div className="flex justify-between mt-4">
                  <Link
                    to={`/updateproduct/${product._id}`}
                    className="bg-teal-500 hover:bg-teal-600 text-white py-2 px-4 rounded-lg font-semibold shadow-md transition-colors duration-300"
                  >
                    Update
                  </Link>
                  <button
                    onClick={() => handleDelete(product._id)}
                    className="bg-red-500 hover:bg-red-600 text-white py-2 px-4 rounded-lg font-semibold shadow-md transition-colors duration-300"
                  >
                    Delete
                  </button>
                </div>
              </div>
            ))
          ) : (
            <p className="text-center text-gray-400">No products found</p>
          )}
        </div>
      </div>
    </section>
  );
}
