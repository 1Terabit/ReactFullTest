1. Crea un componente de clase llamado `Reloj` que muestre la hora actual y se actualice cada segundo.

import React, { useEffect, useState } from "react"

function Clock() {
  const [currentTime, setCurrentTime] = useState(
    new Date().toLocaleTimeString()
  );

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentTime(new Date().toLocaleTimeString());
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div>
      <h1>Current Time: {currentTime}</h1>
    </div>
  );
}

export default Clock;

2. ¿Cuándo usarías el método `shouldComponentUpdate` en un componente de clase y por qué?

    console.info("shouldComponentUpdate: Se usa para evitar que un componente se actualice innecesariamente. Se debe usar cuando el componente solo necesita actualizarse cuando sus props o estado cambian de una manera que afecta su renderizado")

3. En un componente, crea una función `manejarSubmit` que se ejecute al enviar un formulario y evite que la página se recargue. 


function App() {
  const [formData, setFormData] = useState({
    nombre: '',
    correo: '',
  });

  const manejarSubmit = (e) => {
    e.preventDefault(); // Evita que la página se recargue

     //TODO: En este punto se pueden enviar los datos del formulario a una API o realizar otra acción

     fetch('/api/usuarios', {
       method: 'POST',
       body: JSON.stringify(formData),
     });

    alert('Formulario enviado correctamente');
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div>
      <h1>Formulario</h1>
      <form onSubmit={manejarSubmit}>
        <label htmlFor="nombre">Nombre:</label>
        <input type="text" id="nombre" name="nombre" value={formData.nombre} onChange={handleChange} />
        <label htmlFor="correo">Correo electrónico:</label>
        <input type="email" id="correo" name="correo" value={formData.correo} onChange={handleChange} />
        <button type="submit">Enviar</button>
      </form>
    </div>
  );
}

4. Explica la diferencia entre `map` y `forEach` al trabajar con listas en React. 

console.info("map: Crea una nueva lista a partir de la original, transformando cada elemento")
console.info("forEach: Recorre la lista original y ejecuta una función para cada elemento")

5. Crea un componente de entrada de texto controlado que acepte solo números enteros positivos. 

import React from 'react'

function PositiveIntegerInput({ value, onChange }) {
  const [inputValue, setInputValue] = useState(value);

  const handleChange = (e) => {
    const newValue = e.target.value;
    if (/^\d+$/.test(newValue)) {
      setInputValue(newValue);
      onChange(newValue);
    }
  };

  return (
    <input type="text" value={inputValue} onChange={handleChange} />
  );
}

export default PositiveIntegerInput;

6. ¿Qué hace la función `useEffect` en un componente funcional de React? Proporciona un ejemplo práctico

console.info("useEffect: Permite ejecutar un efecto después de que un componente se ha montado o actualizado")

7. Explica la diferencia entre `BrowserRouter` y `HashRouter` en `react-router-dom`.

console.info("BrowserRouter: Usa el historial del navegador para navegar entre diferentes páginas")
console.info("HashRouter: Usa la parte hash de la URL para navegar entre diferentes páginas")

8. ¿Cuándo y por qué usarías el Context API en React? Proporciona un ejemplo de su implementación. 

console.info("Se usa para compartir datos entre componentes que no son padres e hijos directos")

9. ¿Qué es un HOC en React y cómo se utiliza? Proporciona un ejemplo.

console.info("Es un componente que se utiliza para envolver otro componente y agregarle funcionalidad adicional")

10. Menciona al menos dos bibliotecas populares para realizar pruebas unitarias en aplicaciones React. 

console.info("Jest: Biblioteca popular para realizar pruebas unitarias en aplicaciones React")
console.info("react Testing Library: Biblioteca que facilita la escritura de pruebas para componentes React")