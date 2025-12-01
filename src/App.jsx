import React, { useState, useEffect } from 'react';
import { Lightbulb } from 'lucide-react';
import { Header } from './components/layout/Header';
import { ModuleCard } from './components/modules/ModuleCard';
import { ModuleDetail } from './components/modules/ModuleDetail';
import { courseData } from './data/courseData';
import { tipsData } from './data/tips';

export default function App() {
  const [activeModuleId, setActiveModuleId] = useState(null);
  const [completedItems, setCompletedItems] = useState({});

  useEffect(() => { 
    const saved = localStorage.getItem('frontend-master-progress'); 
    if (saved) setCompletedItems(JSON.parse(saved)); 
  }, []);

  useEffect(() => { 
    localStorage.setItem('frontend-master-progress', JSON.stringify(completedItems)); 
  }, [completedItems]);

  const toggleItem = (id) => setCompletedItems(prev => ({ ...prev, [id]: !prev[id] }));
  
  const calculateTotalProgress = () => {
    const allIds = courseData.flatMap(m => m.topics.map(t => t.id));
    return (allIds.filter(id => completedItems[id]).length / allIds.length) * 100;
  };

  const activeModule = courseData.find(m => m.id === activeModuleId);

  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-900 pb-20">
      <Header 
        totalProgress={calculateTotalProgress()} 
        onLogoClick={() => setActiveModuleId(null)}
      />

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {!activeModule ? (
          <div className="animate-in fade-in duration-500">
            <div className="text-center mb-12 py-10">
              <h1 className="text-4xl font-extrabold text-gray-900 mb-4">
                Do Zero ao React Profissional
              </h1>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Seu mapa do tesouro estruturado.
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
              {courseData.map((module) => (
                <ModuleCard 
                  key={module.id} 
                  module={module} 
                  onClick={() => setActiveModuleId(module.id)} 
                  completedCount={module.topics.filter(t => completedItems[t.id]).length} 
                  totalCount={module.topics.length} 
                />
              ))}
            </div>
            <div className="bg-slate-900 text-white p-6 rounded-xl shadow-lg mt-8">
              <div className="flex items-center gap-2 mb-4">
                <Lightbulb className="text-yellow-400" />
                <h3 className="font-bold text-lg">Dicas de Sênior</h3>
              </div>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
                {tipsData.map((tip, idx) => (
                  <div key={idx} className="bg-slate-800 p-4 rounded-lg border border-slate-700">
                    <h4 className="font-bold text-indigo-300 mb-1">{tip.title}</h4>
                    <p className="text-sm text-slate-300">{tip.text}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ) : (
          <ModuleDetail 
            module={activeModule} 
            completedItems={completedItems} 
            toggleItem={toggleItem} 
            onBack={() => setActiveModuleId(null)} 
          />
        )}
      </main>
    </div>
  );
}
