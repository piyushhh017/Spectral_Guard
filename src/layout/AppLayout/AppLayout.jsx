import React from 'react'
import Header from '../UI/Header'
import { Outlet } from 'react-router-dom'
import Footer from '../UI/Footer'

const AppLayout = ({cart}) => {
  return (
    <>
        <Header cart={cart} />
        <Outlet />
        <Footer />
    </>
  )
}

export default AppLayout
