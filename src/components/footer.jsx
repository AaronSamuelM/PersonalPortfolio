import React from 'react';
const Footer = () => {
  return (
    <footer className="fixed bottom-0 left-0 right-0 bg-black text-white py-1.5 px-3 sm:py-2 sm:px-4 z-50">
      <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-center gap-2 sm:gap-4 text-xs sm:text-sm">
        <div className="flex items-center gap-2">
          <span className="text-gray-400">Name:</span>
          <span className="text-white">Aaron Samuel M</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="text-gray-400">Phone:</span>
          <span className="text-white">+91 96263 15797</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="text-gray-400">Email:</span>
          <span className="text-white">aaronsamuel0605@gmail.com</span>
        </div>
      </div>
    </footer>
  );
};
export default Footer;