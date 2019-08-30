import Routes from './src/Navigations/Routes'
import React from 'react'
import ReduxThunk from 'redux-thunk'
import { Provider } from 'react-redux'
import { createStore , applyMiddleware } from 'redux'
import reducers from './src/reducers'

const App = () => {
  return (
    <Provider store={createStore(reducers , {} ,applyMiddleware(ReduxThunk))}>
    <Routes/>
    </Provider>
  )
}
export default App;
