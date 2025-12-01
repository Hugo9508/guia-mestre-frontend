import React, { useState, useEffect } from 'react';
import { Terminal, Play, Lightbulb, Eye } from 'lucide-react';
import { exercisesData } from '../../data/exercises';
import { SimpleCodeEditor } from '../../components/ui/SimpleCodeEditor';
import { SandboxedPreview } from '../../components/ui/SandboxedPreview';
import { ChatInterface } from '../../components/ui/ChatInterface';
import { askAiTutor } from './aiService';

export const PracticeStation = ({ moduleId }) => {
  const moduleExercises = exercisesData.filter(ex => ex.moduleId === moduleId);
  
  if (moduleExercises.length === 0) {
    return (
      <div className="text-center py-12 text-gray-500">
        Sem exercícios para este módulo.
      </div>
    );
  }

  const [activeExercise, setActiveExercise] = useState(moduleExercises[0]);
  const [currentCode, setCurrentCode] = useState(activeExercise.initialCode);

  useEffect(() => { 
    setCurrentCode(activeExercise.initialCode); 
  }, [activeExercise]);

  const handleReset = () => {
    setCurrentCode(activeExercise.initialCode);
  };

  return (
    <div className="h-[calc(100vh-200px)] min-h-[600px] animate-in fade-in zoom-in-95 duration-300">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 h-full">
        
        {/* COLUNA 1: Lista e Instruções */}
        <div className="lg:col-span-3 flex flex-col gap-4 h-full overflow-hidden">
          <div className="bg-white rounded-lg border border-gray-200 shadow-sm flex-1 flex flex-col overflow-hidden">
            <div className="p-3 bg-gray-50 border-b font-bold text-gray-700 flex items-center gap-2">
              <Terminal className="w-4 h-4" /> Exercícios
            </div>
            <div className="overflow-y-auto p-2 space-y-1">
              {moduleExercises.map((ex) => (
                <button
                  key={ex.id}
                  onClick={() => setActiveExercise(ex)}
                  className={`w-full text-left px-3 py-2 rounded-md text-sm transition-colors flex items-center justify-between group ${
                    activeExercise.id === ex.id 
                      ? 'bg-indigo-50 text-indigo-700 font-medium ring-1 ring-indigo-200' 
                      : 'text-gray-600 hover:bg-gray-50'
                  }`}
                >
                  {ex.title}
                  {activeExercise.id === ex.id && <Play className="w-3 h-3 fill-current" />}
                </button>
              ))}
            </div>
          </div>

          <div className="bg-indigo-900 text-white rounded-lg p-5 shadow-sm flex-shrink-0">
            <h3 className="font-bold text-lg mb-2 flex items-center gap-2">
              <Lightbulb className="w-5 h-5 text-yellow-400" /> {activeExercise.title}
            </h3>
            <p className="text-indigo-100 text-sm leading-relaxed mb-4">
              {activeExercise.instruction}
            </p>
            <div className="text-xs bg-indigo-800/50 p-2 rounded border border-indigo-700/50 text-indigo-300">
              💡 Dica: {activeExercise.hint}
            </div>
          </div>
        </div>

        {/* COLUNA 2: Editor Customizado */}
        <div className="lg:col-span-5 h-full flex flex-col bg-[#011627] rounded-lg shadow-sm border border-gray-800 overflow-hidden">
          <div className="bg-[#011627] border-b border-gray-700 p-2 flex items-center justify-between text-xs text-gray-400 px-4">
            <span className="font-mono">Editor.jsx</span>
            <div className="flex items-center gap-3">
              <button 
                onClick={handleReset}
                className="text-orange-400 hover:text-orange-300 transition-colors flex items-center gap-1 text-xs font-medium"
                title="Resetar código"
              >
                <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                </svg>
                Reset
              </button>
              <span className="flex items-center gap-1">
                <div className="w-2 h-2 rounded-full bg-yellow-500"></div> Draft
              </span>
            </div>
          </div>
          <div className="flex-1 overflow-hidden">
            <SimpleCodeEditor code={currentCode} onChange={setCurrentCode} />
          </div>
        </div>

        {/* COLUNA 3: Preview e Chat */}
        <div className="lg:col-span-4 flex flex-col gap-4 h-full overflow-hidden">
          <div className="h-3/5 bg-gray-100 rounded-lg border-2 border-dashed border-gray-300 flex flex-col relative overflow-hidden">
            <div className="absolute top-0 left-0 bg-gray-200 px-3 py-1 text-xs font-bold text-gray-500 rounded-br-lg z-10 border-r border-b border-gray-300 flex items-center gap-1">
              <Eye className="w-3 h-3" /> Resultado
            </div>
            <div className="flex-1 bg-white relative">
              <SandboxedPreview code={currentCode} />
            </div>
          </div>
          <div className="h-2/5">
            <ChatInterface 
              currentCode={currentCode} 
              currentContext={activeExercise}
              onAskAI={askAiTutor}
            />
          </div>
        </div>

      </div>
    </div>
  );
};
