import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { FaBook, FaTag } from "react-icons/fa";

export default function BookDetails() {
  const { id } = useParams(); // Get the book ID from the URL
  const [book, setBook] = useState(null);
  const [quantity, setQuantity] = useState(1); // Default quantity is 1
  const [totalPrice, setTotalPrice] = useState(0);

  // Fetch book details by ID when the page loads
  useEffect(() => {
    const fetchBookDetails = async () => {
      try {
        const response = await axios.get(`http://localhost:3000/api/products/${id}`);
        if (response.data.product) {
          setBook(response.data.product); // Update the book state with the fetched data
        }
      } catch (error) {
        console.error("Error fetching book details", error);
      }
    };

    fetchBookDetails();
  }, [id]);

  // Recalculate the total price when the quantity changes
  useEffect(() => {
    if (book) {
      setTotalPrice(book.price * quantity); // Calculate total price based on quantity
    }
  }, [book, quantity]);

  if (!book) {
    return <div>Loading book details...</div>;
  }

  return (
    <div className="min-h-screen bg-gray-100 text-gray-800 py-16">
      <div className="container mx-auto px-4">
        <div className="bg-white p-8 rounded-lg shadow-lg">
          <h2 className="text-3xl font-bold text-center mb-4 text-teal-600">{book.type}</h2>

          <div className="mb-4 text-center">
            <div className="inline-block bg-teal-100 text-teal-600 py-2 px-4 rounded-full text-lg font-semibold shadow-md">
              <FaBook className="mr-2 inline-block" />
              {book.mainCategory}
            </div>
          </div>

          <p className="text-xl font-semibold mb-4">Introduction:</p>
          <p className="text-gray-700 mb-8">{book.introduction}</p>

          <div className="flex items-center justify-center mb-4">
            <label htmlFor="quantity" className="text-lg font-semibold mr-4">Quantity:</label>
            <input
              id="quantity"
              type="number"
              value={quantity}
              onChange={(e) => setQuantity(Number(e.target.value))}
              min="1"
              className="w-16 text-center py-2 px-4 border rounded-md"
            />
          </div>

          <div className="text-center text-gray-800 text-lg font-bold mb-4">
            <FaTag className="inline-block mr-2 text-teal-600" />
            <span className="text-2xl">${book.price}</span>
          </div>

          <div className="text-center text-lg font-bold mb-4">
            <p>Total Price: ${totalPrice.toFixed(2)}</p>
          </div>

          <div className="mt-8 text-center">
            <button
              className="bg-teal-500 hover:bg-teal-600 text-white py-2 px-6 rounded-lg font-semibold shadow-md transition-colors duration-300"
            >
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
