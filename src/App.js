
import { BrowserRouter as Router,Switch,Route } from 'react-router-dom';
import './App.css';
import About from './component/About/About';
import Details from './component/Details/Details';
import Footer from './component/Footer/Footer';
import Header from './component/Header/Header';
import Home from './component/Home/Home';
import NotFound from './component/NotFound/NotFound';
import Service from './component/Service/Service';


function App() {
  return (
    <div className="App">
      <Router>
        <Header></Header>
      <Switch>
      <Route exact path="/">
            <Home></Home>
          </Route>
          <Route path="/home">
            <Home></Home>
          </Route>
          <Route path="/service">
            <Service></Service>
          </Route>
          <Route path="/details">
            <Details></Details>
          </Route>
          <Route path="/about">
            <About></About>
          </Route>
          <Route path="*">
            <NotFound />
          </Route>
        </Switch>
        <Footer></Footer>
      </Router>
      
    </div>
  );
}

export default App;
