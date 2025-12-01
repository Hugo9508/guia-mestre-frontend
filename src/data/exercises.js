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
  },
  {
    id: 'ex4',
    moduleId: 'fase1',
    title: "Formulário Completo",
    instruction: "Crie um formulário com: campo de nome (input text), campo de email (input email), área de mensagem (textarea) e botão de enviar estilizado. Adicione borda em todo o formulário.",
    hint: "Use display: 'block' e marginBottom para espaçar os campos verticalmente.",
    initialCode: `function FormularioContato() {
  return (
    <div style={{ padding: '20px', maxWidth: '400px', fontFamily: 'sans-serif' }}>
      <h2 style={{ marginBottom: '20px', color: '#1f2937' }}>Fale Conosco</h2>
      <form>
        {/* Adicione: nome, email, mensagem, botão */}
      </form>
    </div>
  );
}`
  },
  {
    id: 'ex5',
    moduleId: 'fase1',
    title: "Card de Produto",
    instruction: "Crie um card de produto com: imagem de placeholder (use https://via.placeholder.com/300x200), título do produto (h3), descrição curta (p), preço em destaque (verde, negrito) e botão 'Adicionar ao Carrinho' (azul, arredondado).",
    hint: "Use padding no conteúdo do card para dar espaçamento interno.",
    initialCode: `function CardProduto() {
  return (
    <div style={{ 
      width: '300px', 
      border: '1px solid #e5e7eb',
      borderRadius: '8px',
      overflow: 'hidden',
      fontFamily: 'sans-serif'
    }}>
      {/* Adicione: imagem, título, descrição, preço, botão */}
    </div>
  );
}`
  },
  {
    id: 'ex6',
    moduleId: 'fase1',
    title: "Grid Galeria",
    instruction: "Use CSS Grid para organizar as 6 imagens em 3 colunas e 2 linhas. Adicione um gap de 16px entre elas.",
    hint: "Use display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)' e gap: '16px'.",
    initialCode: `function GaleriaImagens() {
  const images = [
    'https://via.placeholder.com/300x200/FF6B6B/fff?text=1',
    'https://via.placeholder.com/300x200/4ECDC4/fff?text=2',
    'https://via.placeholder.com/300x200/45B7D1/fff?text=3',
    'https://via.placeholder.com/300x200/FFA07A/fff?text=4',
    'https://via.placeholder.com/300x200/98D8C8/fff?text=5',
    'https://via.placeholder.com/300x200/F7DC6F/fff?text=6',
  ];

  return (
    <div style={{ padding: '20px' }}>
      {/* Crie um grid 3 colunas aqui */}
      <div style={{ }}>
        {images.map((src, i) => (
          <img 
            key={i}
            src={src} 
            alt={\`Imagem \${i + 1}\`}
            style={{ width: '100%', height: '150px', objectFit: 'cover' }}
          />
        ))}
      </div>
    </div>
  );
}`
  },
  {
    id: 'ex7',
    moduleId: 'fase1',
    title: "Menu de Navegação",
    instruction: "Estilize os links do menu com: cor branca, padding de 16px, sem sublinhado (textDecoration: 'none'), efeito hover e display block para ocupar toda área clicável.",
    hint: "Para hover inline, você pode usar onMouseEnter e onMouseLeave com useState.",
    initialCode: `function MenuNavegacao() {
  const links = ['Home', 'Sobre', 'Serviços', 'Contato'];

  return (
    <nav style={{ 
      backgroundColor: '#1f2937',
      padding: '0 20px'
    }}>
      <ul style={{ 
        display: 'flex',
        listStyle: 'none',
        margin: 0,
        padding: 0
      }}>
        {links.map((link, i) => (
          <li key={i}>
            {/* Estilize os links aqui */}
            <a href="#" style={{ }}>
              {link}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}`
  },
  {
    id: 'ex8',
    moduleId: 'fase1',
    title: "Footer com 3 Colunas",
    instruction: "Organize as 3 colunas lado a lado usando Flexbox. Adicione espaçamento entre elas com gap ou margin.",
    hint: "Use display: 'flex', justifyContent: 'space-between' e maxWidth: '1200px'.",
    initialCode: `function Footer() {
  return (
    <footer style={{ 
      backgroundColor: '#111827',
      color: 'white',
      padding: '40px 20px',
      fontFamily: 'sans-serif'
    }}>
      {/* Crie 3 colunas com flexbox */}
      <div style={{ }}>
        {/* Coluna 1: Sobre */}
        <div>
          <h3>Sobre Nós</h3>
          <p>Breve descrição da empresa...</p>
        </div>

        {/* Coluna 2: Links */}
        <div>
          <h3>Links Rápidos</h3>
          {/* Adicione lista de links */}
        </div>

        {/* Coluna 3: Contato */}
        <div>
          <h3>Contato</h3>
          {/* Adicione informações de contato */}
        </div>
      </div>
      
      <div style={{ 
        textAlign: 'center',
        marginTop: '30px',
        paddingTop: '20px',
        borderTop: '1px solid #374151'
      }}>
        © 2024 Sua Empresa. Todos os direitos reservados.
      </div>
    </footer>
  );
}`
  },
  {
    id: 'ex9',
    moduleId: 'fase1',
    title: "Tabela Estilizada",
    instruction: "A tabela já está funcional! Melhore os estilos: adicione hover nas linhas (backgroundColor ao passar mouse), aumente o contraste das bordas e adicione sombra na tabela.",
    hint: "Use boxShadow: '0 1px 3px rgba(0,0,0,0.1)' no container da tabela.",
    initialCode: `function TabelaUsuarios() {
  const usuarios = [
    { id: 1, nome: 'João Silva', email: 'joao@email.com', status: 'Ativo' },
    { id: 2, nome: 'Maria Santos', email: 'maria@email.com', status: 'Ativo' },
    { id: 3, nome: 'Pedro Costa', email: 'pedro@email.com', status: 'Inativo' },
    { id: 4, nome: 'Ana Oliveira', email: 'ana@email.com', status: 'Ativo' },
  ];

  return (
    <div style={{ padding: '20px' }}>
      <table style={{ 
        width: '100%',
        borderCollapse: 'collapse',
        fontFamily: 'sans-serif'
      }}>
        <thead>
          <tr style={{ backgroundColor: '#1f2937', color: 'white' }}>
            <th style={{ padding: '12px', textAlign: 'left' }}>ID</th>
            <th style={{ padding: '12px', textAlign: 'left' }}>Nome</th>
            <th style={{ padding: '12px', textAlign: 'left' }}>Email</th>
            <th style={{ padding: '12px', textAlign: 'left' }}>Status</th>
          </tr>
        </thead>
        <tbody>
          {usuarios.map((user, index) => (
            <tr 
              key={user.id}
              style={{ 
                backgroundColor: index % 2 === 0 ? '#f9fafb' : 'white'
              }}
            >
              <td style={{ padding: '12px', border: '1px solid #e5e7eb' }}>{user.id}</td>
              <td style={{ padding: '12px', border: '1px solid #e5e7eb' }}>{user.nome}</td>
              <td style={{ padding: '12px', border: '1px solid #e5e7eb' }}>{user.email}</td>
              <td style={{ padding: '12px', border: '1px solid #e5e7eb' }}>
                <span style={{
                  padding: '4px 8px',
                  borderRadius: '4px',
                  fontSize: '12px',
                  backgroundColor: user.status === 'Ativo' ? '#d1fae5' : '#fee2e2',
                  color: user.status === 'Ativo' ? '#065f46' : '#991b1b'
                }}>
                  {user.status}
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}`
  },
  {
    id: 'ex10',
    moduleId: 'fase1',
    title: "Modal CSS Puro",
    instruction: "O modal já funciona! Personalize os estilos: mude as cores do tema, adicione uma animação de entrada (opacity ou scale) e adicione um ícone de fechar (X) no canto superior direito.",
    hint: "Para animação simples, use transition: 'all 0.3s ease' no modal.",
    initialCode: `function ModalCSS() {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <div style={{ padding: '20px', fontFamily: 'sans-serif' }}>
      <button 
        onClick={() => setIsOpen(true)}
        style={{
          padding: '12px 24px',
          backgroundColor: '#3b82f6',
          color: 'white',
          border: 'none',
          borderRadius: '6px',
          cursor: 'pointer'
        }}
      >
        Abrir Modal
      </button>

      {isOpen && (
        <>
          {/* Overlay (fundo escuro) */}
          <div 
            onClick={() => setIsOpen(false)}
            style={{
              position: 'fixed',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              backgroundColor: 'rgba(0,0,0,0.5)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              zIndex: 1000
            }}
          >
            {/* Modal (caixa branca) */}
            <div 
              onClick={(e) => e.stopPropagation()}
              style={{
                backgroundColor: 'white',
                padding: '30px',
                borderRadius: '8px',
                boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
                maxWidth: '500px',
                width: '90%'
              }}
            >
              <h2 style={{ marginTop: 0 }}>Título do Modal</h2>
              <p>Conteúdo do modal aqui...</p>
              <button 
                onClick={() => setIsOpen(false)}
                style={{
                  padding: '10px 20px',
                  backgroundColor: '#ef4444',
                  color: 'white',
                  border: 'none',
                  borderRadius: '6px',
                  cursor: 'pointer',
                  marginTop: '20px'
                }}
              >
                Fechar
              </button>
            </div>
          </div>
        </>
      )}
    </div>
  );
}`
  }
];
