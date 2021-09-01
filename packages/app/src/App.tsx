import { FC } from "react";
import { Switch, Route, BrowserRouter as Router } from "react-router-dom";
import DefaultLayout from "./layouts/DefaultLayout";
import { Home } from "./pages/Home";

const App: FC = () => {
  return (
    <Router>
      <div className="App">
        <DefaultLayout>
          <Switch>
            <Route exact path="/projects">
              <div>Projects</div>
            </Route>
            <Route path="/*">
              <Home />
            </Route>
          </Switch>
        </DefaultLayout>
      </div>
    </Router>
  );
};

export default App;
