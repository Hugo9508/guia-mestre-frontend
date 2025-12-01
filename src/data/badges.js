export const badgesData = {
  fase1: [
    {
      id: 'badge-primeira-linha',
      title: '✨ Primeira Linha',
      description: 'Completar exercício 1',
      requirement: 'ex1',
      unlockedBy: '95% dos alunos'
    },
    {
      id: 'badge-estilizador',
      title: '🎨 Estilizador',
      description: 'Completar 5 exercícios',
      requirement: ['ex1', 'ex2', 'ex3', 'ex4', 'ex5'],
      unlockedBy: '60% dos alunos'
    },
    {
      id: 'badge-construtor',
      title: '🏗️ Construtor',
      description: 'Completar o mini-projeto (Landing Page)',
      requirement: 'landing-page-project',
      unlockedBy: '40% dos alunos'
    },
    {
      id: 'badge-mestre-html',
      title: '🎯 Mestre HTML',
      description: 'Completar todos os 10 exercícios',
      requirement: ['ex1', 'ex2', 'ex3', 'ex4', 'ex5', 'ex6', 'ex7', 'ex8', 'ex9', 'ex10'],
      unlockedBy: '25% dos alunos'
    },
    {
      id: 'badge-clone-perfeito',
      title: '🏆 Clone Perfeito',
      description: 'Desafio final com 90%+ de fidelidade',
      requirement: 'challenge-fase1-perfect',
      unlockedBy: '15% dos alunos'
    }
  ]
};

export const checkBadgeUnlocked = (badgeId, completedItems) => {
  const allBadges = [...badgesData.fase1];
  const badge = allBadges.find(b => b.id === badgeId);
  
  if (!badge) return false;

  if (typeof badge.requirement === 'string') {
    return completedItems[badge.requirement] === true;
  }

  if (Array.isArray(badge.requirement)) {
    return badge.requirement.every(req => completedItems[req] === true);
  }

  return false;
};

export const getUnlockedBadges = (completedItems) => {
  const allBadges = [...badgesData.fase1];
  return allBadges.filter(badge => checkBadgeUnlocked(badge.id, completedItems));
};

export const getBadgeProgress = (badgeId, completedItems) => {
  const allBadges = [...badgesData.fase1];
  const badge = allBadges.find(b => b.id === badgeId);
  
  if (!badge) return 0;

  if (typeof badge.requirement === 'string') {
    return completedItems[badge.requirement] ? 100 : 0;
  }

  if (Array.isArray(badge.requirement)) {
    const completed = badge.requirement.filter(req => completedItems[req]).length;
    return Math.round((completed / badge.requirement.length) * 100);
  }

  return 0;
};
