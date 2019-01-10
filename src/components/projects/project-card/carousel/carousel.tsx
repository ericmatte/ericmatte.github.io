import "./carousel.scss";

import * as React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

interface ICarouselProps {
    images: string[];
}

export default class Carousel extends React.PureComponent<ICarouselProps, {}> {
    private carouselDiv = React.createRef<HTMLDivElement>();
    private carouselInstance: M.Carousel | undefined;

    public componentDidMount() {
        if (this.carouselDiv.current) {
            this.carouselInstance = M.Carousel.init(this.carouselDiv.current, {
                indicators: true,
                fullWidth: true
            });
        }
    }

    public render() {
        if (this.props.images.length === 1) {
            return <img className="single-image" src={this.props.images[0]} />;
        } else {
            return (
                <div className="images-carousel">
                    <div ref={this.carouselDiv} className="carousel carousel-slider center">
                        {this.props.images.map(image => {
                            return (
                                <a className="carousel-item" key={image}>
                                    <img src={image} />
                                </a>
                            );
                        })}
                    </div>
                    <div onClick={() => this.nextSlide("left")} className="gradient--left valign-wrapper">
                        <FontAwesomeIcon icon={["fas", "chevron-left"]} size="lg" />
                    </div>
                    <div onClick={() => this.nextSlide("right")} className="gradient--right valign-wrapper">
                        <FontAwesomeIcon icon={["fas", "chevron-right"]} size="lg" />
                    </div>
                </div>
            );
        }
    }

    private nextSlide(direction: "left" | "right") {
        if (!this.carouselInstance) {
            return;
        }

        if (direction === "left") {
            this.carouselInstance.prev();
        } else {
            this.carouselInstance.next();
        }
    }
}
