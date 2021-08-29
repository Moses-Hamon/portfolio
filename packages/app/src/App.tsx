import { FC } from "react";
import { Switch, Route, BrowserRouter as Router } from "react-router-dom";

const App: FC = () => {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/*">
            <div>Hello World</div>
          </Route>
        </Switch>
      </div>
    </Router>
  );
};

export default App;
