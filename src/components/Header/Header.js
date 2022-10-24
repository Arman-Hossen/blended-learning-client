import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import logo from '../../images/logo.png'

const Header = () => {
  return (
    <>
       <Navbar bg="light" expand="lg">
      <Container fluid>
      <img
              alt=""
              src={logo}
              width="30"
              height="30"
              className="d-inline-block me-2 align-top"
            />
        <Navbar.Brand  ><Link className='text-decoration-none text-dark' to='/'>Blended Learning</Link></Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Link className='items-center text-decoration-none text-dark me-3' to='/home'>Home</Link>
            <Link className='items-center text-decoration-none text-dark me-3'  to='/courses' >Courses</Link>
            <Link className='items-center text-decoration-none text-dark me-3'  to='/faq' >FAQ</Link>
            <Link className='items-center text-decoration-none text-dark me-3'  to='/blog' >Blog</Link>
            
            
          </Nav>
          <div className="d-flex ">

            {/* <p className='me-2'>User Log in profile</p> */}
            <Link className='items-center text-decoration-none text-dark me-3'  to='/registration' >Registration</Link>
            <Link className='items-center text-decoration-none text-dark me-3'  to='/login' >LogIn</Link>
            
            <Button variant="outline-success">Search</Button>
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </>
  );
};

export default Header;
