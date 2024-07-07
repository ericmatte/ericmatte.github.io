declare module "react-lazyload" {
    import * as React from "react";

    export interface ILazyLoadProps {
        height: number;
        offset: number;
    }

    export default class LazyLoad extends React.Component<ILazyLoadProps> {}
}
