import React from 'react'

export default function ComParametro(props) {
    const status = props.nota >= 7 ? 'Aprovado' : 'Reprovado'
    const NotaInt = Math.ceil(props.nota)
    return (
        <div>
            <h2>{props.titulo}</h2>
            <p>
                <strong> {props.aluno} </strong> 
                tirou a nota 
                <strong> {NotaInt} </strong>
                e está
                <strong> {status } </strong>!
            </p>
        </div>
    )
}