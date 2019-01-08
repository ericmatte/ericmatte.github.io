import "./pictures-gallery.scss";

import * as React from "react";
import * as data from "../../assets/data.json";

import { PhotoSwipeGallery, PhotoSwipeItem } from "react-photoswipe";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

interface IPicturesGalleryProps {
    slideShowToggled: (isOpen: boolean) => void;
}

export default class PicturesGallery extends React.PureComponent<IPicturesGalleryProps, {}> {
    private photoSwipeOptions = {
        bgOpacity: 0.9,
        showHideOpacity: true,
        shareEl: false
    };

    public render() {
        return (
            <div className="pictures-gallery">
                <div className="grey lighten-3">
                    <div className="row container">
                        <h2 className="header">Photos</h2>
                        <p className="grey-text text-darken-3 lighten-3">
                            One thing I really like is go on an adventure and take some beautiful pictures. I enjoy
                            taking capturing and editing photos.
                        </p>
                        <p className="grey-text text-darken-3 lighten-3">
                            I also like to do some video editing and filming. You can also check my{" "}
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
                src: `public/pictures/${picture.filename}`,
                thumbnail: `public/pictures/thumbnails/${picture.filename}`,
                h: picture.height,
                w: picture.width,
                title: picture.caption
            };
        });
    }

    private getThumbnailContent(item: PhotoSwipeItem) {
        return <img src={item.thumbnail} onClick={() => this.props.slideShowToggled(true)} className="z-depth-1" />;
    }
}
