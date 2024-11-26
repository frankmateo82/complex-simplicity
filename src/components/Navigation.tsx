import React from 'react';
import { Menu } from 'lucide-react';

export function Navigation() {
  return (
    <nav className="absolute top-0 w-full p-6 z-30">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-2xl font-bold tracking-tighter group">
          <span className="bg-white text-black px-2">Complex</span>
          <span className="text-white">Simplicity</span>
        </div>
        <div className="hidden md:flex space-x-8 text-sm tracking-wider">
          <a href="#" className="text-white hover:text-gray-300 transition-colors uppercase">Work</a>
          <a href="#" className="text-white hover:text-gray-300 transition-colors uppercase">Services</a>
          <a href="#" className="text-white hover:text-gray-300 transition-colors uppercase">Contact</a>
        </div>
        <button className="md:hidden text-white">
          <Menu className="w-6 h-6" />
        </button>
      </div>
    </nav>
  );
}