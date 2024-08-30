import { Navbar } from "react-bootstrap";

function Footer() {
  return (
    <Navbar bg="background" variant="light" className="mt-auto p-2">
      <p className="footer-text-custom">&copy; 2022, Matthew Campbell</p>
      <p className="fw-light ps-3 footer-text-custom">
        W.H.R. single page application completed as part of an assignment for
        the Queensland University of Technology
      </p>
    </Navbar>
  );
}

export default Footer;

// import { Row, Col } from "react-bootstrap";

// function Footer() {
//   return (
//     <footer className="mt-auto p-5">
//       <Row>
//         <Col md={12}>

//         </Col>
//       </Row>
//     </footer>
//   );
// }

// export default Footer;
