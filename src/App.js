/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable jsx-a11y/anchor-is-valid */
import './App.css';

import imgIntro from "./assets/SVGs/Hand coding-amico.svg"
import imgSobre from "./assets/SVGs/Programmer-pana.svg"
import imgSetaB from "./assets/SVGs/arrow-down-solid.svg"
import cvRick from "./assets/Others/Rickson-Reis.pdf"
import imgHtml from "./assets/SVGs/html5.svg"
import imgCss from "./assets/SVGs/css3-alt.svg"
import imgJS from "./assets/SVGs/js.svg"
import imgFlutt from "./assets/SVGs/flutter.svg"
import imgReact from "./assets/SVGs/react.svg"
import imgPostG from "./assets/SVGs/dbs-postgresql.svg"
import imgSQLS from "./assets/SVGs/1608662_database_icon.svg"
import imgGit from "./assets/SVGs/git.svg"
import imgCpp from "./assets/SVGs/cpp.svg"

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
        Minha paixão pela tecnologia sempre esteve presente, porém, foi em 2021,
        quando comecei a cursar Análise e Desenvolvimento de Sistemas, que o meu 
        interesse pela programação se intensificou, especialmente pelo desenvolvimento
        front-end. 
        <br/>Possuo habilidades sólidas em <span>HTML</span>, <span>CSS</span> e 
        <span> JavaScript</span>, e tenho familiaridade com <span>React.js</span>, 
        <span> PostgreSQL</span>, <span> SQL Server</span> e C++. Além disso, possuo 
        também habilidades em desenvolvimento mobile para Android com
        <span> Flutter</span> e <span>Firebase</span>. Tenho um forte desejo por 
        <span> aprendizado</span> e busco <span>aprimorar</span> minhas 
        <span> habilidades</span> constantemente. 
        <br/>Estou em busca da minha primeira oportunidade profissional na área, com o objetivo de crescer, contribuir 
        em projetos e evoluir como desenvolvedor front-end.
        </p>

      </div>

      <div className='experiencia' id='experiencia'>
        <h2>&#123;rickreisme&#47;<span>experiência</span>&#125;</h2>
        <h3>Minhas Habilidades</h3>
            
        <div className='habilidades'>
          <a className='btn2' href={cvRick} download>
                <img src={imgHtml}></img>
                <h2>HTML</h2>
          </a>

          <a className='btn2' href={cvRick} download>
                <img src={imgCss}></img>
                <h2>CSS</h2>
          </a>

          <a className='btn2' href={cvRick} download>
                <img src={imgJS}></img>
                <h2>JavaScript</h2>
          </a>

          <a className='btn2' href={cvRick} download>
                <img src={imgFlutt}></img>
                <h2>Flutter</h2>
          </a>

          <a className='btn2' href={cvRick} download>
                <img src={imgReact}></img>
                <h2>React.js</h2>
          </a>

          <a className='btn2' href={cvRick} download>
                <img src={imgPostG}></img>
                <h2>PostgreSQL</h2>
          </a>

          <a className='btn2' href={cvRick} download>
                <img src={imgSQLS}></img>
                <h2>SQL Server</h2>
          </a>

          <a className='btn2' href={cvRick} download>
                <img src={imgGit}></img>
                <h2>Git</h2>
          </a>

          <a className='btn2' href={cvRick} download>
                <img src={imgCpp}></img>
                <h2>C++</h2>
          </a>
        </div>
      </div>

      <div className='meus-projetos' id='meus-projetos'>
        <h2>&#123;rickreisme&#47;<span>meus projetos</span>&#125;</h2>
        
        <div className='projetos'>

        </div>
      </div>

      <div className='contato' id='contato'></div>

      <footer></footer>

      </div>
  );
}

export default App;
