import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <h1>Hello React</h1>
      <Router>
          <Switch>
              <Route path="/">

              </Route>
          </Switch>
      </Router>
    </div>
  );
}

export default App;
