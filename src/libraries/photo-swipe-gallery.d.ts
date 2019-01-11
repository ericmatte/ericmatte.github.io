declare module "react-photoswipe" {
    import * as React from "react";

    export interface IPhotoSwipeGalleryProps {
        items: PhotoSwipeItem[];
        options?: {};
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
