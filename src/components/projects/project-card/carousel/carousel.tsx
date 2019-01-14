import "./carousel.scss";

import * as React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import WebPImage from "../../../webp-image/webp-image";

export type ImageAndWebPPath = {
    image: string;
    webp: string;
};

interface ICarouselProps {
    renderCarousel: boolean;
    images: ImageAndWebPPath[];
}

export default class Carousel extends React.PureComponent<ICarouselProps, {}> {
    private carouselDiv: React.RefObject<HTMLDivElement> = React.createRef<HTMLDivElement>();
    private carouselInstance: M.Carousel | undefined;

    public render(): JSX.Element {
        if (this.props.images.length === 1) {
            return (
                <WebPImage src={this.props.images[0].image} webp={this.props.images[0].webp} className="single-image" />
            );
        } else {
            if (this.props.renderCarousel && this.carouselDiv.current) {
                this.carouselInstance = M.Carousel.init(this.carouselDiv.current, {
                    indicators: true,
                    fullWidth: true
                });
            }

            return (
                <div className="images-carousel">
                    <div ref={this.carouselDiv} className="carousel carousel-slider center">
                        {this.props.images.map(imageAndWebP => {
                            return (
                                <a className="carousel-item" key={imageAndWebP.image}>
                                    <WebPImage src={imageAndWebP.image} webp={imageAndWebP.webp} />
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

    private nextSlide(direction: "left" | "right"): void {
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
