import React, { useRef } from 'react'
import '../css/cart.css'
import { FaCartShopping } from "react-icons/fa6";
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { CiCircleRemove } from "react-icons/ci";

const Cart = ({cart,handleInc,handleDec,handleRem,getTotal}) => {

  const cartImg = useRef()
  const empty = useRef()
  const box = useRef()
  const totalLine = useRef()

  useGSAP(()=>{
    const tl = gsap.timeline();

    tl.from(cartImg.current,{
      x:100,
      opacity:0,
      duration:1,
      delay:0.1
    })
    tl.from('.item-box',{
      opacity:0,
      duration:0.1,
      stagger:0.3,
      delay:0.1
    })
    tl.from(empty.current,{
      opacity:0,
      duration:0.1,
      delay:0
    })
    tl.from(".totalH1",{
      opacity:0,
      delay:0.1,
      duration:0.1
    })
    tl.from(totalLine.current,{
      opacity:0,
      duration:1,
      delay:0.1,
    })
    
  })

  if(cart.length>0){
    return(
        <div className='cart-div'>
          <h1 className='pageTitle' ref={cartImg}>Your Cart  <FaCartShopping className='cartImg' /> </h1>
          {cart.map((v,i)=>{
            return (
              <div ref={box} className="item-box" key={i}>
                <CiCircleRemove className='remove' onClick={()=>handleRem(v.id)} />
                <img src={v.image} alt={v.image} />
                <div className="name">
                  <h2>{v.name}</h2>
                </div>
                <div className="buttons">
                  <button onClick={()=>handleDec(v.id)}>-</button>
                  <p>{v.quantity}</p>
                  <button onClick={()=>handleInc(v.id)}>+</button>
                </div>
                <div className="price">
                  <h2>$ {v.price*v.quantity}</h2>
                </div>
              </div>
            )
          })} 
          <div className="total">
            <h1 className='totalH1'>Total</h1>
            <div ref={totalLine} className='totalLine'>
              <div className="btnTtl">
                <button>Pay Now</button>
                <p>${getTotal()}</p>
              </div>
            </div>
          </div>      
        </div>
    )
  }
  else{
    return(
      <div className="cart-div">
        <h1 className='pageTitle' ref={cartImg}>Your Cart  <FaCartShopping className='cartImg' /> </h1>
        <div className="empty">
          <h2 ref={empty}>Cart Is Empty</h2>
        </div>
      </div>
    )
  }
}

export default Cart
