import "./App.scss";
import "./libraries/imports";

import * as React from "react";

import AnimatedMouse from "./components/animated-mouse/animated-mouse";
import EmailFab from "./components/email-fab/email-fab";
import Footer from "./components/footer/footer";
import PersonalIntroduction from "./components/personal-introduction/personal-introduction";
import PicturesGallery from "./components/pictures-gallery/pictures-gallery";
import Projects from "./components/projects/projects";
import ReactFullpage from "@fullpage/react-fullpage";

interface IAppState {
    gallerySectionVisible: boolean;
    slideShowVisible: boolean;
}

export default class App extends React.Component<{}, IAppState> {
    private galleryDiv = React.createRef<HTMLDivElement>();

    constructor(props: {}) {
        super(props);
        this.state = {
            gallerySectionVisible: false,
            slideShowVisible: false
        };
    }

    public render() {
        return (
            <div className="app">
                <ReactFullpage
                    navigation
                    navigationPosition="right"
                    navigationTooltips={["Me", "Projects", "Photos"]}
                    onLeave={(_origin, destination, _direction) => {
                        this.setState({
                            gallerySectionVisible: destination.isLast
                        });
                    }}
                    render={() => {
                        return (
                            <div id="fullpage-wrapper">
                                <div className="section">
                                    <PersonalIntroduction />
                                    <AnimatedMouse onClick={() => fullpage_api.moveSectionDown()} />
                                </div>
                                <div className="section">
                                    <Projects />
                                </div>
                                <div className="section">
                                    <div className="scrollable" ref={this.galleryDiv} onScroll={() => this.onScroll()}>
                                        <PicturesGallery
                                            slideShowToggled={isVisible =>
                                                this.toggleFullPageNavigationButtons(isVisible)
                                            }
                                        />
                                        <Footer />
                                    </div>
                                </div>
                            </div>
                        );
                    }}
                />
                <EmailFab visible={!this.state.gallerySectionVisible} />
            </div>
        );
    }

    private onScroll() {
        const fullPageCanScroll = this.galleryDiv.current!.scrollTop === 0;
        fullpage_api.setAllowScrolling(fullPageCanScroll, "up");
    }

    private toggleFullPageNavigationButtons(visible: boolean) {
        const buttons = document.getElementById("fp-nav");
        if (buttons !== null) {
            buttons.style.opacity = visible ? "0" : "1";
        }
    }
}
