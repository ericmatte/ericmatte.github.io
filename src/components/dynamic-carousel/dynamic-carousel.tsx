import "./dynamic-carousel.scss";

import * as React from "react";

interface ICarouselProps {
    slides: JSX.Element[];
}

interface IDynamicCarouselState {
    selectedIndex: number;
    carouselStyle: React.CSSProperties;
}

export default class DynamicCarousel extends React.PureComponent<ICarouselProps, IDynamicCarouselState> {
    // @from https://3dtransforms.desandro.com/carousel
    constructor(props: ICarouselProps) {
        super(props);
        this.state = {
            selectedIndex: 0,
            carouselStyle: {}
        };
    }

    public componentDidMount() {
        this.changeCarousel();
    }

    public render() {
        return (
            <div className="dynamic-carousel">
                <div className="scene">
                    <div className="perspective-carousel" style={this.state.carouselStyle}>
                        {/* <div className="perspective-carousel__cell">1</div>
                        <div className="perspective-carousel__cell">2</div>
                        <div className="perspective-carousel__cell">3</div>
                        <div className="perspective-carousel__cell">4</div>
                        <div className="perspective-carousel__cell">5</div>
                        <div className="perspective-carousel__cell">6</div>
                        <div className="perspective-carousel__cell">7</div>
                        <div className="perspective-carousel__cell">8</div>
                        <div className="perspective-carousel__cell">9</div>
                        <div className="perspective-carousel__cell">10</div>
                        <div className="perspective-carousel__cell">11</div>
                        <div className="perspective-carousel__cell">12</div>
                        <div className="perspective-carousel__cell">13</div>
                        <div className="perspective-carousel__cell">14</div>
                        <div className="perspective-carousel__cell">15</div> */}
                        {this.props.slides.map(slide => (
                            <div className="perspective-carousel__cell">{slide}</div>
                        ))}
                    </div>
                </div>
                <button onClick={() => this.previousSlide()} className="previous-button">
                    Previous
                </button>
                <button onClick={() => this.nextSlide()} className="next-button">
                    Next
                </button>
            </div>
        );
    }

    private calculateTheta() {
        const cellCount = 15; // this.props.slides.length;
        return 360 / cellCount;
    }

    private calculateRadius() {
        const carousel = document.querySelector(".perspective-carousel");
        const cells = carousel!.querySelectorAll(".perspective-carousel__cell");
        const cellWidth = carousel!.offsetWidth;
        const cellSize = cellWidth;
        const cellCount = 15; //this.props.slides.length;
        return Math.round(cellSize / 2 / Math.tan(Math.PI / cellCount));
    }

    private changeCarousel() {
        const carousel = document.querySelector(".perspective-carousel");
        const cells = carousel!.querySelectorAll(".perspective-carousel__cell");
        const theta = this.calculateTheta();
        const radius = this.calculateRadius();
        for (let i = 0; i < cells.length; i++) {
            const cell = cells[i];
            // visible cell
            const cellAngle = theta * i;
            cell.style.opacity = 1;
            cell.style.transform = `rotateY(${cellAngle}deg) translateZ(${radius}px)`;
        }

        this.rotateCarousel(theta, radius);
    }

    private rotateCarousel(theta: number = this.calculateTheta(), radius: number = this.calculateRadius()) {
        const angle = theta * this.state.selectedIndex * -1;
        this.setState({
            carouselStyle: {
                transform: `translateZ(${-radius}px) rotateY(${angle}deg)`
            }
        });
    }

    private previousSlide() {
        this.setState({
            selectedIndex: this.state.selectedIndex - 1
        });
        this.rotateCarousel();
    }

    private nextSlide() {
        this.setState({
            selectedIndex: this.state.selectedIndex + 1
        });
        this.rotateCarousel();
    }
}
