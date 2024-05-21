import {Navbar, Container} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';

const Navbars = () => {
    return (
        <Navbar bg="dark" data-bs-theme="dark" className='p-3'>
        <Container>
          <Navbar.Brand href="#home">Crypto News</Navbar.Brand>
        </Container>
      </Navbar>
    )
}

export default Navbars;