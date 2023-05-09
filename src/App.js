import logo from './logo.svg';
import './App.css';
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import "bootstrap/dist/css/bootstrap.min.css";
import {Container, Row, Col} from "react-bootstrap";
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Card from 'react-bootstrap/Card';


function App() {
  return (
    <div className="App">
      <--! Creating a container for all of the App Javascript code-->
      <Container>
      <--! Adding the firs row wich will contain the nav bar-->
       <Row>
        <Col>
        <--! navbar using bootstrap-->
        <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">React Demo</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#about">About Us</Nav.Link>
            <Nav.Link href="#contact">Contact</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
        </Col>
        </Row> 
        <br />
        <Row>
        <--! using bootstap cards to contain the form-->
        <Card>
      <Card.Header as="h5">Sign Up</Card.Header>
      <Card.Body>
      <Form>
        <Row>
        <Col>
        <--! Creating a form using bootstrap-->
        <Form.Group>
           <Form.Label for="fname">Full name:</Form.Label>
           <Form.Control type="text" id="fname" name="fname" />
           <Form.Label for="lname">Last name:</Form.Label>
           <Form.Control type="text" id="lname" name="lname" />
        </Form.Group>
        </Col>
        <Col>
        <Form.Group>
           <Form.Label for="email">Email:</Form.Label>
           <Form.Control type="email" id="email" name="email" />
           <Form.Label for="password">Password:</Form.Label>
           <Form.Control type="password" id="password" name="password" />
        </Form.Group>
        </Col>
        </Row>
      </Form>
      <br />
      <--! adding a bootstrap button for signing up-->
      <Button>Sign Up</Button>
      </Card.Body>
    </Card>
      </Row>

      </Container>
    </div>
  );
}

export default App;
