import * as React from "react";

import App from "./App";
import { AppContainer } from "react-hot-loader";
import { render } from "react-dom";

const rootEl = document.getElementById("root");

render(
    <AppContainer>
        <App />
    </AppContainer>,
    rootEl
);

// Hot Module Replacement API
// tslint:disable-next-line:no-any
declare let module: { hot: any };

if (module.hot) {
    module.hot.accept("./App", () => {
        const NewApp = require("./App").default;

        render(
            <AppContainer>
                <NewApp />
            </AppContainer>,
            rootEl
        );
    });
}
