// import React, { useState, useEffect } from "react";
// import { Container, Row, Col } from "react-bootstrap";
// import Button from "react-bootstrap/Button";
// import Particle from "../Particle";
// import pdf from "../../Assets/../Assets/Pranava-Sai-Resume.pdf";
// import { AiOutlineDownload, AiOutlineLeft, AiOutlineRight } from "react-icons/ai";
// import { Document, Page, pdfjs } from "react-pdf";
// import "react-pdf/dist/esm/Page/AnnotationLayer.css";
// pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

// function ResumeNew() {
//   const [width, setWidth] = useState(1200);
//   const [pageNumber, setPageNumber] = useState(1);

//   useEffect(() => {
//     setWidth(window.innerWidth);
//   }, []);

//   const handlePrevPage = () => {
//     setPageNumber((prevPageNumber) => Math.max(prevPageNumber - 1, 1));
//   };

//   const handleNextPage = () => {
//     setPageNumber((prevPageNumber) => Math.min(prevPageNumber + 1, 2));
//   };

//   return (
//     <div>
//       <Container fluid className="resume-section">
//         <Particle />
//         <Row style={{ justifyContent: "center", position: "relative" }}>
//           <Button
//             variant="primary"
//             href={pdf}
//             target="_blank"
//             style={{ maxWidth: "250px" }}
//           >
//             <AiOutlineDownload />
//             &nbsp;Download CV
//           </Button>
//         </Row>

//         <Row className="resume" style={{ justifyContent: "center", alignItems: "center", position: "relative" }}>
//           <Col xs="auto" style={{ display: "flex", alignItems: "center" }}>
//             <Button
//               onClick={handlePrevPage}
//               disabled={pageNumber === 1}
//               style={{
//                 border: "none",
//                 outline: "none",
//                 marginLeft: 500,
//                 color:"white",
//               }}
//             >
//               <AiOutlineLeft size={32} color={pageNumber === 1 ? "grey" : "black"} />
//             </Button>
//           </Col>
//           <Col>
//             <Document file={pdf} className="d-flex justify-content-center">
//               <Page pageNumber={pageNumber} scale={width > 786 ? 1.7 : 0.6} />
//             </Document>
//           </Col>
//           <Col xs="auto" style={{ display: "flex", alignItems: "center" }}>
//             <Button
//               onClick={handleNextPage}
//               disabled={pageNumber === 2}
//               style={{
//                 border: "none",
//                 outline: "none",
//                 marginRight: 500,
//                 color:"white",
//               }}
//             >
//               <AiOutlineRight size={32} color={pageNumber === 2 ? "grey" : "black"} />
//             </Button>
//           </Col>
//         </Row>

//         <Row style={{ justifyContent: "center", position: "relative", marginTop: "20px" }}>
//           <Button
//             variant="primary"
//             href={pdf}
//             target="_blank"
//             style={{ maxWidth: "250px" }}
//           >
//             <AiOutlineDownload />
//             &nbsp;Download CV
//           </Button>
//         </Row>
//       </Container>
//     </div>
//   );
// }

// export default ResumeNew;

import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Particle from "../Particle";
import pdf from "../../Assets/../Assets/Pranava-Sai-Resume.pdf";
import { AiOutlineDownload, AiOutlineLeft, AiOutlineRight } from "react-icons/ai";
import { Document, Page, pdfjs } from "react-pdf";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

function ResumeNew() {
  const [width, setWidth] = useState(1200);
  const [pageNumber, setPageNumber] = useState(1);

  useEffect(() => {
    setWidth(window.innerWidth);
  }, []);

  const handlePrevPage = () => {
    setPageNumber((prevPageNumber) => Math.max(prevPageNumber - 1, 1));
  };

  const handleNextPage = () => {
    setPageNumber((prevPageNumber) => Math.min(prevPageNumber + 1, 2));
  };

  return (
    <div>
      <Container fluid className="resume-section">
        <Particle />
        <Row style={{ justifyContent: "center", position: "relative" }}>
          <Button
            variant="primary"
            href={pdf}
            target="_blank"
            style={{ maxWidth: "250px" }}
          >
            <AiOutlineDownload size={35}/>
            &nbsp;Download CV
          </Button>
        </Row>

        <Row className="resume" style={{ justifyContent: "center", alignItems: "center", position: "relative" }}>
          <Col xs="auto" style={{ display: "flex", alignItems: "center" }}>
            <Button
              onClick={handlePrevPage}
              disabled={pageNumber === 1}
              style={{
                backgroundColor: "transparent",
                border: "none",
                outline: "none",
                color: "white",
                padding: 0,
                marginLeft: 100,
              }}
            >
              <AiOutlineLeft size={64} color={pageNumber === 1 ? "grey" : "white"} />
            </Button>
          </Col>
          <Col style={{ padding: 0 }}>
            <Document file={pdf} className="d-flex justify-content-center">
              <Page pageNumber={pageNumber} scale={width > 786 ? 1.7 : 0.6} />
            </Document>
          </Col>
          <Col xs="auto" style={{ display: "flex", alignItems: "center" }}>
            <Button
              onClick={handleNextPage}
              disabled={pageNumber === 2}
              style={{
                backgroundColor: "transparent",
                border: "none",
                outline: "none",
                color: "white",
                padding: 0,
                marginRight: 100,
              }}
            >
              <AiOutlineRight size={64} color={pageNumber === 2 ? "grey" : "white"} />
            </Button>
          </Col>
        </Row>

        <Row style={{ justifyContent: "center", position: "relative", marginTop: "20px" }}>
          <Button
            variant="primary"
            href={pdf}
            target="_blank"
            style={{ maxWidth: "250px" }}
          >
            <AiOutlineDownload size={35}/>
            &nbsp;Download CV
          </Button>
        </Row>
      </Container>
    </div>
  );
}

export default ResumeNew;
