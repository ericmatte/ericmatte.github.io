import * as React from "react";

const isWebPCompatible = canUseWebP();

interface IImageProps {
    src: string;
    webp: string;
    alt?: string;
    title?: string;
    style?: object;
    className?: string;
}

function canUseWebP(): boolean {
    const elem = document.createElement("canvas");
    if (!!(elem.getContext && elem.getContext("2d"))) {
        // was able or not to get WebP representation
        return elem.toDataURL("image/webp").indexOf("data:image/webp") === 0;
    } else {
        // very old browser like IE 8, canvas not supported
        return false;
    }
}

export default class WebPImage extends React.PureComponent<IImageProps, {}> {
    public render(): JSX.Element {
        const { src, webp, alt, title, style, className } = this.props;
        let image = src;

        if (isWebPCompatible === true) {
            image = webp;
        }

        return <img src={image} alt={alt} title={title} style={style} className={className} />;
    }
}
