import { useState, useEffect } from 'react'
import './css/App.css'
import './css/reset.css'

// Assets //

import edeciocoin from './assets/edeciocoin.png'
import defaultEdecio from './assets/edecio.jpg'
import coffeeEdecio from './assets/coffeeEdecio.jpg'
import programmerEdecio from './assets/programmerEdecio.jpg'
import chadEdecio from './assets/chadEdecio.jpg'
import criaEdecio from './assets/criaEdecio.jpg'
import wallpaper1 from './assets/mainWallpaper.jpg'
import wallpaper2 from './assets/mainWallpaper2.jpg'
import wallpaper3 from './assets/mainWallpaper3.jpg'

let notificationId = 0; // Let para notificação de Cps na Tela

function App() {
  const [cliques, setCliques] = useState(0)
  const [multiplicador, setMultiplicador] = useState(1)
  const [cliquesPorSegundo, setCliquesPorSegundo] = useState(0)
  const [worker, setWorker] = useState(null);
  
  // Assets //
  
  const [notificacoes, setNotificacoes] = useState([]);
  const [edecio, setEdecio] = useState(defaultEdecio)
  const [wallpaper, setWallpaper] = useState()

  // Custos Base //

  const [custoUpgrade1, setCustoUpgrade] = useState(10)
  const [custoUpgrade2, setCustoUpgrade2] = useState(30)
  const [custoUpgrade3, setCustoUpgrade3] = useState(50)
  const [custoUpgrade4, setCustoUpgrade4] = useState(300)
  const [custoUpgrade5, setCustoUpgrade5] = useState(1500)
  const [custoUpgrade6, setCustoUpgrade6] = useState(8000)
  const [custoUpgrade7, setCustoUpgrade7] = useState(50000)

// Niveis //

  const [nivelUpgrade1, setNivelUpgrade1] = useState(0)
  const [nivelUpgrade2, setNivelUpgrade2] = useState(0)
  const [nivelUpgrade3, setNivelUpgrade3] = useState(0)
  const [nivelUpgrade4, setNivelUpgrade4] = useState(0)
  const [nivelUpgrade5, setNivelUpgrade5] = useState(0)
  const [nivelUpgrade6, setNivelUpgrade6] = useState(0)
  const [nivelUpgrade7, setNivelUpgrade7] = useState(0)

// Multiplicadores //

const [cpsUpgrade1, setCpsUpgrade1] = useState(0.1)
const [cpsUpgrade2, setCpsUpgrade2] = useState(0.25)
const [cpsUpgrade3, setCpsUpgrade3] = useState(0.75)
const [cpsUpgrade4, setCpsUpgrade4] = useState(3)
const [cpsUpgrade5, setCpsUpgrade5] = useState(2)
const [cpsUpgrade6, setCpsUpgrade6] = useState(30)
const [cpsUpgrade7, setCpsUpgrade7] = useState(100)

// QoL //

const displayCliques = cliques >= 1000 ? formatNumber(Math.floor(cliques)) : parseFloat(cliques.toFixed(0));

  // Estilo condicional para o custo dos upgrades
  const custoStyle = (custo) => ({
  color: cliques >= custo ? '#fff' : '#e57373', // Vermelho se não tiver cliques suficientes
   });

   // Estilo condicional para o container dos upgrades

const containerStyle = (isLocked) => ({
  cursor: isLocked ? 'not-allowed' : 'pointer',
  filter: isLocked ? 'brightness(0.5)' : 'brightness(1)'
});

function formatNumber(value) {
  if (value >= 1000000) {
    return `${(value / 1000000).toFixed(2)}M`; // Exemplo: 1.2M
  } else if (value >= 10000) {
    return `${(value / 1000).toFixed(2)}k`; // Exemplo: 1.2k
  } else {
    return value.toString(); // Exemplo: 999
  }
}

// Save System //

function saveProgress() {
  const progress = {
    cliques,
    multiplicador,
    cliquesPorSegundo,
    //
    edecio,
    wallpaper,
    //
    custoUpgrade1,
    custoUpgrade2,
    custoUpgrade3,
    custoUpgrade4,
    custoUpgrade5,
    custoUpgrade6,
    custoUpgrade7,
    //
    nivelUpgrade1,
    nivelUpgrade2,
    nivelUpgrade3,
    nivelUpgrade4,
    nivelUpgrade5,
    nivelUpgrade6,
    nivelUpgrade7,
    //
    cpsUpgrade1,
    cpsUpgrade2,
    cpsUpgrade3,
    cpsUpgrade4,
    cpsUpgrade5,
    cpsUpgrade6,
    cpsUpgrade7,
    //
  };

  const dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(progress));
  const downloadAnchorNode = document.createElement('a');
  downloadAnchorNode.setAttribute("href", dataStr);
  downloadAnchorNode.setAttribute("download", "edecio_clicker_save.json");
  document.body.appendChild(downloadAnchorNode); // necessário para o Firefox
  downloadAnchorNode.click();
  downloadAnchorNode.remove();
}

function loadProgress(event) {
  const file = event.target.files[0];
  const reader = new FileReader();
  
  reader.onload = (e) => {
    const progress = JSON.parse(e.target.result);
    
    // Atualizar os estados com os valores do save
    setCliques(progress.cliques);
    setMultiplicador(progress.multiplicador);
    setCliquesPorSegundo(progress.cliquesPorSegundo);
    //
    setEdecio(progress.edecio);
    setWallpaper(progress.wallpaper);
    //
    setCustoUpgrade(progress.custoUpgrade1);
    setCustoUpgrade2(progress.custoUpgrade2);
    setCustoUpgrade3(progress.custoUpgrade3);
    setCustoUpgrade4(progress.custoUpgrade4);
    setCustoUpgrade5(progress.custoUpgrade5);
    setCustoUpgrade6(progress.custoUpgrade6);
    setCustoUpgrade7(progress.custoUpgrade7);
    //
    setNivelUpgrade1(progress.nivelUpgrade1);
    setNivelUpgrade2(progress.nivelUpgrade2);
    setNivelUpgrade3(progress.nivelUpgrade3);
    setNivelUpgrade4(progress.nivelUpgrade4);
    setNivelUpgrade5(progress.nivelUpgrade5);
    setNivelUpgrade6(progress.nivelUpgrade6);
    setNivelUpgrade7(progress.nivelUpgrade7);
    //
    setCpsUpgrade1(progress.cpsUpgrade1) 
    setCpsUpgrade2(progress.cpsUpgrade2) 
    setCpsUpgrade3(progress.cpsUpgrade3) 
    setCpsUpgrade4(progress.cpsUpgrade4) 
    setCpsUpgrade5(progress.cpsUpgrade5) 
    setCpsUpgrade6(progress.cpsUpgrade6) 
    setCpsUpgrade7(progress.cpsUpgrade7) 
  };

  reader.readAsText(file);
}

const importSaveClick = () => {
  document.getElementById("fileInput").click();
};

// Funçoes do Jogo //

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
        texto: nivelUpgrade2 >= 1 ? `+${parseFloat(multiplicador).toFixed(1)}👍` : `+${multiplicador}`,
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
      setCustoUpgrade(prevCusto => Math.floor(prevCusto * 1.15))
      setEdecio (coffeeEdecio)
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
      setCustoUpgrade2(prevCusto => Math.floor(prevCusto * 1.35))
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
      setCustoUpgrade3(prevCusto => Math.floor(prevCusto * 1.35))
      setEdecio (programmerEdecio)
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
      setCustoUpgrade4(prevCusto => Math.floor(prevCusto * 1.35))
      setWallpaper (wallpaper2)
    }
  }

  function Upgrade5() {
    if (cliques >= custoUpgrade5 && nivelUpgrade4 >=10) {
      setCliques(prevCliques => prevCliques - custoUpgrade5)
      setNivelUpgrade5(prevNivel => {
        const novoNivel = prevNivel + 1;
        if (novoNivel % 10 === 0) {
            setCpsUpgrade5(cpsUpgrade5 * 2);
        }
        return novoNivel;
    });
      setMultiplicador(prevMultiplicador => prevMultiplicador + cpsUpgrade5)
      setCustoUpgrade5(prevCusto => Math.floor(prevCusto * 1.35))
      setEdecio (chadEdecio)
    }
  }

  function Upgrade6() {
    if (cliques >= custoUpgrade6 && nivelUpgrade5 >=10) {
      setCliques(prevCliques => prevCliques - custoUpgrade6)
      setNivelUpgrade6(prevNivel => {
        const novoNivel = prevNivel + 1;
        if (novoNivel % 10 === 0) {
            setCpsUpgrade6(cpsUpgrade6 * 2);
        }
        return novoNivel;
    });
      setCliquesPorSegundo(prevCliquesPorSegundo => prevCliquesPorSegundo + cpsUpgrade6)
      setCustoUpgrade6(prevCusto => Math.floor(prevCusto * 1.35))
      setWallpaper (wallpaper3)
    }
  }

  function Upgrade7() {
    if (cliques >= custoUpgrade7 && nivelUpgrade6 >=10) {
      setCliques(prevCliques => prevCliques - custoUpgrade7)
      setNivelUpgrade7(prevNivel => {
        const novoNivel = prevNivel + 1;
        if (novoNivel % 10 === 0) {
            setCpsUpgrade7(cpsUpgrade7 * 2);
        }
        return novoNivel;
    });
      setCliquesPorSegundo(prevCliquesPorSegundo => prevCliquesPorSegundo + cpsUpgrade7)
      setCustoUpgrade7(prevCusto => Math.floor(prevCusto * 1.35))
      setEdecio (criaEdecio)
    }
  }

  useEffect(() => {
    const myWorker = new Worker(new URL('./worker.js', import.meta.url));
    setWorker(myWorker);

    myWorker.onmessage = (event) => {
      if (event.data.type === 'UPDATE_CLIQUES') {
        setCliques(event.data.value);
      }
    };

    // Configura o Web Worker com os valores iniciais e inicia a contagem
    myWorker.postMessage({ type: 'SET_CLIQUES', value: cliques });
    myWorker.postMessage({ type: 'SET_CLIQUES_POR_SEGUNDO', value: cliquesPorSegundo });
    myWorker.postMessage({ type: 'START' });

    return () => {
      myWorker.terminate();
    };
  }, [cliquesPorSegundo]);

  useEffect(() => {
    // Atualize o Web Worker com o novo valor de cliques quando ele mudar
    if (worker) {
      worker.postMessage({ type: 'SET_CLIQUES', value: cliques });
    }
  }, [cliques, worker]);

  return (  
    <>
    <header>
      <div className="nav__container">
      <h1>Edécio <span>Clicker</span></h1>
      <h2 onClick={saveProgress}>Exportar Save</h2>
      <h2 className='import__button' onClick={importSaveClick}>Importar Save<input 
        id="fileInput"
        type="file" 
        onChange={loadProgress}
    /></h2>
      </div>
    </header>
    <div className="lineheader"></div>
      <div className="container">
      <div className="left-side" style={{  backgroundImage: `url(${wallpaper})`,}}>
          <div className="game__container">
            <div className="displaybalance">
            <h1>{displayCliques}</h1>
            <img src={edeciocoin} alt="" draggable="false" />
            </div>
            <div className="displaycps">
          <h2 className="Cps">{parseFloat((multiplicador).toFixed(2))}$ por Clique</h2>
          <h2 className="Cps">{parseFloat((cliquesPorSegundo).toFixed(2))}$ por Segundo</h2>
            </div>
          <div className="edecio">
            <img src={edecio} alt="" onClick={Clique} draggable="false" />
          </div>
        </div>
        </div>
        <div className="right-side">
          <div className="upgrades">
            <h1>Upgrades💸</h1>
            <div className="upgrade__container" onClick={Upgrade1}>
              <h2>+{parseFloat(cpsUpgrade1.toFixed(2))} P/s</h2>
              <h3>Café Quentinho ☕</h3>
              <h4 style={custoStyle(custoUpgrade1)}>${formatNumber(custoUpgrade1)}</h4> {/* Exibe o custo atualizado */}
              <h5>Nv.{nivelUpgrade1}</h5>
            </div>
            <div className="upgrade__container" style={containerStyle(nivelUpgrade1 < 10)} onClick={Upgrade2}>
              <h2>+{parseFloat(cpsUpgrade2.toFixed(2))}</h2>
              <h3>Muito Legal 👍</h3>
              <h4 style={custoStyle(custoUpgrade2)}>{nivelUpgrade1 >= 10 ? `$${formatNumber(custoUpgrade2)}` : "🔒"}</h4> {/* Exibe o custo atualizado */}
              <h5>Nv.{nivelUpgrade2}</h5>
            </div>
            <div className="upgrade__container" style={containerStyle(nivelUpgrade2 < 10)} onClick={Upgrade3}>
              <h2>{nivelUpgrade2 >= 1 ? `+${parseFloat(cpsUpgrade3.toFixed(2))} P/s` : "???"}</h2>
              <h3>{nivelUpgrade2 >= 1 ? "Programação 💻" : "???????????"}</h3>
              <h4 style={custoStyle(custoUpgrade3)}>{nivelUpgrade2 >= 10 ? `$${formatNumber(custoUpgrade3)}` : "🔒"}</h4>
              <h5>Nv.{nivelUpgrade3}</h5>
            </div>
            <div className="upgrade__container" style={containerStyle(nivelUpgrade3 < 10)} onClick={Upgrade4}>
              <h2>{nivelUpgrade3 >= 1 ? `+${parseFloat(cpsUpgrade4.toFixed(2))} P/s` : "???"}</h2>
              <h3>{nivelUpgrade3 >= 1 ? "Academia Avenida 💪" : "???????????"}</h3>
              <h4 style={custoStyle(custoUpgrade4)}>{nivelUpgrade3 >= 10 ? `$${formatNumber(custoUpgrade4)}` : "🔒"}</h4>
              <h5>Nv.{nivelUpgrade4}</h5>
            </div>
            <div className="upgrade__container" style={containerStyle(nivelUpgrade4 < 10)} onClick={Upgrade5}>
              <h2>{nivelUpgrade4 >= 1 ? `+${parseFloat(cpsUpgrade5.toFixed(2))}` : "???"}</h2>
              <h3>{nivelUpgrade4 >= 1 ? "Projetinho 🗿" : "???????????"}</h3>
              <h4 style={custoStyle(custoUpgrade5)}>{nivelUpgrade4 >= 10 ? `$${formatNumber(custoUpgrade5)}` : "🔒"}</h4>
              <h5>Nv.{nivelUpgrade5}</h5>
            </div>
            <div className="upgrade__container" style={containerStyle(nivelUpgrade5 < 10)} onClick={Upgrade6}>
              <h2>{nivelUpgrade5 >= 1 ? `+${parseFloat(cpsUpgrade6.toFixed(2))} P/s` : "???"}</h2>
              <h3>{nivelUpgrade5 >= 1 ? "Prainha 🏝️" : "???????????"}</h3>
              <h4 style={custoStyle(custoUpgrade6)}>{nivelUpgrade5 >= 10 ? `$${formatNumber(custoUpgrade6)}` : "🔒"}</h4>
              <h5>Nv.{nivelUpgrade6}</h5>
            </div>
            <div className="upgrade__container" style={containerStyle(nivelUpgrade6 < 10)} onClick={Upgrade7}>
              <h2>{nivelUpgrade6 >= 1 ? `+${parseFloat(cpsUpgrade7.toFixed(2))} P/s` : "???"}</h2>
              <h3>{nivelUpgrade6 >= 1 ? "Cria 🤬" : "???????????"}</h3>
              <h4 style={custoStyle(custoUpgrade7)}>{nivelUpgrade6 >= 10 ? `$${formatNumber(custoUpgrade7)}` : "🔒"}</h4>
              <h5>Nv.{nivelUpgrade7}</h5>
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
