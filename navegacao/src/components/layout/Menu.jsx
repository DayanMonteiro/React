import './Menu.css';
import React from 'react';

import { Link } from 'react-router-dom';

const Menu = props => (
    <aside className="Menu">
        <nav>
            <ul>
                <li>
                    <Link to="/">Início</Link>
                </li>
                <li>
                    <Link to="/param/codigo do produto">Param #01</Link>
                </li>
                <li>
                    <Link to="/param/521578524">Param #02</Link>
                </li>
                <li>
                    <Link to="/about">Sobre</Link>
                </li>
                <li>
                    <Link to="/naoExiste">Não Existe</Link>
                </li>
            </ul>
        </nav>
    </aside>
)

export default Menu 