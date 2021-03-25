import './App.css';
import React from 'react'; 


import Card from './components/layout/Card';

import Input from './components/Formulario/Input';
import IndiretaPai from './components/comunicacao/IndiretaPai';
import DiretaPai from './components/comunicacao/DiretaPai';
import UsuarioInfo from './components/condicional/UsuarioInfo';
import ParOuImpar from './components/condicional/ParOuImpar';
import ListaAlunos from './components/repeticao/ListaAlunos';
import TabelaProdutos from './components/repeticao/TabelaProdutos';
import Familia from './components/basicos/Familia';
import FamiliaMembro from './components/basicos/FamiliaMembro';
import Aleatorio from './components/basicos/Aleatorio';
import Primeiro from './components/basicos/Primeiro';
import ComParametro from './components/basicos/ComParametro';
import Fragmento from './components/basicos/Fragmento';


export default () => {
    return (
        <div className="App">
            <h1>Fundamentos React</h1>

            <div className="Cards">

            <Card titulo="#11 - Componente Controlado" color="#eb2f06">
                <Input></Input>
            </Card>

            <Card titulo="#10 - Comunicação Indireta" color="#00a8ff">
                <IndiretaPai></IndiretaPai>
            </Card>

            <Card titulo="#09 - Comunicação Direta" color="#4cd137">
                <DiretaPai></DiretaPai>
            </Card>

            <Card titulo="#08 - Renderização Condicional" color="#fbc531">
                <ParOuImpar numero={21}></ParOuImpar>
                 <UsuarioInfo usuario={{nome: 'Dayan'}} /> 
                <UsuarioInfo usuario={{ }} />         
            </Card>

            <Card titulo="#07 - Desafio Repetição" color="#40739e">
                <TabelaProdutos></TabelaProdutos>      
            </Card>

            <Card titulo="#06 - Repetição" color="#c0392b">
                <ListaAlunos></ListaAlunos>      
            </Card>

            <Card titulo="#05 - Componente com Filhos" color="#dfe6e9">
                    <Familia sobrenome="Monteiro" >
                        <FamiliaMembro nome="Dayan"  /> 
                        <FamiliaMembro nome="Laryssa"  />
                        <FamiliaMembro nome="Pietra"  />
                    </Familia>
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