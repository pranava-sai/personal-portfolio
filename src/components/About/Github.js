import React from "react";
import GitHubCalendar from "react-github-calendar";
import { Row } from "react-bootstrap";
import gitlabCalendar from "../../Assets/Projects/Git.jpeg";
import "./Github.css"

function GitHub() {
  return (
    <>
      <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
        <h1 className="project-heading" style={{ paddingBottom: "20px" }}>
          Days I <strong className="purple">Code</strong>
        </h1>
        <GitHubCalendar
          username="pranava-sai"
          blockSize={15}
          blockMargin={5}
          color="#c084f5"
          fontSize={16}
        />
      </Row>

      <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
        <h1 className="project-heading" style={{ paddingBottom: "20px", marginTop: 50 }}>
          Days I <strong className="purple">Coded</strong> for School Projects
        </h1>
        <img
          src={gitlabCalendar}
          style={{ width: 1050, height: 340 }}
          alt="GitLab Calendar"
          className="gitlab-calendar"
        />

        <p style={{ font: 'Roboto', fontSize: 16, textAlign: 'left', marginLeft: 270 }}>327 contributions in the last 3 months</p>
      </Row>
    </>
  );
}

export default GitHub;
