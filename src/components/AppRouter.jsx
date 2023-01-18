import React from 'react';
import {Redirect, Route, Switch} from "react-router-dom";
import appRoute from "../router/appRoute"

const AppRouter = () => {
    return (
            <Switch>
                {appRoute.map(route =>
                    <Route
                        key={route.path}
                        component={route.component}
                        path={route.path}
                        exact={route.exact}
                    />
                )}
                <Redirect to="/" />
            </Switch>
    );
};

export default AppRouter;