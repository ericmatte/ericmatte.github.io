import * as React from "react";

import content from "../../assets/content";
import me from "../../assets/me.png";

export default class Introduction extends React.PureComponent<{}, {}> {
  public render(): JSX.Element {
    const intro = content.introduction;
    return (
      <div className="Introduction">
        <div className="background-text">{intro.backgroundText}</div>

        <img src={me} className="image" alt={intro.fullName} />

        <div className="content">
          <div className="titles">
            <h1 className="title">
              <span className="title-name">{intro.fullName}, </span>
              <span className="title-abbreviation">{intro.titleAbbreviation}</span>
            </h1>
            <h2 className="tagline">{intro.title}</h2>
          </div>
          <div className="container">
            <div className="text">{intro.text}</div>
          </div>
        </div>
      </div>
    );
  }
}
