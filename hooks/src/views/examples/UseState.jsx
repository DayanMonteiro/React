import React, { useState } from 'react'
import PageTitle from '../../components/layout/PageTitle'
import SectionTitle from '../../components/layout/SectionTitle';

const UseState = (props) => {
    const [count, setCount] = useState(0)

    return (
        <div className="UseState">
            <PageTitle
                title="Hook UseState"
                subtitle="Estado em componentes funcionais!" />

            <SectionTitle title="Exercício #01" />

                <div className="center">
                    <span className="text">{count}</span>

                    <div>
                        <button className="btn" onClick={() => setCount(count -1)} >-1</button>
                        <button className="btn" onClick={() => setCount(count +1)} >+1</button>
                        {/* 
                        se quiser um valor fixo posso passar o valor dentro da função no ex vou usar 0 
                        como se se fosse um botão pra resetar a contagem, mas poderia passar 100 
                        e ao climar +1 iria pra 101 e -1 pra 99
                        */}
                        <button className="btn" onClick={() => setCount(0)} >0</button>
                        {/*
                        seguindo o mesmo racional acima passando uma função de -100  e outro botão de +100
                        com outro tipo de sintaxe. Dessa forma ele vai somar de 100 em 100 
                        tambem podendo mesclar com o somar ou dominuir de 1 em 1  
                        */}
                        <button className="btn" onClick={() => setCount(currect => currect -100 )}>-100</button>
                        <button className="btn" onClick={() => setCount(currect => currect +100 )}>+100</button>
                    </div>

                </div>

            <SectionTitle title="Exercício #02" />
        </div>
    )
}

export default UseState
