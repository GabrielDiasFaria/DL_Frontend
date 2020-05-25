import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import BlogView from './features/BlogView/pages'
import BlogDetails from './features/BlogDetails/pages'
import BlogCategory from './features/BlogCategory/pages'

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

                <Route path='/blogdetails/:id' component={BlogDetails} />
                <Route path='/blogcategory/:id/:name' component={BlogCategory} />
                <Route path="/teste" component={Teste} />
            </Switch>
        </BrowserRouter>
    )
}