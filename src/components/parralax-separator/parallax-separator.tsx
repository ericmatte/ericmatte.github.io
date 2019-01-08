import "./parallax-separator.scss";
import * as separatorImage from "../../assets/separator.jpg";

import * as React from "react";

export default class ParallaxSeparator extends React.PureComponent<{}, {}> {
    public componentDidMount() {
        M.Parallax.init(document.querySelectorAll(".parallax"), {});
    }

    public render() {
        return (
            <div className="parallax-container">
                <div className="parallax">
                    <img src={separatorImage} />
                </div>
            </div>
        );
    }
}
