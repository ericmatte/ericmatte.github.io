declare module "react-masonry-component" {
    import * as React from "react";

    export interface MasonryProps {
        className?: string;
        elementType?: string;
        options?: any;
        disableImagesLoaded?: boolean;
        updateOnEachImageLoad?: boolean;
        imagesLoadedOptions?: any;
    }

    export default class Masonry extends React.Component<MasonryProps> {}
}
