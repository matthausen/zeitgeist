import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Hero from './components/Hero';
import Guest from './components/Guest';
import './App.css';

function App() {
  return (
    <div className="App">
      <Hero />
      <Router>
        <Switch>
          <Route path="/episode" component={Guest} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;