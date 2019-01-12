import "./scroll-spy.scss";

import * as React from "react";

import { Section } from "../../app-content";

interface IScrollSpyProps {
    sections: Section[];
}

interface IScrollSpyState {
    activeSectionIndex: number;
}

export default class ScrollSpy extends React.PureComponent<IScrollSpyProps, IScrollSpyState> {
    private sectionLinks: Array<React.RefObject<HTMLAnchorElement>> = [];

    constructor(props: IScrollSpyProps) {
        super(props);
        this.state = {
            activeSectionIndex: -1
        };
    }

    public componentDidMount() {
        this.sectionLinks.forEach(t => M.Tooltip.init(t.current!, {}));
        this.props.sections.forEach(s =>
            M.ScrollSpy.init(s.ref.current!, {
                scrollOffset: 0
            })
        );
    }

    public render() {
        return (
            <div className="scroll-spy valign-wrapper hide-on-small-only">
                <ul className="indicators">
                    {this.props.sections.map(section => {
                        const refTooltipped = React.createRef<HTMLAnchorElement>();
                        this.sectionLinks.push(refTooltipped);

                        return (
                            <li key={section.id}>
                                <a
                                    ref={refTooltipped}
                                    className="indicator-item tooltipped"
                                    data-position="left"
                                    data-tooltip={section.id}
                                    href={`#${section.id}`}
                                />
                            </li>
                        );
                    })}
                </ul>
            </div>
        );
    }
}
