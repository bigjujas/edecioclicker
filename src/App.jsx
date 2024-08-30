import { useState, useEffect } from 'react'
import './css/App.css'
import './css/reset.css'

// Assets //

import edeciocoin from './assets/edeciocoin.png'
///
import defaultEdecio from './assets/edecio.jpg'
import coffeeEdecio from './assets/coffeeEdecio.jpg'
import programmerEdecio from './assets/programmerEdecio.jpg'
import chadEdecio from './assets/chadEdecio.jpg'
import criaEdecio from './assets/criaEdecio.jpg'
import prisionerEdecio from './assets/prisionerEdecio.jpg'
import minecraftEdecio from './assets/minecraftEdecio.jpg'
///
import wallpaper1 from './assets/mainWallpaper.jpg'
import wallpaper2 from './assets/mainWallpaper2.jpg'
import wallpaper3 from './assets/mainWallpaper3.jpg'
import wallpaper4 from './assets/mainWallpaper4.jpg'
import wallpaper5 from './assets/mainWallpaper5.jpg'
import wallpaper6 from './assets/mainWallpaper6.jpg'

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
  const [custoUpgrade8, setCustoUpgrade8] = useState(500000)
  const [custoUpgrade9, setCustoUpgrade9] = useState(5000000)
  const [custoUpgrade10, setCustoUpgrade10] = useState(20000000)
  const [custoUpgrade11, setCustoUpgrade11] = useState(35000000)

// Niveis //

  const [nivelUpgrade1, setNivelUpgrade1] = useState(0)
  const [nivelUpgrade2, setNivelUpgrade2] = useState(0)
  const [nivelUpgrade3, setNivelUpgrade3] = useState(0)
  const [nivelUpgrade4, setNivelUpgrade4] = useState(0)
  const [nivelUpgrade5, setNivelUpgrade5] = useState(0)
  const [nivelUpgrade6, setNivelUpgrade6] = useState(0)
  const [nivelUpgrade7, setNivelUpgrade7] = useState(0)
  const [nivelUpgrade8, setNivelUpgrade8] = useState(0)
  const [nivelUpgrade9, setNivelUpgrade9] = useState(0)
  const [nivelUpgrade10, setNivelUpgrade10] = useState(0)
  const [nivelUpgrade11, setNivelUpgrade11] = useState(0)

// Multiplicadores //

const [cpsUpgrade1, setCpsUpgrade1] = useState(0.1)
const [cpsUpgrade2, setCpsUpgrade2] = useState(0.25)
const [cpsUpgrade3, setCpsUpgrade3] = useState(0.75)
const [cpsUpgrade4, setCpsUpgrade4] = useState(3)
const [cpsUpgrade5, setCpsUpgrade5] = useState(2)
const [cpsUpgrade6, setCpsUpgrade6] = useState(30)
const [cpsUpgrade7, setCpsUpgrade7] = useState(100)
const [cpsUpgrade8, setCpsUpgrade8] = useState(250)
const [cpsUpgrade9, setCpsUpgrade9] = useState(750)
const [cpsUpgrade10, setCpsUpgrade10] = useState(100)
const [cpsUpgrade11, setCpsUpgrade11] = useState(2500)

// QoL //

const displayCliques = cliques >= 1000 ? formatNumber(Math.floor(cliques)) : parseFloat(cliques.toFixed(0));

  // Estilo condicional para o custo dos upgrades
  const custoStyle = (custo) => ({
  color: cliques >= custo ? '#fff' : '#e57373', // Vermelho se não tiver cliques suficientes
   });

   // Estilo condicional para o container dos upgrades

const containerStyle = (isLocked) => ({
  cursor: isLocked ? 'not-allowed' : 'pointer',
  filter: isLocked ? 'brightness(0.5) saturate(0.0)' : 'brightness(1)'
});

function formatNumber(value) {
  if (value >= 1000000000) {
    return `${(value / 1000000000).toFixed(2)}B`; // Exemplo: 1.2B
  } else if (value >= 1000000) { 
     return `${(value / 1000000).toFixed(2)}M`; // Exemplo: 1.2M
  } else if (value >= 10000) {
     return `${(value / 1000).toFixed(2)}k`; // Exemplo: 1.2k
  } else {
     return parseFloat((value).toFixed(2)); // Exemplo: 999
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
    custoUpgrade8,
    custoUpgrade9,
    custoUpgrade10,
    custoUpgrade11,
    //
    nivelUpgrade1,
    nivelUpgrade2,
    nivelUpgrade3,
    nivelUpgrade4,
    nivelUpgrade5,
    nivelUpgrade6,
    nivelUpgrade7,
    nivelUpgrade8,
    nivelUpgrade9,
    nivelUpgrade10,
    nivelUpgrade11,
    //
    cpsUpgrade1,
    cpsUpgrade2,
    cpsUpgrade3,
    cpsUpgrade4,
    cpsUpgrade5,
    cpsUpgrade6,
    cpsUpgrade7,
    cpsUpgrade8,
    cpsUpgrade9,
    cpsUpgrade10,
    cpsUpgrade11,
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
    setCustoUpgrade8(progress.custoUpgrade8);
    setCustoUpgrade9(progress.custoUpgrade9);
    setCustoUpgrade10(progress.custoUpgrade10);
    setCustoUpgrade11(progress.custoUpgrade11);
    //
    setNivelUpgrade1(progress.nivelUpgrade1);
    setNivelUpgrade2(progress.nivelUpgrade2);
    setNivelUpgrade3(progress.nivelUpgrade3);
    setNivelUpgrade4(progress.nivelUpgrade4);
    setNivelUpgrade5(progress.nivelUpgrade5);
    setNivelUpgrade6(progress.nivelUpgrade6);
    setNivelUpgrade7(progress.nivelUpgrade7);
    setNivelUpgrade8(progress.nivelUpgrade8);
    setNivelUpgrade9(progress.nivelUpgrade9);
    setNivelUpgrade10(progress.nivelUpgrade10);
    setNivelUpgrade11(progress.nivelUpgrade11);
    //
    setCpsUpgrade1(progress.cpsUpgrade1) 
    setCpsUpgrade2(progress.cpsUpgrade2) 
    setCpsUpgrade3(progress.cpsUpgrade3) 
    setCpsUpgrade4(progress.cpsUpgrade4) 
    setCpsUpgrade5(progress.cpsUpgrade5) 
    setCpsUpgrade6(progress.cpsUpgrade6) 
    setCpsUpgrade7(progress.cpsUpgrade7) 
    setCpsUpgrade8(progress.cpsUpgrade8) 
    setCpsUpgrade9(progress.cpsUpgrade9) 
    setCpsUpgrade10(progress.cpsUpgrade10) 
    setCpsUpgrade11(progress.cpsUpgrade11) 
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
        texto: nivelUpgrade2 >= 1 ? `+${formatNumber(multiplicador)}👍` : `+${formatNumber(multiplicador)}`,
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

  function Upgrade8() {
    if (cliques >= custoUpgrade8 && nivelUpgrade7 >=10) {
      setCliques(prevCliques => prevCliques - custoUpgrade8)
      setNivelUpgrade8(prevNivel => {
        const novoNivel = prevNivel + 1;
        if (novoNivel % 10 === 0) {
            setCpsUpgrade8(cpsUpgrade8 * 2);
        }
        return novoNivel;
    });
      setCliquesPorSegundo(prevCliquesPorSegundo => prevCliquesPorSegundo + cpsUpgrade8)
      setCustoUpgrade8(prevCusto => Math.floor(prevCusto * 1.35))
      setEdecio (prisionerEdecio)
      setWallpaper (wallpaper4)
    }
  }

  function Upgrade9() {
    if (cliques >= custoUpgrade9 && nivelUpgrade8 >=10) {
      setCliques(prevCliques => prevCliques - custoUpgrade9)
      setNivelUpgrade9(prevNivel => {
        const novoNivel = prevNivel + 1;
        if (novoNivel % 10 === 0) {
            setCpsUpgrade9(cpsUpgrade9 * 2);
        }
        return novoNivel;
    });
      setCliquesPorSegundo(prevCliquesPorSegundo => prevCliquesPorSegundo + cpsUpgrade9)
      setCustoUpgrade9(prevCusto => Math.floor(prevCusto * 1.35))
      setWallpaper (wallpaper5)
    }
  }

  function Upgrade10() {
    if (cliques >= custoUpgrade10 && nivelUpgrade9 >=10) {
      setCliques(prevCliques => prevCliques - custoUpgrade10)
      setNivelUpgrade10(prevNivel => {
        const novoNivel = prevNivel + 1;
        if (novoNivel % 10 === 0) {
            setCpsUpgrade10(cpsUpgrade10 * 2);
        }
        return novoNivel;
    });
    setMultiplicador(prevMultiplicador => prevMultiplicador + cpsUpgrade10)
      setCustoUpgrade10(prevCusto => Math.floor(prevCusto * 1.35))
      setEdecio (minecraftEdecio)
    }
  }

  function Upgrade11() {
    if (cliques >= custoUpgrade11 && nivelUpgrade10 >=10) {
      setCliques(prevCliques => prevCliques - custoUpgrade11)
      setNivelUpgrade11(prevNivel => {
        const novoNivel = prevNivel + 1;
        if (novoNivel % 10 === 0) {
            setCpsUpgrade11(cpsUpgrade11 * 2);
        }
        return novoNivel;
    });
      setCliquesPorSegundo(prevCliquesPorSegundo => prevCliquesPorSegundo + cpsUpgrade11)
      setCustoUpgrade11(prevCusto => Math.floor(prevCusto * 1.35))
      setWallpaper (wallpaper6)
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
    <header className='header'>
      <h3>Versão: Beta 1.0</h3>
      <h1>Edécio <span>Clicker</span></h1>
      <div className="save__container">
      <h2 onClick={saveProgress}>Exportar Save</h2>
      <h2 className='import__button' onClick={importSaveClick}>Importar Save<input 
        id="fileInput"
        type="file" 
        onChange={loadProgress}
    /></h2>
      </div>
    </header>
      <div className="container">
      <div className="left-side" style={{  backgroundImage: `url(${wallpaper})`,}}>
          <div className="game__container">
            <div className="displaybalance">
            <h1>${displayCliques}</h1>
            <img src={edeciocoin} alt="" draggable="false" />
            </div>
            <div className="displaycps">
          <h2 className="Cps">${formatNumber(multiplicador)} por Clique</h2>
          <h2 className="Cps">${formatNumber(cliquesPorSegundo)} por Segundo</h2>
            </div>
          <div className="edecio">
            <img src={edecio} alt="" onClick={Clique} draggable="false" />
          </div>
        </div>
        </div>
        <div className="right-side">
          <div className="upgrades">
            <h1>Upgrades 💸</h1>
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
            <div className="upgrade__container" style={containerStyle(nivelUpgrade7 < 10)} onClick={Upgrade8}>
              <h2>{nivelUpgrade7 >= 1 ? `+${parseFloat(cpsUpgrade8.toFixed(2))} P/s` : "???"}</h2>
              <h3>{nivelUpgrade7 >= 1 ? "Prisão ⛓️" : "???????????"}</h3>
              <h4 style={custoStyle(custoUpgrade8)}>{nivelUpgrade7 >= 10 ? `$${formatNumber(custoUpgrade8)}` : "🔒"}</h4>
              <h5>Nv.{nivelUpgrade8}</h5>
            </div>
            <div className="upgrade__container" style={containerStyle(nivelUpgrade8 < 10)} onClick={Upgrade9}>
              <h2>{nivelUpgrade8 >= 1 ? `+${parseFloat(cpsUpgrade9.toFixed(2))} P/s` : "???"}</h2>
              <h3 className='backgroundCapitulo2'>{nivelUpgrade8 >= 1 ? "Nether 🕳️" : "???????????"}</h3>
              <h4 style={custoStyle(custoUpgrade9)}>{nivelUpgrade8 >= 10 ? `$${formatNumber(custoUpgrade9)}` : "🔒"}</h4>
              <h5>Nv.{nivelUpgrade9}</h5>
            </div>
            <div className="upgrade__container" style={containerStyle(nivelUpgrade9 < 10)} onClick={Upgrade10}>
              <h2>{nivelUpgrade9 >= 1 ? `+${parseFloat(cpsUpgrade10.toFixed(2))}` : "???"}</h2>
              <h3 className='backgroundCapitulo2'>{nivelUpgrade9 >= 1 ? "Full Dima 💎" : "???????????"}</h3>
              <h4 style={custoStyle(custoUpgrade10)}>{nivelUpgrade9 >= 10 ? `$${formatNumber(custoUpgrade10)}` : "🔒"}</h4>
              <h5>Nv.{nivelUpgrade10}</h5>
            </div>
            <div className="upgrade__container" style={containerStyle(nivelUpgrade10 < 10)} onClick={Upgrade11}>
              <h2>{nivelUpgrade10 >= 1 ? `+${parseFloat(cpsUpgrade11.toFixed(2))} P/s` : "???"}</h2>
              <h3 className='backgroundCapitulo2'>{nivelUpgrade10 >= 1 ? "Casa Automatica 🏠" : "???????????"}</h3>
              <h4 style={custoStyle(custoUpgrade11)}>{nivelUpgrade10 >= 10 ? `$${formatNumber(custoUpgrade11)}` : "🔒"}</h4>
              <h5>Nv.{nivelUpgrade11}</h5>
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
