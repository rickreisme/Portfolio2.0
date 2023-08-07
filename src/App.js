/* eslint-disable jsx-a11y/anchor-is-valid */
import './App.css';

function App() {
  return (
    <div className='container'>
      <header>
      <a href='' > <span>&lt;rickreisme/&gt;</span> </a>
      <a href='.sobre' > <span>&lt;Sobre Mim/&gt;</span> </a>
      <a href='.experiencia' > <span>&lt;Experiência/&gt;</span> </a>
      <a href='.meus-projetos' > <span>&lt;Meus Projetos/&gt;</span> </a>
      <a href='.contato' > <span>&lt;Contato/&gt;</span> </a>
      </header>

      <div className='intro'></div>

      <div className='sobre'></div>

      <div className='experiencia'></div>

      <div className='meus-projetos'></div>

      <div className='contato'></div>

      <footer></footer>
    </div>
  );
}

export default App;
