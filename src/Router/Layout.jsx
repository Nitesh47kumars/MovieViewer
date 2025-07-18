import React from 'react'
import Footer from './Footer/Footer'
import { Outlet, useNavigation } from 'react-router-dom'
import Navbar from './Navbar/Navbar'
import Loading from './Movies/Loading/Loading'

const Layout = () => {
  const navigation = useNavigation();

  if(navigation.state == "loading") return <Loading/>
  return (
    <>
      <Navbar/>
      <Outlet/>
      <Footer/>
    </>
  )
}

export default Layout
