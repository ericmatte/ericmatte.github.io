import * as React from "react";

import FooterLink from "./footer-link/footer-link";

export default class Footer extends React.PureComponent<{}, {}> {
    public render(): JSX.Element {
        return (
            <footer className="page-footer grey darken-4">
                <div className="footer-copyright">
                    <div className="container valign-wrapper">
                        <span className="copyright">
                            Copyright © Eric Matte. {new Date().getFullYear()} • All rights reserved.
                        </span>
                        <ul className="links">
                            <FooterLink
                                title="My LinkedIn"
                                classes="linkedin"
                                href="https://www.linkedin.com/in/eric-matte/"
                                icon={["fab", "linkedin"]}
                            />
                            <FooterLink
                                title="My Youtube Page"
                                classes="youtube"
                                href="https://www.youtube.com/channel/UCnrwdpFWs7BVcplngpt0NWA"
                                icon={["fab", "youtube"]}
                            />
                            <FooterLink
                                title="My Github"
                                classes="github"
                                href="https://github.com/ericmatt"
                                icon={["fab", "github"]}
                            />
                            <FooterLink
                                title="Get in touch with me at contact@ericmatte.me"
                                classes="email"
                                href="mailto:contact@ericmatte.me"
                                icon={["fas", "envelope"]}
                            />
                        </ul>
                    </div>
                </div>
            </footer>
        );
    }
}
