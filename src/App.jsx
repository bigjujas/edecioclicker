import { useState, useEffect } from 'react'
import CryptoJS from 'crypto-js';
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
import futEdecio from './assets/futEdecio.jpg'
import ceoEdecio from './assets/ceoEdecio.jpg'
import gladiatorEdecio from './assets/gladiatorEdecio.jpg'
import samuraiEdecio from './assets/samuraiEdecio.jpg'
///
import wallpaper1 from './assets/mainWallpaper.jpg'
import wallpaper2 from './assets/mainWallpaper2.jpg'
import wallpaper3 from './assets/mainWallpaper3.jpg'
import wallpaper4 from './assets/mainWallpaper4.jpg'
import wallpaper5 from './assets/mainWallpaper5.jpg'
import wallpaper6 from './assets/mainWallpaper6.jpg'
import wallpaper7 from './assets/mainWallpaper7.jpg'
import wallpaper8 from './assets/mainWallpaper8.jpg'
import wallpaper9 from './assets/mainWallpaper9.jpg'
import wallpaper10 from './assets/mainWallpaper10.jpg'

let notificationId = 0; // Let para notificação de Cps na Tela

// Criar upgrade
// Const (custo, nivel e cps)
// Prestige
// Save
// Skin (const)

function App() {
  const [cliques, setCliques] = useState(0)
  const [multiplicador, setMultiplicador] = useState(1)
  const [cliquesPorSegundo, setCliquesPorSegundo] = useState(0)
  const [nivelPrestigio, setNivelPrestigio] = useState(0)
  const [moedaPrestigio, setMoedaPrestigio] = useState(0)
  const [multiplicadorPrestigio, setMultiplicadorPrestigio] = useState(1)
  const [nivelMultiplicadorPrestigio, setNivelMultiplicadorPrestigio] = useState(0)

  // Utilities 

  const [worker, setWorker] = useState(null);
  const [currentTab, setCurrentTab] = useState(1);

  const toggleTab = (tab) => {
    setCurrentTab(tab);
  };

  // Assets //

  const [notificacoes, setNotificacoes] = useState([]);
  const [edecio, setEdecio] = useState(defaultEdecio)
  const [wallpaper, setWallpaper] = useState(wallpaper1)

  // Skins //

  const [coffeeEdecioSkin, setCoffeeEdecioSkin] = useState(0)
  const [programmerEdecioSkin, setProgrammerEdecioSkin] = useState(0)
  const [chadEdecioSkin, setChadEdecioSkin] = useState(0)
  const [criaEdecioSkin, setCriaEdecioSkin] = useState(0)
  const [prisionerEdecioSkin, setPrisionerEdecioSkin] = useState(0)
  const [minecraftEdecioSkin, setMinecraftEdecioSkin] = useState(0)
  const [futEdecioSkin, setFutEdecioSkin] = useState(0)
  const [ceoEdecioSkin, setCeoEdecioSkin] = useState(0)
  const [gladiatorEdecioSkin, setGladiatorEdecioSkin] = useState(0)
  const [samuraiEdecioSkin, setSamuraiEdecioSkin] = useState(0)

  // Fundos //

  const [academiaFundo, setAcademiaFundo] = useState(0)
  const [praiaFundo, setPraiaFundo] = useState(0)
  const [prisaoFundo, setPrisaoFundo] = useState(0)
  const [netherFundo, setNetherFundo] = useState(0)
  const [casaAutomaticaFundo, setCasaAutomaticaFundo] = useState(0)
  const [futFundo, setFutFundo] = useState(0)
  const [cidadeFundo, setCidadeFundo] = useState(0)
  const [desertoFundo, setDesertoFundo] = useState(0)
  const [temploFundo, setTemploFundo] = useState(0)

  // Custos Base //

  const [custoUpgrade1, setCustoUpgrade1] = useState(10)
  const [custoUpgrade2, setCustoUpgrade2] = useState(30)
  const [custoUpgrade3, setCustoUpgrade3] = useState(50)
  const [custoUpgrade4, setCustoUpgrade4] = useState(300)
  const [custoUpgrade5, setCustoUpgrade5] = useState(1500)
  const [custoUpgrade6, setCustoUpgrade6] = useState(8000)
  const [custoUpgrade7, setCustoUpgrade7] = useState(50000)
  const [custoUpgrade8, setCustoUpgrade8] = useState(500000)
  const [custoUpgrade9, setCustoUpgrade9] = useState(4000000)
  const [custoUpgrade10, setCustoUpgrade10] = useState(17500000)
  const [custoUpgrade11, setCustoUpgrade11] = useState(30000000)
  const [custoUpgrade12, setCustoUpgrade12] = useState(50000000)
  const [custoUpgrade13, setCustoUpgrade13] = useState(100000000)
  const [custoUpgrade14, setCustoUpgrade14] = useState(175000000)
  const [custoUpgrade15, setCustoUpgrade15] = useState(250000000)
  const [custoUpgrade16, setCustoUpgrade16] = useState(500000000)
  const [custoUpgrade17, setCustoUpgrade17] = useState(750000000)
  const [custoUpgrade18, setCustoUpgrade18] = useState(1000000000)

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
  const [nivelUpgrade12, setNivelUpgrade12] = useState(0)
  const [nivelUpgrade13, setNivelUpgrade13] = useState(0)
  const [nivelUpgrade14, setNivelUpgrade14] = useState(0)
  const [nivelUpgrade15, setNivelUpgrade15] = useState(0)
  const [nivelUpgrade16, setNivelUpgrade16] = useState(0)
  const [nivelUpgrade17, setNivelUpgrade17] = useState(0)
  const [nivelUpgrade18, setNivelUpgrade18] = useState(0)

  // Multiplicadores //

  const [cpsUpgrade1, setCpsUpgrade1] = useState(0.2)
  const [cpsUpgrade2, setCpsUpgrade2] = useState(0.50)
  const [cpsUpgrade3, setCpsUpgrade3] = useState(1.50)
  const [cpsUpgrade4, setCpsUpgrade4] = useState(6)
  const [cpsUpgrade5, setCpsUpgrade5] = useState(4)
  const [cpsUpgrade6, setCpsUpgrade6] = useState(60)
  const [cpsUpgrade7, setCpsUpgrade7] = useState(200)
  const [cpsUpgrade8, setCpsUpgrade8] = useState(500)
  const [cpsUpgrade9, setCpsUpgrade9] = useState(2500)
  const [cpsUpgrade10, setCpsUpgrade10] = useState(300)
  const [cpsUpgrade11, setCpsUpgrade11] = useState(7000)
  const [cpsUpgrade12, setCpsUpgrade12] = useState(10000)
  const [cpsUpgrade13, setCpsUpgrade13] = useState(25000)
  const [cpsUpgrade14, setCpsUpgrade14] = useState(3000)
  const [cpsUpgrade15, setCpsUpgrade15] = useState(64000)
  const [cpsUpgrade16, setCpsUpgrade16] = useState(140000)
  const [cpsUpgrade17, setCpsUpgrade17] = useState(200000)
  const [cpsUpgrade18, setCpsUpgrade18] = useState(20000)

  // QoL //

  const displayCliques = cliques >= 1000 ? formatNumber(Math.floor(cliques)) : parseFloat(cliques.toFixed(0));

  // Estilo condicional para o custo dos upgrades
  const custoStyle = (custo) => ({
    color: cliques >= custo ? '#fff' : '#e57373', // Vermelho se não tiver cliques suficientes
  });

  // Estilo condicional para o container dos upgrades

  const LockedUpgrade = (isLocked) => ({
    cursor: isLocked ? 'not-allowed' : 'pointer',
    filter: isLocked ? 'brightness(0.5) saturate(0.0)' : 'brightness(1)'
  });

  const LockedSkin = (isLocked) => ({
    cursor: isLocked ? 'not-allowed' : 'pointer',
    filter: isLocked ? 'brightness(0.05) saturate(0.0)' : 'brightness(1)',
    pointerEvents: isLocked ? 'none' : 'auto',
  });

  const EquippedSkin = (isLocked) => ({
    backgroundColor: isLocked ? '#0487E2' : '#292929',
  });

  function formatNumber(value) {
    if (value >= 1000000000) {
      return `${(value / 1000000000).toFixed(1)}B`; // Exemplo: 1.2B
    } else if (value >= 1000000) {
      return `${(value / 1000000).toFixed(1)}M`; // Exemplo: 1.2M
    } else if (value >= 10000) {
      return `${(value / 1000).toFixed(1)}k`; // Exemplo: 1.2k
    } else {
      return parseFloat((value).toFixed(2)); // Exemplo: 999
    }
  }

  // Save System //

  // Chave secreta para criptografia
  const SECRET_KEY = '1.0';

  function saveProgress() {
    const progress = {
      cliques,
      multiplicador,
      cliquesPorSegundo,
      edecio,
      wallpaper,
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
      custoUpgrade12,
      custoUpgrade13,
      custoUpgrade14,
      custoUpgrade15,
      custoUpgrade16,
      custoUpgrade17,
      custoUpgrade18,
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
      nivelUpgrade12,
      nivelUpgrade13,
      nivelUpgrade14,
      nivelUpgrade15,
      nivelUpgrade16,
      nivelUpgrade17,
      nivelUpgrade18,
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
      cpsUpgrade12,
      cpsUpgrade13,
      cpsUpgrade14,
      cpsUpgrade15,
      cpsUpgrade16,
      cpsUpgrade17,
      cpsUpgrade18,
      nivelPrestigio,
      moedaPrestigio,
      multiplicadorPrestigio,
      nivelMultiplicadorPrestigio,
      coffeeEdecioSkin,
      programmerEdecioSkin,
      chadEdecioSkin,
      criaEdecioSkin,
      prisionerEdecioSkin,
      minecraftEdecioSkin,
      futEdecioSkin,
      ceoEdecioSkin,
      gladiatorEdecioSkin,
      samuraiEdecioSkin,
      //
      academiaFundo,
      praiaFundo,
      prisaoFundo,
      netherFundo,
      casaAutomaticaFundo,
      futFundo,
      cidadeFundo,
      desertoFundo,
      temploFundo,
    };

    console.log("Dados a serem salvos:", progress); // Log dos dados antes da criptografia

    // Criptografar os dados
    const encrypted = CryptoJS.AES.encrypt(JSON.stringify(progress), SECRET_KEY).toString();

    const dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(encrypted);
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
      const encrypted = e.target.result;

      // Descriptografar os dados
      const bytes = CryptoJS.AES.decrypt(encrypted, SECRET_KEY);
      const decrypted = bytes.toString(CryptoJS.enc.Utf8);
      const progress = JSON.parse(decrypted);

      // Atualizar os estados com os valores do save
      setCliques(progress.cliques);
      setMultiplicador(progress.multiplicador);
      setCliquesPorSegundo(progress.cliquesPorSegundo);
      setEdecio(progress.edecio);
      setWallpaper(progress.wallpaper);
      setCustoUpgrade1(progress.custoUpgrade1);
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
      setCustoUpgrade12(progress.custoUpgrade12);
      setCustoUpgrade13(progress.custoUpgrade13);
      setCustoUpgrade14(progress.custoUpgrade14);
      setCustoUpgrade15(progress.custoUpgrade15);
      setCustoUpgrade16(progress.custoUpgrade16);
      setCustoUpgrade17(progress.custoUpgrade17);
      setCustoUpgrade18(progress.custoUpgrade18);
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
      setNivelUpgrade12(progress.nivelUpgrade12);
      setNivelUpgrade13(progress.nivelUpgrade13);
      setNivelUpgrade14(progress.nivelUpgrade14);
      setNivelUpgrade15(progress.nivelUpgrade15);
      setNivelUpgrade16(progress.nivelUpgrade16);
      setNivelUpgrade17(progress.nivelUpgrade17);
      setNivelUpgrade18(progress.nivelUpgrade18);
      setCpsUpgrade1(progress.cpsUpgrade1);
      setCpsUpgrade2(progress.cpsUpgrade2);
      setCpsUpgrade3(progress.cpsUpgrade3);
      setCpsUpgrade4(progress.cpsUpgrade4);
      setCpsUpgrade5(progress.cpsUpgrade5);
      setCpsUpgrade6(progress.cpsUpgrade6);
      setCpsUpgrade7(progress.cpsUpgrade7);
      setCpsUpgrade8(progress.cpsUpgrade8);
      setCpsUpgrade9(progress.cpsUpgrade9);
      setCpsUpgrade10(progress.cpsUpgrade10);
      setCpsUpgrade11(progress.cpsUpgrade11);
      setCpsUpgrade12(progress.cpsUpgrade12);
      setCpsUpgrade13(progress.cpsUpgrade13);
      setCpsUpgrade14(progress.cpsUpgrade14);
      setCpsUpgrade15(progress.cpsUpgrade15);
      setCpsUpgrade16(progress.cpsUpgrade16);
      setCpsUpgrade17(progress.cpsUpgrade17);
      setCpsUpgrade18(progress.cpsUpgrade18);
      setNivelPrestigio(progress.nivelPrestigio);
      setMoedaPrestigio(progress.moedaPrestigio);
      setMultiplicadorPrestigio(progress.multiplicadorPrestigio);
      setNivelMultiplicadorPrestigio(progress.nivelMultiplicadorPrestigio);
      setCoffeeEdecioSkin(progress.coffeeEdecioSkin);
      setProgrammerEdecioSkin(progress.programmerEdecioSkin);
      setChadEdecioSkin(progress.chadEdecioSkin);
      setCriaEdecioSkin(progress.criaEdecioSkin);
      setPrisionerEdecioSkin(progress.prisionerEdecioSkin);
      setMinecraftEdecioSkin(progress.minecraftEdecioSkin);
      setFutEdecioSkin(progress.futEdecioSkin);
      setCeoEdecioSkin(progress.ceoEdecioSkin);
      setGladiatorEdecioSkin(progress.gladiatorEdecioSkin);
      setSamuraiEdecioSkin(progress.samuraiEdecioSkin);
      setAcademiaFundo(progress.academiaFundo);
      setPraiaFundo(progress.praiaFundo);
      setPrisaoFundo(progress.prisaoFundo);
      setNetherFundo(progress.netherFundo);
      setCasaAutomaticaFundo(progress.casaAutomaticaFundo);
      setFutFundo(progress.futFundo);
      setCidadeFundo(progress.cidadeFundo);
      setDesertoFundo(progress.desertoFundo);
      setTemploFundo(progress.temploFundo);
    };

    reader.readAsText(file);
  }

  const importSaveClick = () => {
    document.getElementById("fileInput").click();
  };

  // Funçoes do Jogo //

  function Clique(event) {
    setCliques(prevCliques => prevCliques + multiplicador * multiplicadorPrestigio);

    // Tudo Abaixo dessa Function é pro evento de Notificação

    // Obter a posição do clique
    const { clientX, clientY } = event;
    const novoId = notificationId++;

    setNotificacoes(prevNotificacoes => [
      ...prevNotificacoes,
      {
        id: novoId,
        texto: nivelUpgrade2 >= 1 ? `+${formatNumber(multiplicador * multiplicadorPrestigio)}👍` : `+${formatNumber(multiplicador * multiplicadorPrestigio)}`,
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

  // Skins Functions

  function DefaultEdecio() {
    setEdecio(defaultEdecio)
  }

  function CoffeeEdecio() {
    if (coffeeEdecioSkin === 1) {
      setEdecio(coffeeEdecio)
    }
  }

  function ProgrammerEdecio() {
    if (programmerEdecioSkin === 1) {
      setEdecio(programmerEdecio)
    }
  }

  function ChadEdecio() {
    if (chadEdecioSkin === 1) {
      setEdecio(chadEdecio)
    }
  }

  function CriaEdecio() {
    if (criaEdecioSkin === 1) {
      setEdecio(criaEdecio)
    }
  }

  function PrisionerEdecio() {
    if (prisionerEdecioSkin === 1) {
      setEdecio(prisionerEdecio)
    }
  }

  function MinecraftEdecio() {
    if (minecraftEdecioSkin === 1) {
      setEdecio(minecraftEdecio)
    }
  }

  function FutEdecio() {
    if (futEdecioSkin === 1) {
      setEdecio(futEdecio)
    }
  }

  function CeoEdecio() {
    if (ceoEdecioSkin === 1) {
      setEdecio(ceoEdecio)
    }
  }

  function GladiatorEdecio() {
    if (gladiatorEdecioSkin === 1) {
      setEdecio(gladiatorEdecio)
    }
  }

  function SamuraiEdecio() {
    if (samuraiEdecioSkin === 1) {
      setEdecio(samuraiEdecio)
    }
  }

  // Fundos

  function defaultFundo() {
    setWallpaper(wallpaper1)
  }

  function AcademiaFundo() {
    if (academiaFundo === 1) {
      setWallpaper(wallpaper2)
    }
  }

  function PraiaFundo() {
    if (praiaFundo === 1) {
      setWallpaper(wallpaper3)
    }
  }

  function PrisaoFundo() {
    if (prisaoFundo === 1) {
      setWallpaper(wallpaper4)
    }
  }

  function NetherFundo() {
    if (netherFundo === 1) {
      setWallpaper(wallpaper5)
    }
  }

  function CasaAutomaticaFundo() {
    if (casaAutomaticaFundo === 1) {
      setWallpaper(wallpaper6)
    }
  }

  function FutFundo() {
    if (futFundo === 1) {
      setWallpaper(wallpaper7)
    }
  }

  function CidadeFundo() {
    if (cidadeFundo === 1) {
      setWallpaper(wallpaper8)
    }
  }

  function DesertoFundo() {
    if (desertoFundo === 1) {
      setWallpaper(wallpaper9)
    }
  }

  function TemploFundo() {
    if (temploFundo === 1) {
      setWallpaper(wallpaper10)
    }
  }

  // Prestigio

  function fazerPrestigio() {
    if (nivelUpgrade14 >= 1) {
      setNivelPrestigio(prevNivelPrestigio => prevNivelPrestigio + 1)
      setMoedaPrestigio(prevMoedaPrestigio => prevMoedaPrestigio + 1)
      setCliques(0)
      setMultiplicador(1)
      setCliquesPorSegundo(0)
      setCustoUpgrade1(10)
      setCustoUpgrade2(30)
      setCustoUpgrade3(50)
      setCustoUpgrade4(300)
      setCustoUpgrade5(1500)
      setCustoUpgrade6(8000)
      setCustoUpgrade7(50000)
      setCustoUpgrade8(500000)
      setCustoUpgrade9(4000000)
      setCustoUpgrade10(17500000)
      setCustoUpgrade11(30000000)
      setCustoUpgrade12(50000000)
      setCustoUpgrade13(100000000)
      setCustoUpgrade14(175000000)
      setCustoUpgrade15(250000000)
      setCustoUpgrade16(500000000)
      setCustoUpgrade17(750000000)
      setCustoUpgrade18(1000000000)
      setNivelUpgrade1(0)
      setNivelUpgrade2(0)
      setNivelUpgrade3(0)
      setNivelUpgrade4(0)
      setNivelUpgrade5(0)
      setNivelUpgrade6(0)
      setNivelUpgrade7(0)
      setNivelUpgrade8(0)
      setNivelUpgrade9(0)
      setNivelUpgrade10(0)
      setNivelUpgrade11(0)
      setNivelUpgrade12(0)
      setNivelUpgrade13(0)
      setNivelUpgrade14(0)
      setNivelUpgrade15(0)
      setNivelUpgrade16(0)
      setNivelUpgrade17(0)
      setNivelUpgrade18(0)
      setCpsUpgrade1(0.2);
      setCpsUpgrade2(0.50);
      setCpsUpgrade3(1.50);
      setCpsUpgrade4(6);
      setCpsUpgrade5(4);
      setCpsUpgrade6(60);
      setCpsUpgrade7(200);
      setCpsUpgrade8(500);
      setCpsUpgrade9(2500);
      setCpsUpgrade10(300);
      setCpsUpgrade11(7000);
      setCpsUpgrade12(10000);
      setCpsUpgrade13(25000);
      setCpsUpgrade14(3000);
      setCpsUpgrade15(64000);
      setCpsUpgrade16(140000);
      setCpsUpgrade17(200000);
      setCpsUpgrade18(20000);
      setEdecio(defaultEdecio)
      setWallpaper(wallpaper1)
    }
  }

  function upgradeMultiplicadorPrestigio() {
    if (moedaPrestigio >= 1) {
      setMultiplicadorPrestigio(prevMultiplicadorPrestigio => prevMultiplicadorPrestigio + 0.20)
      setMoedaPrestigio(prevMoedaPrestigio => prevMoedaPrestigio - 1)
      setNivelMultiplicadorPrestigio(prevNivelMultiplicadorPrestigio => prevNivelMultiplicadorPrestigio + 1)
    }
  }

  // Upgrades 

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
      setCustoUpgrade1(prevCusto => Math.floor(prevCusto * 1.15))
      setCoffeeEdecioSkin(1)
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
    if (cliques >= custoUpgrade3 && nivelUpgrade2 >= 10) {
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
      setProgrammerEdecioSkin(1)
    }
  }

  function Upgrade4() {
    if (cliques >= custoUpgrade4 && nivelUpgrade3 >= 10) {
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
      setAcademiaFundo(1)
    }
  }

  function Upgrade5() {
    if (cliques >= custoUpgrade5 && nivelUpgrade4 >= 10) {
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
      setChadEdecioSkin(1)
    }
  }

  function Upgrade6() {
    if (cliques >= custoUpgrade6 && nivelUpgrade5 >= 10) {
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
      setPraiaFundo(1)
    }
  }

  function Upgrade7() {
    if (cliques >= custoUpgrade7 && nivelUpgrade6 >= 10) {
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
      setCriaEdecioSkin(1)
    }
  }

  function Upgrade8() {
    if (cliques >= custoUpgrade8 && nivelUpgrade7 >= 10) {
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
      setPrisionerEdecioSkin(1)
      setPrisaoFundo(1)
    }
  }

  function Upgrade9() {
    if (cliques >= custoUpgrade9 && nivelUpgrade8 >= 10) {
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
      setNetherFundo(1)
    }
  }

  function Upgrade10() {
    if (cliques >= custoUpgrade10 && nivelUpgrade9 >= 10) {
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
      setMinecraftEdecioSkin(1)
    }
  }

  function Upgrade11() {
    if (cliques >= custoUpgrade11 && nivelUpgrade10 >= 10) {
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
      setCasaAutomaticaFundo(1)
    }
  }

  function Upgrade12() {
    if (cliques >= custoUpgrade12 && nivelUpgrade11 >= 10) {
      setCliques(prevCliques => prevCliques - custoUpgrade12)
      setNivelUpgrade12(prevNivel => {
        const novoNivel = prevNivel + 1;
        if (novoNivel % 10 === 0) {
          setCpsUpgrade12(cpsUpgrade12 * 2);
        }
        return novoNivel;
      });
      setCliquesPorSegundo(prevCliquesPorSegundo => prevCliquesPorSegundo + cpsUpgrade12)
      setCustoUpgrade12(prevCusto => Math.floor(prevCusto * 1.35))
      setFutEdecioSkin(1)
      setFutFundo(1)
    }
  }

  function Upgrade13() {
    if (cliques >= custoUpgrade13 && nivelUpgrade12 >= 10) {
      setCliques(prevCliques => prevCliques - custoUpgrade13)
      setNivelUpgrade13(prevNivel => {
        const novoNivel = prevNivel + 1;
        if (novoNivel % 10 === 0) {
          setCpsUpgrade13(cpsUpgrade13 * 2);
        }
        return novoNivel;
      });
      setCliquesPorSegundo(prevCliquesPorSegundo => prevCliquesPorSegundo + cpsUpgrade13)
      setCustoUpgrade13(prevCusto => Math.floor(prevCusto * 1.35))
      setCidadeFundo(1)
    }
  }

  function Upgrade14() {
    if (cliques >= custoUpgrade14 && nivelUpgrade13 >= 10) {
      setCliques(prevCliques => prevCliques - custoUpgrade14)
      setNivelUpgrade14(prevNivel => {
        const novoNivel = prevNivel + 1;
        if (novoNivel % 10 === 0) {
          setCpsUpgrade14(cpsUpgrade14 * 2);
        }
        return novoNivel;
      });
      setMultiplicador(prevMultiplicador => prevMultiplicador + cpsUpgrade14)
      setCustoUpgrade14(prevCusto => Math.floor(prevCusto * 1.35))
      setCeoEdecioSkin(1)
    }
  }

  function Upgrade15() {
    if (cliques >= custoUpgrade15 && nivelUpgrade14 >= 10) {
      setCliques(prevCliques => prevCliques - custoUpgrade15)
      setNivelUpgrade15(prevNivel => {
        const novoNivel = prevNivel + 1;
        if (novoNivel % 10 === 0) {
          setCpsUpgrade15(cpsUpgrade15 * 2);
        }
        return novoNivel;
      });
      setCliquesPorSegundo(prevCliquesPorSegundo => prevCliquesPorSegundo + cpsUpgrade15)
      setCustoUpgrade15(prevCusto => Math.floor(prevCusto * 1.35))
      setDesertoFundo(1)
    }
  }

  function Upgrade16() {
    if (cliques >= custoUpgrade16 && nivelUpgrade15 >= 10) {
      setCliques(prevCliques => prevCliques - custoUpgrade16)
      setNivelUpgrade16(prevNivel => {
        const novoNivel = prevNivel + 1;
        if (novoNivel % 10 === 0) {
          setCpsUpgrade16(cpsUpgrade16 * 2);
        }
        return novoNivel;
      });
      setMultiplicador(prevMultiplicador => prevMultiplicador + cpsUpgrade16)
      setCustoUpgrade16(prevCusto => Math.floor(prevCusto * 1.35))
      setGladiatorEdecioSkin(1)
    }
  }

  function Upgrade17() {
    if (cliques >= custoUpgrade17 && nivelUpgrade16 >= 10) {
      setCliques(prevCliques => prevCliques - custoUpgrade17)
      setNivelUpgrade17(prevNivel => {
        const novoNivel = prevNivel + 1;
        if (novoNivel % 10 === 0) {
          setCpsUpgrade17(cpsUpgrade17 * 2);
        }
        return novoNivel;
      });
      setCliquesPorSegundo(prevCliquesPorSegundo => prevCliquesPorSegundo + cpsUpgrade17)
      setCustoUpgrade17(prevCusto => Math.floor(prevCusto * 1.35))
      setTemploFundo(1)
    }
  }

  function Upgrade18() {
    if (cliques >= custoUpgrade18 && nivelUpgrade17 >= 10) {
      setCliques(prevCliques => prevCliques - custoUpgrade18)
      setNivelUpgrade18(prevNivel => {
        const novoNivel = prevNivel + 1;
        if (novoNivel % 10 === 0) {
          setCpsUpgrade18(cpsUpgrade18 * 2);
        }
        return novoNivel;
      });
      setMultiplicador(prevMultiplicador => prevMultiplicador + cpsUpgrade18)
      setCustoUpgrade18(prevCusto => Math.floor(prevCusto * 1.35))
      setSamuraiEdecioSkin(1)
    }
  }


  // Ciques Por Segundo

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
    myWorker.postMessage({ type: 'SET_MULTIPLICADOR_PRESTIGIO', value: multiplicadorPrestigio });
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
        <h3>Versão: 1.3</h3>
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
        <div className="left-side" style={{ backgroundImage: `url(${wallpaper})`, }}>
          <div className="game__container">
            <h4>{nivelPrestigio > 0 ? `Prestigio: ${nivelPrestigio}` : ""}</h4>
            <div className="displaybalance">
              <h1>${displayCliques}</h1>
              <img src={edeciocoin} alt="" draggable="false" />
            </div>
            <div className="displaycps">
              <h2 className="Cps">${formatNumber(multiplicador * multiplicadorPrestigio)} por Clique</h2>
              <h2 className="Cps">${formatNumber(cliquesPorSegundo * multiplicadorPrestigio)} por Segundo</h2>
            </div>
            <div className="edecio">
              <img src={edecio} alt="" onClick={Clique} draggable="false" />
            </div>
          </div>
        </div>
        <div className="right-side">
          <div className="upgrades">
            <div className="changeTab__container">
              <h1 className={currentTab === 1 ? "tab_active" : "tab_inactive"} onClick={() => toggleTab(1)}>Upgrades 💸</h1>
              <h2 className={currentTab === 2 ? "tab_active" : "tab_inactive"} onClick={() => toggleTab(2)}>Prestigio ⭐️</h2>
              <h3 className={currentTab === 3 ? "tab_active" : "tab_inactive"} onClick={() => toggleTab(3)}>Skins 🎪</h3>
            </div>
            {currentTab === 1 && (
              <>
                <div className="upgrade__container" onClick={Upgrade1}>
                  <h2>+{parseFloat(cpsUpgrade1.toFixed(2))} P/s</h2>
                  <h3>Café Quentinho ☕</h3>
                  <h4 style={custoStyle(custoUpgrade1)}>${formatNumber(custoUpgrade1)}</h4> {/* Exibe o custo atualizado */}
                  <h5>Nv.{nivelUpgrade1}</h5>
                </div>
                <div className="upgrade__container" style={LockedUpgrade(nivelUpgrade1 < 10)} onClick={Upgrade2}>
                  <h2>+{parseFloat(cpsUpgrade2.toFixed(2))}</h2>
                  <h3>Muito Legal 👍</h3>
                  <h4 style={custoStyle(custoUpgrade2)}>{nivelUpgrade1 >= 10 ? `$${formatNumber(custoUpgrade2)}` : "🔒"}</h4> {/* Exibe o custo atualizado */}
                  <h5>Nv.{nivelUpgrade2}</h5>
                </div>
                <div className="upgrade__container" style={LockedUpgrade(nivelUpgrade2 < 10)} onClick={Upgrade3}>
                  <h2>{nivelUpgrade2 >= 1 ? `+${formatNumber(cpsUpgrade3)} P/s` : "???"}</h2>
                  <h3>{nivelUpgrade2 >= 1 ? "Programação 💻" : "???"}</h3>
                  <h4 style={custoStyle(custoUpgrade3)}>{nivelUpgrade2 >= 10 ? `$${formatNumber(custoUpgrade3)}` : "🔒"}</h4>
                  <h5>Nv.{nivelUpgrade3}</h5>
                </div>
                <div className="upgrade__container" style={LockedUpgrade(nivelUpgrade3 < 10)} onClick={Upgrade4}>
                  <h2>{nivelUpgrade3 >= 1 ? `+${formatNumber(cpsUpgrade4)} P/s` : "???"}</h2>
                  <h3>{nivelUpgrade3 >= 1 ? "Academia Avenida 💪" : "???"}</h3>
                  <h4 style={custoStyle(custoUpgrade4)}>{nivelUpgrade3 >= 10 ? `$${formatNumber(custoUpgrade4)}` : "🔒"}</h4>
                  <h5>Nv.{nivelUpgrade4}</h5>
                </div>
                <div className="upgrade__container" style={LockedUpgrade(nivelUpgrade4 < 10)} onClick={Upgrade5}>
                  <h2>{nivelUpgrade4 >= 1 ? `+${formatNumber(cpsUpgrade5)}` : "???"}</h2>
                  <h3>{nivelUpgrade4 >= 1 ? "Projetinho 🗿" : "???"}</h3>
                  <h4 style={custoStyle(custoUpgrade5)}>{nivelUpgrade4 >= 10 ? `$${formatNumber(custoUpgrade5)}` : "🔒"}</h4>
                  <h5>Nv.{nivelUpgrade5}</h5>
                </div>
                <div className="upgrade__container" style={LockedUpgrade(nivelUpgrade5 < 10)} onClick={Upgrade6}>
                  <h2>{nivelUpgrade5 >= 1 ? `+${formatNumber(cpsUpgrade6)} P/s` : "???"}</h2>
                  <h3>{nivelUpgrade5 >= 1 ? "Prainha 🏝️" : "???"}</h3>
                  <h4 style={custoStyle(custoUpgrade6)}>{nivelUpgrade5 >= 10 ? `$${formatNumber(custoUpgrade6)}` : "🔒"}</h4>
                  <h5>Nv.{nivelUpgrade6}</h5>
                </div>
                <div className="upgrade__container" style={LockedUpgrade(nivelUpgrade6 < 10)} onClick={Upgrade7}>
                  <h2>{nivelUpgrade6 >= 1 ? `+${formatNumber(cpsUpgrade7)} P/s` : "???"}</h2>
                  <h3>{nivelUpgrade6 >= 1 ? "Cria 🤬" : "???"}</h3>
                  <h4 style={custoStyle(custoUpgrade7)}>{nivelUpgrade6 >= 10 ? `$${formatNumber(custoUpgrade7)}` : "🔒"}</h4>
                  <h5>Nv.{nivelUpgrade7}</h5>
                </div>
                <div className="upgrade__container" style={LockedUpgrade(nivelUpgrade7 < 10)} onClick={Upgrade8}>
                  <h2>{nivelUpgrade7 >= 1 ? `+${formatNumber(cpsUpgrade8)} P/s` : "???"}</h2>
                  <h3>{nivelUpgrade7 >= 1 ? "Prisão ⛓️" : "???"}</h3>
                  <h4 style={custoStyle(custoUpgrade8)}>{nivelUpgrade7 >= 10 ? `$${formatNumber(custoUpgrade8)}` : "🔒"}</h4>
                  <h5>Nv.{nivelUpgrade8}</h5>
                </div>
                <div className="upgrade__container" style={LockedUpgrade(nivelUpgrade8 < 10)} onClick={Upgrade9}>
                  <h2>{nivelUpgrade8 >= 1 ? `+${formatNumber(cpsUpgrade9)} P/s` : "???"}</h2>
                  <h3 className='backgroundCapitulo2'>{nivelUpgrade8 >= 1 ? "Nether 🕳️" : "???"}</h3>
                  <h4 style={custoStyle(custoUpgrade9)}>{nivelUpgrade8 >= 10 ? `$${formatNumber(custoUpgrade9)}` : "🔒"}</h4>
                  <h5>Nv.{nivelUpgrade9}</h5>
                </div>
                <div className="upgrade__container" style={LockedUpgrade(nivelUpgrade9 < 10)} onClick={Upgrade10}>
                  <h2>{nivelUpgrade9 >= 1 ? `+${formatNumber(cpsUpgrade10)}` : "???"}</h2>
                  <h3 className='backgroundCapitulo2'>{nivelUpgrade9 >= 1 ? "Full Dima 💎" : "???"}</h3>
                  <h4 style={custoStyle(custoUpgrade10)}>{nivelUpgrade9 >= 10 ? `$${formatNumber(custoUpgrade10)}` : "🔒"}</h4>
                  <h5>Nv.{nivelUpgrade10}</h5>
                </div>
                <div className="upgrade__container" style={LockedUpgrade(nivelUpgrade10 < 10)} onClick={Upgrade11}>
                  <h2>{nivelUpgrade10 >= 1 ? `+${formatNumber(cpsUpgrade11)} P/s` : "???"}</h2>
                  <h3 className='backgroundCapitulo2'>{nivelUpgrade10 >= 1 ? "Casa Automatica 🏠" : "???"}</h3>
                  <h4 style={custoStyle(custoUpgrade11)}>{nivelUpgrade10 >= 10 ? `$${formatNumber(custoUpgrade11)}` : "🔒"}</h4>
                  <h5>Nv.{nivelUpgrade11}</h5>
                </div>
                <div className="upgrade__container" style={LockedUpgrade(nivelUpgrade11 < 10)} onClick={Upgrade12}>
                  <h2>{nivelUpgrade11 >= 1 ? `+${formatNumber(cpsUpgrade12)} P/s` : "???"}</h2>
                  <h3 className='backgroundCapitulo3'>{nivelUpgrade11 >= 1 ? "Atleta ⚽️" : "???"}</h3>
                  <h4 style={custoStyle(custoUpgrade12)}>{nivelUpgrade11 >= 10 ? `$${formatNumber(custoUpgrade12)}` : "🔒"}</h4>
                  <h5>Nv.{nivelUpgrade12}</h5>
                </div>
                <div className="upgrade__container" style={LockedUpgrade(nivelUpgrade12 < 10)} onClick={Upgrade13}>
                  <h2>{nivelUpgrade12 >= 1 ? `+${formatNumber(cpsUpgrade13)} P/s` : "???"}</h2>
                  <h3 className='backgroundCapitulo3'>{nivelUpgrade12 >= 1 ? "Cidade 🏙️" : "???"}</h3>
                  <h4 style={custoStyle(custoUpgrade13)}>{nivelUpgrade12 >= 10 ? `$${formatNumber(custoUpgrade13)}` : "🔒"}</h4>
                  <h5>Nv.{nivelUpgrade13}</h5>
                </div>
                <div className="upgrade__container" style={LockedUpgrade(nivelUpgrade13 < 10)} onClick={Upgrade14}>
                  <h2>{nivelUpgrade13 >= 1 ? `+${formatNumber(cpsUpgrade14)}` : "???"}</h2>
                  <h3 className='backgroundCapitulo3'>{nivelUpgrade13 >= 1 ? "Ceo 💼" : "???"}</h3>
                  <h4 style={custoStyle(custoUpgrade14)}>{nivelUpgrade13 >= 10 ? `$${formatNumber(custoUpgrade14)}` : "🔒"}</h4>
                  <h5>Nv.{nivelUpgrade14}</h5>
                </div>
                <div className="upgrade__container" style={LockedUpgrade(nivelUpgrade14 < 10)} onClick={Upgrade15}>
                  <h2>{nivelUpgrade14 >= 1 ? `+${formatNumber(cpsUpgrade15)} P/s` : "???"}</h2>
                  <h3 className='backgroundCapitulo4'>{nivelUpgrade14 >= 1 ? "Exílio 🏜️" : "???"}</h3>
                  <h4 style={custoStyle(custoUpgrade15)}>{nivelUpgrade14 >= 10 ? `$${formatNumber(custoUpgrade15)}` : "🔒"}</h4>
                  <h5>Nv.{nivelUpgrade15}</h5>
                </div>
                <div className="upgrade__container" style={LockedUpgrade(nivelUpgrade15 < 10)} onClick={Upgrade16}>
                  <h2>{nivelUpgrade15 >= 1 ? `+${formatNumber(cpsUpgrade16)} P/s` : "???"}</h2>
                  <h3 className='backgroundCapitulo4'>{nivelUpgrade15 >= 1 ? "Gladiador 🗡️" : "???"}</h3>
                  <h4 style={custoStyle(custoUpgrade16)}>{nivelUpgrade15 >= 10 ? `$${formatNumber(custoUpgrade16)}` : "🔒"}</h4>
                  <h5>Nv.{nivelUpgrade16}</h5>
                </div>
                <div className="upgrade__container" style={LockedUpgrade(nivelUpgrade16 < 10)} onClick={Upgrade17}>
                  <h2>{nivelUpgrade16 >= 1 ? `+${formatNumber(cpsUpgrade17)} P/s` : "???"}</h2>
                  <h3 className='backgroundCapitulo5'>{nivelUpgrade16 >= 1 ? "Templo 🛕" : "???"}</h3>
                  <h4 style={custoStyle(custoUpgrade17)}>{nivelUpgrade16 >= 10 ? `$${formatNumber(custoUpgrade17)}` : "🔒"}</h4>
                  <h5>Nv.{nivelUpgrade17}</h5>
                </div>
                <div className="upgrade__container" style={LockedUpgrade(nivelUpgrade17 < 10)} onClick={Upgrade18}>
                  <h2>{nivelUpgrade17 >= 1 ? `+${formatNumber(cpsUpgrade18)}` : "???"}</h2>
                  <h3 className='backgroundCapitulo5'>{nivelUpgrade17 >= 1 ? "Samurai 🥷🏻" : "???"}</h3>
                  <h4 style={custoStyle(custoUpgrade18)}>{nivelUpgrade17 >= 10 ? `$${formatNumber(custoUpgrade18)}` : "🔒"}</h4>
                  <h5>Nv.{nivelUpgrade18}</h5>
                </div>
              </>
            )}
            {currentTab === 2 && (
              <>
                <div className="upgrade__container" style={LockedUpgrade(nivelUpgrade11 < 3)} onClick={fazerPrestigio}>
                  <h3 className='backgroundPrestigio'>Fazer Prestigio 💫</h3>
                  <h5>Nivel de Prestigio: {nivelPrestigio}</h5>
                </div>
                <div className="upgrade__container" style={LockedUpgrade(moedaPrestigio < 1)} onClick={upgradeMultiplicadorPrestigio}>
                  <h2>x20%</h2>
                  <h3 className='backgroundPrestigio'>Multiplicador 🎱</h3>
                  <h4>⚡️1</h4>
                  <h5>Nv.{nivelMultiplicadorPrestigio}</h5>
                </div>
                <div className="upgrade__container">
                  <h3 className='backgroundPrestigio'>Moedas Prestigio: ⚡️{moedaPrestigio}</h3>
                </div>
              </>
            )}
            {currentTab === 3 && (
              <>
                <div className="skin__container">
                  <h4>Skins 🥸</h4>
                  <div className="skin__boxes">
                    <div className="skin__box"><img src={defaultEdecio} onClick={DefaultEdecio} alt="" draggable="false" /><h5 style={EquippedSkin(edecio === defaultEdecio)}>Padrão</h5></div>
                    <div className="skin__box"><img src={coffeeEdecio} onClick={CoffeeEdecio} alt="" style={LockedSkin(coffeeEdecioSkin === 0)} draggable="false" /><h5 style={EquippedSkin(edecio === coffeeEdecio)}>{coffeeEdecioSkin === 1 ? "Café" : "???"}</h5></div>
                    <div className="skin__box"><img src={programmerEdecio} onClick={ProgrammerEdecio} alt="" style={LockedSkin(programmerEdecioSkin === 0)} draggable="false" /><h5 style={EquippedSkin(edecio === programmerEdecio)}>{programmerEdecioSkin === 1 ? "Programador" : "???"}</h5></div>
                    <div className="skin__box"><img src={chadEdecio} onClick={ChadEdecio} alt="" style={LockedSkin(chadEdecioSkin === 0)} draggable="false" /><h5 style={EquippedSkin(edecio === chadEdecio)}>{chadEdecioSkin === 1 ? "Chad" : "???"}</h5></div>
                    <div className="skin__box"><img src={criaEdecio} onClick={CriaEdecio} alt="" style={LockedSkin(criaEdecioSkin === 0)} draggable="false" /><h5 style={EquippedSkin(edecio === criaEdecio)}>{criaEdecioSkin === 1 ? "Cria" : "???"}</h5></div>
                  </div>
                  <div className="skin__boxes">
                    <div className="skin__box"><img src={prisionerEdecio} onClick={PrisionerEdecio} alt="" style={LockedSkin(prisionerEdecioSkin === 0)} draggable="false" /><h5 style={EquippedSkin(edecio === prisionerEdecio)}>{prisionerEdecioSkin === 1 ? "Prisioneiro" : "???"}</h5></div>
                    <div className="skin__box"><img src={minecraftEdecio} onClick={MinecraftEdecio} alt="" style={LockedSkin(minecraftEdecioSkin === 0)} draggable="false" /><h5 style={EquippedSkin(edecio === minecraftEdecio)}>{minecraftEdecioSkin === 1 ? "Minecraft" : "???"}</h5></div>
                    <div className="skin__box"><img src={futEdecio} onClick={FutEdecio} alt="" style={LockedSkin(futEdecioSkin === 0)} draggable="false" /><h5 style={EquippedSkin(edecio === futEdecio)}>{futEdecioSkin === 1 ? "Atleta" : "???"}</h5></div>
                    <div className="skin__box"><img src={ceoEdecio} onClick={CeoEdecio} alt="" style={LockedSkin(ceoEdecioSkin === 0)} draggable="false" /><h5 style={EquippedSkin(edecio === ceoEdecio)}>{ceoEdecioSkin === 1 ? "Ceo" : "???"}</h5></div>
                    <div className="skin__box"><img src={gladiatorEdecio} onClick={GladiatorEdecio} alt="" style={LockedSkin(gladiatorEdecioSkin === 0)} draggable="false" /><h5 style={EquippedSkin(edecio === gladiatorEdecio)}>{gladiatorEdecioSkin === 1 ? "Gladiador" : "???"}</h5></div>
                    <div className="skin__box"><img src={samuraiEdecio} onClick={SamuraiEdecio} alt="" style={LockedSkin(samuraiEdecioSkin === 0)} draggable="false" /><h5 style={EquippedSkin(edecio === samuraiEdecio)}>{samuraiEdecioSkin === 1 ? "Samurai" : "???"}</h5></div>
                  </div>
                </div>
                <div className="skin__container">
                  <h4>Fundos 🌉</h4>
                  <div className="skin__boxes">
                    <div className="skin__box"><img src={wallpaper1} onClick={defaultFundo} alt="" draggable="false" /><h5 style={EquippedSkin(wallpaper === wallpaper1)}>Padrão</h5></div>
                    <div className="skin__box"><img src={wallpaper2} onClick={AcademiaFundo} alt="" style={LockedSkin(academiaFundo === 0)} draggable="false" /><h5 style={EquippedSkin(wallpaper === wallpaper2)}>{academiaFundo === 1 ? "Academia" : "???"}</h5></div>
                    <div className="skin__box"><img src={wallpaper3} onClick={PraiaFundo} alt="" style={LockedSkin(praiaFundo === 0)} draggable="false" /><h5 style={EquippedSkin(wallpaper === wallpaper3)}>{praiaFundo === 1 ? "Praia" : "???"}</h5></div>
                    <div className="skin__box"><img src={wallpaper4} onClick={PrisaoFundo} alt="" style={LockedSkin(prisaoFundo === 0)} draggable="false" /><h5 style={EquippedSkin(wallpaper === wallpaper4)}>{prisaoFundo === 1 ? "Prisão" : "???"}</h5></div>
                    <div className="skin__box"><img src={wallpaper5} onClick={NetherFundo} alt="" style={LockedSkin(netherFundo === 0)} draggable="false" /><h5 style={EquippedSkin(wallpaper === wallpaper5)}>{netherFundo === 1 ? "Nether" : "???"}</h5></div>
                  </div>
                  <div className="skin__boxes">
                    <div className="skin__box"><img src={wallpaper6} onClick={CasaAutomaticaFundo} alt="" style={LockedSkin(casaAutomaticaFundo === 0)} draggable="false" /><h5 style={EquippedSkin(wallpaper === wallpaper6)}>{casaAutomaticaFundo === 1 ? "Casa Auto." : "???"}</h5></div>
                    <div className="skin__box"><img src={wallpaper7} onClick={FutFundo} alt="" style={LockedSkin(futFundo === 0)} draggable="false" /><h5 style={EquippedSkin(wallpaper === wallpaper7)}>{futFundo === 1 ? "Fut. Arena" : "???"}</h5></div>
                    <div className="skin__box"><img src={wallpaper8} onClick={CidadeFundo} alt="" style={LockedSkin(cidadeFundo === 0)} draggable="false" /><h5 style={EquippedSkin(wallpaper === wallpaper8)}>{cidadeFundo === 1 ? "Cidade" : "???"}</h5></div>
                    <div className="skin__box"><img src={wallpaper9} onClick={DesertoFundo} alt="" style={LockedSkin(desertoFundo === 0)} draggable="false" /><h5 style={EquippedSkin(wallpaper === wallpaper9)}>{desertoFundo === 1 ? "Deserto" : "???"}</h5></div>
                    <div className="skin__box"><img src={wallpaper10} onClick={TemploFundo} alt="" style={LockedSkin(temploFundo === 0)} draggable="false" /><h5 style={EquippedSkin(wallpaper === wallpaper10)}>{temploFundo === 1 ? "Templo" : "???"}</h5></div>
                  </div>
                </div>
              </>
            )}
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
