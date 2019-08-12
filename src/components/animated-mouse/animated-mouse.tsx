import * as React from "react";

import classNames from "classnames";

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

    public componentDidMount(): void {
        window.addEventListener("scroll", e => this.handleScroll(e));
    }

    public render(): JSX.Element {
        return (
            <div
                onClick={() => this.props.onClick()}
                className={classNames("animated-mouse fading", { visible: this.state.visible })}
            >
                <div className="animated-mouse__scroller" />
            </div>
        );
    }

    private handleScroll(_event: Event): void {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        this.setState({
            visible: scrollTop < window.innerHeight / 3
        });
    }
}
