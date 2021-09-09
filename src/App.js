import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { GlobalStyle } from "./GlobalStyle";
import Home from "./page/LandingPage";
import Cover from "./page/Cover";

function App() {
  return (
    <Router>
      <GlobalStyle />
      <Switch>
        <Route path="/" component={Cover} exact />
        <Route path="/home" component={Home} exact />
      </Switch>
    </Router>
  );
}

export default App;
