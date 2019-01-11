import "./embedded-video.scss";

import * as React from "react";

interface IEmbeddedVideo {
    youtubeId: string;
}

export default class EmbeddedVideo extends React.PureComponent<IEmbeddedVideo, {}> {
    private youtubeDiv = React.createRef<HTMLDivElement>();

    public componentDidMount() {
        const source = `https://img.youtube.com/vi/${this.props.youtubeId}/sddefault.jpg`;

        const image = new Image();
        image.src = source;
        image.addEventListener("load", () => this.youtubeDiv.current!.appendChild(image));
    }

    public render() {
        return (
            <div className="embedded-video">
                <div className="ratio-keeper">
                    <div className="wrapper">
                        <div ref={this.youtubeDiv} onClick={() => this.loadAndPlayVideo()} className="youtube">
                            <div className="play-button" />
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    private loadAndPlayVideo() {
        const iframe = document.createElement("iframe");

        iframe.setAttribute("frameborder", "0");
        iframe.setAttribute("allowfullscreen", "");
        iframe.setAttribute("src", `https://www.youtube.com/embed/${this.props.youtubeId}?rel=0&showinfo=0&autoplay=1`);

        this.youtubeDiv.current!.innerHTML = "";
        this.youtubeDiv.current!.appendChild(iframe);
    }
}
