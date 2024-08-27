import { useState, useEffect } from 'react'
import './App.css'
import './reset.css'
import chadEdecio from './assets/chadEdecio.jpg'
import defaultEdecio from './assets/edecio.jpg'

function App() {
  const [cliques, setCliques] = useState(0)
  const [multiplicador, setMultiplicador] = useState(1)
  const [custoUpgrade, setCustoUpgrade] = useState(10)
  const [cliquesPorSegundo, setCliquesPorSegundo] = useState(0)
  const [custoUpgradeAutomatizado, setCustoUpgradeAutomatizado] = useState(500)
  const [edecio, setEdecio] = useState(defaultEdecio)
  const custoUpgradeChad = 500

  function Clique() {
    setCliques(prevCliques => prevCliques + multiplicador)
  }

  function Upgrade() {
    if (cliques >= custoUpgrade) {
      setCliques(prevCliques => prevCliques - custoUpgrade)
      setMultiplicador(prevMultiplicador => prevMultiplicador + 10)
      setCustoUpgrade(prevCusto => Math.floor(prevCusto * 1.5)) // Aumenta o custo em 50%
    }
  }

  function UpgradeAutomatizado() {
    if (cliques >= custoUpgradeAutomatizado) {
      setCliques(prevCliques => prevCliques - custoUpgradeAutomatizado)
      setCliquesPorSegundo(prevCliquesPorSegundo => prevCliquesPorSegundo + 50)
      setCustoUpgradeAutomatizado(prevCusto => Math.floor(prevCusto * 1.5)) // Aumenta o custo em 50%
    }
  }

  function UpgradeChad() {
    if (cliques >= custoUpgradeChad) {
      setEdecio(chadEdecio)
    }
  }

  useEffect(() => {
    const intervalo = setInterval(() => {
      setCliques(prevCliques => prevCliques + cliquesPorSegundo)
    }, 1000)

    return () => clearInterval(intervalo)
  }, [cliquesPorSegundo])

  return (
    <>
      <div className="container">
        <div className="left-side">
          <div className="edecio">
            <h1>{cliques}</h1>
            <img src={edecio} alt="" onClick={Clique} />
          </div>
        </div>
        <div className="right-side">
          <div className="upgrades">
            <h1>Upgrades💸</h1>
            <div className="upgrade__container" onClick={Upgrade}>
              <h2>+10</h2>
              <h3>Muito Legal 👍</h3>
              <h4>{custoUpgrade}$</h4> {/* Exibe o custo atualizado */}
            </div>
            <div className="upgrade__container" onClick={UpgradeChad}>
              <h2>Unlock CHAD mode</h2>
              <h3>Muito BASED 🗿</h3>
              <h4>{custoUpgradeChad}</h4>
            </div>


            <div className="upgrade__container" onClick={UpgradeAutomatizado}>
              <h2>Clikes por segundo</h2>
              <h3>Automático 🕒</h3>
              <h4>{custoUpgradeAutomatizado}$</h4> {/* Exibe o custo atualizado */}
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
