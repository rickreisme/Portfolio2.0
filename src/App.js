/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable jsx-a11y/anchor-is-valid */
import './App.css';

import imgIntro from "./assets/SVGs/Hand coding-amico.svg"
import imgSobre from "./assets/SVGs/Programmer-pana.svg"
import imgSetaB from "./assets/SVGs/arrow-down-solid.svg"
import cvRick from "./assets/Others/Rickson-Reis.pdf"

function App() {
  return (
    <div className='container-all'>
      <header>
        <div className='menu'>
          <div className='content'>
            <a href='#intro' id='logo'> <span>&lt;</span>rickreisme<span>/&gt;</span></a>
            
            <div className='paginas'>
              <a href='#sobre' id='link-pags'> <span>&lt;Sobre Mim/&gt;</span> </a>
              <a href='#experiencia' id='link-pags'> <span>&lt;Experiência/&gt;</span> </a>
              <a href='#meus-projetos' id='link-pags'> <span>&lt;Meus Projetos/&gt;</span> </a>
              <a href='#contato' id='link-pags'> <span>&lt;Contato/&gt;</span> </a>
            </div>
          </div>
        </div>
      </header>
      
      <div className='intro' id='intro'>
        <div className='saudacao'>
          <h1>Olá, eu sou <span>Rick Reis</span>!</h1>
          <h2>Desenvolvedor Front-End</h2>
        </div>

        <div className='imagem-intro'>
          <img src={imgIntro}></img>
        </div>
      </div>

      <div className='sobre' id='sobre'>
        <div className='imagem-sobre'>
            <img src={imgSobre}></img>
        </div>
        
        <div className='sobre-titulo'>
          <h2>&#123;rickreisme<br/>&#47;
          <span>sobre</span>&#125;</h2>
          <a className='btn' href={cvRick} download>
            <img src={imgSetaB}></img>
            <h2>Currículo</h2>
          </a>
        </div>

        <p>
        <h1><span>Sobre Mim</span></h1>
        Sou o <span>Rickson</span> (mas a maioria me chama de <span>Rick</span>), atualmente curso 
        Análise e Desenvolvimento de Sistemas. Desde sempre, tenho sido fascinado por 
        tecnologia, mas foi em 2021 que meu interesse pela programação se despertou 
        de forma mais intensa, logo me apaixonando pelo desenvolvimento <span>front-end</span>.<br/>

        <br/>Possuo conhecimento sólido em <span>HTML</span>, <span>CSS</span>, <span>JavaScript</span>, além de ter familiaridade com 
        <span>React.js</span>, <span>PostgreSQL</span>, <span>SQL Server</span> e C++ e também habilidades básicas em desenvolvimento 
        de aplicativos móveis utilizando <span>Flutter</span>, e o banco de dados Firebase.<br/>

        <br/>Sou um <span>aprendiz rápido</span>, disposto a enfrentar novos desafios e <span>aprimorar</span> minhas <span>habilidades</span> 
        por meio de <span>prática</span> constante. Estou em busca da minha primeira oportunidade profissional 
        na área, com o objetivo de crescer profissionalmente e expandir meu conhecimento cada vez. 
        Estou entusiasmado para contribuir em projetos e trabalhar em equipe, além de continuar
        evoluindo como desenvolvedor front-end.
        </p>

      </div>

      <div className='experiencia' id='experiencia'></div>

      <div className='meus-projetos' id='meus-projetos'></div>

      <div className='contato' id='contato'></div>

      <footer></footer>

      </div>
  );
}

export default App;
