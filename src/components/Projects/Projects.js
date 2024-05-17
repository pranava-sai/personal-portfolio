import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import ca from "../../Assets/Projects/cinematic_almanac.png";
import monalisa from "../../Assets/Projects/monalisa.png";
import ct from "../../Assets/Projects/ct.png";
import radar from "../../Assets/Projects/radarlight.png";
import puzzle from "../../Assets/Projects/puzzle.png";
import dc from "../../Assets/Projects/dc.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={radar}
              isBlog={false}
              title="Riff Radar"
              description="An Android app designed to streamline concert ticket purchasing and event planning. With its user-friendly interface, 
              users can easily discover upcoming concerts, purchase tickets, and organize their concert schedule efficiently. RiffRadar 
              revolutionizes the way users engage with live music events, providing a seamless platform for concert discovery and 
              ticket management."
              ghLink="https://github.com/pranava-sai/RiffRadar"
              demoLink="https://drive.google.com/file/d/1IP2S-tGqmLZWMsyaH4BO5EBswIaA4chn/view?usp=sharing"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={dc}
              isBlog={false}
              title="Dungeon Crawl"
              description="This game features turn-based combat, resource management, and dungeon exploration. Highlights include intricate 
              game mechanics, strategic player choices, and immersive narrative elements in a terminal-based interface."
              ghLink="https://github.com/pranava-sai/DungeonCrawlPyGame"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={ct}
              isBlog={false}
              title="CommandTune"
              description="This interactive application enables users to manage and play songs from a command-line interface. Features include 
              song selection, pause, replay, and playlist navigation, emphasizing proficiency in Python and user-friendly design in a 
              non-graphical environment."
              ghLink="https://github.com/pranava-sai/CommandTune"
              demoLink="https://drive.google.com/file/d/1c_PkSsZt3kQ0bmO7kpO4EJl2kVfA7VPu/view?usp=sharing"              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={ca}
              isBlog={false}
              title="Cinematic Almanac"
              description="A dynamic website crafted with React.JS and Node.JS, dedicated to offering unparalleled movie recommendations 
              across multiple languages including English, Hindi, and Telugu. Covering the cinematic spectrum from 2001 to 2024, the platform selects the finest film from each year, ensuring a diverse and enriching 
              viewing experience for users. Its intuitive interface and sophisticated recommendation engine empower users to 
              explore and discover cinematic gems tailored to their preferences. CineScope redefines the way audiences engage with 
              cinema, bridging language barriers to unite movie enthusiasts in a global cinematic journey. "
              ghLink="https://github.com/pranava-sai/Cinematic-Almanac"
              demoLink="https://drive.google.com/file/d/19Y-h6HdeeraqWB2rMyukbP3AuGzps10T/view?usp=sharing"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={puzzle}
              isBlog={false}
              title="Interactive Puzzle Game"
              description="Developed a Java project involving a graphical user interface (GUI) to create a puzzle game akin to 2248. Implemented 
              core logic including grid management, tile manipulation, and game state handling. Used Java's features like arrays, loops, 
              and object-oriented programming to ensure smooth gameplay. Rigorously tested the functionality with unit tests, 
              ensuring reliability and accuracy. Project emphasized individual coding proficiency, problem-solving skills, and 
              adherence to specifications. No reliance on external libraries, solely focused on Java development."
              ghLink="https://github.com/pranava-sai/InteractivePuzzleGame"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={monalisa}
              isBlog={false}
              title="Archive Message Reconstructor"
              description="Implemented a terminal-based program utilizing binary tree data structures to read and process file contents. The 
              application constructs a binary tree to organize data and adeptly decodes and reveals hidden messages on the console."
              ghLink="https://github.com/pranava-sai/BinaryTreeMessageDecoder"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
