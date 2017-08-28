import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import {BrowserRouter, Route, Switch} from "react-router-dom";

import reducers from './reducers';
import NavigationBar from "./components/NavigationBar";
import Home from './components/Home';
import ClassificationTable from './components/ClassificationTable';
import MatchList from './components/MatchList';
import ClubPage from './components/ClubPage';
import NewPlayerForm from './components/NewPlayerForm';

const createStoreWithMiddleware = applyMiddleware()(createStore);

ReactDOM.render(
    <Provider store={createStoreWithMiddleware(reducers)}>

        <BrowserRouter>
            <div className="row">
                <NavigationBar/>
                <Switch>
                    <Route path="/classificacao" component={ClassificationTable}/>
                    <Route path="/jogos" component={MatchList}/>
                    <Route path="/times/:name" component={ClubPage}/>
                    <Route path="/cadastro/jogador" component={NewPlayerForm}/>
                    <Route path="/" component={Home}/>
                </Switch>
            </div>
        </BrowserRouter>
    </Provider>
    , document.querySelector('.container'));
