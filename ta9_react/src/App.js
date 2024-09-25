import React, { useState, useEffect } from 'react';

const Contador = () => {
  const [contador, setContador] = useState(0);

  // useEffect para actualizar el título y la URL cada vez que cambie el contador, creo que pide las dos, o bueno por las dudas
  useEffect(() => {
    document.title = `Contador: ${contador}`;

    // Actualizar la URL sin recargar la página
    const nuevaURL = `${window.location.origin}?contador=${contador}`;
    window.history.replaceState(null, '', nuevaURL); // Cambia la URL sin recargar la página
  }, [contador]);

  const incrementar = () => setContador(contador + 1);

  const decrementar = () => {
    if (contador > 0) {
      setContador(contador - 1);
    }
  };

  const reiniciar = () => setContador(0);

  return (
    <div>
      <h1>Contador: {contador}</h1>
      <button onClick={incrementar}>Incrementar</button>
      <button onClick={decrementar}>Decrementar</button>
      <button onClick={reiniciar}>Reiniciar</button>
    </div>
  );
};

export default Contador;
