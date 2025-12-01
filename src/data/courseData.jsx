import { Layout, Cpu, Atom, Globe } from 'lucide-react';

export const courseData = [
  {
    id: 'fase1',
    title: 'Fase 1: A Fundação (HTML & CSS)',
    icon: <Layout className="w-6 h-6" />,
    color: 'bg-blue-500',
    duration: '4-5 Semanas',
    description: 'Construa a estrutura e o visual. Sem isso, nada funciona.',
    topics: [
      { id: 'f1-t1', text: 'HTML Semântico (<header>, <main>, <footer>)' },
      { id: 'f1-t2', text: 'Formulários (Input, Label, Button)' },
      { id: 'f1-t3', text: 'CSS Box Model (Margem, Borda, Padding)' },
      { id: 'f1-t4', text: 'Flexbox & Grid (Layout Moderno)' }
    ],
    resources: [
      { 
        title: 'Curso HTML5 e CSS3 (Guanabara)', 
        url: 'https://www.youtube.com/playlist?list=PLHz_AreHm4dkZ9-atkcmcBaMZdmLHft8n', 
        type: 'youtube' 
      },
      { 
        title: 'Flexbox Froggy (Jogo Prático)', 
        url: 'https://flexboxfroggy.com/#pt-br', 
        type: 'game' 
      },
      { 
        title: 'CSS Grid Garden (Jogo)', 
        url: 'https://cssgridgarden.com/#pt-br', 
        type: 'game' 
      },
      { 
        title: 'CSS Flexbox - Origamid', 
        url: 'https://www.youtube.com/watch?v=syn7Mb3VyB4', 
        type: 'youtube' 
      },
      { 
        title: 'HTML Semântico - Rocketseat', 
        url: 'https://www.youtube.com/watch?v=IbDZOLiMGgk', 
        type: 'youtube' 
      }
    ],
    challenge: {
      title: 'Clone de Tela de Login',
      description: 'Escolha a tela de login do Instagram, Netflix, Spotify, Discord ou GitHub. Recrie visualmente usando apenas HTML e CSS com 80%+ de fidelidade.',
      difficulty: 'Iniciante',
      criteria: [
        'Fidelidade visual (80%+ semelhante)',
        'Código limpo e organizado',
        'Uso correto de Flexbox/Grid',
        'Formulário funcional (visual)',
        'Responsividade mobile'
      ],
      bonus: [
        'Animações CSS',
        'Estados de hover/focus',
        'Validação visual dos campos'
      ]
    }
  },
  {
    id: 'fase2',
    title: 'Fase 2: A Lógica (JavaScript)',
    icon: <Cpu className="w-6 h-6" />,
    color: 'bg-yellow-500',
    duration: '4-6 Semanas',
    description: 'A inteligência do site. Domine a linguagem antes do framework.',
    topics: [
      { id: 'f2-t1', text: 'Variáveis e Condicionais' },
      { id: 'f2-t2', text: 'DOM e Eventos' }
    ],
    resources: [],
    challenge: { 
      title: 'Calculadora IMC', 
      description: 'Crie uma calc de IMC com feedback visual.', 
      difficulty: 'Intermediário' 
    }
  },
  {
    id: 'fase3',
    title: 'Fase 3: React Básico',
    icon: <Atom className="w-6 h-6" />,
    color: 'bg-cyan-500',
    duration: '4 Semanas',
    description: 'Comece a pensar em componentes e estados.',
    topics: [{ id: 'f3-t1', text: 'Ambiente com Vite' }],
    resources: [],
    challenge: { 
      title: 'Linktree Clone', 
      description: '...', 
      difficulty: 'Intermediário' 
    }
  },
  {
    id: 'fase4',
    title: 'Fase 4: React Profissional',
    icon: <Globe className="w-6 h-6" />,
    color: 'bg-indigo-600',
    duration: '4 Semanas',
    description: 'Conectando com o mundo real (APIs e Rotas).',
    topics: [{ id: 'f4-t1', text: 'React Router' }],
    resources: [],
    challenge: { 
      title: 'Movie App', 
      description: '...', 
      difficulty: 'Avançado' 
    }
  }
];
