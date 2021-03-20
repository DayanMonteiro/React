import React from 'react' 

export default function App(porps) {
    return (
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
     </div>
    )
}