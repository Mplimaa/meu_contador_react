import React, { useState } from 'react'; // Importa o React e a função useState

function App() {
  // useState é uma função que cria o estado dentro de um componente
  const [contador, setContador] = useState(0); // contador = 0, e setContador é a função para alterar o valor

  return (
    <div className="App">
      <h1>Contador: {contador}</h1> {/* Exibe o valor do contador */}
      <button onClick={() => setContador(contador + 1)}>Incrementar</button> {/* Botão para incrementar */}
      <button onClick={() => setContador(contador - 1)}>Decrementar</button> {/* Botão para decrementar */}
    </div>
  );
}

export default App;
