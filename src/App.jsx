import { useState } from 'react'
import './App.css'
import './reset.css'

function App() {
  const [cliques, setCliques] = useState(0)

  function Clique() {
    // alert("Entrou")
    const num = cliques + 1
    setCliques(num)
    congrats()
  }

  function congrats() {
    if (cliques % 50 == 0) {
      alert("Muito legal! 👍")
    }
  }

  function Upgrade() {
    useState (10)
  }

  return (
    <>
<div class="container">
  <div class="left-side">
    <div className="edecio">
      <h1>{cliques}</h1>
      <img src="./src/assets/edecio.jpg" alt="" onClick={Clique}/>
  </div>
  </div>
  <div class="right-side">
    <div className="upgrades">
    <h1>Upgrades💸</h1>
    <div className="upgrade__container">
      <h2>Muito Legal</h2>
      <h3>👍</h3>
    </div>
    </div>
  </div>
</div>
    </>
  )
}

export default App