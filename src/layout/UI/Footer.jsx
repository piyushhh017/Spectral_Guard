import { Link } from 'react-router-dom'
import '../../css/footer.css'
import React, { useRef } from 'react'
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

const Footer = () => {

  const img = useRef()

  useGSAP(()=>{
    const tl = gsap.timeline()

    tl.from(img.current,{
      x:400,
      opacity:0,
      delay:1,
      duration:1
    })
  })

  return (
    <footer>
      <div className='para'>Copyright © 2025 by <b>Spectral Guard</b> </div>
    </footer>
  )
}

export default Footer
