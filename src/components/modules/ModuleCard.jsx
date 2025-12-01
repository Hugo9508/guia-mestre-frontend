import React from 'react';
import { CheckCircle } from 'lucide-react';

export const ModuleCard = ({ module, onClick, completedCount, totalCount }) => {
  const isComplete = completedCount === totalCount;
  
  return (
    <div 
      onClick={onClick} 
      className="bg-white p-6 rounded-xl shadow-sm border border-gray-200 hover:shadow-lg transition-all duration-200 cursor-pointer group"
    >
      <div className="flex justify-between items-start mb-4">
        <div className={`p-3 rounded-xl ${module.color} text-white group-hover:scale-105 transition-transform`}>
          {module.icon}
        </div>
        {isComplete && <CheckCircle className="text-green-500 w-6 h-6" />}
      </div>
      <h3 className="text-xl font-bold text-gray-900 mb-2">{module.title}</h3>
      <p className="text-gray-600 text-sm mb-4 leading-relaxed">{module.description}</p>
      <div className="flex justify-between items-center text-xs text-gray-500 font-medium">
        <span>{module.duration}</span>
        <span className="bg-gray-100 px-3 py-1 rounded-md text-gray-700">
          {completedCount}/{totalCount} Tópicos
        </span>
      </div>
    </div>
  );
};
