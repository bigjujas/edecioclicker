import { useState, useEffect } from 'react'
import './App.css'
import './reset.css'
import defaultEdecio from './assets/edecio.jpg'
import chadEdecio from './assets/chadEdecio.jpg'

let notificationId = 0; // Let para notificação de Cps na Tela

function App() {
  const [cliques, setCliques] = useState(0)
  const [edecio, setEdecio] = useState(defaultEdecio)
  const [multiplicador, setMultiplicador] = useState(1)
  const [cliquesPorSegundo, setCliquesPorSegundo] = useState(0)
  const [notificacoes, setNotificacoes] = useState([]);

// Custos Base //

  const [custoUpgrade1, setCustoUpgrade] = useState(15)
  const [custoUpgrade2, setCustoUpgrade2] = useState(250)
  const [custoUpgrade3, setCustoUpgrade3] = useState(500)
  const [custoUpgrade4, setCustoUpgrade4] = useState(1000)

// Niveis //

  const [nivelUpgrade1, setNivelUpgrade1] = useState(0)
  const [nivelUpgrade2, setNivelUpgrade2] = useState(0)
  const [nivelUpgrade3, setNivelUpgrade3] = useState(0)
  const [nivelUpgrade4, setNivelUpgrade4] = useState(0)

// Multiplicadores //

const [cpsUpgrade1, setCpsUpgrade1] = useState(0.5)
const [cpsUpgrade2, setCpsUpgrade2] = useState(0.5)
const [cpsUpgrade3, setCpsUpgrade3] = useState(1.5)
const [cpsUpgrade4, setCpsUpgrade4] = useState(3)

// QoL //

const displayCliques = cliques >= 1000 ? Math.floor(cliques) : parseFloat(cliques.toFixed(0));

  // Estilo condicional para o custo dos upgrades
  const custoStyle = (custo) => ({
  color: cliques >= custo ? '#fff' : '#e57373', // Vermelho se não tiver cliques suficientes
   });

   // Estilo condicional para o container dos upgrades
const containerStyle = (isLocked) => ({
  cursor: isLocked ? 'not-allowed' : 'pointer',
  filter: isLocked ? 'brightness(0.5)' : 'brightness(1)'
});

// Funçoes //

   function Clique(event) {
    setCliques(prevCliques => prevCliques + multiplicador);

    // Tudo Abaixo dessa Function é pro evento de Notificação
    
    // Obter a posição do clique
    const { clientX, clientY } = event;
    const novoId = notificationId++;

    setNotificacoes(prevNotificacoes => [
      ...prevNotificacoes,
      {
        id: novoId,
        texto: `+${multiplicador}`,
        top: clientY,
        left: clientX
      }
    ]);

    // Remover a notificação após 2 segundos
    setTimeout(() => {
      setNotificacoes(prevNotificacoes =>
        prevNotificacoes.filter(notificacao => notificacao.id !== novoId)
      );
    }, 2000); // Duração em milissegundos (2 segundos)
  }

  function Upgrade1() {
    if (cliques >= custoUpgrade1) {
      setCliques(prevCliques => prevCliques - custoUpgrade1)
      setNivelUpgrade1(prevNivel => {
        const novoNivel = prevNivel + 1;
        if (novoNivel % 10 === 0) {
            setCpsUpgrade1(cpsUpgrade1 * 2);
        }
        return novoNivel;
    });
      setCliquesPorSegundo(prevCliquesPorSegundo => prevCliquesPorSegundo + cpsUpgrade1)
      setCustoUpgrade(prevCusto => Math.floor(prevCusto * 1.5))
    }
  }

  function Upgrade2() {
    if (cliques >= custoUpgrade2 && nivelUpgrade1 >= 10) {
      setCliques(prevCliques => prevCliques - custoUpgrade2)
      setNivelUpgrade2(prevNivel => {
        const novoNivel = prevNivel + 1;
        if (novoNivel % 10 === 0) {
            setCpsUpgrade2(cpsUpgrade2 * 2);
        }
        return novoNivel;
    });
      setMultiplicador(prevMultiplicador => prevMultiplicador + cpsUpgrade2)
      setCustoUpgrade2(prevCusto => Math.floor(prevCusto * 1.2))
    }
  }

  function Upgrade3() {
    if (cliques >= custoUpgrade3 && nivelUpgrade2 >=10) {
      setCliques(prevCliques => prevCliques - custoUpgrade3)
      setNivelUpgrade3(prevNivel => {
        const novoNivel = prevNivel + 1;
        if (novoNivel % 10 === 0) {
            setCpsUpgrade3(cpsUpgrade3 * 2);
        }
        return novoNivel;
    });
      setCliquesPorSegundo(prevCliquesPorSegundo => prevCliquesPorSegundo + cpsUpgrade3)
      setCustoUpgrade3(prevCusto => Math.floor(prevCusto * 1.2))
      setEdecio(chadEdecio)
    }
  }

  function Upgrade4() {
    if (cliques >= custoUpgrade4 && nivelUpgrade3 >=10) {
      setCliques(prevCliques => prevCliques - custoUpgrade4)
      setNivelUpgrade4(prevNivel => {
        const novoNivel = prevNivel + 1;
        if (novoNivel % 10 === 0) {
            setCpsUpgrade4(cpsUpgrade4 * 2);
        }
        return novoNivel;
    });
      setCliquesPorSegundo(prevCliquesPorSegundo => prevCliquesPorSegundo + cpsUpgrade4)
      setCustoUpgrade4(prevCusto => Math.floor(prevCusto * 1.2))
    }
  }

  useEffect(() => {
    const intervalo = setInterval(() => {
      setCliques(prevCliques => prevCliques + (cliquesPorSegundo / 10))
    }, 100)

    return () => clearInterval(intervalo)
  }, [cliquesPorSegundo])

  return (  
    <>
    <header>
      <h1>Edécio <span>Clicker</span></h1>
    </header>
    <div className="lineheader"></div>
      <div className="container">
        <div className="left-side">
          <div className="edecio">
            <h1>{displayCliques} 💰</h1>
            <div className="displaycps">
          <h2 className="Cps">{parseFloat((multiplicador).toFixed(2))}$ por Clique</h2>
          <h2 className="Cps">{parseFloat((cliquesPorSegundo).toFixed(2))}$ por Segundo</h2>
            </div>
            <img src={edecio} alt="" onClick={Clique} draggable="false" />
          </div>
        </div>
        <div className="right-side">
          <div className="upgrades">
            <h1>Upgrades💸</h1>
            <div className="upgrade__container" onClick={Upgrade1}>
              <h2>+{parseFloat(cpsUpgrade1.toFixed(2))} P/s</h2>
              <h3>Muito Legal 👍</h3>
              <h4 style={custoStyle(custoUpgrade1)}>{custoUpgrade1}$</h4> {/* Exibe o custo atualizado */}
              <h5>Nv.{nivelUpgrade1}</h5>
            </div>
            <div className="upgrade__container" style={containerStyle(nivelUpgrade1 < 10)} onClick={Upgrade2}>
              <h2>+{parseFloat(cpsUpgrade2.toFixed(2))}</h2>
              <h3>Café Quentinho ☕</h3>
              <h4 style={custoStyle(custoUpgrade2)}>{nivelUpgrade1 >= 10 ? `${custoUpgrade2}$` : "🔒"}</h4> {/* Exibe o custo atualizado */}
              <h5>Nv.{nivelUpgrade2}</h5>
            </div>
            <div className="upgrade__container" style={containerStyle(nivelUpgrade2 < 10)} onClick={Upgrade3}>
              <h2>{nivelUpgrade2 >= 1 ? `+${parseFloat(cpsUpgrade3.toFixed(2))} P/s` : "???"}</h2>
              <h3>{nivelUpgrade2 >= 1 ? "Muito BASED 🗿" : "???????????"}</h3>
              <h4 style={custoStyle(custoUpgrade3)}>{nivelUpgrade2 >= 10 ? `${custoUpgrade3}$` : "🔒"}</h4>
              <h5>Nv.{nivelUpgrade3}</h5>
            </div>
            <div className="upgrade__container" style={containerStyle(nivelUpgrade3 < 10)} onClick={Upgrade4}>
              <h2>{nivelUpgrade3 >= 1 ? `+${parseFloat(cpsUpgrade4.toFixed(2))} P/s` : "???"}</h2>
              <h3>{nivelUpgrade3 >= 1 ? "Academia Avenida 💪" : "???????????"}</h3>
              <h4 style={custoStyle(custoUpgrade4)}>{nivelUpgrade3 >= 10 ? `${custoUpgrade4}$` : "🔒"}</h4>
              <h5>Nv.{nivelUpgrade4}</h5>
            </div>
          </div>
        </div>
      </div>
      {notificacoes.map(notificacao => (
        <div 
          key={notificacao.id}
          className={`notificacao ${notificacao ? 'notificacao-visivel' : ''}`} 
          style={{ top: notificacao.top, left: notificacao.left }}
        >
          {notificacao.texto}
        </div>
      ))}
    </>
  )
}

export default App
