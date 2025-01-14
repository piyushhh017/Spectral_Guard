import React from 'react'
import { useEffect,useState } from 'react'
import productData from '../data/productData'
import '../css/products.css'
import { Link } from 'react-router-dom'
import Aos from 'aos'
import 'aos/dist/aos.css'

const Products = () => {
    
    useEffect(()=>{
        Aos.init({duration:1000});
      },[])
    

    const [filteredProducts,setFilteredProducts] = useState([]);
    const [selectedType,setSelectedType] = useState('all')

    useEffect(()=>{
        // Getting the item type from url parameter
        const params = new URLSearchParams(location.search)
        const type = params.get('type') || 'all'
        setSelectedType(type)
    },[location])

    useEffect(()=>{
        // Getting the filtered data either all as default or else the selected type
        const filteredData = productData.filter(product => selectedType === 'all' || product.type === selectedType)
        setFilteredProducts(filteredData)
    },[selectedType])

    const handleTypeChange = (event) =>{
        setSelectedType(event.target.value)
    }

  return (
    <div className='mainDiv'>
        <div className="pd">
            <h1>Our Products</h1> 
            <select value={selectedType} onChange={handleTypeChange}> 
            <option value="all">All</option> 
            <option value="brace">Bracelets</option> 
            <option value="pend">Pendants</option> 
            <option value="hom">Home Decors</option> 
            </select> 
        </div>
        <div id="productList"> 
        {filteredProducts.map((p, i) =>{
            return(
                <div className='productCard' data-aos='fade-left' key={i}>
                    <div className="imageArea">
                        <img className='bracelet image' src={p.image} alt={p.image} /> 
                        <div className="hide"></div> 
                    </div>
                    <div className="productDetail">
                        <h2 className='prName'>{p.name}</h2>
                        <h2 className='price'>Price : ${p.price}</h2>
                        <Link className='singleProductLink' to={`/products/${p.id}`}><button className='btn'>View Product</button></Link>
                    </div>
                </div>
            )
        }
        )} 
        </div>
    </div>
  )
}

export default Products
