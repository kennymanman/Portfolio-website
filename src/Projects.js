import React from 'react'
import Layout from "./Layout"
import * as ReactBootStrap from "react-bootstrap"
import { AiFillGithub } from "react-icons/ai";
import { AiFillMail } from "react-icons/ai";
import { CgWebsite } from "react-icons/cg";
import { AiOutlineGithub } from "react-icons/ai";
import { GrLinkedin } from "react-icons/gr";
import pold from "./Video/pold.mp4"






export default function Projects() {
    return (


<div className="projectpagediv">

<hr style={{ borderColor:"white", backgroundColor:"white", height:3}} />

<Layout>
<h2 className="projecttitle">Latest Projects</h2>

<h5 className="projecttitlesub">
developed projects built with creativity and love.
</h5>


<hr style={{ borderColor:"white", backgroundColor:"white", height:2}} />


<ReactBootStrap.Row>

<ReactBootStrap.Col>
<video  autoPlay loop
className="videos"
>                                                                                        
<source  src={pold} type="video/mp4"/>
</video>
</ReactBootStrap.Col>

<ReactBootStrap.Col>
  <h2 className="projectname">Ecommerce app landing page</h2> 
  <h4 className="projectstack">Development Stack: React Js, React-Router, React-Bootstrap, Javascript, HTML, CSS, Netlify</h4> 
  <p className="projectinfo">Designed and built an e-commerce app landing website with a unique design using React Js.
  Aim of this project was to create a website for users to connect to a download link to the ecommerce app.</p>

  <a href="https://www.gardenstoreapp.com" target= "blank">
<ReactBootStrap.Button className="button" size={"sm"} variant="light" >
View Site
<CgWebsite />
</ReactBootStrap.Button>
</a>


<a href="https://github.com/kennymanman/Grocery-app-landing-page" target="blank">
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
<source  src={pold} type="video/mp4"/>
</video>
</ReactBootStrap.Col>

<ReactBootStrap.Col>
  <h2 className="projectname">Ecommerce vendor website</h2> 
  <h4 className="projectstack">Development Stack: React Js, React-Router, React-Bootstrap, Javascript, HTML, CSS, Netlify</h4> 
  <p className="projectinfo"> Built this project as a way for product vendors to sell their products and get real-time 
  analytics of their product sales. This project is still in development.</p>

  <a href="https://www.gardenstorevendor.com" target= "blank">
<ReactBootStrap.Button className="button" size={"sm"} variant="light" >
View Site
<CgWebsite />
</ReactBootStrap.Button>
</a>


<a href="https://github.com/kennymanman/Grocery-app-vendor-page" target="blank">
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
<source  src={pold} type="video/mp4"/>
</video>
</ReactBootStrap.Col>

<ReactBootStrap.Col>
  <h2 className="projectname">Ecommerce grocery app</h2> 
  <h4 className="projectstack">Development Stack: React Native, React Navigation, Expo, JavaScript, React native icons</h4> 
  <p className="projectinfo">Developed this project to aid the agricultural sector through technological innovation.
  The app connects grocery store owners to customers in the area.</p>

 


<a href="https://github.com/kennymanman/Grocer-app" target="blank">
<ReactBootStrap.Button size={"sm"} className="button" variant="light">                                   
View Code
<AiOutlineGithub/>
</ReactBootStrap.Button>
</a>


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
