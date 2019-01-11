import "./embedded-video.scss";

import * as React from "react";

interface IEmbeddedVideo {
    youtubeUrl: string;
}

export default class EmbeddedVideo extends React.PureComponent<IEmbeddedVideo, {}> {
    public render() {
        return (
            <div className="embedded-video">
                <div className="ratio-keeper">
                    <iframe
                        src={this.props.youtubeUrl}
                        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                    />
                </div>
            </div>
        );
    }
}
