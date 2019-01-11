declare module "react-masonry-component" {
    import * as React from "react";

    export type MasonryApi = {
        on: (method: string, func: () => void) => void;
    };

    export interface MasonryProps {
        className?: string;
        elementType?: string;
        options?: any;
        disableImagesLoaded?: boolean;
        updateOnEachImageLoad?: boolean;
        imagesLoadedOptions?: any;
    }

    class IMasonry extends React.Component<MasonryProps> {
        masonry: MasonryApi;
    }

    export default class Masonry extends IMasonry {}
}
