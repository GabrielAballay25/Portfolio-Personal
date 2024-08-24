import React from 'react';
import { Container, Button, Row, Col, Card } from 'react-bootstrap';

function Home() {
  return (
    <Container fluid className="text-center p-5">
      <Row>
        <Col>
          <h1 className='new-amsterdam-regular'>Hola!</h1>
          <h1 className='new-amsterdam-regular'>Soy Juan Gabriel Aballay</h1>
          <p>Desarrollador Frontend con pasión por la creación de experiencias web excepcionales.</p>
        </Col>
      </Row>
      <Row className="mt-5">
        <Col md={4}>
          <Card>
            <Card.Img variant="top" src="path-to-image.jpg" />
            <Card.Body>
              <Card.Title>Proyecto Destacado 1</Card.Title>
              <Card.Text>
                Breve descripción del proyecto y lo que hiciste.
              </Card.Text>
              <Button variant="primary" href="https://link-to-project.com" target="_blank">Ver Proyecto</Button>
            </Card.Body>
          </Card>
        </Col>
        {/* Agrega más tarjetas de proyectos si es necesario */}
      </Row>
    </Container>
  );
}

export default Home;
