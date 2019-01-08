import "./projects.scss";

import * as React from "react";
import * as data from "../../assets/data.json";

type ProjectImages = {
    path: string;
    number: number;
};

type Project = {
    title: string;
    description: string;
    logo: string;
    images?: ProjectImages;
    github?: string;
    reference?: string;
    video?: string;
    prizes?: string[];
    tags: string[];
};

export default class Projects extends React.PureComponent<{}, {}> {
    public componentDidMount() {
        M.Tooltip.init(document.querySelectorAll(".tooltipped"), {});
        M.Carousel.init(document.querySelectorAll(".carousel"), {
            indicators: true
        });
    }
    public render() {
        const slides = this.getProjectSlides(data.projects[0].images!);
        return (
            <div className="projects">
                <div className="row container">
                    <h2 className="header">Projects</h2>
                    <p className="grey-text text-darken-3 lighten-3">
                        This is the list a all my projects which I am really proud to have created, or being part of the
                        team that created them.
                    </p>

                    <div className="thumbnails" style={{ gridTemplateColumns: `repeat(${data.projects.length}, 1fr)` }}>
                        {this.getProjectsThumbnail()}
                    </div>
                </div>

                <div className="carousel">{slides}</div>
            </div>
        );
    }

    private getProjectSlides(projectImages: ProjectImages) {
        const slides: JSX.Element[] = [];

        for (let i = 1; i <= projectImages.number; i++) {
            slides.push(
                <a className="carousel-item">
                    <img src={`public/${projectImages.path}/${i}.jpg`} key={`${projectImages.path}-${i}`} />
                </a>
            );
        }

        return slides;
    }

    private getProjectsThumbnail() {
        return data.projects.map((project: Project) => {
            return (
                <div
                    className="thumbnail tooltipped center-align"
                    data-position="bottom"
                    data-tooltip={project.title}
                    key={project.title}
                >
                    <div className="thumbnail__title">{project.title}</div>
                    <div className="thumbnail__logo">
                        <img className="circle z-depth-3" src={`public/${project.logo}`} />
                    </div>
                </div>
            );
        });
    }
}
