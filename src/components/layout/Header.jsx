import React, { useState } from 'react';
import { Code, BookOpen } from 'lucide-react';
import { NotesPanel } from '../ui/NotesPanel';

export const Header = ({ totalProgress, onLogoClick }) => {
  const [showNotes, setShowNotes] = useState(false);

  return (
    <>
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
          
          <div className="flex items-center gap-4">
            <button
              onClick={() => setShowNotes(true)}
              className="flex items-center gap-2 px-4 py-2 bg-indigo-50 text-indigo-600 rounded-lg hover:bg-indigo-100 transition-colors font-medium"
            >
              <BookOpen className="w-4 h-4" />
              <span className="hidden sm:inline">Minhas Notas</span>
            </button>
            
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
        </div>
      </header>

      <NotesPanel isOpen={showNotes} onClose={() => setShowNotes(false)} />
    </>
  );
};
