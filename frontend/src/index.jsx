import React from 'react'
import ReactDOM from 'react-dom'
import { createStore } from 'redux'
import { Provider } from 'react-redux'

import App from './main/app'
import reducers from './main/reducers'

// criamos o objeto estado da nossa aplicacao, tudo que mexermos ou
// trabalharmos c/ dados na nossa aplicacao vai estar dentro de store
const store = createStore(reducers)
ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>
, document.getElementById('app'))