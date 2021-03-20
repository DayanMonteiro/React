import React from 'react'; 

import Aleatorio from './components/basicos/Aleatorio';
import Primeiro from './components/basicos/Primeiro';
import ComParametro from './components/basicos/ComParametro';
import Fragmento from './components/basicos/Fragmento';


export default () => {
    return (
        <div id="app">
            <h1>Fundamentos React</h1>
            <Aleatorio min={1} max={100} />
            <Fragmento />
            <ComParametro 
                titulo="Situação do aluno" 
                aluno="Dayan" 
                nota={9.5} 
            />
            <Primeiro></Primeiro>
     </div>
    );
}