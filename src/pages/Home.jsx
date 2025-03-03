import { useState } from 'react'



import Hero from '../components/Hero'
import Features from '../components/Features'
import DocumentationPage from '../components/Docs'
import DownloadsPage from '../components/Downloands'
import Footer from '../components/Header'
import ContactPage from '../components/Contact'

function Home() {

  return (
    <>

      <Hero />
      <Features />
      <DocumentationPage />
      <DownloadsPage />
      <ContactPage />
      <Footer />
    </>
  )
}

export default Home
