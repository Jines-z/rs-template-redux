import React from 'react'
import { render } from 'react-dom'
import { HashRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import Pages from './pages'
import store from './store'

class App extends React.Component {
    render() {
        return (
            <Provider store={store}>
                <HashRouter>
                    <Pages />
                </HashRouter>
            </Provider>
        )
    }
}

render(<App />, document.getElementById('root'))

if (module.hot) {
    module.hot.accept()
}
