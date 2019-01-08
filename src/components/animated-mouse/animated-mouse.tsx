import "./animated-mouse.scss";

import * as React from "react";
import * as classNames from "classnames";

interface IAnimatedMouseProps {
    onClick: () => void;
}

interface IAnimatedMouseState {
    visible: boolean;
}

export default class AnimatedMouse extends React.PureComponent<IAnimatedMouseProps, IAnimatedMouseState> {
    constructor(props: IAnimatedMouseProps) {
        super(props);
        this.state = {
            visible: true
        };
    }

    public componentDidMount() {
        window.addEventListener("scroll", e => this.handleScroll(e));
    }

    public render() {
        return (
            <div
                onClick={() => this.props.onClick()}
                className={classNames("animated-mouse fading", { visible: this.state.visible })}
            >
                <div className="animated-mouse__scroller" />
            </div>
        );
    }

    private handleScroll(_event: UIEvent) {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        this.setState({
            visible: scrollTop < window.innerHeight / 3
        });
    }
}
