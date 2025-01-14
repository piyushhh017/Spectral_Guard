import React, { useRef } from 'react'
import '../../css/header.css'
import { Link, NavLink } from 'react-router-dom'
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

const Header = ({cart}) => {

    const logo = useRef()

    useGSAP(()=>{
        const tl = gsap.timeline();

        tl.from(logo.current,{
          opacity:0,
          y:-100,
          duration:1,
          delay:0.5  
        })
        tl.from('.menuLink',{
          opacity:0,
          stagger:0.3,
          duration:0.5,
          delay:0.3  
        })
    })

  return (
    <div className='header'>
      <div className="logo">
        <Link className='logoLink' to={"/"}><img ref={logo} className='logo' src="\images\Logo\logo.png" alt="src\images\logo.png" /></Link>
      </div>
      <div className="menus">
        <li><NavLink className='menuLink' to={"/"} >Home</NavLink></li>
        <li><NavLink className='menuLink' to={"/products"} >Products</NavLink></li>
        <li><NavLink className='menuLink cart' to={"/cart"} >Cart <p className='crtLength'>{cart.length>0 ? `${cart.length}`:''}</p></NavLink></li>
        <li><NavLink className='menuLink' to={"/contact"} >Contact</NavLink></li>
      </div>
    </div>
  )
}

export default Header
