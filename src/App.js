
import './App.css';
// import NavBar from "./components/NavBar";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Navbar, Container, Nav } from 'react-bootstrap';


function App() {
  return (
    <div className="App">
       
       <Navbar bg="dark" expand="lg" variant="dark">
  <Container>
    <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
      <Nav >
        <Nav.Link href="#home">Home</Nav.Link>
        <Nav.Link href="#link">Link</Nav.Link>
    
      </Nav>
    </Navbar.Collapse>
  </Container>
</Navbar>    
   
    </div>
  );
}

export default App;
