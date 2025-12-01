import React, { useState, useEffect } from 'react';
import { Code, Save, Trash2, Plus, ExternalLink, PlayCircle } from 'lucide-react';
import { SimpleCodeEditor } from '../../components/ui/SimpleCodeEditor';
import { SandboxedPreview } from '../../components/ui/SandboxedPreview';
import { ChatInterface } from '../../components/ui/ChatInterface';
import { askAiTutor } from './aiService';

const STORAGE_KEY = 'playground-projects';

const DEFAULT_TEMPLATES = {
  blank: {
    name: 'Projeto em Branco',
    code: `function MeuComponente() {
  return (
    <div style={{ padding: '20px', fontFamily: 'sans-serif' }}>
      <h1>Meu Projeto</h1>
      <p>Comece a codar aqui!</p>
    </div>
  );
}`
  },
  button: {
    name: 'Botão Estilizado',
    code: `function BotaoCustom() {
  const [clicked, setClicked] = React.useState(false);
  
  return (
    <div style={{ padding: '40px', textAlign: 'center' }}>
      <button
        onClick={() => setClicked(!clicked)}
        style={{
          padding: '12px 24px',
          fontSize: '16px',
          backgroundColor: clicked ? '#10b981' : '#3b82f6',
          color: 'white',
          border: 'none',
          borderRadius: '8px',
          cursor: 'pointer',
          transition: 'all 0.3s ease'
        }}
      >
        {clicked ? 'Clicado! ✓' : 'Clique em mim'}
      </button>
    </div>
  );
}`
  },
  card: {
    name: 'Card Responsivo',
    code: `function CardResponsivo() {
  return (
    <div style={{ 
      padding: '20px',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      minHeight: '100vh',
      backgroundColor: '#f3f4f6'
    }}>
      <div style={{
        width: '300px',
        backgroundColor: 'white',
        borderRadius: '12px',
        boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
        overflow: 'hidden'
      }}>
        <img 
          src="https://via.placeholder.com/300x200/6366f1/fff?text=Imagem"
          style={{ width: '100%', display: 'block' }}
        />
        <div style={{ padding: '20px' }}>
          <h2 style={{ margin: '0 0 10px 0', color: '#1f2937' }}>
            Título do Card
          </h2>
          <p style={{ margin: '0 0 15px 0', color: '#6b7280', fontSize: '14px' }}>
            Descrição do card com informações relevantes.
          </p>
          <button style={{
            padding: '10px 20px',
            backgroundColor: '#6366f1',
            color: 'white',
            border: 'none',
            borderRadius: '6px',
            cursor: 'pointer',
            width: '100%'
          }}>
            Ação
          </button>
        </div>
      </div>
    </div>
  );
}`
  }
};

export const FreePlayground = () => {
  const [projects, setProjects] = useState([]);
  const [activeProject, setActiveProject] = useState(null);
  const [currentCode, setCurrentCode] = useState(DEFAULT_TEMPLATES.blank.code);
  const [projectName, setProjectName] = useState('');
  const [isEditingName, setIsEditingName] = useState(false);

  // Carregar projetos salvos
  useEffect(() => {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved) {
      const loaded = JSON.parse(saved);
      setProjects(loaded);
      if (loaded.length > 0) {
        setActiveProject(loaded[0]);
        setCurrentCode(loaded[0].code);
        setProjectName(loaded[0].name);
      } else {
        // Se não tem projetos, inicializa com template em branco
        setCurrentCode(DEFAULT_TEMPLATES.blank.code);
        setProjectName('Novo Projeto');
      }
    } else {
      // Primeira vez, inicializa com template em branco
      setCurrentCode(DEFAULT_TEMPLATES.blank.code);
      setProjectName('Novo Projeto');
    }
  }, []);

  // Salvar projetos
  const saveProjects = (newProjects) => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(newProjects));
    setProjects(newProjects);
  };

  // Criar novo projeto
  const createNewProject = (template = 'blank') => {
    const newProject = {
      id: Date.now(),
      name: `Projeto ${projects.length + 1}`,
      code: DEFAULT_TEMPLATES[template].code,
      createdAt: new Date().toISOString()
    };
    const newProjects = [...projects, newProject];
    saveProjects(newProjects);
    setActiveProject(newProject);
    setCurrentCode(newProject.code);
    setProjectName(newProject.name);
  };

  // Salvar projeto atual
  const saveCurrentProject = () => {
    if (!activeProject) {
      createNewProject('blank');
      return;
    }

    const updatedProjects = projects.map(p =>
      p.id === activeProject.id
        ? { ...p, code: currentCode, name: projectName, updatedAt: new Date().toISOString() }
        : p
    );
    saveProjects(updatedProjects);
    setActiveProject({ ...activeProject, code: currentCode, name: projectName });
  };

  // Deletar projeto
  const deleteProject = (id) => {
    const newProjects = projects.filter(p => p.id !== id);
    saveProjects(newProjects);
    
    if (activeProject?.id === id) {
      if (newProjects.length > 0) {
        setActiveProject(newProjects[0]);
        setCurrentCode(newProjects[0].code);
        setProjectName(newProjects[0].name);
      } else {
        setActiveProject(null);
        setCurrentCode(DEFAULT_TEMPLATES.blank.code);
        setProjectName('');
      }
    }
  };

  // Abrir no CodePen
  const openInCodePen = () => {
    const htmlContent = `<!DOCTYPE html>
<html lang="pt-BR">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>${projectName || 'Meu Projeto'}</title>
  <script crossorigin src="https://unpkg.com/react@18/umd/react.development.js"></script>
  <script crossorigin src="https://unpkg.com/react-dom@18/umd/react-dom.development.js"></script>
  <script src="https://unpkg.com/@babel/standalone/babel.min.js"></script>
</head>
<body>
  <div id="root"></div>
  <script type="text/babel">
    ${currentCode}
    
    const root = ReactDOM.createRoot(document.getElementById('root'));
    root.render(<${currentCode.match(/function\s+(\w+)/)?.[1] || 'MeuComponente'} />);
  </script>
</body>
</html>`;

    const form = document.createElement('form');
    form.method = 'POST';
    form.action = 'https://codepen.io/pen/define';
    form.target = '_blank';

    const input = document.createElement('input');
    input.type = 'hidden';
    input.name = 'data';
    input.value = JSON.stringify({
      title: projectName || 'Meu Projeto',
      html: htmlContent,
      css: '',
      js: ''
    });

    form.appendChild(input);
    document.body.appendChild(form);
    form.submit();
    document.body.removeChild(form);
  };

  // Abrir no CodeSandbox
  const openInCodeSandbox = () => {
    const parameters = {
      files: {
        'package.json': {
          content: {
            dependencies: {
              react: '^18.0.0',
              'react-dom': '^18.0.0'
            }
          }
        },
        'index.js': {
          content: `import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

ReactDOM.render(<App />, document.getElementById('root'));`
        },
        'App.js': {
          content: currentCode
        },
        'index.html': {
          content: '<div id="root"></div>'
        }
      }
    };

    const form = document.createElement('form');
    form.method = 'POST';
    form.action = 'https://codesandbox.io/api/v1/sandboxes/define';
    form.target = '_blank';

    const input = document.createElement('input');
    input.type = 'hidden';
    input.name = 'parameters';
    input.value = JSON.stringify(parameters);

    form.appendChild(input);
    document.body.appendChild(form);
    form.submit();
    document.body.removeChild(form);
  };

  return (
    <div className="h-[calc(100vh-200px)] min-h-[600px] animate-in fade-in zoom-in-95 duration-300">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 h-full">
        
        {/* COLUNA 1: Projetos Salvos */}
        <div className="lg:col-span-3 flex flex-col gap-4 h-full overflow-hidden">
          
          {/* Lista de Projetos */}
          <div className="bg-white rounded-lg border border-gray-200 shadow-sm flex-1 flex flex-col overflow-hidden">
            <div className="p-3 bg-gray-50 border-b font-bold text-gray-700 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Code className="w-4 h-4" /> Meus Projetos
              </div>
              <button
                onClick={() => createNewProject('blank')}
                className="text-indigo-600 hover:text-indigo-700 transition-colors"
                title="Novo Projeto"
              >
                <Plus className="w-4 h-4" />
              </button>
            </div>
            
            <div className="overflow-y-auto p-2 space-y-1 flex-1">
              {projects.length === 0 ? (
                <div className="text-center py-8 text-gray-400 text-sm">
                  <Code className="w-8 h-8 mx-auto mb-2 opacity-50" />
                  <p>Nenhum projeto salvo</p>
                  <p className="text-xs mt-1">Crie seu primeiro projeto!</p>
                </div>
              ) : (
                projects.map((project) => (
                  <div
                    key={project.id}
                    className={`group relative px-3 py-2 rounded-md text-sm transition-colors flex items-center justify-between ${
                      activeProject?.id === project.id
                        ? 'bg-indigo-50 text-indigo-700 font-medium ring-1 ring-indigo-200'
                        : 'text-gray-600 hover:bg-gray-50 cursor-pointer'
                    }`}
                  >
                    <div
                      onClick={() => {
                        setActiveProject(project);
                        setCurrentCode(project.code);
                        setProjectName(project.name);
                      }}
                      className="flex-1"
                    >
                      {project.name}
                    </div>
                    <button
                      onClick={() => deleteProject(project.id)}
                      className="opacity-0 group-hover:opacity-100 text-red-500 hover:text-red-700 transition-all"
                      title="Deletar"
                    >
                      <Trash2 className="w-3 h-3" />
                    </button>
                  </div>
                ))
              )}
            </div>
          </div>

          {/* Templates Iniciais */}
          <div className="bg-gradient-to-br from-indigo-900 to-indigo-800 text-white rounded-lg p-4 shadow-sm">
            <h3 className="font-bold text-sm mb-3 flex items-center gap-2">
              <PlayCircle className="w-4 h-4" /> Templates Rápidos
            </h3>
            <div className="space-y-2">
              {Object.entries(DEFAULT_TEMPLATES).map(([key, template]) => (
                <button
                  key={key}
                  onClick={() => createNewProject(key)}
                  className="w-full text-left px-3 py-2 bg-indigo-800/50 hover:bg-indigo-700/50 rounded-md text-sm transition-colors"
                >
                  {template.name}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* COLUNA 2: Editor */}
        <div className="lg:col-span-5 h-full flex flex-col bg-[#011627] rounded-lg shadow-sm border border-gray-800 overflow-hidden">
          <div className="bg-[#011627] border-b border-gray-700 p-2 flex items-center justify-between text-xs text-gray-400 px-4">
            <div className="flex items-center gap-3">
              {isEditingName ? (
                <input
                  type="text"
                  value={projectName}
                  onChange={(e) => setProjectName(e.target.value)}
                  onBlur={() => setIsEditingName(false)}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter') {
                      setIsEditingName(false);
                      saveCurrentProject();
                    }
                  }}
                  className="bg-gray-800 text-white px-2 py-1 rounded text-sm outline-none focus:ring-1 focus:ring-indigo-500"
                  autoFocus
                />
              ) : (
                <span
                  onClick={() => setIsEditingName(true)}
                  className="font-mono cursor-pointer hover:text-gray-200"
                  title="Clique para editar nome"
                >
                  {projectName || 'playground.jsx'}
                </span>
              )}
            </div>
            
            <div className="flex items-center gap-3">
              <button
                onClick={saveCurrentProject}
                className="text-green-400 hover:text-green-300 transition-colors flex items-center gap-1 text-xs font-medium"
                title="Salvar projeto (Ctrl+S)"
              >
                <Save className="w-3 h-3" />
                Salvar
              </button>
              <span className="flex items-center gap-1">
                <div className="w-2 h-2 rounded-full bg-green-500"></div>
                <span className="text-xs">Pronto</span>
              </span>
            </div>
          </div>
          
          <div className="flex-1 overflow-hidden">
            <SimpleCodeEditor code={currentCode} onChange={setCurrentCode} />
          </div>
        </div>

        {/* COLUNA 3: Preview + Exportar */}
        <div className="lg:col-span-4 flex flex-col gap-4 h-full overflow-hidden">
          
          {/* Botões de Exportar */}
          <div className="bg-white rounded-lg border border-gray-200 shadow-sm p-3">
            <h3 className="text-sm font-bold text-gray-700 mb-3 flex items-center gap-2">
              <ExternalLink className="w-4 h-4" /> Abrir em Editor Online
            </h3>
            <div className="grid grid-cols-2 gap-2">
              <button
                onClick={openInCodePen}
                className="flex items-center justify-center gap-2 px-4 py-3 bg-gray-900 hover:bg-gray-800 text-white rounded-lg transition-colors text-sm font-medium"
              >
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M24 8.182l-.018-.087-.017-.05c-.01-.024-.018-.05-.03-.075-.003-.018-.015-.034-.02-.05l-.035-.067-.03-.05-.044-.06-.046-.045-.06-.045-.046-.03-.06-.044-.044-.04-.015-.02L12.58.19c-.347-.232-.796-.232-1.142 0L.453 7.502l-.015.015-.044.035-.06.05-.038.04-.05.056-.037.045-.05.06c-.02.017-.03.03-.03.046l-.05.06-.02.06c-.02.01-.02.04-.03.07l-.01.05C0 8.12 0 8.15 0 8.18v7.497c0 .044.003.09.01.135l.01.046c.005.03.01.06.02.086l.015.05c.01.027.016.053.027.075l.022.05c0 .01.015.04.03.06l.03.04c.015.01.03.04.045.06l.03.04.04.04.04.04.03.03.06.042.04.03.01.014 10.97 7.33c.164.12.375.163.57.163s.39-.06.57-.18l10.99-7.28.014-.01.046-.037.06-.043.048-.036.052-.058.033-.045.04-.06.03-.05.03-.07.016-.052.03-.077.015-.045.03-.08v-7.5c0-.05 0-.095-.016-.14l-.014-.045.044.003zm-11.99 6.28l-3.65-2.44 3.65-2.442 3.65 2.44-3.65 2.44zm-1.034-6.674l-4.473 2.99L2.89 8.362l8.086-5.39V7.79zm-6.33 4.233l-2.582 1.73V10.3l2.582 1.726zm1.857 1.25l4.473 2.99v4.82L2.89 15.69l3.618-2.417v-.004zm6.537 2.99l4.474-2.98 3.613 2.42-8.087 5.39v-4.82zm6.33-4.23l2.583-1.72v3.456l-2.583-1.73zm-1.855-1.24L13.042 7.8V2.97l8.085 5.39-3.612 2.415v.003z"/>
                </svg>
                CodePen
              </button>
              
              <button
                onClick={openInCodeSandbox}
                className="flex items-center justify-center gap-2 px-4 py-3 bg-black hover:bg-gray-900 text-white rounded-lg transition-colors text-sm font-medium"
              >
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M2 6l10.455-6L22.91 6 23 17.95 12.545 24 2 18V6zm2.088 2.481v4.757l3.345 1.86v3.516l3.972 2.296v-8.272L4.088 8.481zm16.739 0l-7.317 4.157v8.272l3.972-2.296V15.1l3.345-1.861V8.48zM5.134 6.601l7.303 4.144 7.32-4.18-3.871-2.197-3.41 1.945-3.43-1.968L5.133 6.6z"/>
                </svg>
                CodeSandbox
              </button>
            </div>
            <p className="text-xs text-gray-500 mt-2 text-center">
              Abre seu código em editores online profissionais
            </p>
          </div>

          {/* Preview */}
          <div className="flex-1 bg-gray-100 rounded-lg border-2 border-dashed border-gray-300 flex flex-col relative overflow-hidden">
            <div className="absolute top-0 left-0 bg-gray-200 px-3 py-1 text-xs font-bold text-gray-500 rounded-br-lg z-10 border-r border-b border-gray-300 flex items-center gap-1">
              <div className="w-2 h-2 rounded-full bg-green-500"></div>
              Preview ao Vivo
            </div>
            <div className="flex-1 mt-8 overflow-auto">
              <SandboxedPreview code={currentCode} />
            </div>
          </div>

          {/* Chat AI */}
          <div className="h-64 bg-white rounded-lg border border-gray-200 shadow-sm overflow-hidden flex-shrink-0">
            <ChatInterface onSendMessage={askAiTutor} context={`Playground livre. Código atual:\n${currentCode}`} />
          </div>
        </div>
      </div>
    </div>
  );
};
