import React from 'react'
import Layout from "./Layout"
import * as ReactBootStrap from "react-bootstrap"
import { BsLink45Deg } from "react-icons/bs";
import awge from "./Images/awge.PNG"
import awg from "./Images/awg.png"
import { AiFillGithub } from "react-icons/ai";
import { AiFillMail } from "react-icons/ai";
import { GrLinkedin } from "react-icons/gr";





export default function Cert() {
return (


<div className="certpagediv">

{/*<hr style={{ borderColor:"white", backgroundColor:"white", height:3}} /> */}


<Layout>

<h2 className="certtitle">Certifications</h2>

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
