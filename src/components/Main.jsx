import { useState } from "react";
import { Button, Card, Col, Row } from "react-bootstrap";

export const Main = () => {

  const [cardYBoton1,setCardYBoton1] = useState();

  const [cardYBoton2,setCardYBoton2] = useState();


  const mostrarCardYBoton1 = () => {

  }

  return (
    <>
      <Row>
        {/* Primera Card */}
        <Col lg={3}>
          <Card style={{ width: "18rem" }}>
            <Card.Img variant="top" src="holder.js/100px180" />
            <Card.Body>
              <Card.Title>Card Title</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
              <Button variant="primary">Go somewhere</Button>
            </Card.Body>
          </Card>
        </Col>
        {/* Primer boton */}
        <Col lg={1}>
          <div>
            <i className="bi bi-arrow-right-circle"></i>
          </div>
        </Col>
        {/* Segunda Card */}
        <Col className="d-none" lg={4}>
          <Card style={{ width: "18rem" }}>
            <Card.Img variant="top" src="holder.js/100px180" />
            <Card.Body>
              <Card.Title>Card Title</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
              <Button variant="primary">Go somewhere</Button>
            </Card.Body>
          </Card>
        </Col>
        {/* Segundo Boton */}
        <Col className="d-none" lg={1}>
          <i className="bi bi-arrow-right-circle"></i>
        </Col>
        {/* Tercera Card */}
        <Col className="d-none" lg={3}>
          {" "}
          <Card style={{ width: "18rem" }}>
            <Card.Img variant="top" src="holder.js/100px180" />
            <Card.Body>
              <Card.Title>Card Title</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
              <Button variant="primary">Go somewhere</Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </>
  );
};
