import React from 'react'
import * as ReactBootStrap from "react-bootstrap"
import {LinkContainer} from 'react-router-bootstrap'
import Layout from "./Layout"


export default function Navigation() {
  return (
    <div>


    

<ReactBootStrap.Navbar variant="light" bg="light"   expand="lg"   >

<Layout>
<LinkContainer to="/">
    <ReactBootStrap.Navbar.Brand  href="#home"><p className="navname">okafor ekene andre.</p></ReactBootStrap.Navbar.Brand>
</LinkContainer>

< ReactBootStrap.Navbar.Toggle aria-controls="basic-navbar-nav"  />

   
   <ReactBootStrap.Navbar.Collapse  className="justify-content-end">




   
      <ReactBootStrap.Nav.Link style={{}} href="#seeprojects"><p className="navprojects">projects</p></ReactBootStrap.Nav.Link>
    


    
      <ReactBootStrap.Nav.Link href="#seecerts"><p className="navcert">certifications</p></ReactBootStrap.Nav.Link>
    


      <ReactBootStrap.Nav.Link href="#seecontact"><p className="navcontact">contact</p></ReactBootStrap.Nav.Link>
    

  </ReactBootStrap.Navbar.Collapse>


</Layout>

  </ReactBootStrap.Navbar>


  

  
    
  </div>
  );
}
