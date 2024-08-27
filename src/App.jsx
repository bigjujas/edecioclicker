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

  const [custoUpgrade, setCustoUpgrade] = useState(10)
  const [custoUpgradeAutomatizado, setCustoUpgradeAutomatizado] = useState(250)
  const [custoUpgradeChad, setCustoUpgradeChad] = useState(500)

// Niveis //

  const [nivelUpgrade, setNivelUpgrade] = useState(0)
  const [nivelUpgradeAutomatizado, setNivelUpgradeAutomatizado] = useState(0)
  const [nivelUpgradeChad, setNivelUpgradeChad] = useState(0)

// Multiplicadores //

const [cpsUpgrade, setCpsUpgrade] = useState(1)
const [cpsUpgradeAutomatizado, setCpsUpgradeAutomatizado] = useState(10)
const [cpsUpgradeChad, setCpsUpgradeChad] = useState(10)

  function Clique() {
    setCliques(prevCliques => prevCliques + multiplicador)
  }

  function Upgrade() {
    if (cliques >= custoUpgrade) {
      setCliques(prevCliques => prevCliques - custoUpgrade)
      setCpsUpgrade(prevCps => (prevCps * 1.25))
      setMultiplicador(prevMultiplicador => prevMultiplicador + cpsUpgrade)
      setCustoUpgrade(prevCusto => Math.floor(prevCusto * 1.5)) // Aumenta o custo em 50%
      setNivelUpgrade(prevNivel => prevNivel + 1)
    }
  }

  function UpgradeAutomatizado() {
    if (cliques >= custoUpgradeAutomatizado) {
      setCliques(prevCliques => prevCliques - custoUpgradeAutomatizado)
      setCpsUpgradeAutomatizado(prevCps => (prevCps * 1.25))
      setCliquesPorSegundo(prevCliquesPorSegundo => prevCliquesPorSegundo + 10)
      setCustoUpgradeAutomatizado(prevCusto => Math.floor(prevCusto * 1.5)) // Aumenta o custo em 50%
      setNivelUpgradeAutomatizado(prevNivel => prevNivel + 1)
    }
  }

  function UpgradeChad() {
    if (cliques >= custoUpgradeChad) {
      setCliques(prevCliques => prevCliques - custoUpgradeChad)
      setCpsUpgradeChad(prevCps => (prevCps * 1.25))
      setMultiplicador(prevMultiplicador => prevMultiplicador + 10)
      setCustoUpgradeChad(prevCusto => Math.floor(prevCusto * 1.5))
      setNivelUpgradeChad(prevNivel => prevNivel + 1)
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
            <h1>{parseFloat(cliques.toFixed(2))} 💰</h1>
            <img src={edecio} alt="" onClick={Clique} />
          </div>
        </div>
        <div className="right-side">
          <div className="upgrades">
            <h1>Upgrades💸</h1>
            <div className="upgrade__container" onClick={Upgrade}>
              <h2>+{parseFloat(cpsUpgrade.toFixed(2))}</h2>
              <h3>Muito Legal 👍</h3>
              <h4>{custoUpgrade}$</h4> {/* Exibe o custo atualizado */}
              <h5>Nv.{nivelUpgrade}</h5>
            </div>
            <div className="upgrade__container" onClick={UpgradeAutomatizado}>
              <h2>+{parseFloat(cpsUpgradeAutomatizado.toFixed(2))} P/s</h2>
              <h3>Café Quentinho ☕</h3>
              <h4>{custoUpgradeAutomatizado}$</h4> {/* Exibe o custo atualizado */}
              <h5>Nv.{nivelUpgradeAutomatizado}</h5>
            </div>
            <div className="upgrade__container" onClick={UpgradeChad}>
              <h2>+{parseFloat(cpsUpgradeChad.toFixed(2))}</h2>
              <h3>Muito BASED 🗿</h3>
              <h4>{custoUpgradeChad}$</h4>
              <h5>Nv.{nivelUpgradeChad}</h5>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
