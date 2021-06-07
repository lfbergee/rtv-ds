import { BrowserRouter, Switch, Route } from "react-router-dom";
import { Header } from "./header/Header";
import { Navigation } from "./navigation/Navigation";
import { Example } from "./example/Example";
import { components } from "./config";

import "./style.scss";

export const App = () => (
  <BrowserRouter>
    <div className="portal-layout">
      <Header />
      <Navigation />
      <main>
        <Switch>
          <Route path="/" exact>
            <p>hello world</p>
          </Route>
          {components.map(({ displayName, Page }) => (
            <Route
              key={displayName}
              path={`/${displayName}`}
              exact
              render={() => (
                <Example>
                  <Page />
                </Example>
              )}
            />
          ))}
        </Switch>
      </main>
    </div>
  </BrowserRouter>
);
