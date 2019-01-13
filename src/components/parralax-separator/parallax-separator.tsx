import "./parallax-separator.scss";

import * as React from "react";

import separatorImage from "../../assets/separator.jpg";

export default class ParallaxSeparator extends React.PureComponent<{}, {}> {
    private parallaxDiv = React.createRef<HTMLDivElement>();

    public componentDidMount() {
        if (this.parallaxDiv.current) {
            M.Parallax.init(this.parallaxDiv.current, {});
        }
    }

    public render() {
        return (
            <div className="parallax-container">
                <div ref={this.parallaxDiv} className="parallax">
                    <img src={separatorImage} />
                </div>
            </div>
        );
    }
}
