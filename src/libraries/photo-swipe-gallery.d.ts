declare module "react-photoswipe" {
    import * as React from "react";

    export type PhotoSwipeOptions = {
        bgOpacity: number;
        showHideOpacity: boolean;
        history: boolean;
        fullscreenEl: boolean;
        shareEl: boolean;
    };

    export interface IPhotoSwipeGalleryProps {
        items: PhotoSwipeItem[];
        options?: PhotoSwipeOptions;
        thumbnailContent?: (item: PhotoSwipeItem) => JSX.Element;
        onClose?: () => void;
    }

    class PhotoSwipeGallery extends React.Component<IPhotoSwipeGalleryProps> {}

    export type PhotoSwipeItem = {
        src: string;
        thumbnail: string;
        webPThumbnail: string;
        h: number;
        w: number;
        title: string;
    };
}
