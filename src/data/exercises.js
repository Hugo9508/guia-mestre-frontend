export const exercisesData = [
  {
    id: 'ex1',
    moduleId: 'fase1',
    title: "Olá, Botão!",
    instruction: "Crie um botão com padding de 12px, fundo azul (blue) e texto branco. Ele deve dizer 'Clique Aqui'.",
    hint: "Use o atributo style={{ backgroundColor: 'blue', color: 'white', padding: '12px' }}",
    initialCode: `function Botao() {
  return (
    <button style={{ 
      padding: '8px', 
      border: '1px solid #ccc' 
    }}>
      Edite-me!
    </button>
  );
}`
  },
  {
    id: 'ex2',
    moduleId: 'fase1',
    title: "Inputs Modernos",
    instruction: "Crie um campo de texto (input) com borda arredondada (borderRadius) e sem borda padrão (border: none) mas com uma cor de fundo clara.",
    hint: "Lembre-se de fechar a tag input com /> (self-closing) no JSX.",
    initialCode: `function InputEstilizado() {
  return (
    <div style={{ padding: '20px' }}>
      <label style={{ display: 'block', marginBottom: '8px', fontFamily: 'sans-serif' }}>
        Seu Nome:
      </label>
      <input 
        placeholder="Digite aqui..."
        style={{ 
          padding: '10px',
          width: '100%',
          backgroundColor: '#f3f4f6'
        }} 
      />
    </div>
  );
}`
  },
  {
    id: 'ex3',
    moduleId: 'fase1',
    title: "Flexbox Básico",
    instruction: "Alinhe os 3 quadrados horizontalmente usando display: flex no container pai e dê um espaço (gap) de 10px entre eles.",
    hint: "No estilo do container pai, adicione display: 'flex' e gap: '10px'.",
    initialCode: `function FlexLayout() {
  const boxStyle = {
    width: '50px',
    height: '50px',
    backgroundColor: '#4f46e5',
    color: 'white',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontFamily: 'sans-serif'
  };

  return (
    <div style={{ padding: '20px', backgroundColor: '#e5e7eb' }}>
      {/* Adicione flex aqui no pai */}
      <div style={{ }}> 
        <div style={boxStyle}>1</div>
        <div style={boxStyle}>2</div>
        <div style={boxStyle}>3</div>
      </div>
    </div>
  );
}`
  }
];
