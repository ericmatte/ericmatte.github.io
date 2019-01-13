import "./project-card.scss";

import * as React from "react";

import Carousel, { ImageAndWebPPath } from "./carousel/carousel";

import EmbeddedVideo from "./embedded-video/embedded-video";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

type ProjectImages = {
    path: string;
    number: number;
};

interface IProjectCardProps {
    title: string;
    description: string;
    logo: string;
    images?: ProjectImages;
    github?: string;
    reference?: string;
    videoId?: string;
    prizes?: string[];
    tags: string[];
    isMasonryRendered: boolean;
}

export default class ProjectCard extends React.PureComponent<IProjectCardProps, {}> {
    public render() {
        return (
            <div className="project-card col m12 l6">
                <div className="card">
                    {this.getProjectPreview()}

                    <div className="card-content">
                        <div className="project-card__title valign-wrapper">
                            <img
                                className="project-card__logo circle z-depth-1"
                                src={`${process.env.PUBLIC_URL}/${this.props.logo}`}
                            />
                            <span className="card-title valign">{this.props.title}</span>
                        </div>

                        <p
                            className="project-card__description"
                            dangerouslySetInnerHTML={{ __html: this.props.description }}
                        />
                        <br />
                        {this.getPrizes()}
                        {this.getTags()}
                    </div>

                    {this.getActionLinks()}
                </div>
            </div>
        );
    }

    private getActionLinks() {
        if (!(this.props.reference || this.props.github)) {
            return;
        }
        return (
            <div className="card-action">
                {this.props.reference && (
                    <a href={this.props.reference} target="_blank" className="waves-effect">
                        <FontAwesomeIcon icon={["fas", "external-link-square-alt"]} size="lg" /> Reference
                    </a>
                )}
                {this.props.github && (
                    <a href={this.props.github} target="_blank" className="waves-effect">
                        <FontAwesomeIcon icon={["fab", "github"]} size="lg" /> See project repository
                    </a>
                )}
            </div>
        );
    }

    private getPrizes() {
        if (!this.props.prizes) {
            return;
        }

        return (
            <div className="project-prizes">
                {this.props.prizes.map(prize => {
                    return (
                        <div className="row" key={prize}>
                            <FontAwesomeIcon icon={["fas", "trophy"]} size="lg" /> {" " + prize}
                        </div>
                    );
                })}
            </div>
        );
    }

    private getTags() {
        return (
            <div className="project-tags">
                {this.props.tags.map(tag => {
                    return (
                        <div className="chip" key={tag}>
                            {tag}
                        </div>
                    );
                })}
            </div>
        );
    }

    private getProjectPreview() {
        if (this.props.images) {
            return (
                <Carousel
                    renderCarousel={this.props.isMasonryRendered}
                    images={this.getProjectImages(this.props.images)}
                />
            );
        } else if (this.props.videoId) {
            return <EmbeddedVideo youtubeId={this.props.videoId} />;
        } else {
            return;
        }
    }

    private getProjectImages(projectImages: ProjectImages): ImageAndWebPPath[] {
        const slides: ImageAndWebPPath[] = [];

        for (let i = 1; i <= projectImages.number; i++) {
            slides.push({
                image: `${process.env.PUBLIC_URL}/${projectImages.path}/${i}.jpg`,
                webp: `${process.env.PUBLIC_URL}/${projectImages.path}/webp/${i}.webp`
            });
        }

        return slides;
    }
}
