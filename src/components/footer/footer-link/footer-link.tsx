import "./footer-link.scss";

import * as React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconProp } from "@fortawesome/fontawesome-svg-core";

export interface IFooterLinkProps {
    title: string;
    classes: string;
    href: string;
    icon: IconProp;
}

export default class FooterLink extends React.PureComponent<IFooterLinkProps, {}> {
    public render() {
        return (
            <li className="footer-link">
                <a
                    title={this.props.title}
                    className={`${this.props.classes} grey-text text-lighten-1`}
                    href={this.props.href}
                    target="_blank"
                >
                    <FontAwesomeIcon icon={this.props.icon} size="2x" />
                </a>
            </li>
        );
    }
}
