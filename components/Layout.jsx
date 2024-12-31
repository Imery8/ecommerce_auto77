import React from 'react'
import Head from 'next/head';

//Ctrl and Space over yellow Navbar component to auto import
import Navbar from './Navbar';
import Footer from './Footer';

const Layout = ({children}) => {
  return (
    <div className="layout">
       <Head>
          <title>Auto77 Parts Store</title>
       </Head>
       <header>
        <Navbar />
       </header>
       <main className="main-container">
          {children}
       </main>
       <footer>
        <Footer />
       </footer>
    </div>
  )
}

export default Layout