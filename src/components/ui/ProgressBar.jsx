import React from 'react';

export const ProgressBar = ({ progress }) => {
  return (
    <div className="w-full bg-gray-100 rounded-full h-2">
      <div 
        className="bg-indigo-600 h-2 rounded-full transition-all" 
        style={{ width: `${progress}%` }}
      />
    </div>
  );
};
