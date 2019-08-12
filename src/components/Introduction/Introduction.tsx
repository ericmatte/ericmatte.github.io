import * as React from "react";

import content from "../../assets/content";

export default class Introduction extends React.PureComponent<{}, {}> {
  public render(): JSX.Element {
    const intro = content.introduction;
    return (
      <div className="Introduction">
        <h2>{intro.title}</h2>
        <h1>
          {intro.fullName}, {intro.titleAbbreviation}
        </h1>
        <div>{intro.text}</div>
      </div>
    );
  }
}
