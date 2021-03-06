import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Index from './components/pages/Index';
import About from './components/pages/About';
import Portfolio from './components/pages/Portfolio';
import Header from './components/header-footer/Header';
import GraphicDesign from './components/pages/GraphicDesign';
import WebDesign from './components/pages/WebDesign';
import Store from './components/pages/Store';
import Checkout from './components/pages/Checkout';
import VanillaCupCake from './components/Website Information/VanillaCupCake';
import OrderConfirmation from './components/pages/OrderConfirmation';

export const App = () => {
    return (
    <Router>
    <Header />
        <Switch>
            <Route exact path = "/about">
                <About />
            </Route>
            <Route exact path = "/portfolio">
                <Portfolio />
            </Route>
            <Route exact path = "/portfolio/graphic-design">
                <GraphicDesign />
            </Route>
            <Route exact path = "/portfolio/web-design">
                <WebDesign />
            </Route>
            <Route exact path = "/store">
                <Store />
            </Route>
            <Route exact path = "/store/vanilla-cupcake">
                <VanillaCupCake />
            </Route>
            <Route exact path = "/store/checkout">
                <Checkout />
            </Route>
            <Route exact path = "/">
                <Index />
            </Route>
        </Switch>
    </Router>
    )
}
export default App
