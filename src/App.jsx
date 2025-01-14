import { useState } from 'react'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Home from './pages/Home'
import Products from './pages/Products'
import ProductDetail from './pages/ProductDetail'
import AppLayout from './layout/AppLayout/AppLayout'
import './App.css'
import Cart from './pages/Cart'
import { ToastContainer, toast } from 'react-toastify';
import Contact from './pages/Contact'

function App() {

  const notify = () => toast.info('Added to Cart!', {
    position: "top-center",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: false,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "colored",
    });

  const [cart,setCart] = useState([])

  const addtoCart = (product) =>{
    notify();
    const existProduct = cart.find((findItem) => findItem.id === product.id)

    if(existProduct){
      const update = cart.map((v)=>(
        v.id === product.id?{...v,quantity:v.quantity+1}:v
      ))

      setCart(update)
    }
    else{
      setCart([...cart,{...product,quantity:1}])
    }
  }

  const handleInc = (id) =>{
    const updateInc = cart.map((item)=>(
      item.id === id ? {...item,quantity:item.quantity+1}:item
    ))
    setCart(updateInc)
  }

  const handleDec = (id) =>{
    const updateDec = cart.map((item)=>(
      item.id === id && item.quantity>1 ? {...item,quantity:item.quantity-1}:item
    ))
    setCart(updateDec)
  }

  const handleRem = (id) =>{
    const rem = cart.filter((filterItem)=>filterItem.id !== id) 
    setCart(rem)
  }

  const getTotal = () =>{
    const totalPrice = cart.reduce((total,reducedItem)=>{
      return total + reducedItem.price*reducedItem.quantity;
    },0)
    return totalPrice;
  }

  const router = createBrowserRouter([
    {
    path: "/",
    element: <AppLayout cart={cart} />,
    errorElement:<Error />,
    children:[
      {
        path:"/",
        element:<Home/>
      },
      {
        path:"/products",
        element:<Products/>
      },
      {
        path:"/products/:id",
        element:<ProductDetail addtoCart = {addtoCart} />
      },
      {
        path:"/cart",
        element:<Cart cart = {cart} handleInc={handleInc} handleDec={handleDec} handleRem={handleRem} getTotal={getTotal}/>
      },
      {
        path:"/contact",
        element:<Contact/>
      },
    ]
  }])

  return (
    <>
      <RouterProvider router={router} />
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      />
    </>
  )
}

export default App
