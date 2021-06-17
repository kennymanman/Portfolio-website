import React, { useState } from 'react'
import Layout from "./Layout"
import { GrLinkedin } from "react-icons/gr";
import { AiFillGithub } from "react-icons/ai";
import { AiFillMail } from "react-icons/ai";
import * as ReactBootStrap from "react-bootstrap"
import { SiAmazonaws } from "react-icons/si";
import { FaReact } from "react-icons/fa";
import { SiNetlify } from "react-icons/si";
import { SiExpo } from "react-icons/si";
import xash from "./Images/xash.PNG"
import zash from "./Images/zash.PNG"
import bash from "./Images/bash.png"
import vion from "./Images/vion.jpg"
import hogi from "./Images/hogi.jpg"
import bbbogi from "./Images/bbbogi.jpg"
import lart from "./Images/lart.jpg"
import xiot from "./Images/xiot.jpg"
import {LinkContainer} from 'react-router-bootstrap'
import yion from "./Images/yion.jpg"
import loud from "./Images/loud.jpg"
import peogi from "./Images/peogi.jpg"



function Home() {

  



return (



<diV>

< img  alt="loading"
  className="bigimage"
  fluid src={yion}  />






<Layout>
<ReactBootStrap.Col  >

<p className="firsttext">
Front-end developer with a strong love for ui/ux.
</p>
<a href="https://www.linkedin.com/in/okafor-ekene-andre-805035193/" target= "blank"><GrLinkedin  className="firsttopicon" /></a>
<a href="http://www.github.com/kennymanman" target= "blank"><AiFillGithub className="topicons" /></a> 
<a href='mailto:okaforekeneandre@gmail.com' target= "blank"><AiFillMail className="topicons" /></a>

</ReactBootStrap.Col>
            

<ReactBootStrap.Col>

<p className="intro" > 
Frontend developer &<br/>AWS Solutions Architect
</p>

<p className="nextintro">
Hey my name is Okafor Ekene Andre, i'm a frontend developer & AWS solutions architect.<br/> A software developer
with a passion for UX/UI design.<h8 className="resume"> See my Resume. </h8> <br/>
</p>
</ReactBootStrap.Col>


<ReactBootStrap.Row className="awsrow">
<SiAmazonaws className="awslogo" />
<p className="awstext">
AWS Certified Solutions Architect
</p>
</ReactBootStrap.Row>

</Layout>









< img  alt="loading"
       className="nextimage"
       fluid src={loud}  /> 


<Layout>
  <ReactBootStrap.Row>
<ReactBootStrap.Col>
<p className="tooltext">My<br/>Development<br/>Tools</p>
<p className="textminor">Here are the tools, frameworks and programming languages i use in <br/>
 building my projects, from  <h8 className="resume">  React Js, Javascript, HTML, CSS, Bootstrap, Material UI, Amazon Web Services, React Native, Expo, Netlify, NPM.</h8> 
</p>
 
 </ReactBootStrap.Col>







 <ReactBootStrap.Col className="iconrow"  >
   
    
     
   <i className="icons" style={{position:"relative", fontSize:60,  top:80, color:"white"}} class="devicon-react-original-wordmark "></i> 
   <i className="icons" style={{position:"relative", fontSize:60, marginLeft:4, top:80, color:"white"}}class="devicon-javascript-plain "></i>
   <i style={{position:"relative", fontSize:60, marginLeft:4, top:80, color:"white"}}class="devicon-html5-plain-wordmark "></i>
   <i style={{position:"relative", fontSize:60, marginLeft:4, top:80, color:"white"}}class="devicon-css3-plain-wordmark "></i>
   <i style={{position:"relative", fontSize:60, marginLeft:5, top:88, color:"white"}} class="devicon-bootstrap-plain-wordmark "></i> <br/>
   <i style={{position:"relative", fontSize:50, marginLeft:5, top:107, color:"white"}}class="devicon-materialui-plain "></i>
   <i style={{position:"relative", fontSize:74, marginLeft:16, top:107, color:"white"}}class="devicon-amazonwebservices-plain-wordmark "></i>
   <SiAmazonaws style={{position:"relative", fontSize:60, marginLeft:10, top:80, color:"white"}} />
   <FaReact  style={{position:"relative", fontSize:50, marginLeft:17, top:80, color:"white"}}/>
   <SiExpo  style={{position:"relative", fontSize:30, marginLeft:25, top:80, color:"white"}} /> <br/>
   <SiNetlify style={{position:"relative", fontSize:43, marginLeft:9, top:60, color:"white"}}  />
   <i style={{position:"relative", fontSize:50, marginLeft:15, top:80, color:"white"}}class="devicon-github-original-wordmark colored"></i> 
   <i style={{position:"relative", fontSize:60, marginLeft:10,top:80, color:"white"}}class="devicon-npm-original-wordmark "></i>
   <i style={{position:"relative", fontSize:100, marginLeft:10,top:100, color:"white"}}class="devicon-visualstudio-plain-wordmark"></i>
     </ReactBootStrap.Col>

</ReactBootStrap.Row>


</Layout>






< img  alt="loading"
  className="proimage"
  fluid src={hogi}  />

<Layout>
<ReactBootStrap.Row>

<ReactBootStrap.Col>

<LinkContainer to="/Projects">
<p className="protext">Latest<br/> Projects</p>
</LinkContainer>


</ReactBootStrap.Col>

<ReactBootStrap.Col xs={7}>
<LinkContainer to="/Projects">
<ReactBootStrap.Carousel  fade>
<ReactBootStrap.Carousel.Item >
<img
  src={zash}
  alt="First slide"
  className="carousel"
  />
<ReactBootStrap.Carousel.Caption>
</ReactBootStrap.Carousel.Caption>
</ReactBootStrap.Carousel.Item>


<ReactBootStrap.Carousel.Item >
<img
  src={xash}
  alt="Second slide"
  className="carousel"
/>

<ReactBootStrap.Carousel.Caption>
</ReactBootStrap.Carousel.Caption>
</ReactBootStrap.Carousel.Item>


<ReactBootStrap.Carousel.Item >
<img
  src={bash}
  alt="Third slide"
  className="carousel"
/>

<ReactBootStrap.Carousel.Caption>
</ReactBootStrap.Carousel.Caption>
</ReactBootStrap.Carousel.Item>


</ReactBootStrap.Carousel>
</LinkContainer>
</ReactBootStrap.Col>

</ReactBootStrap.Row>

</Layout>







< img  alt="loading"
  className="bottomimage"
  fluid src={peogi}
  />

<Layout>
<ReactBootStrap.Col>
<p className="bottomtitle">Okafor Ekene Andre</p>

<h5 className="bottomtexts">Want to say Hi?</h5>
<h6  className="bottomtexts">Send me an e-mail at
<a className="bottomtexts" href='mailto:okaforekeneandre@gmail.com'> Okaforekeneandre@gmail.com</a>
</h6>
<h6  className="bottomtexts">I'd love to hear from you.</h6>
<ReactBootStrap.Row >
<a className="bottomlinkone"  href='mailto:jack@semantic-ui.com'>Resume</a>
<a  className="bottomlinktwo" href='mailto:jack@semantic-ui.com'>LinkedIn</a>
</ReactBootStrap.Row>
<p className="bottomtexts">© 2021 Okafor Ekene Andre . All Rights Reserved.</p>
</ReactBootStrap.Col>
</Layout>


</diV>

)

}


export default Home