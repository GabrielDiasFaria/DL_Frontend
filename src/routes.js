import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import BlogView from './features/BlogView/pages'

export default function Routes() {

    const Teste = () => {
        return (
            <h3>Testando React 2</h3>
        );
    };

    return (
        <BrowserRouter>
            <Switch>
                {/* Página Inicial do Blog */}
                <Route path="/" exact={true} component={BlogView} />
                <Route path="/teste" component={Teste} />
            </Switch>
        </BrowserRouter>
    )
}