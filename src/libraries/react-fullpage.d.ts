declare module "@fullpage/react-fullpage" {
    import * as React from "react";

    export interface FullPageSection {
        item: any;
        index: number;
        isLast: boolean;
        isFirst: boolean;
    }

    export type FullPageDirection = "up" | "down" | "left" | "right";

    export interface ReactFullpageProps {
        navigation: boolean;
        navigationPosition: string;
        navigationTooltips: string[];
        render: () => void;
        onLeave: (origin: FullPageSection, destination: FullPageSection, direction: FullPageDirection) => void;
    }

    export default class ReactFullpage extends React.Component<ReactFullpageProps> {}
}

declare namespace fullpage_api {
    function setAllowScrolling(allow: boolean, direction?: "up" | "down" | "left" | "right"): void;
    function moveSectionDown(): void;
}
