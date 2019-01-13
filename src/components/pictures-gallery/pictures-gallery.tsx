import "./pictures-gallery.scss";

import * as React from "react";

import { PhotoSwipeGallery, PhotoSwipeItem } from "react-photoswipe";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import LazyLoad from "react-lazyload";
import WebPImage from "../webp-image/webp-image";
import data from "../../assets/data";

interface IPicturesGalleryProps {
    slideShowToggled: (isOpen: boolean) => void;
}

export default class PicturesGallery extends React.PureComponent<IPicturesGalleryProps, {}> {
    private photoSwipeOptions = {
        bgOpacity: 0.9,
        showHideOpacity: true,
        history: false,
        fullscreenEl: false,
        shareEl: false
    };

    public render() {
        return (
            <div className="pictures-gallery">
                <div className="grey lighten-3">
                    <div className="pictures-gallery__container">
                        <div>
                            <h2 className="header">Photos</h2>
                            <p className="grey-text text-darken-3 lighten-3">
                                One thing I really like is going on an adventure and taking beautiful pictures. I enjoy
                                capturing and editing photos.
                            </p>
                            <p className="grey-text text-darken-3 lighten-3">
                                I also like to do some video editing and filming. You can also check out my{" "}
                                <a
                                    className="red-text text-darken-2"
                                    href="https://www.youtube.com/channel/UCnrwdpFWs7BVcplngpt0NWA"
                                    target="_blank"
                                >
                                    <b>
                                        <FontAwesomeIcon icon={["fab", "youtube"]} size="lg" /> Youtube page
                                    </b>
                                </a>
                                .
                            </p>
                        </div>
                    </div>

                    <div className="gallery">
                        <PhotoSwipeGallery
                            items={this.getPhotoSwipeItems()}
                            options={this.photoSwipeOptions}
                            thumbnailContent={item => this.getThumbnailContent(item)}
                            onClose={() => this.props.slideShowToggled(false)}
                        />
                    </div>
                </div>
            </div>
        );
    }

    private getPhotoSwipeItems() {
        return data.pictures.map(picture => {
            return {
                src: `${process.env.PUBLIC_URL}/pictures/${picture.filename}`,
                thumbnail: `${process.env.PUBLIC_URL}/pictures/thumbnails/${picture.filename}`,
                webPThumbnail: `${process.env.PUBLIC_URL}/pictures/thumbnails/webp/${picture.filename}nI.webp`,
                h: picture.height,
                w: picture.width,
                title: picture.caption
            };
        });
    }

    private getThumbnailContent(item: PhotoSwipeItem) {
        // return <img onClick={() => this.props.slideShowToggled(true)} />;
        return (
            <LazyLoad height={200} offset={500}>
                <WebPImage src={item.thumbnail} webp={item.webPThumbnail} className="z-depth-1" />
            </LazyLoad>
        );
    }
}
