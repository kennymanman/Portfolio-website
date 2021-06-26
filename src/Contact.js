import React from 'react'
import Layout from "./Layout"
import * as ReactBootStrap from "react-bootstrap"
import { GrLinkedin } from "react-icons/gr";
import { AiFillGithub } from "react-icons/ai";
import { AiFillMail } from "react-icons/ai";

export default function Contact() {
    return (

        
<div style={{backgroundColor:"black", height:1010, paddingTop:60}}>

<hr style={{ borderColor:"white", backgroundColor:"white", height:3}} />


<Layout>

<h2 className="contacttitle">Contact</h2>

<h5 className="contacttitlesub">Would love to hear from you.</h5>

<hr style={{ borderColor:"white", backgroundColor:"white", height:2}} />

<ReactBootStrap.Row>
<ReactBootStrap.Col >
<h3 className="aboutmetitle">A little <br/> about me.</h3>
</ReactBootStrap.Col>


<ReactBootStrap.Col>
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

<ReactBootStrap.Col>


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




<diV style={{backgroundColor:"white", height:80, marginTop:26}}>
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
