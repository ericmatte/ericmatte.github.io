import "./App.scss";
import "./libraries/imports";

import * as React from "react";

import AnimatedMouse from "./components/animated-mouse/animated-mouse";
import EmailFab from "./components/email-fab/email-fab";
import Footer from "./components/footer/footer";
import ParallaxSeparator from "./components/parralax-separator/parallax-separator";
import PersonalIntroduction from "./components/personal-introduction/personal-introduction";
import PicturesGallery from "./components/pictures-gallery/pictures-gallery";
import Projects from "./components/projects/projects";

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
                <PersonalIntroduction />
                <AnimatedMouse onClick={() => fullpage_api.moveSectionDown()} />
                <EmailFab visible={!this.state.gallerySectionVisible} />

                <div className="section">
                    <Projects />
                </div>

                <ParallaxSeparator />

                <div className="section" ref={this.galleryDiv} onScroll={() => this.onScroll()}>
                    <PicturesGallery slideShowToggled={isVisible => this.toggleFullPageNavigationButtons(isVisible)} />
                </div>

                <Footer />
            </div>
        );
    }

    private onScroll() {
        const galleryDivVisible = this.galleryDiv.current!.scrollTop === 0;
        this.setState({
            gallerySectionVisible: galleryDivVisible
        });
    }

    private toggleFullPageNavigationButtons(visible: boolean) {
        const buttons = document.getElementById("fp-nav");
        if (buttons !== null) {
            buttons.style.opacity = visible ? "0" : "1";
        }
    }
}
