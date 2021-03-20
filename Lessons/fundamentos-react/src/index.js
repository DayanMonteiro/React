import './index.css'
import ReactDOM from 'react-dom'
import React from 'react'

import Primeiro from './components/basicos/Primeiro'
import ComParametro from './components/basicos/ComParametro'
import Fragmento from './components/basicos/Fragmento'


ReactDOM.render(
    <div id="app">
       <Primeiro></Primeiro>
         <ComParametro 
            titulo="Situação do aluno" 
            aluno="Dayan" 
            nota={9.5} 
         />
         <ComParametro 
            titulo="Situação do aluno" 
            aluno="Daniel" 
            nota={10} 
         />
          <ComParametro 
            titulo="Situação do aluno" 
            aluno="Eli" 
            nota={6.5} 
         />
        <Fragmento />
    </div>, 
    document.getElementById('root')
    )