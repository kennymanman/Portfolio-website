import React from 'react'
import * as ReactBootStrap from "react-bootstrap"
import {LinkContainer} from 'react-router-bootstrap'
import Layout from "./Layout"


export default function Navigation() {
  return (
    <div>


    <Layout>

<ReactBootStrap.Navbar  expand="lg" fixed="top" >


<LinkContainer to="/">
    <ReactBootStrap.Navbar.Brand  href="#home"><p style={{fontSize:21, marginTop:10 , fontFamily:"archivo black"}}>Okafor Ekene Andre.</p></ReactBootStrap.Navbar.Brand>
</LinkContainer>

< ReactBootStrap.Navbar.Toggle aria-controls="basic-navbar-nav" />

   
   <ReactBootStrap.Navbar.Collapse className="justify-content-end">




   <LinkContainer to="/Projects">
      <ReactBootStrap.Nav.Link style={{}} href="/Projects"><p style={{marginTop:12, color:"black" , fontFamily:"archivo black"}}>Projects</p></ReactBootStrap.Nav.Link>
    </LinkContainer>


    <LinkContainer to="/About">
      <ReactBootStrap.Nav.Link href="/About"><p style={{marginTop:12, color:"black", fontFamily:"archivo black"}}>Certifications</p></ReactBootStrap.Nav.Link>
    </LinkContainer>





   <LinkContainer to="/Contact">
      <ReactBootStrap.Nav.Link href="/Contact"><p style={{marginTop:12, color:"black", fontFamily:"archivo black"}}>Contact</p></ReactBootStrap.Nav.Link>
    </LinkContainer>

  </ReactBootStrap.Navbar.Collapse>




  </ReactBootStrap.Navbar>


  </Layout>

  
    
  </div>
  );
}
