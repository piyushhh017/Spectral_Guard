import React, { useRef } from 'react'
import productData from '../data/productData'
import '../css/productDetail.css'
import { useParams } from 'react-router-dom'
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

const ProductDetail = ({addtoCart}) => {

    const {id} = useParams()
    const product = productData.filter((item) => item.id === parseInt(id))
    const productDetail = product[0]

    const img = useRef()
    const h1 = useRef()
    const p = useRef()
    const price = useRef()
    const bt1 = useRef()
    const bt2 = useRef()

    useGSAP(()=>{
        const tl = gsap.timeline()

        tl.from(img.current,{
            opacity:0,
            delay:0.5,
            duration:0.2,
        })
        tl.from((h1.current),{
            opacity:0,
            delay:0.2,
            duration:0.2
        })
        tl.from((p.current),{
            opacity:0,
            y:10,
            delay:0.1,
            duration:0.3  
        })
        tl.from((price.current),{
            opacity:0,
            delay:0.1,
            duration:0.3  
        })
        tl.from((bt1.current),{
            opacity:0,
            delay:0.1,
            duration:0.3  
        })
        tl.from((bt2.current),{
            opacity:0,
            delay:0.1,
            duration:0.3  
        })
    })

    return (
    <div className='pageDiv'>
        <div className="productDiv">
            <div className="img">
                <img ref={img} className='prodImg' src={productDetail.image} alt={productDetail.image}/>
            </div>
            <div className="des">
                <h1 ref={h1}>{productDetail.name}</h1>
                <p ref={p} className='para'>{productDetail.description}</p>
                <h2 ref={price}>$ {productDetail.price}</h2>
                <div className="buttons">
                    <div ref={bt1} onClick={()=>addtoCart(productDetail)} className='link'><button>Add To Cart</button></div>
                    <div ref={bt2} className='link'><button >Buy Now</button></div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default ProductDetail
