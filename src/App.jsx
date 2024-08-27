import { useState, useEffect } from 'react'
import './App.css'
import './reset.css'
import defaultEdecio from './assets/edecio.jpg'
import chadEdecio from './assets/chadEdecio.jpg'

function App() {
  const [cliques, setCliques] = useState(0)
  const [edecio, setEdecio] = useState(defaultEdecio)
  const [multiplicador, setMultiplicador] = useState(1)
  const [cliquesPorSegundo, setCliquesPorSegundo] = useState(0)

// Custos Base //

  const [custoUpgrade1, setCustoUpgrade] = useState(10)
  const [custoUpgrade2, setCustoUpgrade2] = useState(250)
  const [custoUpgrade3, setCustoUpgrade3] = useState(500)

// Niveis //

  const [nivelUpgrade1, setNivelUpgrade1] = useState(0)
  const [nivelUpgrade2, setNivelUpgrade2] = useState(0)
  const [nivelUpgrade3, setNivelUpgrade3] = useState(0)

// Multiplicadores //

const [cpsUpgrade1, setCpsUpgrade1] = useState(1)
const [cpsUpgrade2, setCpsUpgrade2] = useState(10)
const [cpsUpgrade3, setCpsUpgrade3] = useState(10)

// QoL //

const displayCliques = cliques >= 1000 ? Math.floor(cliques) : parseFloat(cliques.toFixed(2));

// Funçoes //

  function Clique() {
    setCliques(prevCliques => prevCliques + multiplicador)
  }

  function Upgrade1() {
    if (cliques >= custoUpgrade1) {
      setCliques(prevCliques => prevCliques - custoUpgrade1)
      setCpsUpgrade1(prevCps => (prevCps * 1.25))
      setMultiplicador(prevMultiplicador => prevMultiplicador + cpsUpgrade1)
      setCustoUpgrade(prevCusto => Math.floor(prevCusto * 1.5)) // Aumenta o custo em 50%
      setNivelUpgrade1(prevNivel => prevNivel + 1)
    }
  }

  function Upgrade2() {
    if (cliques >= custoUpgrade2 && nivelUpgrade1 >= 10) {
      setCliques(prevCliques => prevCliques - custoUpgrade2)
      setCpsUpgrade2(prevCps => (prevCps * 1.25))
      setCliquesPorSegundo(prevCliquesPorSegundo => prevCliquesPorSegundo + 10)
      setCustoUpgrade2(prevCusto => Math.floor(prevCusto * 1.5)) // Aumenta o custo em 50%
      setNivelUpgrade2(prevNivel => prevNivel + 1)
    }
  }

  function Upgrade3() {
    if (cliques >= custoUpgrade3 && nivelUpgrade2 >=10) {
      setCliques(prevCliques => prevCliques - custoUpgrade3)
      setCpsUpgrade3(prevCps => (prevCps * 1.25))
      setMultiplicador(prevMultiplicador => prevMultiplicador + 10)
      setCustoUpgrade3(prevCusto => Math.floor(prevCusto * 1.5))
      setNivelUpgrade3(prevNivel => prevNivel + 1)
      setEdecio(chadEdecio)
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
      <div className="container">
        <div className="left-side">
          <div className="edecio">
          <h2 className="Cps">Pontos por Segundo: {parseFloat((multiplicador + cliquesPorSegundo).toFixed(2))} ⬇️</h2>
            <h1>{displayCliques} 💰</h1>
            <img src={edecio} alt="" onClick={Clique} />
          </div>
        </div>
        <div className="right-side">
          <div className="upgrades">
            <h1>Upgrades💸</h1>
            <div className="upgrade__container" onClick={Upgrade1}>
              <h2>+{parseFloat(cpsUpgrade1.toFixed(2))}</h2>
              <h3>Muito Legal 👍</h3>
              <h4>{custoUpgrade1}$</h4> {/* Exibe o custo atualizado */}
              <h5>Nv.{nivelUpgrade1}</h5>
            </div>
            <div className="upgrade__container" onClick={Upgrade2}>
              <h2>+{parseFloat(cpsUpgrade2.toFixed(2))} P/s</h2>
              <h3>Café Quentinho ☕</h3>
              <h4>{nivelUpgrade1 >= 10 ? `${custoUpgrade2}$` : "🔒"}</h4> {/* Exibe o custo atualizado */}
              <h5>Nv.{nivelUpgrade2}</h5>
            </div>
            <div className="upgrade__container" onClick={Upgrade3}>
              <h2>+{parseFloat(cpsUpgrade3.toFixed(2))}</h2>
              <h3>Muito BASED 🗿</h3>
              <h4>{nivelUpgrade2 >= 10 ? `${custoUpgrade3}$` : "🔒"}</h4>
              <h5>Nv.{nivelUpgrade3}</h5>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
