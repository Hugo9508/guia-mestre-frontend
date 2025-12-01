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

---

## ✨ Funcionalidades Principais

### 📚 Sistema de Aprendizado Estruturado
- **4 Fases progressivas** - Do HTML básico ao React profissional
- **Dashboard interativo** - Visualize seu progresso em tempo real
- **Sistema de checklist** - Marque tópicos conforme aprende
- **Progresso persistente** - Seus avanços são salvos automaticamente

### 💻 Exercícios Práticos (10 na Fase 1)
- **Editor de código integrado** - Syntax highlighting e autocompletar
- **Preview ao vivo** - Veja mudanças instantaneamente
- **Instruções guiadas** - Cada exercício com objetivo claro e dicas
- **Sistema de reset** - Volte ao código inicial quando quiser

### ✨ Playground Livre
- **Editor livre** - Espaço para experimentação sem limites
- **Salvar múltiplos projetos** - Crie e gerencie seus experimentos
- **Templates prontos** - Comece rápido com exemplos funcionais
- **Exportar para CodePen** - Abra seu código no CodePen com 1 clique
- **Exportar para CodeSandbox** - Projeto React completo online

### 🤖 AI Mentor
- **Chat integrado** - Tire dúvidas enquanto pratica
- **Contexto do exercício** - AI sabe o que você está fazendo
- **Ajuda personalizada** - Respostas focadas no seu código

### 🎯 Recursos Educacionais
- **Vídeos curados** - Melhores tutoriais do YouTube
- **Jogos interativos** - Flexbox Froggy, CSS Grid Garden
- **Desafios finais** - Projetos completos para consolidar

### 🏆 Sistema de Conquistas (Badges)
- **5 badges por fase** - Desbloqueie conforme progride
- **Primeira Linha** - Complete seu primeiro exercício
- **Estilizador** - Domine 5 exercícios
- **Mestre HTML** - Complete todos os 10 exercícios
- **Clone Perfeito** - Desafio final com excelência

---

## 📁 Estrutura do Projeto

```
guia-mestre-frontend/
├── src/
│   ├── data/                  # Dados estáticos
│   │   ├── courseData.jsx     # Módulos e conteúdo
│   │   ├── exercises.js       # 10 exercícios Fase 1
│   │   ├── badges.js          # Sistema de conquistas
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
│   │   └── layout/
│   │       └── Header.jsx
│   ├── features/
│   │   └── playground/
│   │       ├── PracticeStation.jsx    # Exercícios guiados
│   │       ├── FreePlayground.jsx     # Playground livre
│   │       └── aiService.js           # Integração AI
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── docs/                      # Documentação completa
│   ├── V4.1 FASE 1 - IMPLEMENTADO.md
│   ├── PLAYGROUND-IMPLEMENTACAO.md
│   ├── GUIA-DEPLOY-AUTOMATICO.md
│   └── ...
├── atualizar.bat              # Deploy automático
├── quick-deploy.bat           # Deploy com verificações
└── package.json
```

---

## 🛠️ Tecnologias

- **React 18** - Framework UI moderno
- **Vite** - Build tool ultrarrápido
- **Tailwind CSS** - Estilização utilitária
- **Lucide React** - Ícones modernos
- **Babel Standalone** - Compilação JSX no navegador
- **localStorage** - Persistência local de dados

---

## 📊 Conteúdo do Curso

### 📘 Fase 1: HTML & CSS (4-5 Semanas)
**10 Exercícios Progressivos:**
1. Olá, Botão! - Estilização básica
2. Inputs Modernos - Formulários
3. Flexbox Básico - Layout flexível
4. Formulário Completo - Múltiplos inputs
5. Card de Produto - Componente visual
6. Grid Galeria - CSS Grid na prática
7. Menu de Navegação - Menu horizontal
8. Footer com 3 Colunas - Layout complexo
9. Tabela Estilizada - Dados tabulares
10. Modal CSS Puro - Popup interativo

**Recursos:** 2 jogos + 3 vídeos  
**Desafio:** Clone de login (5 opções)

### 📗 Fase 2: JavaScript (4-6 Semanas)
- Variáveis e Condicionais
- DOM e Eventos
- **Desafio:** Calculadora IMC

### 📙 Fase 3: React Básico (4 Semanas)
- Componentes e Props
- Estado e Eventos
- **Desafio:** Linktree Clone

### 📕 Fase 4: React Profissional (4 Semanas)
- React Router
- APIs e Fetch
- **Desafio:** Movie App

---

## 🎯 Como Usar o Playground

### 1. Exercícios Guiados
```
Fase → Aba "Exercícios" → Selecione exercício → Code → Preview
```

### 2. Playground Livre
```
Fase → Aba "Playground" → Criar projeto → Experimentar
```

### 3. Exportar Código
```
Playground → [CodePen] ou [CodeSandbox] → Editar online
```

---

## 📚 Documentação Completa

### Guias de Implementação:
- `docs/V4.1 FASE 1 - IMPLEMENTADO.md` - Melhorias implementadas
- `docs/PLAYGROUND-IMPLEMENTACAO.md` - Sistema de playground
- `docs/GUIA-DEPLOY-AUTOMATICO.md` - Deploy no GitHub/Vercel

### Histórico:
- `docs/v1` - Implementação inicial
- `docs/v2` - Melhorias visuais
- `docs/v3` - Scripts de automação
- `docs/V4` - Proposta de melhorias
- `docs/v5` - Deploy online
- `docs/V6` - Melhorias pós-deploy

---

## 🌐 Deploy Automático

### Atualizar GitHub + Vercel:

**Opção 1 - Rápido:**
```bash
# Duplo clique:
atualizar.bat

# Aguarde 30-60 segundos
# Seu app estará atualizado!
```

**Opção 2 - Com verificações:**
```bash
quick-deploy.bat
```

### Primeira vez:
1. Crie repositório no GitHub
2. Execute `deploy.bat` e siga instruções
3. Conecte com Vercel
4. Pronto! Deploy automático ativado

📖 **Guia completo:** `docs/GUIA-DEPLOY-AUTOMATICO.md`

---

## 🚀 App Online

**Versão ao vivo:** https://guia-mestre-frontend-h7r7.vercel.app/

**Repositório:** https://github.com/Hugo9508/guia-mestre-frontend

---

## 📈 Estatísticas

- **10 exercícios** na Fase 1 (+233% vs versão anterior)
- **5 recursos educacionais** (jogos + vídeos)
- **5 badges** de conquistas
- **3 templates** no playground
- **2 integrações** de export (CodePen + CodeSandbox)

---

## 🎓 Aprendizado Progressivo

```
Iniciante → HTML/CSS → JavaScript → React → Profissional
   ↓           ↓           ↓          ↓          ↓
 Teoria    Exercícios  Playground  Desafios   Portfolio
```

---

## 🔧 Scripts Úteis

```bash
npm run start       # Inicia + abre navegador
npm run dev         # Apenas inicia servidor
npm run build       # Build para produção
npm run preview     # Preview do build
```

---

## 💡 Dicas de Uso

1. **Comece pela Teoria** - Leia o conteúdo antes dos exercícios
2. **Use o Playground** - Experimente livremente após cada conceito
3. **Consulte a AI** - Tire dúvidas em tempo real
4. **Salve seus experimentos** - Use os projetos do Playground
5. **Exporte para CodePen** - Continue praticando online
6. **Marque seu progresso** - Use o sistema de checklist

---

## 🤝 Contribuindo

Encontrou um bug? Tem uma sugestão?
1. Abra uma issue no GitHub
2. Descreva o problema ou melhoria
3. Aguarde feedback

---

## 📝 Licença

Este projeto é open source e está disponível para fins educacionais.

---

## 🎯 Próximas Features

- [ ] Sistema de badges visível na UI
- [ ] Mini-projeto Landing Page
- [ ] Exportar projetos como ZIP
- [ ] Temas de cores para editor
- [ ] Compartilhar projetos via URL
- [ ] Modo colaborativo

---

**Desenvolvido com ❤️ para aspirantes a desenvolvedores frontend**

**Versão:** 4.1.0  
**Última atualização:** 2024-12-01
