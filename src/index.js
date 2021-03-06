import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import {BrowserRouter, Route, Switch} from "react-router-dom";
import promise from 'redux-promise';

import reducers from './reducers';
import NavigationBar from "./components/NavigationBar";
import Home from './components/Home';
import ClassificationTable from './components/ClassificationTable';
import MatchList from './container/MatchList';
import ClubPage from './components/ClubPage';
import NewPlayerForm from './container/NewPlayerForm';
import ClubList from './container/ClubList';
import NewMatchForm from './container/NewMatchForm';
import MatchDetails from './container/MatchDetails';

const createStoreWithMiddleware = applyMiddleware(promise)(createStore);

ReactDOM.render(
    <Provider store={createStoreWithMiddleware(reducers)}>
        <BrowserRouter>
            <div className="row">
                <NavigationBar/>
                    <Switch>
                        <Route path="/classificacao" component={ClassificationTable}/>
                        <Route path="/jogos/:id" component={MatchDetails}/>
                        <Route path="/jogos" component={MatchList}/>
                        <Route path="/times/:name" component={ClubPage}/>
                        <Route path="/times" component={ClubList}/>
                        <Route path="/cadastro/jogador" component={NewPlayerForm}/>
                        <Route path="/cadastro/partida" component={NewMatchForm}/>
                        <Route path="/" component={Home}/>
                    </Switch>
            </div>
        </BrowserRouter>
    </Provider>
    , document.querySelector('.container'));
