import React  from 'react'
import { GrLinkedin } from "react-icons/gr";
import { AiFillGithub } from "react-icons/ai";
import { AiFillMail } from "react-icons/ai";
import * as ReactBootStrap from "react-bootstrap"
import {LinkContainer} from 'react-router-bootstrap'
import xash from "./Images/xash.PNG"
import zash from "./Images/zash.PNG"
import port from "./Images/port.PNG"
import gar from "./Images/gar.PNG"
import latestone from "./Images/latestone.JPG"
import latesttwo from "./Images/latesttwo.JPG"
import pipe from "./Images/pipe.png"
import Layout from "./Layout";
import { SiReact,SiJavascript,SiHtml5,SiCss3,SiBootstrap,SiMaterialUi,SiAmazonaws,SiExpo,SiNetlify,SiGithub,SiNpm,SiVisualstudio } from "react-icons/si";


import { CgWebsite } from "react-icons/cg";
import { AiOutlineGithub } from "react-icons/ai";

import fruit from "./Video/fruit.mp4"
import portfo from "./Video/portfo.mp4"
import lold from "./Video/lold.mp4"
import { BsLink45Deg } from "react-icons/bs";
import awge from "./Images/awge.PNG"
import awg from "./Images/awg.png"



function Home() {
return (


<div className="homepagediv">



<Layout>



<h2 className="bigintro" >Frontend developer &<br/>
    AWS solutions architect
</h2>

<h3 className="nextintro">
    Hey, my name is Okafor Ekene Andre, i'm a frontend developer & AWS certified
    solutions architect.<br/>
    A software developer with a passion for UI/UX designs.
</h3>
<ReactBootStrap.Row>
<a href="https://www.linkedin.com/in/okafor-ekene-andre-805035193/" target= "blank"><GrLinkedin className="linkicon"   /></a>
<a href="http://www.github.com/kennymanman" target= "blank"><AiFillGithub className="linkicon"  /></a> 
<a href='mailto:okaforekeneandre@gmail.com' target= "blank"><AiFillMail className="linkicon" /></a>
</ReactBootStrap.Row>

<ReactBootStrap.Row>
<SiAmazonaws className="awslogo" />
<p className="awstext">
AWS Certified Solutions Architect
</p>
</ReactBootStrap.Row>



</Layout>

<hr style={{color:"white", height:3, borderColor:"white", backgroundColor:"white"}}/>


<Layout>

<ReactBootStrap.Row className="devrow">


<ReactBootStrap.Col>
<h2 className="devhead">Development Tools</h2>
<h1 className="devsub">Here are my tools<br/>
for developing my projects.</h1>
</ReactBootStrap.Col>



<ReactBootStrap.Col>

<SiReact className="toolicons" />
<SiJavascript className="toolicons" />
<SiHtml5   className="toolicons" />
<SiCss3 className="toolicons" />
<SiBootstrap className="toolicons" />
<SiMaterialUi className="toolicons" />
<SiAmazonaws className="toolicons" />
<SiExpo className="toolicons" /> 
<SiNetlify  className="toolicons" /> 
<SiGithub className="toolicons" /> 
<SiNpm  className="toolicons" /> 
<SiVisualstudio className="toolicons" />  

</ReactBootStrap.Col>

</ReactBootStrap.Row>

</Layout>
<hr style={{color:"white", height:3, borderColor:"white", backgroundColor:"white", marginTop:140}}/>



<Layout>
<ReactBootStrap.Row className="projectrow">

<ReactBootStrap.Col>

<h4 className="projecthead">Latest Projects</h4>

<LinkContainer to="/Projects">
<h2 className="projectsub">Here are some of<br/>
 my latest projects.<br/>
  Feel free to contact<br/>
   me for your next project.</h2>
   </LinkContainer>
   
</ReactBootStrap.Col>

<ReactBootStrap.Col>
<ReactBootStrap.Carousel  fade>
<ReactBootStrap.Carousel.Item >
<img
  src={port}
  alt="First slide"
  className="carousel"
  />
<ReactBootStrap.Carousel.Caption>
</ReactBootStrap.Carousel.Caption>
</ReactBootStrap.Carousel.Item>


<ReactBootStrap.Carousel.Item >
<img
  src={gar}
  alt="Second slide"
  className="carousel"
/>

<ReactBootStrap.Carousel.Caption>
</ReactBootStrap.Carousel.Caption>
</ReactBootStrap.Carousel.Item>


<ReactBootStrap.Carousel.Item >
<img
  src={pipe}
  alt="Third slide"
  className="carousel"
/>

<ReactBootStrap.Carousel.Caption>
</ReactBootStrap.Carousel.Caption>
</ReactBootStrap.Carousel.Item>


</ReactBootStrap.Carousel>
</ReactBootStrap.Col>

</ReactBootStrap.Row>







<h2 id="seeprojects" className="projecttitle">Latest Projects</h2>

<h5 className="projecttitlesub">
developed projects built with creativity and love.
</h5>


<hr style={{ borderColor:"white", backgroundColor:"white", height:2}} />


<ReactBootStrap.Row>

<ReactBootStrap.Col>
<video  autoPlay loop
className="videos"
>                                                                                        
<source  src={fruit} type="video/mp4"/>
</video>
</ReactBootStrap.Col>

<ReactBootStrap.Col>
  <h2 className="projectname">Ecommerce app landing page</h2> 
  <h4 className="projectstack">Development Stack: React Js, React-Router, React-Bootstrap, Javascript, HTML, CSS, Netlify</h4> 
  <p className="projectinfo">Designed and built an e-commerce app landing website with a unique design using React Js.
  Aim of this project was to create a website for users to connect to a download link to the ecommerce app.</p>

  <a href="https://www.gardengrocerystore.com" target= "blank">
<ReactBootStrap.Button className="button" size={"sm"} variant="light" >
View Site
<CgWebsite />
</ReactBootStrap.Button>
</a>


<a href="https://github.com/kennymanman/landingpage" target="blank">
<ReactBootStrap.Button size={"sm"} className="button" variant="light">                                   
View Code
<AiOutlineGithub/>
</ReactBootStrap.Button>
</a>


</ReactBootStrap.Col>
</ReactBootStrap.Row>


<hr style={{ borderColor:"white", backgroundColor:"white", height:2}} />


<ReactBootStrap.Row>

<ReactBootStrap.Col>
<video  autoPlay loop
className="videos"
>                                                                                       
<source  src={portfo} type="video/mp4"/>
</video>
</ReactBootStrap.Col>

<ReactBootStrap.Col>
  <h2 className="projectname">My portfolio website</h2> 
  <h4 className="projectstack">Development Stack: React Js, React-Router, React-Bootstrap, Javascript, HTML, CSS, Netlify</h4> 
  <p className="projectinfo"> Built this project as a way to display all my latest and upcoming projects so that individuals and companies can 
  access them for their own personal review.</p>

  <a href="https://okaforekeneandre.netlify.app" target= "blank">
<ReactBootStrap.Button className="button" size={"sm"} variant="light" >
View Site
<CgWebsite />
</ReactBootStrap.Button>
</a>


<a href="https://github.com/kennymanman/Portfolio-website" target="blank">
<ReactBootStrap.Button size={"sm"} className="button" variant="light">                               
View Code
<AiOutlineGithub/>
</ReactBootStrap.Button>
</a>


</ReactBootStrap.Col>
</ReactBootStrap.Row>




<hr style={{ borderColor:"white", backgroundColor:"white", height:2}} />






<ReactBootStrap.Row>

<ReactBootStrap.Col>
<video  autoPlay loop
className="videos"
>                                                                                        
<source  src={lold} type="video/mp4"/>
</video>
</ReactBootStrap.Col>

<ReactBootStrap.Col>
  <h2 className="projectname">Ecommerce grocery app</h2> 
  <h4 className="projectstack">Development Stack: React Native, React-Context, React Navigation, Expo, JavaScript, React native icons</h4> 
  <p className="projectinfo">Developed this project to aid the agricultural sector through technological innovation.
  The app connects customers to grocery products.</p>

 


<a href="https://github.com/kennymanman/garden-app" target="blank">
<ReactBootStrap.Button size={"sm"} className="button" variant="light">                                   
View Code
<AiOutlineGithub/>
</ReactBootStrap.Button>
</a>


</ReactBootStrap.Col>
</ReactBootStrap.Row>

</Layout>

<hr style={{color:"white", height:3, borderColor:"white", backgroundColor:"white", marginTop:130}}/>

<Layout>

<h2 id="seecerts" className="certtitle">Certifications</h2>

<h5 className="certtitlesub">couple of my achievements in the last few months. </h5>

<hr style={{ borderColor:"white", backgroundColor:"white", height:2}} />


<ReactBootStrap.Row>

<ReactBootStrap.Col>

<ReactBootStrap.Image className="certimage" src={awge} fluid />
</ReactBootStrap.Col>

<ReactBootStrap.Col>
<h2 className="certname"> AWS solutions architect associate certificate</h2>
<a href="https://www.credly.com/badges/c8b5a745-802b-453b-b019-4e3a45fd4d40? " target= "blank">
<BsLink45Deg className="linkicon" />
</a>
</ReactBootStrap.Col>
</ReactBootStrap.Row>

<hr style={{ borderColor:"white", backgroundColor:"white", height:2, marginTop:25}} />


<ReactBootStrap.Row>

<ReactBootStrap.Col>

<ReactBootStrap.Image className="certimage" src={awg} fluid />
</ReactBootStrap.Col>

<ReactBootStrap.Col>
<h2 className="certname"> Blockchain technology certificate</h2>
<a href="https://courses.edx.org/certificates/15dfd5dbb7c64977a4c583e97f924768" target= "blank">
<BsLink45Deg className="linkicon" />
</a>
</ReactBootStrap.Col>
</ReactBootStrap.Row>
</Layout>


<hr style={{color:"white", height:3, borderColor:"white", backgroundColor:"white", marginTop:130}}/>


<Layout>

<h2 id="seecontact" className="contacttitle">Contact</h2>

<h5 className="contacttitlesub">Would love to hear from you.</h5>

<hr style={{ borderColor:"white", backgroundColor:"white", height:2}} />

<ReactBootStrap.Row>
<ReactBootStrap.Col >
<h3 className="aboutmetitle">A little <br/> about me.</h3>

<p className="aboutmeinfo">
I am a self-taught frontend developer with certified knowledge in Amazon Web Services.
I love to build impressive designs for websites & mobile apps.
During my free time i enjoy listening to music and creating designs to implement into code.
Currently i am learning backend frameworks as to become a full stack developer.
I am open to opportunities that enable me to positively impact businesses and individuals
while growing as a developer.     
</p>  
</ReactBootStrap.Col>



</ReactBootStrap.Row>


<hr style={{ borderColor:"white", backgroundColor:"white", height:2}} />


<ReactBootStrap.Row className="contactrow">

<ReactBootStrap.Col>

<h2 className="reach">Feel free<br/> to reach me.</h2>
</ReactBootStrap.Col>

<ReactBootStrap.Col className="iconsandtextrow">


<a href='mailto:okaforekeneandre@gmail.com' target= "blank">
<ReactBootStrap.Row>
<AiFillMail className="contacticon" /> <p className="icontext">Okaforekeneandre@gmail.com</p>
</ReactBootStrap.Row>
</a>


<a href="https://www.linkedin.com/in/okafor-ekene-andre-805035193/" target= "blank">
<ReactBootStrap.Row>
<GrLinkedin className="contacticon" /> <p className="icontext">Okafor ekene andre</p>
</ReactBootStrap.Row>
</a>


<a href="http://www.github.com/kennymanman" target= "blank">
<ReactBootStrap.Row>
< AiFillGithub className="contacticon" /> <p className="icontext">Okafor ekene andre</p>
</ReactBootStrap.Row>
</a>


</ReactBootStrap.Col>

</ReactBootStrap.Row>
</Layout>

















<diV className="bottomdiv">
<Layout>

<ReactBootStrap.Row>

<ReactBootStrap.Col  xs={5}>
<h2 className="endtitle">okafor ekene andre.</h2>
<p className="endsub">© 2022 Okafor Ekene Andre . All Rights Reserved.</p>
</ReactBootStrap.Col>

<ReactBootStrap.Col>
<a href="https://www.linkedin.com/in/okafor-ekene-andre-805035193/" target= "blank"><GrLinkedin className="endicon"   /></a>
<a href="http://www.github.com/kennymanman" target= "blank"><AiFillGithub className="endicon"  /></a> 
<a href='mailto:okaforekeneandre@gmail.com' target= "blank"><AiFillMail className="endicon" /></a>
</ReactBootStrap.Col>


<ReactBootStrap.Col>
<h3 className="love">Made with creativity and love.</h3>
</ReactBootStrap.Col>

</ReactBootStrap.Row>

</Layout>
</diV>


</div>

)

}


export default Home