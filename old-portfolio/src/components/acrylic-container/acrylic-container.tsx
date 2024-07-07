import "./acrylic-container.scss";

import * as React from "react";

export default class AcrylicContainer extends React.PureComponent<{}, {}> {
    public render(): JSX.Element {
        return (
            <section className="acrylic-container">
                <div className="acrylic z-depth-5">
                    <div className="acrylic__text">{this.props.children}</div>
                </div>
            </section>
        );
    }
}
