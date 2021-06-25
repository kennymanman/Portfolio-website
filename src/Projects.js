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
import lold from "./Video/lold.mp4"
import tide from "./Images/tide.jpg"


export default function Projects() {
    return (

<div style={{backgroundColor:"black", height:1800, paddingTop:60}}>

<hr style={{ borderColor:"white", backgroundColor:"white", height:3}} />
<Layout>
<h2 className="projecttitle">Latest Projects</h2>

<h5 className="projecttitlesub">developed projects built with creativity and love.</h5>



<hr style={{ borderColor:"white", backgroundColor:"white", height:2}} />
<ReactBootStrap.Row>

<ReactBootStrap.Col>
<video  autoPlay loop
className="videos"
>                                                                                        {/*Classname for project videos*/}
<source  src={pold} type="video/mp4"/>
</video>
</ReactBootStrap.Col>


<ReactBootStrap.Col>
  <h2 className="projectname">Ecommerce App landing page</h2> 
  <h4 className="projectstack">Development Stack: React Js,React-Router, React-Bootstrap, Javascript, HTML, CSS</h4> 
  <p className="projectinfo">Lorem Ipsum is simply dummy text of the printing and typesetting industry.
  Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>

  <a href="https://www.gardenstoreapp.com" target= "blank">
<ReactBootStrap.Button className="button" size={"sm"} variant="light" >
View Site
<CgWebsite />
</ReactBootStrap.Button>
</a>


<a href="https://github.com/kennymanman/Grocery-app-landing-page" target="blank">
<ReactBootStrap.Button size={"sm"} className="button" variant="light">                                   {/*classname for the last button*/}
View Code
<AiOutlineGithub/>
</ReactBootStrap.Button>
</a>


</ReactBootStrap.Col>
</ReactBootStrap.Row>

</Layout>

    </div>
    )
}
