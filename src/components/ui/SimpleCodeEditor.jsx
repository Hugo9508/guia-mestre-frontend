import React from 'react';

export const SimpleCodeEditor = ({ code, onChange }) => {
  return (
    <div className="relative h-full w-full font-mono text-sm group">
      <textarea
        value={code}
        onChange={(e) => onChange(e.target.value)}
        className="w-full h-full p-4 bg-[#011627] text-gray-300 resize-none outline-none font-mono leading-relaxed"
        spellCheck="false"
        style={{ fontFamily: '"Fira Code", monospace' }}
      />
      <div className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity bg-white/10 px-2 py-1 rounded text-xs text-white pointer-events-none">
        Editável
      </div>
    </div>
  );
};
