import "./projects.scss";

import * as React from "react";
import * as data from "../../assets/data.json";

import Masonry from "react-masonry-component";
import ProjectCard from "./project-card/project-card";

export default class Projects extends React.PureComponent<{}, {}> {
    public render() {
        return (
            <div className="projects">
                <div className="grey lighten-3">
                    <div className="container">
                        <h2 className="header">Projects</h2>
                        <p className="grey-text text-darken-3 lighten-3">
                            This is the list a all my projects which I am really proud to have created, or being part of
                            the team that created them.
                        </p>

                        <Masonry
                            className="projects-masonry row"
                            elementType={"div"}
                            disableImagesLoaded={false}
                            updateOnEachImageLoad={false}
                        >
                            {data.projects.map(project => {
                                return <ProjectCard key={project.title} {...project} />;
                            })}
                        </Masonry>
                    </div>
                </div>
            </div>
        );
    }
}
