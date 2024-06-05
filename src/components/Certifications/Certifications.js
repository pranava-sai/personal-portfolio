import React, { useState } from "react";
import { Container, Row, Col, Card, Button, Modal } from "react-bootstrap";
import { Document, Page } from "react-pdf";
import pdf1 from "../../Certificates/Cybersecurity/Course_1.pdf";
import pdf2 from "../../Certificates/Cybersecurity/Course_2.pdf";
import pdf3 from "../../Certificates/Cybersecurity/Course_3.pdf";
import pdf4 from "../../Certificates/Cybersecurity/Course_4.pdf";
import pdf5 from "../../Certificates/Cybersecurity/Course_5.pdf";
import pdf6 from "../../Certificates/Cybersecurity/Course_6.pdf";
import pdf7 from "../../Certificates/Cybersecurity/Course_7.pdf";
import pdf8 from "../../Certificates/Cybersecurity/Course_8.pdf";
import cyber from "../../Certificates/Cybersecurity/Cybersecurity.pdf";
import badge from "../../Certificates/Cybersecurity/cyber-badge.pdf";

const certifications = {
  cybersecurity: [
    {
      title: "Foundations Of Cybersecurity",
      link: "https://www.coursera.org/learn/foundations-of-cybersecurity?specialization=google-cybersecurity",
      description: "In the first course in the Google Cybersecurity Certificate. This course provided a comprehensive introduction to cybersecurity, covering the evolution of the field, the importance of cybersecurity in business, and the role of an entry-level cybersecurity analyst. Guided by Google employees, I engaged in hands-on activities and simulations, learning about security domains, frameworks, ethics, and common tools. This foundational course has equipped me with essential skills and knowledge for a career in cybersecurity.",
      file: pdf1
    },
    {
      title: "Play It Safe: Manage Security Risks",
      link: "https://www.coursera.org/learn/manage-security-risks?specialization=google-cybersecurity",
      description: "In the second course in the Google Cybersecurity Certificate, which delved deeper into key cybersecurity concepts introduced in the first course. This course emphasized the use of frameworks and controls by cybersecurity professionals to safeguard business operations. I learned about risk management steps, common threats, and vulnerabilities, and how to use SIEM data to respond to incidents. The hands-on activities, guided by Google cybersecurity experts, significantly boosted my skills, preparing me for entry-level cybersecurity roles",
      file: pdf2
    },
    { title: "Connect and Protect: Networks and Network Security", link: "https://www.coursera.org/learn/networks-and-network-security?specialization=google-cybersecurity",  description: "In the third course in the Google Cybersecurity Certificate, which focused on network fundamentals and security. I learned how networks connect devices and allow communication, and explored the TCP/IP model and network hardware like routers and modems. The course emphasized network security, teaching me to recognize vulnerabilities and secure networks using firewalls, system hardening, and VPNs. Through hands-on activities, I gained practical skills, preparing me for entry-level cybersecurity roles.", file: pdf3 },
    { title: "Tools of the Trade: Linux and SQL", link: "https://www.coursera.org/learn/linux-and-sql?specialization=google-cybersecurity",  description: "In the fourth course of the Google Cybersecurity Certificate, I learned essential computing skills needed for a cybersecurity analyst role. I practiced using Linux, navigating the file system, and authenticating users with the Bash shell. Additionally, I gained experience in SQL, communicating with databases, and applying filters to queries. Guided by Google employees, the course included hands-on activities that simulated real-world cybersecurity tasks, thoroughly preparing me for entry-level roles in the field.", file: pdf4 },
    { title: "Assets, Threats, and Vulnerabilities", link: "https://www.coursera.org/learn/assets-threats-and-vulnerabilities?specialization=google-cybersecurity",  description: "In the fifth course of the Google Cybersecurity Certificate, I learned to classify assets, identify common threats and vulnerabilities, and implement security controls to protect valuable information. I practiced threat modeling and developed an attacker mindset to stay ahead of security breaches. The course also covered data handling processes, encryption, hashing, authentication, authorization, and analyzing attack surfaces. By the end, I was equipped to apply for entry-level cybersecurity roles with practical skills and knowledge from industry professionals.", file: pdf5 },
    { title: "Sound the Alarm: Detection and Response", link: "https://www.coursera.org/learn/detection-and-response?specialization=google-cybersecurity",  description: "In the sixth course of the Google Cybersecurity Certificate, I learned about incident detection and response. I gained skills in defining and managing security incidents, understanding the incident response lifecycle, and using tools like packet sniffers, IDS, and SIEM for detecting and analyzing security incidents. I also practiced analyzing network communications and investigating artifacts to verify security incidents. This hands-on experience has prepared me for entry-level roles in cybersecurity, focusing on effective incident management and response strategies.", file: pdf6 },
    { title: "Automate Cybersecurity Tasks with Python", link: "https://www.coursera.org/learn/automate-cybersecurity-tasks-with-python?specialization=google-cybersecurity",  description: "In the seventh course of the Google Cybersecurity Certificate, I learned to automate tasks using Python. The course covered foundational concepts such as data types, variables, and control structures. I practiced developing functions, using libraries, and debugging code. Additionally, I enhanced my skills in working with strings, lists, file handling, and applying regular expressions. Guided by experienced Google cybersecurity professionals, this course provided a comprehensive and practical learning experience.", file: pdf7 },
    { title: "Put It to Work: Prepare for Cybersecurity Jobs", link: "https://www.coursera.org/learn/prepare-for-cybersecurity-jobs?specialization=google-cybersecurity",  description: "In the eighth course of the Google Cybersecurity Certificate, I learned how to make critical decisions and escalate incidents to stakeholders effectively. I developed strong communication and collaboration skills essential for influencing stakeholders within an organization. The course emphasized the importance of ethical behavior in cybersecurity and provided insights into engaging with the cybersecurity community. Additionally, I explored job opportunities in the field, practiced interviews, and prepared a resume and cover letter to apply for entry-level cybersecurity roles.", file: pdf8 }
  ],
  // iOS: [
  //   {
  //     title: "Foundations Of Cybersecurity",
  //     link: "https://www.coursera.org/learn/foundations-of-cybersecurity?specialization=google-cybersecurity",
  //     description: "In the first course in the Google Cybersecurity Certificate...",
  //     file: pdf1
  //   },
  //   {
  //     title: "Play It Safe: Manage Security Risks",
  //     link: "https://www.coursera.org/learn/manage-security-risks?specialization=google-cybersecurity",
  //     description: "In the second course in the Google Cybersecurity Certificate...",
  //     file: pdf2
  //   },
  //   // Add the rest of the iOS certifications here...
  // ]
};

function Projects() {
  const [visibleCertifications, setVisibleCertifications] = useState(null);
  const [modalShow, setModalShow] = useState(false);
  const [pdfToShow, setPdfToShow] = useState(null);

  const handleShowCertifications = (certType) => {
    setVisibleCertifications(visibleCertifications === certType ? null : certType);
  };

  const showFullCertificate = () => {
    setPdfToShow(cyber);
    setModalShow(true);
  };

  const showBadge = () => {
    setPdfToShow(badge); // Replace with the actual badge file if different
    setModalShow(true);
  };

  const handleClose = () => setModalShow(false);

  return (
    <Container fluid className="certification-section">
      <h1 className="project-heading2">
        My <strong className="purple">Certifications</strong>
      </h1>
      <Row>
        <Col md={6} lg={3} className="mb-4" style={{ marginLeft: "auto", marginRight: "auto" }}>
          <Card className="h-100 transparent-card text-center">
            <Card.Body className="transparent-card-body d-flex flex-column align-items-center justify-content-center">
              <img
                src="https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://coursera-instructor-photos.s3.amazonaws.com/61/36584e2633455296817e987d653e8d/500x500_Google.jpg?auto=format%2Ccompress&dpr=2&w=200&h=200"
                className="img-fluid mb-3"
                alt="Google Cybersecurity"
              />
              <Card.Title className="transparent-card-title"><strong>Google Cybersecurity Professional Certificate</strong></Card.Title>
              <Card.Text className="transparent-card-text">
              The Google Cybersecurity Professional Certificate is an 8-course series designed to prepare individuals for a career in cybersecurity. In this program, I gained in-demand skills from Google experts, learning to safeguard against cyber threats and unauthorized access. The courses covered topics such as Python, Linux, SQL, SIEM tools, and Intrusion Detection Systems (IDS). I engaged in hands-on labs and real-world cybersecurity scenarios, enhancing my problem-solving, analysis, communication, and collaboration skills.
              </Card.Text>
              <div className="button-group">
                <Button onClick={showFullCertificate}>Show Complete Certificate</Button>
                <Button onClick={showBadge}>Show Badge</Button>
                <Button onClick={() => handleShowCertifications("cybersecurity")}>
                  {visibleCertifications === "cybersecurity" ? "Hide" : "Show"} Certifications
                </Button>
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      {visibleCertifications && (
        <>
          <Button onClick={() => handleShowCertifications(visibleCertifications)} className="mb-4">
            Hide Certifications
          </Button>
          <Row>
            {certifications[visibleCertifications].map((cert, index) => (
              <Col md={6} lg={3} key={index} className="mb-4">
                <Card className="h-100 transparent-card">
                  <Card.Body className="transparent-card-body">
                    <Card.Title className="transparent-card-title"><strong>{cert.title}</strong></Card.Title>
                    <Card.Text className="transparent-card-text">{cert.description}</Card.Text>
                    <Button onClick={() => window.open(cert.link)}>More about this Certification</Button><br /><br />
                    <Document file={cert.file} className="d-flex justify-content-center">
                      <Page pageNumber={1} scale={0.5} />
                    </Document>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </>
      )}

      <Modal show={modalShow} onHide={handleClose} dialogClassName="modal-90w" centered>
        <Modal.Header closeButton>
          <Modal.Title>Certificate</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {pdfToShow && (
            <iframe
              src={pdfToShow}
              title="Certificate PDF"
              width="100%"
              height="450px"
              frameBorder="0"
              allowFullScreen
            />
          )}
        </Modal.Body>
      </Modal>
    </Container>
  );
}

export default Projects;