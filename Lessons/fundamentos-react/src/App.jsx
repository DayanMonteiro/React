import './App.css';
import React from 'react'; 


import Card from './components/layout/Card';

import Familia from './components/basicos/Familia'
import Aleatorio from './components/basicos/Aleatorio';
import Primeiro from './components/basicos/Primeiro';
import ComParametro from './components/basicos/ComParametro';
import Fragmento from './components/basicos/Fragmento';


export default () => {
    return (
        <div className="App">
            <h1>Fundamentos React</h1>

            <div className="Cards">

            <Card titulo="#05 - Componente com Filhos" color="#dfe6e9">
                    <Familia sobrenome="Monteiro" />
                </Card>

                <Card titulo="#04 - Desafio Aleatório" color="#0be881">
                    <Aleatorio min={1} max={100} />
                </Card>

                <Card titulo="#03 - Fragmento" color="#0fbcf9">
                    <Fragmento />
                </Card>

                <Card titulo="#02 - Com Parâmetro" color="#f53b57">
                    <ComParametro 
                        titulo="Situação do aluno" 
                        aluno="Dayan" 
                        nota={9.5} 
                    />
                </Card>
    
                <Card titulo="#01 - Primeiro Componente" color="#3c40c6
                ">
                    <Primeiro></Primeiro>
                </Card>
           </div>
     </div>   
    );
}