import React from 'react';
import If, {Else} from './If';

export default props => {
    const usuario = props.usuario || {}
    return (
        <div>
            {/* 
            <If test={usuario && usuario.nome}> 
            Seja bem vindo <strong>{usuario.nome}</strong>! 
            </If>
            <If test={!usuario || !usuario.nome}> 
            Seja bem vindo <strong>Humano</strong>! 
            </If> */}

            {/* essas não são as melhores práticas mas funciona */}
            <If test={usuario && usuario.nome}> 
            Seja bem vindo <strong>{usuario.nome}</strong>! 
            <Else>
            Seja bem vindo <strong>Humano</strong>!
            </Else>
            </If>
        </div>
    )
}