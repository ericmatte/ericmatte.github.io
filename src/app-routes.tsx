import * as React from "react";

import { Redirect, Route, BrowserRouter as Router, Switch } from "react-router-dom";

const SUB_PATH = "/portfolio";

export default class AppRoutes extends React.Component<{}, {}> {
    public render() {
        return (
            <Router basename={process.env.PUBLIC_URL}>
                <Switch>
                    <Route path={SUB_PATH}>{this.props.children}</Route>
                    <Redirect from="*" to={SUB_PATH} />
                </Switch>
            </Router>
        );
    }
}
