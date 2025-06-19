import {useState} from 'react';

function Contador() {
    const [contador, setContador] = useState(0);
    const incrementar = () => {
        setContador(contador + 1);
    };
    const decrementar = () => {
        setContador(contador - 1);
    };
    const resetear = () => {
        setContador(0);
    };
    return (
        <>
         <div style={{ border: '1px solid #ccc', borderRadius: '5px', padding: '10px' }}>
            <h1>Contador: {contador}</h1>
        </div>
        <div>
            <button onClick={incrementar} style={{ margin: '5px' }}>Incrementar</button>
            <button onClick={decrementar} style={{ margin: '5px' }}>Decrementar</button>
            <button onClick={resetear} style={{ margin: '5px' }}>Resetear</button>
            </div>
        </>
            );

}

export default Contador;