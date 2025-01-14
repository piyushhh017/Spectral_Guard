import React, { useRef } from 'react'
import '../css/home.css'
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Link } from 'react-router-dom';

const Home = () => {

  const image1 = useRef()
  const h1 = useRef()
  const para = useRef()
  const button1 = useRef()
  const evilEyeSmall = useRef()
  const div1 = useRef()
  const image2 = useRef()
  const d2h1 = useRef()
  const d2h2 = useRef()
  const d2p = useRef()
  const div2 = useRef()
  const d3h1 = useRef()
  const l2 = useRef()
  const l1 = useRef()
  const div3 = useRef()
  const dl1 = useRef()
  const dmd = useRef()

  useGSAP(()=>{
    const tl = gsap.timeline()
    gsap.registerPlugin(ScrollTrigger)

    tl.from(image1.current,{
      opacity:0,
      delay:3,
      duration:1
    })
    tl.from(h1.current,{
      x:-100,
      opacity:0,
      delay:0.1,
      duration:1,
    })
    tl.from(para.current,{
      x:-100,
      opacity:0,
      delay:0.1,
      duration:1      
    })
    tl.from(button1.current,{
      opacity:0,
      delay:0.1,
      duration:1
    })
    tl.from(evilEyeSmall.current,{
      opacity:0,
      delay:0.1,
      duration:1,
    })
    tl.from(image2.current,{
      opacity:0,
      delay:1,
      duration:2,
      scrollTrigger:{
        trigger:div1.current,
        start:'top -50%',
        end:'bottom -10%',
        scrub:2,
      }
    })
    tl.from(d2h1.current,{
      opacity:0,
      delay:1,
      duration:2,
      x:200,
      scrollTrigger:{
        trigger:div1.current,
        start:'top -50%',
        end:'bottom -10%',
        scrub:3,
      }
    })
    tl.from(d2h2.current,{
      opacity:0,
      delay:1,
      duration:2,
      x:200,
      scrollTrigger:{
        trigger:div1.current,
        start:'top -50%',
        end:'bottom -10%',
        scrub:3,
      }
    })
    tl.from(d2p.current,{
      opacity:0,
      delay:1,
      duration:2,
      x:200,
      scrollTrigger:{
        trigger:div1.current,
        start:'top -50%',
        end:'bottom -10%',
        scrub:3,
      }
    })
    tl.from(d3h1.current,{
      opacity:0,
      delay:1,
      duration:2,
      x:-200,
      scrollTrigger:{
        trigger:div2.current,
        start:'top 0',
        end:'bottom 5%',
        scrub:3,
      }
    })
    tl.from(l2.current,{
      opacity:0,
      delay:1,
      duration:2,
      x:-200,
      scrollTrigger:{
        trigger:div2.current,
        start:'top -0',
        end:'bottom 5%',
        scrub:3,
      }
    })
    tl.from(l1.current,{
      opacity:0,
      delay:1,
      duration:2,
      x:200,
      scrollTrigger:{
        trigger:div2.current,
        start:'top 0',
        end:'bottom 10%',
        scrub:3,
      }
    })
    tl.from('.brace',{
      opacity:0,
      delay:3,
      duration:3,
      stagger:1,
      scrollTrigger:{
        trigger:div2.current,
        start:'top -50%',
        end:'bottom 2%',
        scrub:3,
      }
    })
    tl.from(dl1.current,{
      opacity:0,
      delay:3,
      duration:3,
      scale:0,
      scrollTrigger:{
        trigger:div3.current,
        start:'top -50%',
        end:'bottom 2%',
        scrub:3,
      }
    })
    tl.from(dmd.current,{
      opacity:0,
      delay:3,
      duration:3,
      scrollTrigger:{
        trigger:div3.current,
        start:'top -50%',
        end:'bottom 2%',
        scrub:3,
      }
    })
    tl.from('.pc',{
      opacity:0,
      delay:3,
      duration:3,
      x:100,
      stagger:1,
      scrollTrigger:{
        trigger:div3.current,
        start:'top -50%',
        end:'bottom 2%',
        scrub:3,
      }
    })
  })

  return (
    <>
    <div className="div1" ref={div1}>
      <div className="containers">
        <div className="cont1">
          <h1 ref={h1} className='h1'>Get Your <br /> Aegis Amule Today</h1>
          <img ref={evilEyeSmall} className='evilEyeSmall' src="\images\bodyImg\evilEyeSmall.png" alt="\images\bodyImg\evilEyeSmall.png" />
          <p ref={para}>Introducing <b>Spectral Guard,</b> <br /> where ancient mysticism meets modern elegance. Our exquisite collection of evil eye jewelries is designed to protect and enchant, blending timeless tradition with contemporary style. Each piece is meticulously crafted to not only ward off negative energies but also to elevate your fashion statement.</p>
          <Link className='abtLink' to={'/about'}><button ref={button1} className='button'>Know More</button></Link>
        </div>
        <div className="cont2">
          <img ref={image1} className='evilEye image' src="\images\bodyImg\evilEye.png" alt="\images\bodyImg\evilEye.png" />
        </div>
      </div>
    </div>
    <div className="div2" ref={div2}>
      <div className="containers">
        <div className="cont1">
          <img ref={image2} className='evilEyePendant image' src="\images\bodyImg\evilHand.png" alt="\images\bodyImg\evilHand.png" />
        </div>
        <div className="cont2">
          <h1  className='h1' ref={d2h1}>Spectral Guard:</h1>
          <h2 ref={d2h2}> The Essence of Protection and Elegance </h2>
          <p ref={d2p}>At Spectral Guard, we believe in the power of ancient symbols and modern craftsmanship. Our collection of evil eye jewelry is more than just accessories; they are talismans designed to protect and enchant. Each piece in our collection is meticulously crafted to blend timeless tradition with contemporary style, ensuring that you not only ward off negative energies but also make a bold fashion statement.</p>
        </div>
      </div>
    </div>
    <div ref={div3} className="div3">
      <div className="cont1">
        <div className="d3h1">
          <h1 ref={d3h1}>Our Products</h1>
        </div>
        <div ref={l2} className="l2"></div>
      </div>
      <div className="cont2">
        <Link to={"/products?type=brace"} className='br'>
          <div className='brace'>
            <img className='bracelet image' src="\images\bracelets\b3.png" alt="\images\bracelets\b3.png" />
            <p>Bracelets</p>
            <div className="hide"></div>
          </div>
        </Link>
        <Link to={'/products?type=pend'} className='br'>
          <div className='brace brace2'>
            <img className='bracelet image' src="\images\pendants\p1.png" alt="\images\pendants\p1.png" />
            <p>Pendants</p>
            <div className="hide"></div>
          </div>
        </Link>
        <Link to={'/products?type=hom'} className='br'>
          <div className='brace brace3'>
            <img className='bracelet image' src="\images\Home decors\h4.png" alt="\images\Home decors\h4.png" />
            <p>Home Decors</p>
            <div className="hide"></div>
          </div>
        </Link>
      </div>
    </div>
    <div className="div4">
        <div ref={dl1} className="dl1"></div>
        <div className="d4c">
          <div className="img">
            <img className='imageD' ref={dmd} src="\images\Diamond\diamond.png" alt="\images\Diamond\diamond.png" />
          </div>
          <div className="p">
            <h1 className='pc'>WHY US ?</h1>
            <p className='pc'>Spectral Guard is your go-to for jewelry that combines ancient protection with modern elegance. Our evil eye pieces are crafted with precision to not only shield you from negative energies but also to enhance your style. Choose Spectral Guard for jewelry that offers both timeless tradition and contemporary flair.</p>
          </div>
        </div>
    </div>
    </>
  )
}

export default Home
