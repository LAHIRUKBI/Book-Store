import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export default function Add_product() {
  const [formData, setFormData] = useState({
    mainCategory: '',
    type: '',
    price: '',
    weight: '',
    introduction: '',
  });

  const navigate = useNavigate();

  const teaCategories = {
    "Traditional Tea Types": [
      "Green Tea", "Black Tea", "White Tea", "Oolong Tea", "Pu-erh Tea",
    ],
    "Herbal and Infused Variants": [
      "Chamomile Tea", "Peppermint Tea", "Rooibos Tea (Red Tea)", "Hibiscus Tea", "Lemongrass Tea",
    ],
    "Specialty and Regional Teas": [
      "Darjeeling Tea", "Assam Tea", "Matcha (Japanese Green Tea)", "Sencha (Traditional Japanese Tea)", "Ceylon Tea",
    ],
    "Flavored and Blended Teas": [
      "Earl Grey (Black Tea with Bergamot)", "Masala Chai", "Jasmine Green Tea", "Vanilla Rooibos", "Spiced Apple Tea",
    ],
    "Unique and Wellness Teas": [
      "Genmaicha (Green Tea with Roasted Rice)", "Detox Tea", "Blue Pea Tea (Butterfly Pea Flower)", "Turmeric Tea", "Yerba Mate",
    ],
  };

  const weights = ["50g", "100g", "250g", "500g", "1kg"];

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:3000/api/products', formData);

      alert('Tea packet added successfully!');
      setFormData({
        mainCategory: '',
        type: '',
        price: '',
        weight: '',
        introduction: '',
      });

      navigate('/productview');
    } catch (error) {
      console.error('Error adding tea packet:', error);
    }
  };

  const handleMainCategoryChange = (e) => {
    const mainCategory = e.target.value;
    setFormData({
      ...formData,
      mainCategory,
      type: '',
    });
  };

  return (
    <div className="flex flex-col items-center min-h-screen bg-gradient-to-br from-green-900 via-green-800 to-black p-6">
      <h1 className="text-4xl font-extrabold text-yellow-400 mb-6 drop-shadow-lg">
        Add Your Unique Tea Packet
      </h1>
      <p className="text-lg text-gray-200 text-center mb-6 max-w-3xl">
        Welcome to the tea inventory management page. Use this form to add exquisite tea packets to our catalog. 
        Provide all the necessary details to ensure your product stands out.
      </p>
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-lg bg-gradient-to-br from-gray-800 to-gray-700 p-8 rounded-xl shadow-2xl space-y-6 border border-gray-600"
      >
        <label className="block">
          <span className="text-yellow-300 font-semibold">Main Category</span>
          <select
            className="form-select mt-2 block w-full rounded-lg border-gray-600 bg-gray-600 text-gray-300 focus:ring-2 focus:ring-yellow-500 focus:outline-none"
            value={formData.mainCategory}
            onChange={handleMainCategoryChange}
            required
          >
            <option value="" disabled>Select main category</option>
            {Object.keys(teaCategories).map((category, index) => (
              <option key={index} value={category}>{category}</option>
            ))}
          </select>
        </label>

        {formData.mainCategory && (
          <label className="block">
            <span className="text-yellow-300 font-semibold">Type of Tea</span>
            <select
              className="form-select mt-2 block w-full rounded-lg border-gray-600 bg-gray-600 text-gray-300 focus:ring-2 focus:ring-yellow-500 focus:outline-none"
              value={formData.type}
              onChange={(e) => setFormData({ ...formData, type: e.target.value })}
              required
            >
              <option value="" disabled>Select tea type</option>
              {teaCategories[formData.mainCategory].map((type, index) => (
                <option key={index} value={type}>{type}</option>
              ))}
            </select>
          </label>
        )}

        <label className="block">
          <span className="text-yellow-300 font-semibold">Price (in $)</span>
          <input
            type="number"
            className="form-input mt-2 block w-full rounded-lg border-gray-600 bg-gray-600 text-gray-300 focus:ring-2 focus:ring-yellow-500 focus:outline-none"
            value={formData.price}
            onChange={(e) => setFormData({ ...formData, price: e.target.value })}
            required
          />
        </label>

        <label className="block">
          <span className="text-yellow-300 font-semibold">Weight</span>
          <select
            className="form-select mt-2 block w-full rounded-lg border-gray-600 bg-gray-600 text-gray-300 focus:ring-2 focus:ring-yellow-500 focus:outline-none"
            value={formData.weight}
            onChange={(e) => setFormData({ ...formData, weight: e.target.value })}
            required
          >
            <option value="" disabled>Select weight</option>
            {weights.map((weight, index) => (
              <option key={index} value={weight}>{weight}</option>
            ))}
          </select>
        </label>

        <label className="block">
          <span className="text-yellow-300 font-semibold">Introduction</span>
          <textarea
            className="form-textarea mt-2 block w-full rounded-lg border-gray-600 bg-gray-600 text-gray-300 focus:ring-2 focus:ring-yellow-500 focus:outline-none"
            rows="3"
            placeholder="Write an appealing introduction for your tea packet."
            value={formData.introduction}
            onChange={(e) => setFormData({ ...formData, introduction: e.target.value })}
            required
          ></textarea>
        </label>

        <button
          type="submit"
          className="w-full bg-gradient-to-r from-yellow-600 to-yellow-500 text-black py-3 rounded-lg font-semibold text-lg shadow-md hover:shadow-xl transform hover:scale-105 transition-all"
        >
          Add to Catalog
        </button>
      </form>
    </div>
  );
}