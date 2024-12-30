import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { FaUserShield, FaBuilding, FaIdCard, FaKey } from 'react-icons/fa';
import { MdLogin } from 'react-icons/md';

export default function Admin_Login() {
  const [adminCredentials, setAdminCredentials] = useState({
    name: '',
    institutionID: '',
    nic: '',
  });
  const [error, setError] = useState('');
  const [companyCredentials, setCompanyCredentials] = useState({
    companyNumber: '',
    name: '',
    section: '',
  });
  const [companyError, setCompanyError] = useState('');
  const navigate = useNavigate();

  const handleAdminLogin = (e) => {
    e.preventDefault();
    const { name, institutionID, nic } = adminCredentials;
    if (name === 'lahiru' && institutionID === '2305423054' && nic === '200008104348') {
      navigate('/adminhome');
    } else {
      setError('Invalid admin credentials. Please try again.');
    }
  };

  const handleCompanyLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:3000/api/employees/login', companyCredentials);

      if (response.data.success) {
        const { section } = companyCredentials;

        switch (section) {
          case 'Employee':
            navigate('/employeehome');
            break;
          case 'Staff Manager':
            navigate('/staffmanagerhome');
            break;
          case 'Stock Manager':
            navigate('/stockmanagerhome');
            break;
          case 'Vehicle Manager':
            navigate('/vehiclemanagerhome');
            break;
          case 'Delivery Manager':
            navigate('/deliverymanagerhome');
            break;
          default:
            setCompanyError('Invalid section selected.');
        }
      } else {
        setCompanyError(response.data.message || 'Invalid credentials. Please try again.');
      }
    } catch (err) {
      console.error('Error during company login:', err);
      setCompanyError('An error occurred during login. Please try again.');
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      {/* Login Container */}
      <div className="flex space-x-12 w-full max-w-7xl justify-center">
        {/* Admin Login Form */}
        <div className="w-full max-w-md p-8 bg-gradient-to-r from-indigo-500 via-purple-500 to-indigo-600 rounded-lg shadow-2xl hover:shadow-xl transition-shadow duration-300">
          <h2 className="text-3xl text-center font-semibold mb-6 text-white flex items-center justify-center">
            <FaUserShield className="mr-2" /> Administrator Login
          </h2>
          {error && <div className="text-red-500 mb-4 text-center">{error}</div>}
          <form onSubmit={handleAdminLogin}>
            <div className="mb-6">
              <label htmlFor="adminName" className="block text-sm font-medium mb-2 text-white">
                Name:
              </label>
              <div className="flex items-center bg-white p-3 rounded-md">
                <FaIdCard className="text-gray-400 mr-3" />
                <input
                  type="text"
                  id="adminName"
                  value={adminCredentials.name}
                  onChange={(e) => setAdminCredentials({ ...adminCredentials, name: e.target.value })}
                  className="w-full bg-transparent border-none focus:outline-none text-gray-900"
                />
              </div>
            </div>
            <div className="mb-6">
              <label htmlFor="institutionID" className="block text-sm font-medium mb-2 text-white">
                Institution ID:
              </label>
              <div className="flex items-center bg-white p-3 rounded-md">
                <FaBuilding className="text-gray-400 mr-3" />
                <input
                  type="text"
                  id="institutionID"
                  value={adminCredentials.institutionID}
                  onChange={(e) => setAdminCredentials({ ...adminCredentials, institutionID: e.target.value })}
                  className="w-full bg-transparent border-none focus:outline-none text-gray-900"
                />
              </div>
            </div>
            <div className="mb-6">
              <label htmlFor="nic" className="block text-sm font-medium mb-2 text-white">
                NIC Number:
              </label>
              <div className="flex items-center bg-white p-3 rounded-md">
                <FaKey className="text-gray-400 mr-3" />
                <input
                  type="text"
                  id="nic"
                  value={adminCredentials.nic}
                  onChange={(e) => setAdminCredentials({ ...adminCredentials, nic: e.target.value })}
                  className="w-full bg-transparent border-none focus:outline-none text-gray-900"
                />
              </div>
            </div>
            <button
              type="submit"
              className="w-full p-3 bg-indigo-700 text-white rounded-md hover:bg-indigo-800 focus:outline-none flex items-center justify-center"
            >
              <MdLogin className="mr-2" /> Admin Login
            </button>
          </form>
        </div>

        {/* Company Login Form */}
        <div className="w-full max-w-md p-8 bg-gradient-to-r from-green-400 via-teal-400 to-green-600 rounded-lg shadow-2xl hover:shadow-xl transition-shadow duration-300">
          <h2 className="text-3xl text-center font-semibold mb-6 text-white flex items-center justify-center">
            <FaBuilding className="mr-2" /> Staff Login
          </h2>
          {companyError && <div className="text-red-500 mb-4 text-center">{companyError}</div>}
          <form onSubmit={handleCompanyLogin}>
            <div className="mb-6">
              <label htmlFor="companyNumber" className="block text-sm font-medium mb-2 text-white">
                Company Number:
              </label>
              <div className="flex items-center bg-white p-3 rounded-md">
                <FaIdCard className="text-gray-400 mr-3" />
                <input
                  type="text"
                  id="companyNumber"
                  value={companyCredentials.companyNumber}
                  onChange={(e) => setCompanyCredentials({ ...companyCredentials, companyNumber: e.target.value })}
                  className="w-full bg-transparent border-none focus:outline-none text-gray-900"
                />
              </div>
            </div>
            <div className="mb-6">
              <label htmlFor="companyName" className="block text-sm font-medium mb-2 text-white">
                Name:
              </label>
              <div className="flex items-center bg-white p-3 rounded-md">
                <FaBuilding className="text-gray-400 mr-3" />
                <input
                  type="text"
                  id="companyName"
                  value={companyCredentials.name}
                  onChange={(e) => setCompanyCredentials({ ...companyCredentials, name: e.target.value })}
                  className="w-full bg-transparent border-none focus:outline-none text-gray-900"
                />
              </div>
            </div>
            <div className="mb-6">
              <label htmlFor="section" className="block text-sm font-medium mb-2 text-white">
                Section:
              </label>
              <div className="flex items-center bg-white p-3 rounded-md">
                <FaBuilding className="text-gray-400 mr-3" />
                <select
                  id="section"
                  value={companyCredentials.section || ''}
                  onChange={(e) => setCompanyCredentials({ ...companyCredentials, section: e.target.value })}
                  className="w-full bg-transparent border-none focus:outline-none text-gray-900"
                >
                  <option value="">Select Section</option>
                  <option value="Employee">Employee</option>
                  <option value="Staff Manager">Staff Manager</option>
                  <option value="Stock Manager">Stock Manager</option>
                  <option value="Vehicle Manager">Vehicle Manager</option>
                  <option value="Delivery Manager">Delivery Manager</option>
                </select>
              </div>
            </div>
            <button
              type="submit"
              className="w-full p-3 bg-green-700 text-white rounded-md hover:bg-green-800 focus:outline-none flex items-center justify-center"
            >
              <MdLogin className="mr-2" /> Company Login
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
