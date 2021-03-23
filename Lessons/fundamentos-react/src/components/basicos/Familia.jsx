import React from 'react';
import FamiliaMembro from './FamiliaMembro';

export default props => {
    return (
        <div>
            <FamiliaMembro nome="Dayan" sobrenome={props.sobrenome} />
            <FamiliaMembro nome="Laryssa"  sobrenome="Viana" />
            <FamiliaMembro nome="Pietra" {...props} />
        </div>
    )
}