import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navibar from './components/Navibar/Navibar';
import Footer from './components/Footer'
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import Home from './Home';
import Users from './Users';
import About from './About';


function App() {
  return (
    <>
      <BrowserRouter>
        <Navibar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/users" component={Users} />
          <Route exact path="/about" component={About} />
        </Switch>
      </BrowserRouter>
      <Footer />
    </>
  );
}

export default App;
