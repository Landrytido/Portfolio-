import React from 'react';
import { Instagram, Twitter, Youtube, Facebook, Linkedin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="py-12 bg-gray-900 border-t border-gray-800">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Kansas</h3>
            <p className="text-gray-400">
              Crafted with ❤️ by Azwedo & Wedoflow
            </p>
          </div>
          <div>
            <h4 className="font-bold mb-4">PAGES</h4>
            <div className="space-y-2">
              <a href="#home" className="block text-gray-400 hover:text-white">Home</a>
              <a href="#projects" className="block text-gray-400 hover:text-white">Projects</a>
              <a href="#blogs" className="block text-gray-400 hover:text-white">Blogs</a>
              <a href="#about" className="block text-gray-400 hover:text-white">About</a>
            </div>
          </div>
          <div>
            <h4 className="font-bold mb-4">FIND ME</h4>
            <div className="flex space-x-4">
              <Instagram className="w-6 h-6 text-gray-400 hover:text-white" />
              <Twitter className="w-6 h-6 text-gray-400 hover:text-white" />
              <Youtube className="w-6 h-6 text-gray-400 hover:text-white" />
              <Facebook className="w-6 h-6 text-gray-400 hover:text-white" />
              <Linkedin className="w-6 h-6 text-gray-400 hover:text-white" />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;