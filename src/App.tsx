import * as React from "react";

import { Redirect, Route, BrowserRouter as Router } from "react-router-dom";

import AppContent from "./app-content";

const SUB_PATH = "/portfolio";

export default class App extends React.Component<{}, {}> {
    public render() {
        return (
            <Router>
                <div>
                    <Route component={AppContent} path={SUB_PATH} />
                    <Redirect from="*" to={SUB_PATH} />
                </div>
            </Router>
        );
    }
}
