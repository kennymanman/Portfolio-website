import React from 'react'
import Layout from "./Layout"
import * as ReactBootStrap from "react-bootstrap"
import { CgWebsite } from "react-icons/cg";
import { AiOutlineGithub } from "react-icons/ai";
import {AiFillProfile} from "react-icons/ai";
import { GrLinkedin } from "react-icons/gr";
import pold from "./Video/pold.mp4"
import bbbogi from "./Images/bbbogi.jpg"
import lion from "./Images/lion.jpg"
import vold from "./Video/vold.mp4"
import tion from "./Images/tion.jpg"
import peogi from "./Images/peogi.jpg"
import tide from "./Images/tide.jpg"



function Projects() {
return (

<div>

< img  alt="loading"                                                                 
 className="projectimage"
fluid src={tion}  />                                                                 {/*Background image for the project page*/}


<Layout>

<ReactBootStrap.Row>

<ReactBootStrap.Col>
<h2 className="projectpageheader">                                                   {/*Header of project page*/}
Latest<br/> Projects</h2>
</ReactBootStrap.Col>

<ReactBootStrap.Col  xs={7} className="projectpagetitle">                                     {/*Header beside text*/}

 </ReactBootStrap.Col>
</ReactBootStrap.Row>
</Layout>


    


<Layout>
<ReactBootStrap.Row className="firstrow">                                               {/*Row for first project to adjust only it*/}
<ReactBootStrap.Col>
<video  autoPlay loop
className="videoimage"
>                                                                                        {/*Classname for project videos*/}
<source  src={pold} type="video/mp4"/>
</video>
</ReactBootStrap.Col>

<ReactBootStrap.Col>
<h3 className="projectdef">Grocery App<br/>Landing Page</h3>                              {/*Classname for the project title*/}
<p className="projectinfo">                                                                {/*classname for the project stack details*/}
Development Stack: React js, React-Router, React-Bootstrap, Javascript, HTML, CSS
</p>
<p className="textin">                                                                        {/*classname for the project info*/}
Lorem Ipsum is simply dummy text of the printing and typesetting industry.
Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
when an unknown printer took a galley of type and scrambled it to make a type specimen book.
</p>
<a href="https://www.gardenstoreapp.com" target= "blank">
<ReactBootStrap.Button variant="dark" >
View Site
<CgWebsite />
</ReactBootStrap.Button>
</a>

<a href="https://github.com/kennymanman/Grocery-app-landing-page" target="blank">
<ReactBootStrap.Button className="buttonslink" variant="dark">                                   {/*classname for the last button*/}
View Code
<AiOutlineGithub/>
</ReactBootStrap.Button>
</a>
</ReactBootStrap.Col>
</ReactBootStrap.Row>





<ReactBootStrap.Row className="secondrow">
<ReactBootStrap.Col>
<video  autoPlay loop
className="videoimage"
>
              
<source  src={vold}
 type="video/mp4"/>
</video>
</ReactBootStrap.Col>
<ReactBootStrap.Col>
<h3 className="projectdef">
Grocery App<br/>Vendor Website
</h3>
<p className="projectinfo"
>Development Stack: React js, React-Router, React-Bootstrap, JavaScript, HTML, CSS
 </p>
<p className="textin">
Lorem Ipsum is simply dummy text of the printing and typesetting industry.
Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown
printer took a galley of type and scrambled it to make a type specimen book.
</p>

<a href="https://www.gardenstorevendor.com" target= "blank">
<ReactBootStrap.Button variant="dark" >
View Site
<CgWebsite />
</ReactBootStrap.Button>
</a>

<a href="https://github.com/kennymanman/Grocery-app-vendor-page" target= "blank">
<ReactBootStrap.Button className="buttonslink" variant="dark">
View Code
<AiOutlineGithub/>
</ReactBootStrap.Button>
</a>

</ReactBootStrap.Col>
</ReactBootStrap.Row>






<ReactBootStrap.Row className="secondrow">
<ReactBootStrap.Col>
<video  autoPlay loop
className="videoimage"
>
<source  src={vold} type="video/mp4"/>
</video>
</ReactBootStrap.Col>
<ReactBootStrap.Col>
<h3 className="projectdef">
Grocery App<br/>E-commerce App
</h3>
<p className="projectinfo">
Development Stack: React Native, React Navigation, Expo, JavaScript
</p>
<p className="textin">
Lorem Ipsum is simply dummy text of the printing and typesetting industry.
Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
when an unknown printer took a galley of type and scrambled it to make a type specimen book.
</p>

<a href="https://github.com/kennymanman/Grocer-app" target= "blank">
<ReactBootStrap.Button className="buttonslink" variant="dark">
View Code
<AiOutlineGithub/>
</ReactBootStrap.Button>
</a>

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

export default Projects