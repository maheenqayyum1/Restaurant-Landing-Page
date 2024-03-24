import React from 'react';
import { FaFacebook, FaGoogle } from 'react-icons/fa';
import { IoCloseOutline } from 'react-icons/io5';

const Popup = ({ showPopup, setShowPopup }) => {
  return (
    <>
      {showPopup && (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-50 z-50">
          <div className="bg-white rounded-lg overflow-hidden w-80">
            {/* Header Section */}
            <div className="flex items-center justify-between text-dark px-4 py-2">
              <h1 className="text-lg font-bold">Login</h1>
              <IoCloseOutline
                className="text-dark cursor-pointer hover:text-gray-400"
                onClick={() => setShowPopup(false)}
              />
            </div>
            {/* Login Form Section */}
            <div className="p-4">
              <input
                type="email"
                placeholder="Email"
                className="w-full rounded-md border border-gray-300 px-2 py-1 mb-4 focus:outline-none focus:border-primary"
              />
              <input
                type="password"
                placeholder="Password"
                className="w-full rounded-md border border-gray-300 px-2 py-1 mb-4 focus:outline-none focus:border-primary"
              />
              {/* Login Button Section */}
              <div>
                <button
                  className="w-full bg-primary text-white p-2 rounded-md hover:bg-primaryDark transition-colors duration-300"
                  onClick={() => setShowPopup(false)}
                >
                  Login
                </button>
              </div>
              {/* Social Login */}
              <div className="mt-4">
                <p className="text-center text-gray-600">or Login with</p>
                <div className="flex justify-center gap-2 mt-2">
                  <FaFacebook className="text-3xl text-blue-500 hover:text-blue-600 duration-200 cursor-pointer" />
                  <FaGoogle className="text-3xl text-red-500 hover:text-red-600 duration-200 cursor-pointer" />
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Popup;
