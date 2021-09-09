import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { GlobalStyle } from "./GlobalStyle";
import Home from "./page/LandingPage";
import Cover from "./page/Cover";

function App() {
  return (
    <Router>
      <GlobalStyle />
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/cover" component={Cover} exact />
      </Switch>
    </Router>
  );
}

export default App;
