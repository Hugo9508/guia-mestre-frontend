# Guia Mestre Frontend

## 🚀 Como Executar

### Opção 1: Inicialização Rápida (Windows)

**Duplo clique em um dos arquivos:**
- `start.bat` - Inicia e abre o navegador automaticamente
- `iniciar.bat` - Limpa cache + inicia + abre navegador

### Opção 2: Via Terminal

1. Instale as dependências (apenas na primeira vez):
```bash
npm install
```

2. Inicie o servidor:
```bash
npm run start    # Abre o navegador automaticamente
# OU
npm run dev      # Apenas inicia o servidor
```

3. Acesse: `http://localhost:5173` (se não abrir automaticamente)

## 📁 Estrutura do Projeto

```
guia-mestre-frontend/
├── src/
│   ├── data/                  # Dados estáticos
│   │   ├── courseData.js      # Informações dos módulos
│   │   ├── exercises.js       # Exercícios práticos
│   │   └── tips.js            # Dicas de estudo
│   ├── components/
│   │   ├── ui/                # Componentes reutilizáveis
│   │   │   ├── SimpleCodeEditor.jsx
│   │   │   ├── SandboxedPreview.jsx
│   │   │   ├── ChatInterface.jsx
│   │   │   └── ProgressBar.jsx
│   │   ├── modules/           # Componentes de módulos
│   │   │   ├── ModuleCard.jsx
│   │   │   └── ModuleDetail.jsx
│   │   └── layout/            # Componentes de layout
│   │       └── Header.jsx
│   ├── features/
│   │   └── playground/        # Funcionalidade do playground
│   │       ├── PracticeStation.jsx
│   │       └── aiService.js
│   ├── App.jsx                # Componente principal
│   ├── main.jsx               # Ponto de entrada
│   └── index.css              # Estilos globais
├── index.html
├── package.json
├── vite.config.js
└── tailwind.config.js
```

## 🛠️ Tecnologias

- **React 18** - Framework UI
- **Vite** - Build tool
- **Tailwind CSS** - Estilização
- **Lucide React** - Ícones
- **Babel Standalone** - Compilação JSX no navegador (para o playground)

## ✨ Funcionalidades

- Dashboard de módulos com progresso
- Sistema de exercícios práticos
- Editor de código com preview em tempo real
- Chat AI mentor
- Persistência de progresso no localStorage

## 📚 Documentação

A pasta `docs/` contém o histórico de implementação e correções:
- `v1` - Implementação inicial e estrutura do projeto
- `v2` - Análise comparativa e melhorias visuais
- `v3` - Scripts de inicialização automática
- **`GUIA-DEPLOY.md`** - Como colocar o app online (Vercel, Netlify, GitHub Pages)

Cada arquivo documenta problemas encontrados e soluções aplicadas seguindo um formato padronizado.

## 🌐 Deploy (Colocar Online)

### Método Rápido - Vercel (Recomendado)

1. **Suba para o GitHub:**
```bash
# Use o script automático:
deploy.bat

# OU manualmente:
git init
git add .
git commit -m "Deploy inicial"
git remote add origin https://github.com/SEU_USUARIO/guia-mestre-frontend.git
git push -u origin main
```

2. **Deploy na Vercel:**
- Acesse: https://vercel.com
- Login com GitHub
- New Project → Selecione o repositório
- Deploy (30 segundos)

**Seu app estará em:** `https://guia-mestre-frontend.vercel.app`

📖 **Guia completo:** Veja `docs/GUIA-DEPLOY.md` para outras opções (Netlify, GitHub Pages)
