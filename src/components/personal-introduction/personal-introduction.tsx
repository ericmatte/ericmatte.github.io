import * as React from "react";

import AcrylicContainer from "../acrylic-container/acrylic-container";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default class PersonalIntroduction extends React.PureComponent<{}, {}> {
  public render(): JSX.Element {
    return (
      <AcrylicContainer>
        <div className="personal-introduction">
          <div className="title">
            <img src={`${process.env.PUBLIC_URL}/favicon.png`} className="profile-picture hide-on-small-only" />
            <div>
              <h3>Eric Matte</h3>
              <h5>Full Stack Developer</h5>
            </div>
          </div>
          <div className="description">
            <p>
              Programmer for more than {new Date().getFullYear() - 2009} years, I’m always seeking for new goals. I give
              a great interest on the quality of my work and I always want to learn more.
            </p>
            <p> With a degree in computer engineering, I am passionate about what I do.</p>
            <p>This portfolio is a little summary of what I did along the road.</p>
            <p>
              <b>Have a great tour!</b> <FontAwesomeIcon icon={["fas", "thumbs-up"]} />
            </p>
          </div>
        </div>
      </AcrylicContainer>
    );
  }
}
