import "./carousel.scss";

import * as React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

interface ICarouselProps {
    images: string[];
}

export default class Carousel extends React.PureComponent<ICarouselProps, {}> {
    public componentDidMount() {
        M.Carousel.init(document.querySelectorAll(".carousel"), {
            indicators: true,
            fullWidth: true
        });
    }

    public render() {
        if (this.props.images.length === 1) {
            return <img className="single-image" src={this.props.images[0]} />;
        } else {
            return (
                <div className="images-carousel">
                    <div className="carousel carousel-slider center">
                        {this.props.images.map(image => {
                            return (
                                <a className="carousel-item" key={image}>
                                    <img src={image} />
                                </a>
                            );
                        })}
                    </div>
                </div>
            );
        }
    }
}
