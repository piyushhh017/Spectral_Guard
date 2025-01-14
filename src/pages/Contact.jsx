import React, { useRef } from 'react'
import '../css/contact.css'
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaFacebookF } from "react-icons/fa";
import SplitText from 'gsap-trial/SplitText';
import { Link } from 'react-router-dom';

const Contact = () => {

    const midDiv = useRef()
    const scl = useRef()

    useGSAP(()=>{
        gsap.registerPlugin(SplitText);

        let mySplitText = new SplitText(['.h1','.p'],{type:'chars'});
        let chars = mySplitText.chars
        const tl = gsap.timeline()
        tl.from(midDiv.current,{
            opacity:0,
            delay:1,
            duration:1
        })
        tl.from(chars,{
            yPercent:130,
            stagger:0.02,
            ease:'back.out',
            duration:1,
            delay:0.5,
            opacity:0
        })
        tl.from(scl.current,{
            opacity:0,
            duration:0.2,
            delay:0.2
        })
        tl.from('.socialLink',{
            opacity:0,
            stagger:0.5,
            duration:0.3,
            delay:0.3      
        })
    })

  return (
    <div className='mainContactdiv'>
      <div ref={midDiv} className="midContactdiv">
        <h1 className='h1'>Contact Us</h1>
        <p className='p'>
        We'd love to hear from you! Whether you have questions, <br /> feedback, or just want to say hello, feel free to reach out to us <br /> through any of the following methods:
        </p>
        <div className="email">
            <p className='p'><b>Email :</b> support@spectralguard.com</p>
        </div>
        <p className='p'><b>Address :</b> Spectral Guard 1234 Innovation Drive Silicon Valley, CA, USA</p>
        <p className='p bsHr'><b>Business Hours :</b> 
            <li>Monday - Friday: 9:00 AM - 6:00 PM PST </li> 
            <li>Saturday: 10:00 AM - 4:00 PM PST</li> 
            <li>Sunday: <i>Closed</i></li> 
        </p>
        <p className='sclMedia'>
            <b ref={scl}>Social Media : </b>
            <div className="socialIcons">
                <li className='li'><Link className='socialLink'><FaInstagram /></Link></li>
                <li className='li'><Link className='socialLink'><FaXTwitter /></Link></li>
                <li className='li'><Link className='socialLink'><FaFacebookF /></Link></li>
            </div>
        </p>
      </div>
    </div>
  )
}

export default Contact
