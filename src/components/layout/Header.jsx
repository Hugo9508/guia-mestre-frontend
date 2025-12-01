import React from 'react';
import { Code } from 'lucide-react';

export const Header = ({ totalProgress, onLogoClick }) => {
  return (
    <header className="bg-white border-b border-gray-200 sticky top-0 z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <div className="flex items-center gap-2 cursor-pointer" onClick={onLogoClick}>
          <div className="bg-indigo-600 p-1.5 rounded-lg">
            <Code className="text-white w-5 h-5" />
          </div>
          <span className="font-bold text-xl tracking-tight text-gray-800">
            Guia Mestre Frontend
          </span>
        </div>
        <div className="hidden md:flex items-center gap-4 text-sm font-medium text-gray-500">
          <span>Progresso Geral:</span>
          <div className="w-32 bg-gray-100 rounded-full h-2.5">
            <div 
              className="bg-indigo-600 h-2.5 rounded-full transition-all" 
              style={{ width: `${totalProgress}%` }}
            />
          </div>
        </div>
      </div>
    </header>
  );
};
