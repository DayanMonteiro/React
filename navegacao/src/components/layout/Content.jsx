import './Content.css';
import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from '../../views/examples/Home';
import Param from '../../views/examples/Param';
import About from '../../views/examples/About';
import NotFound from '../../views/examples/NotFound';

const Content = props => (
    <main className="Content" >
         <Switch>
          <Route path="/about">
            <About />
          </Route>
          {/* passar os : significa que o id não é um valor literal, 
          é um parametro que será passado a partir da url */}
          <Route path="/param/:id">
            <Param />
          </Route>
          <Route  exact path="/">
            <Home />
          </Route>
          <Route path="*">
            <NotFound />
          </Route>
        </Switch>
    </main>
)

export default Content 