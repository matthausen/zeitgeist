import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import Hero from './components/Hero';
import Guest from './components/Guest';
import Footer from './components/Footer';
import './App.css';

const THEME = createMuiTheme({
  typography: {
    "fontFamily": `"GoogleSans", "Helvetica", "Arial", sans-serif`,
    "fontSize": 14,
    "fontWeightLight": 300,
    "fontWeightRegular": 400,
    "fontWeightMedium": 500
  }
});

function App() {
  return (
    <MuiThemeProvider theme={THEME}>
      <div className="App">
        <Hero />
        <Router>
          <Switch>
            <Route path="/episode" component={Guest} />
          </Switch>
        </Router>
        <Footer />
      </div>
    </MuiThemeProvider>
  );
}

export default App;