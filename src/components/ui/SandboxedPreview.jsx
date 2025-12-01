import React, { useRef, useEffect, useState } from 'react';

export const SandboxedPreview = ({ code }) => {
  const iframeRef = useRef(null);
  const [isCompiling, setIsCompiling] = useState(false);

  const srcDoc = `
    <!DOCTYPE html>
    <html>
      <head>
        <style>body { font-family: system-ui, -apple-system, sans-serif; padding: 20px; }</style>
        <script src="https://unpkg.com/react@18/umd/react.development.js"></script>
        <script src="https://unpkg.com/react-dom@18/umd/react-dom.development.js"></script>
        <script src="https://unpkg.com/@babel/standalone/babel.min.js"></script>
      </head>
      <body>
        <div id="root"></div>
        <div id="error" style="color: red; background: #fff0f0; padding: 10px; border-radius: 4px; display: none;"></div>
        
        <script>
          const rootElement = document.getElementById('root');
          const errorElement = document.getElementById('error');
          let reactRoot = null;

          window.addEventListener('message', (event) => {
            const userCode = event.data;
            
            try {
              errorElement.style.display = 'none';
              
              const match = userCode.match(/function\\s+(\\w+)/);
              const componentName = match ? match[1] : null;
              
              if (!componentName) {
                throw new Error("Não encontrei um componente funcional (ex: function Botao() {}).");
              }

              const scriptContent = \`
                const { useState, useEffect, useRef } = React;
                \${userCode}
                const container = document.getElementById('root');
                if (!window.reactRoot) {
                  window.reactRoot = ReactDOM.createRoot(container);
                }
                window.reactRoot.render(React.createElement(\${componentName}));
              \`;

              const compiledCode = Babel.transform(scriptContent, { presets: ['react'] }).code;
              eval(compiledCode);
              
            } catch (err) {
              errorElement.innerText = err.message;
              errorElement.style.display = 'block';
            }
          });
        </script>
      </body>
    </html>
  `;

  useEffect(() => {
    setIsCompiling(true);
    const timeout = setTimeout(() => {
      if (iframeRef.current && iframeRef.current.contentWindow) {
        iframeRef.current.contentWindow.postMessage(code, '*');
        setIsCompiling(false);
      }
    }, 300);

    return () => clearTimeout(timeout);
  }, [code]);

  return (
    <div className="relative w-full h-full">
      {isCompiling && (
        <div className="absolute top-2 right-2 bg-blue-500 text-white px-3 py-1 rounded-full text-xs font-medium flex items-center gap-2 z-20 shadow-lg animate-pulse">
          <div className="w-2 h-2 bg-white rounded-full animate-bounce"></div>
          Compilando...
        </div>
      )}
      <iframe
        ref={iframeRef}
        srcDoc={srcDoc}
        title="Preview"
        className="w-full h-full border-0 bg-white"
        sandbox="allow-scripts allow-same-origin"
      />
    </div>
  );
};
