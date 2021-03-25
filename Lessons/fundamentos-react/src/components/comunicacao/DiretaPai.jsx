import React from 'react';
import DiretaFilho from './DiretaFilho';

export default props => {
    return (
        <div>
            <DiretaFilho nome="Dayan" idade={33} nerd={true} />
            <DiretaFilho nome="Qualquer" idade={30} nerd={false} />
        </div>
    )
}