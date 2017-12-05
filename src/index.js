import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import './index.css';
import App from './App';
import Results from './components/results';
import myApp from './reducers';
import registerServiceWorker from './registerServiceWorker';

let store = createStore(myApp);


//subscribe everytime this updates
function render () {
    ReactDOM.render(
        <div className="container">
            <App store={store} />
            <hr/>
            <Results store={store} />
        </div>
        ,
        document.getElementById('root')
    );
}
registerServiceWorker();

//subscribe to my store
store.subscribe(render);

//need to call this here
render();