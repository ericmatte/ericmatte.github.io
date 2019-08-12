import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const STARTING_DATE = 2009;

export const introduction = {
  fullName: "Eric Matte",
  titleAbbreviation: "CPI",
  title: "Full Stack Developer",
  text: (
    <React.Fragment>
      <p>
        Programmer for more than {new Date().getFullYear() - STARTING_DATE} years, I’m always seeking for new goals. I
        like to make a difference and to be the difference. I give a great interest on the quality of my work and I
        always want to learn more.
      </p>
      <p>
        I am currently working at <a href="www.agendrix.com">Agendrix</a>, a Staff Scheduling Software company.
      </p>
      <p>With a degree in computer engineering, I am passionate about what I do.</p>
      <p>This portfolio is a little summary of what I did along the road.</p>
      <p>
        <b>Have a great tour!</b> <FontAwesomeIcon icon={["fas", "thumbs-up"]} />
      </p>
    </React.Fragment>
  )
};
