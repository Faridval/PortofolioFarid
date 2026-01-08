import React from 'react';
import { Heart } from 'lucide-react';
import { personalInfo } from '../mock';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 dark:bg-black text-white py-8 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="text-center md:text-left">
            <p className="text-gray-400">
              © {currentYear} {personalInfo.name}. All rights reserved.
            </p>
          </div>

          <div className="flex items-center gap-2 text-gray-400">
            <span>Built with</span>
            {/* <Heart className="h-4 w-4 text-red-500 animate-pulse" fill="currentColor" /> */}
            <span>using React & Tailwind CSS</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;