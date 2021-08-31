import { FC } from "react";
import { Switch, Route, BrowserRouter as Router } from "react-router-dom";
import DefaultLayout from "./layouts/DefaultLayout";
import { Home } from "./pages/Home";

const App: FC = () => {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/*">
            <DefaultLayout>
              <Home />
            </DefaultLayout>
          </Route>
        </Switch>
      </div>
    </Router>
  );
};

export default App;
