import React, { useState } from 'react';
import { ChevronLeft, CheckCircle, BookOpen, Code, Youtube, Trophy, ExternalLink, Sparkles } from 'lucide-react';
import { ProgressBar } from '../ui/ProgressBar';
import { PracticeStation } from '../../features/playground/PracticeStation';
import { FreePlayground } from '../../features/playground/FreePlayground';

export const ModuleDetail = ({ module, completedItems, toggleItem, onBack }) => {
  const [activeTab, setActiveTab] = useState('theory');
  const moduleTopics = module.topics;
  const completedCount = moduleTopics.filter(t => completedItems[t.id]).length;
  const totalCount = moduleTopics.length;
  const progress = (completedCount / totalCount) * 100;

  return (
    <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
      <button 
        onClick={onBack} 
        className="flex items-center text-gray-500 hover:text-indigo-600 mb-6 font-medium transition-colors"
      >
        <ChevronLeft className="w-5 h-5 mr-1" /> Voltar ao Painel
      </button>

      <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden min-h-[800px] flex flex-col">
        <div className={`p-8 ${module.color} text-white flex-shrink-0`}>
          <div className="flex justify-between items-start">
            <div>
              <div className="flex items-center gap-3 mb-2 opacity-90">
                {module.icon} 
                <span className="uppercase tracking-wider text-sm font-bold">Módulo</span>
              </div>
              <h1 className="text-3xl font-bold mb-2">{module.title}</h1>
              <p className="text-white/90 max-w-2xl text-lg">{module.description}</p>
            </div>
            <div className="bg-white/10 p-1 rounded-lg backdrop-blur-sm flex gap-1">
              <button 
                onClick={() => setActiveTab('theory')} 
                className={`px-4 py-2 rounded-md font-medium text-sm transition-all ${
                  activeTab === 'theory' 
                    ? 'bg-white text-gray-900 shadow-sm' 
                    : 'text-white hover:bg-white/10'
                }`}
              >
                📚 Teoria
              </button>
              <button 
                onClick={() => setActiveTab('practice')} 
                className={`px-4 py-2 rounded-md font-medium text-sm transition-all flex items-center gap-2 ${
                  activeTab === 'practice' 
                    ? 'bg-white text-gray-900 shadow-sm' 
                    : 'text-white hover:bg-white/10'
                }`}
              >
                <Code className="w-4 h-4" /> Exercícios
              </button>
              <button 
                onClick={() => setActiveTab('playground')} 
                className={`px-4 py-2 rounded-md font-medium text-sm transition-all flex items-center gap-2 ${
                  activeTab === 'playground' 
                    ? 'bg-white text-gray-900 shadow-sm' 
                    : 'text-white hover:bg-white/10'
                }`}
              >
                <Sparkles className="w-4 h-4" /> Playground
              </button>
            </div>
          </div>
        </div>

        <div className="p-8 flex-1 bg-gray-50/50">
          {activeTab === 'playground' ? (
            <FreePlayground />
          ) : activeTab === 'practice' ? (
            <PracticeStation moduleId={module.id} />
          ) : (
            <div className="grid md:grid-cols-3 gap-8">
              <div className="md:col-span-2 space-y-8">
                <div>
                  <div className="flex justify-between items-end mb-4">
                    <h2 className="text-xl font-bold text-gray-800 flex items-center gap-2">
                      <CheckCircle className="text-indigo-600 w-5 h-5" /> Checklist
                    </h2>
                    <span className="text-sm font-bold text-indigo-600">
                      {completedCount}/{totalCount}
                    </span>
                  </div>
                  <div className="mb-6">
                    <ProgressBar progress={progress} />
                  </div>
                  <div className="space-y-3">
                    {module.topics.map((topic) => (
                      <div 
                        key={topic.id} 
                        onClick={() => toggleItem(topic.id)} 
                        className={`flex items-center p-4 rounded-lg border cursor-pointer transition-all ${
                          completedItems[topic.id] 
                            ? 'bg-green-50 border-green-200' 
                            : 'bg-white border-gray-200 hover:border-indigo-300'
                        }`}
                      >
                        <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center mr-4 flex-shrink-0 transition-colors ${
                          completedItems[topic.id] 
                            ? 'bg-green-500 border-green-500' 
                            : 'border-gray-300'
                        }`}>
                          {completedItems[topic.id] && <CheckCircle className="w-4 h-4 text-white" />}
                        </div>
                        <span className={`${completedItems[topic.id] ? 'text-green-800 line-through' : 'text-gray-700'}`}>
                          {topic.text}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
                <div>
                  <h2 className="text-xl font-bold text-gray-800 mb-4 flex items-center gap-2">
                    <BookOpen className="text-indigo-600 w-5 h-5" /> Materiais
                  </h2>
                  <div className="grid gap-3">
                    {module.resources.map((res, idx) => (
                      <a 
                        key={idx} 
                        href={res.url} 
                        target="_blank" 
                        rel="noreferrer" 
                        className="flex items-center justify-between p-4 bg-gray-50 rounded-lg hover:bg-indigo-50 hover:text-indigo-700 transition-colors group border border-transparent hover:border-indigo-100"
                      >
                        <div className="flex items-center gap-3">
                          {res.type === 'youtube' ? (
                            <Youtube className="text-red-500 w-5 h-5" />
                          ) : (
                            <Code className="text-green-600 w-5 h-5" />
                          )}
                          <span className="font-medium">{res.title}</span>
                        </div>
                        <ExternalLink className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                      </a>
                    ))}
                  </div>
                </div>
              </div>
              <div>
                <div className="bg-orange-50 border border-orange-100 rounded-xl p-6 sticky top-6">
                  <div className="flex items-center gap-2 mb-4 text-orange-700">
                    <Trophy className="w-6 h-6" />
                    <h3 className="font-bold text-lg">Desafio Final</h3>
                  </div>
                  <h4 className="font-bold text-gray-800 mb-2">{module.challenge.title}</h4>
                  <p className="text-gray-600 text-sm leading-relaxed mb-6">
                    {module.challenge.description}
                  </p>
                  <div className="bg-white p-4 rounded-lg border border-orange-100 text-center">
                    <a 
                      href="https://github.com/new" 
                      target="_blank" 
                      rel="noreferrer" 
                      className="block w-full text-center py-2 bg-orange-500 hover:bg-orange-600 text-white rounded-lg font-bold text-sm transition-colors shadow-sm"
                    >
                      Subir no Github
                    </a>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
