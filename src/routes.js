import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import BlogView from './features/BlogView/pages'

export default function Routes() {

    return (
        <BrowserRouter>
            <Switch>
                {/* Página Inicial do Blog */}
                <Route path="/" exact component={BlogView} />

                {/* <Route path="/teste" component={Teste2} /> */}
            </Switch>
        </BrowserRouter>
    )
}