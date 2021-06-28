import React  from 'react'
import { GrLinkedin } from "react-icons/gr";
import { AiFillGithub } from "react-icons/ai";
import { AiFillMail } from "react-icons/ai";
import * as ReactBootStrap from "react-bootstrap"
import xash from "./Images/xash.PNG"
import zash from "./Images/zash.PNG"
import pipe from "./Images/pipe.png"
import Layout from "./Layout";
import { SiReact,SiJavascript,SiHtml5,SiCss3,SiBootstrap,SiMaterialUi,SiAmazonaws,SiExpo,SiNetlify,SiGithub,SiNpm,SiVisualstudio } from "react-icons/si";



function Home() {
return (


<div className="homepagediv">

<hr style={{ borderColor:"white", backgroundColor:"white", height:3}} />

<Layout>



<h2 className="bigintro" >Frontend developer &<br/>
    AWS solutions architect
</h2>

<h3 className="nextintro">
    Hi my name is Okafor Ekene Andre, i'm a frontend developer & AWS certified
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
<hr style={{color:"white", height:3, borderColor:"white", backgroundColor:"white", marginTop:70}}/>



<Layout>
<ReactBootStrap.Row className="projectrow">

<ReactBootStrap.Col>

<h4 className="projecthead">Latest Projects</h4>

<h2 className="projectsub">Here are some of<br/>
 my latest projects.<br/>
  Feel free to contact<br/>
   me for your next project.</h2>
</ReactBootStrap.Col>

<ReactBootStrap.Col>
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

</Layout>




<diV className="bottomdiv">
<Layout>

<ReactBootStrap.Row>

<ReactBootStrap.Col  xs={5}>
<h2 className="endtitle">okafor ekene andre.</h2>
<p className="endsub">© 2021 Okafor Ekene Andre . All Rights Reserved.</p>
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