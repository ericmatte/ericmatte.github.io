import "./email-fab.scss";

import * as React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import classNames from "classnames";

export interface IEmailFabProps {
    visible: boolean;
}

export default class EmailFab extends React.PureComponent<IEmailFabProps, {}> {
    private tooltipA: React.RefObject<HTMLAnchorElement> = React.createRef<HTMLAnchorElement>();

    public componentDidMount(): void {
        if (this.tooltipA.current) {
            M.Tooltip.init(this.tooltipA.current, {});
        }
    }

    public render(): JSX.Element {
        return (
            <div className={classNames("email-fab fading fixed-action-btn", { visible: this.props.visible })}>
                <a
                    ref={this.tooltipA}
                    href="mailto:contact@ericmatte.me"
                    target="_top"
                    className="btn-floating btn-large waves-effect blue darken-3 tooltipped"
                    data-tooltip="Get in touch with me: contact@ericmatte.me"
                    data-delay="50"
                    data-position="left"
                >
                    <FontAwesomeIcon icon={["fas", "envelope"]} size="lg" />
                </a>
            </div>
        );
    }

    // private _handleScroll(_event: UIEvent) {
    //     const galleryBounds = document.getElementsByClassName("gallery")[0].getBoundingClientRect();
    //     const viewHeight = Math.max(document.documentElement.clientHeight, window.innerHeight);
    //     this.setState({
    //         visible: galleryBounds.top >= viewHeight
    //     });
    // }
}
