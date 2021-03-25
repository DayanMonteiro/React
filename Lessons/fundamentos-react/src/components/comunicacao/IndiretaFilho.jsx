import React from 'react';

export default props => {
    const cb = props.quandoClicar
    return (
        <div>
            <div> 
                Filho
            </div>
            <button onClick= {_ => cb('Daniel', 59, false)}>
                Fornecer Informações
            </button>
        </div>
    )
}