import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom'

export default function Routes() {

    const Teste = () => {
        return (
            <h3>Testando React 1</h3>
        );
    };

    const Teste2 = () => {
        return (
            <h3>Testando React 2</h3>
        );
    };

    return (
        <BrowserRouter>
            <Switch>
                {/* Página Inicial do Blog */}
                <Route path="/" exact component={Teste} />
                <Route path="/teste" component={Teste2} />
            </Switch>
        </BrowserRouter>
    )
}