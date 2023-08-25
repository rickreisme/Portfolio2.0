/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable jsx-a11y/anchor-is-valid */
import './App.css';
import {imgIntro, imgSobre, imgSetaB, cvRick, imgHtml, imgCss, imgJS, imgFlutt,
        imgReact, imgPostG, imgSQLS, imgGit, imgCpp, imgEpp, imgVer,imgHor,
        iconLi, iconBe, iconGi, iconLink, avatarRi} from './imports';

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
          <a className='btn2' >
                <img src={imgHtml}></img>
                <h2>HTML</h2>
          </a>

          <a className='btn2' >
                <img src={imgCss}></img>
                <h2>CSS</h2>
          </a>

          <a className='btn2' >
                <img src={imgJS}></img>
                <h2>JavaScript</h2>
          </a>

          <a className='btn2' >
                <img src={imgFlutt}></img>
                <h2>Flutter</h2>
          </a>

          <a className='btn2' >
                <img src={imgReact}></img>
                <h2>React.js</h2>
          </a>

          <a className='btn2' >
                <img src={imgPostG}></img>
                <h2>PostgreSQL</h2>
          </a>

          <a className='btn2' >
                <img src={imgSQLS}></img>
                <h2>SQL Server</h2>
          </a>

          <a className='btn2' >
                <img src={imgGit}></img>
                <h2>Git</h2>
          </a>

          <a className='btn2' >
                <img src={imgCpp}></img>
                <h2>C++</h2>
          </a>
        </div>
      </div>

      <div className='meus-projetos' id='meus-projetos'>
        <h2>&#123;rickreisme&#47;<span>meus projetos</span>&#125;</h2>

        <div className='projetos'>
          <div className='box-projeto'>
            <h2>App E++</h2>
            <img src={imgEpp} id='epp'></img>
            <h3>Versão demo do aplicativo E++ que está sendo <br/>
            desenvolvido para ajudar no estudo de <br/>
            programação para alunos iniciantes.</h3>
            <a className='btn3' href='https://github.com/rickreisme/EppDemo' target='_blank' rel="noreferrer">
                <h2>Ver repositório</h2>
            </a>
            <h4>Flutter - Dart - Firebase</h4>
          </div>

          <div className='box-projeto'>
            <h2>Verificador de Idade</h2>
            <img src={imgVer} id='verific'></img>
            <h3>Site que mostra a idade e a imagem de uma <br/> 
            pessoa de acordo com o ano de nascimento <br/>
            e o sexo que o usuário preenche.</h3>
            <div className='botoes'>
              <a className='btn3' href='https://github.com/rickreisme/VerificadorIdade' target='_blank' rel="noreferrer">
                  <h2>Ver repositório</h2>
              </a>
              <a className='btn4' href='https://rickreisme.github.io/VerificadorIdade/' target='_blank' rel="noreferrer">
                  <h2>Acessar site</h2>
              </a>
            </div>
            <h4>HTML - CSS - Javascript</h4>
          </div>

          <div className='box-projeto'>
            <h2>DynamicRelogio</h2>
            <img src={imgHor} id='horaD'></img>
            <h3>Uma página que exibe um relógio digital em <br/>
            tempo real, com cores de fundo em degradê e<br/>
            textos que se alteram conforme o dia e horário.</h3>
            <div className='botoes'>
              <a className='btn3' href='https://github.com/rickreisme/DynamicRelogio' target='_blank' rel="noreferrer">
                  <h2>Ver repositório</h2>
              </a>
              <a className='btn4' href='https://rickreisme.github.io/DynamicRelogio/' target='_blank' rel="noreferrer">
                  <h2>Acessar site</h2>
              </a>
            </div>
            <h4>HTML - CSS - Javascript</h4>
          </div>
        </div>

          <a className='btn5' href='https://github.com/rickreisme?tab=repositories' target='_blank' rel="noreferrer">
            <h2>Ver todos os projetos</h2>
          </a>
      </div>

      <div className='contato' id='contato'>
        <h2>&#123;rickreisme&#47;<span>contato</span>&#125;</h2>
        
        <div className='colunas'>
          <div className='colunaE'>
            <h3>
            Estou procurando oportunidades no mercado de <br/>
            trabalho, entre em contato comigo para propostas.<br/>
            Feedbacks também são muito bem-vindos!
            </h3>

            <a className='btn6' href='mailto:ricksonreisamoroso@gmail.com' target='_blank' rel="noreferrer">
            <h4>Enviar Mensagem</h4>
            </a>
            
            <div className='sociais'>
              <h3>Me acompanhe nas redes sociais</h3>
              <div className='redes'>
                <a href='https://github.com/rickreisme' target="_blank" rel="noreferrer">
                <img src={iconGi} id='gith'></img>
                </a>

                <a href='https://www.linkedin.com/in/ricksonreis/' target="_blank" rel="noreferrer">
                <img src={iconLi} id='linkd'></img>
                </a>

                <a href='https://www.behance.net/rickreis1' target="_blank" rel="noreferrer">
                <img src={iconBe} id='beh'></img>
                </a>

                <a href='https://linktr.ee/rickreisme' target="_blank" rel="noreferrer">
                <img src={iconLink} id='linkk'></img>
                </a>
              </div>
            </div>
          </div>

          <img src={avatarRi} id='avaRick'></img>
        </div>
      </div>

      <footer></footer>

      </div>
  );
}

export default App;
