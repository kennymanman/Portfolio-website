import React from 'react'
import * as ReactBootStrap from "react-bootstrap"
import {LinkContainer} from 'react-router-bootstrap'
import Layout from "./Layout"


export default function Navigation() {
  return (
    <div>


    

<ReactBootStrap.Navbar variant="dark" bg="dark"   expand="lg"   >

<Layout>
<LinkContainer to="/">
    <ReactBootStrap.Navbar.Brand  href="#home"><p className="navname">okafor ekene andre.</p></ReactBootStrap.Navbar.Brand>
</LinkContainer>

< ReactBootStrap.Navbar.Toggle aria-controls="basic-navbar-nav"  />

   
   <ReactBootStrap.Navbar.Collapse  className="justify-content-end">




   <LinkContainer to="/Projects">
      <ReactBootStrap.Nav.Link style={{}} href="/Projects"><p className="navprojects">projects</p></ReactBootStrap.Nav.Link>
    </LinkContainer>


    <LinkContainer to="/Cert">
      <ReactBootStrap.Nav.Link href="/Cert"><p className="navcert">certifications</p></ReactBootStrap.Nav.Link>
    </LinkContainer>





   <LinkContainer to="/Contact">
      <ReactBootStrap.Nav.Link href="/Contact"><p className="navcontact">contact</p></ReactBootStrap.Nav.Link>
    </LinkContainer>

  </ReactBootStrap.Navbar.Collapse>


</Layout>

  </ReactBootStrap.Navbar>


  

  
    
  </div>
  );
}
