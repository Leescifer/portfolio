import React from 'react';

export const Footer = () => {
  return (
    <footer className="bg-black text-white py-8 px-6 sm:px-12 md:px-24">
      <div className="max-w-7xl mx-auto text-center">
        {/* Social Links */}
        <div className="mb-6">
          <a href="https://www.facebook.com/lexster.smith.1" target="_blank" rel="noopener noreferrer" className="mx-4 text-blue-600 hover:text-blue-400 transition duration-300">
            Facebook
          </a>
          <a href="https://www.instagram.com/leescifer/" target="_blank" rel="noopener noreferrer" className="mx-4 text-pink-600 hover:text-pink-400 transition duration-300">
            Instagram
          </a>
          <a href="leester9103@gmail.com" target="_blank" rel="noopener noreferrer" className="mx-4 text-red-600 hover:text-red-400 transition duration-300">
            Gmail
          </a>
          <a href="https://github.com/Leescifer" target="_blank" rel="noopener noreferrer" className="mx-4 text-gray-400 hover:text-gray-200 transition duration-300">
            GitHub
          </a>
          <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" className="mx-4 text-blue-700 hover:text-blue-500 transition duration-300">
            LinkedIn
          </a>
        </div>

        {/* All Rights Reserved */}
        <div className="text-gray-400 text-sm">
          <p>&copy; {new Date().getFullYear()} Leester. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

