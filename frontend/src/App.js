import React from 'react'
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Index from './pages/index'
import Products from './pages/products'

// Assets
import { GlobalStyles } from './GlobalStyle'


function App() {
    return ( 
    <Router>
        <GlobalStyles />
        <Switch>
            <Route exact path="/" component={Index} />
            <Products exact path="/products" component={Products} />
        </Switch>
    </Router>
);
}

export default App