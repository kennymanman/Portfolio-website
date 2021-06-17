import React from 'react'
import Layout from "./Layout"
import * as ReactBootStrap from "react-bootstrap"
import awge from "./Images/awge.PNG"
import awged from "./Images/awged.PNG"
import loud from "./Images/loud.jpg"
import bbbogi from "./Images/bbbogi.jpg"
import peogi from "./Images/peogi.jpg"
import tide from "./Images/tide.jpg"
import {AiFillProfile} from "react-icons/ai";
import { GrLinkedin } from "react-icons/gr";



function About() {
return (




<div>

< img  alt="loading"
className="certlarge"
fluid src={loud}
/>                                                                           {/*Background image for the certification page*/}

    
<Layout>
<ReactBootStrap.Row>
<ReactBootStrap.Col>
<h2 className="projectpageheader">                                             {/*classname for the page title*/}
My<br/> Certifications</h2>
</ReactBootStrap.Col>
<ReactBootStrap.Col xs={6} className="projectpagetitle">                               {/*classname for the text beside page title*/}

 </ReactBootStrap.Col>
</ReactBootStrap.Row>
</Layout>


<Layout>
<ReactBootStrap.Row className="certone">                                          {/*First cert row only*/}
<ReactBootStrap.Col xs={7}>
<ReactBootStrap.Image className="certimg" src={awge} fluid />                      {/*First cert image*/}
</ReactBootStrap.Col>
<ReactBootStrap.Col>
<h3 className="certinfo">                                                              {/*both cert title*/}
AWS Solutions<br/> Architect Certificate
</h3>
</ReactBootStrap.Col>
</ReactBootStrap.Row>


<ReactBootStrap.Row classname="certtwo">                                                {/*second cert row only*/}
<ReactBootStrap.Col xs={7}>
<ReactBootStrap.Image className="certimgtwo" src={awged} fluid />                           {/*second cert image*/}
</ReactBootStrap.Col>
<ReactBootStrap.Col className="certinfotwo" >                                                {/*for the top of second cert title*/}
<h3 className="certinfo">
Blockchain<br/> Certificate
</h3>
</ReactBootStrap.Col>
</ReactBootStrap.Row>
</Layout>






< img  alt="loading"
  className="bottomimage"
  fluid src={tide}
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
<a className="bottomlinkone"  href='mailto:jack@semantic-ui.com'><AiFillProfile/>Resume</a>

<a className="bottomlinktwo" href="https://www.linkedin.com/in/okafor-ekene-andre-805035193/" target= "blank"><GrLinkedin />LinkedIn</a>
</ReactBootStrap.Row>
<p className="bottomtexts">© 2021 Okafor Ekene Andre . All Rights Reserved.</p>
</ReactBootStrap.Col>
</Layout>
</div>


    )
}

export default About
