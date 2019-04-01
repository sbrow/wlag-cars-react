import React, { Component } from "react";
import { Provider } from "react-redux";
import { HashRouter, Route, Switch } from "react-router-dom";

import { Layout } from "./common/layout";
import { authRoutes } from "./routes";
import store from "./store/configureStore";

class App extends Component {
    public render(): JSX.Element {
        return (<Provider store={store}>
            <HashRouter>
                <Switch>
                    {authRoutes.map((route, idx) => {
                        return route.component ? (
                            // @ts-ignore
                            <Route
                                key={idx}
                                path={route.path}
                                exact={route.exact}
                                name={route.name}
                                render={(props) => <route.component {...props} />}
                            />
                        ) : null;
                    })}
                    <Route path="/" name="Home" component={Layout} />
                </Switch>
            </HashRouter>
        </Provider>);
    }
}

export default App;
