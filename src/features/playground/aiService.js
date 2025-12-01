export const askAiTutor = async (userCode, userQuestion, context) => {
  await new Promise(resolve => setTimeout(resolve, 1500));

  const lowerQuestion = userQuestion.toLowerCase();
  
  if (lowerQuestion.includes('erro') || lowerQuestion.includes('bug')) {
    return "Verifique a sintaxe do JSX. Lembre-se: estilos são objetos (style={{ prop: 'valor' }}) e classes são `className`.";
  }
  
  if (lowerQuestion.includes('dica') || lowerQuestion.includes('ajuda')) {
    return `Dica para "${context.title}": ${context.hint}`;
  }
  
  return "Seu código parece interessante! Experimente mudar as cores e margens para ver o resultado em tempo real.";
};
