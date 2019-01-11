import "./projects.scss";

import * as React from "react";
import * as data from "../../assets/data.json";

import Masonry, { MasonryApi } from "react-masonry-component";

import ProjectCard from "./project-card/project-card";

interface IProjectsState {
    isMasonryRendered: boolean;
}

export default class Projects extends React.PureComponent<{}, IProjectsState> {
    private masonry: MasonryApi | undefined = undefined;

    constructor(props: {}) {
        super(props);
        this.state = {
            isMasonryRendered: false
        };
    }

    public componentDidMount() {
        if (this.masonry) {
            this.masonry.on("layoutComplete", () => {
                this.setState({
                    isMasonryRendered: true
                });
            });
        }
    }

    public render() {
        return (
            <div className="projects">
                <div className="grey lighten-3">
                    <div className="projects__container">
                        <h2 className="header">Projects</h2>
                        <p className="grey-text text-darken-3 lighten-3">
                            This is the list a all my projects which I am really proud to have created, or being part of
                            the team that created them.
                        </p>

                        <Masonry
                            ref={c => (this.masonry = this.masonry || c!.masonry)}
                            className="projects-masonry row"
                            elementType={"div"}
                            disableImagesLoaded={false}
                            updateOnEachImageLoad={false}
                        >
                            {data.projects.map(project => {
                                return (
                                    <ProjectCard
                                        key={project.title}
                                        {...project}
                                        isMasonryRendered={this.state.isMasonryRendered}
                                    />
                                );
                            })}
                        </Masonry>
                    </div>
                </div>
            </div>
        );
    }
}
