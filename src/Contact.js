import React from 'react'
import Layout from "./Layout"
import * as ReactBootStrap from "react-bootstrap"
import { GrLinkedin } from "react-icons/gr";
import { AiFillMail } from "react-icons/ai";
import bbbogi from "./Images/bbbogi.jpg"
import hogi from "./Images/hogi.jpg"

function Contact() {
    return (
        
<div>


< img alt="loading"
className="finalimage"
fluid src={hogi}  />                                                     {/*background image of page*/}

<Layout>

<h2 className="contacttitle">                                               {/*page title*/}
Contact <br/> Me
</h2>

<ReactBootStrap.Row>
<ReactBootStrap.Col >
<h3 className="contactabout">                                                   {/*subtitle about me*/}
About Me
</h3>

<p className="contactinfo">                                                         {/*about me info*/}
I am a self-taught frontend developer with certified knowledge in Amazon Web Services.
I love to build<br/>
 impressive designs for websites & mobile apps.
During my free time i enjoy listening to music and creating<br/>
 designs to implement into code.
Currently i am learning backend frameworks as to become a full stack developer.<br/>
I am open to opportunities that enable me to positively impact businesses and individuals<br/>
while growing as a developer.
 </p>
 </ReactBootStrap.Col>
</ReactBootStrap.Row>


<ReactBootStrap.Row>
<ReactBootStrap.Col >
<h3 className="contactabout">Contact Info</h3> 
                                              {/*contact me title*/}
<p><AiFillMail className="iconfirst" /><a className="og"  href='mailto:okaforekeneandre@gmail.com'> Okaforekeneandre@gmail.com</a><br/>    {/*first icon*/}
<GrLinkedin className="iconsecond" /> <a  className="og"href='mailto:okaforekeneandre@gmail.com'> Okafor Ekene Andre</a>  </p>          {/*second icon*/}
</ReactBootStrap.Col>
</ReactBootStrap.Row>

</Layout>





  < img  alt="loading"
  className="bottomimage"
  fluid src={bbbogi}
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









      
  </div>
    )
}

export default Contact
