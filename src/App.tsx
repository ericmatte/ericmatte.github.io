import "./libraries/imports";

import * as React from "react";

import AnimatedMouse from "./components/animated-mouse/animated-mouse";
import AppRoutes from "./app-routes";
import EmailFab from "./components/email-fab/email-fab";
import Footer from "./components/footer/footer";
import Introduction from "./components/Introduction/Introduction";
import ParallaxSeparator from "./components/parralax-separator/parallax-separator";
import PicturesGallery from "./components/pictures-gallery/pictures-gallery";
import Projects from "./components/projects/projects";
import ScrollSpy from "./components/scroll-spy/scroll-spy";

interface IAppState {
  slideShowVisible: boolean;
  showEmailFab: boolean;
}

export type Section = {
  id: string;
  ref: React.RefObject<HTMLDivElement>;
};

const IMAGES_SECTION_ID = "Images";

export default class App extends React.Component<{}, IAppState> {
  private sections: Section[] = [
    { id: "Introduction", ref: React.createRef<HTMLDivElement>() },
    { id: "Projects", ref: React.createRef<HTMLDivElement>() },
    { id: IMAGES_SECTION_ID, ref: React.createRef<HTMLDivElement>() }
  ];

  constructor(props: {}) {
    super(props);
    this.state = {
      slideShowVisible: false,
      showEmailFab: true
    };
  }

  public componentDidMount(): void {
    window.addEventListener("scroll", () => this.handleScroll());
  }

  public render(): JSX.Element {
    return (
      <AppRoutes>
        <div className="app">
          <Introduction />
          <AnimatedMouse
            onClick={() => {
              return;
            }}
          />

          <div id={this.sections[1].id} ref={this.sections[1].ref} className="section scrollspy">
            <Projects />
          </div>

          <ParallaxSeparator />

          <div id={this.sections[2].id} ref={this.sections[2].ref} className="section scrollspy">
            <PicturesGallery
              slideShowToggled={() => {
                return;
              }}
            />
          </div>

          <EmailFab visible={this.state.showEmailFab} />
          <ScrollSpy sections={this.sections} />
          <Footer />
        </div>
      </AppRoutes>
    );
  }

  private handleScroll(): void {
    const imagesSection = this.sections[2].ref.current;
    if (imagesSection) {
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      this.setState({
        showEmailFab: scrollTop < imagesSection.offsetTop - window.innerHeight
      });
    }
  }
}
