let cliques = 0;
let cliquesPorSegundo = 1;
let multiplicadorPrestigio = 1;

self.onmessage = function(event) {
  switch (event.data.type) {
    case 'SET_CLIQUES':
      cliques = event.data.value;
      break;
    case 'SET_CLIQUES_POR_SEGUNDO':
      cliquesPorSegundo = event.data.value;
      break;
    case 'SET_MULTIPLICADOR_PRESTIGIO':
      multiplicadorPrestigio = event.data.value;
      break;
    case 'START':
      setInterval(() => {
        cliques += ((cliquesPorSegundo * multiplicadorPrestigio) / 10);
        self.postMessage({ type: 'UPDATE_CLIQUES', value: cliques });
      }, 100);
      break;
    default:
      break;
  }
};