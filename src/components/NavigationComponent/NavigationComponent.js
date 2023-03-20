import React from 'react';
import PropTypes from 'prop-types';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { doLogout } from '../../store/auth/actions';


const NavigationComponent = () => {
  const {user} = useSelector((state)=> state.AuthReducer)

  const dispatch = useDispatch()

  function closeSession(){
    dispatch(doLogout())
  }

  return(
    <Navbar bg="dark" variant="dark">
      <Container>
        <Navbar.Brand>
          Mis posts
        </Navbar.Brand>
        <Nav>
          <Link className="nav-link" to='/'>Home</Link>
          <Link className="nav-link" to='/posts'>Posts</Link>
          <Link className="nav-link" to='/about'>About</Link>
          {user && user.id? "" : <Link className="nav-link" to='/login'>Login</Link>}
          {user && user.id?  <Link className="nav-link" to='/profile'>Profile</Link> : ""} 
          {user && user.id?  <Link onClick={closeSession} className="nav-link">Logout</Link> : ""}
        </Nav>
      </Container>
    </Navbar>
  )
};

NavigationComponent.propTypes = {};

NavigationComponent.defaultProps = {};

export default NavigationComponent;
