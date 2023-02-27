import React from 'react'
import {Footer, Header} from '../'

function Layout({children}) {
  return (
    <main className="container mx-auto bg-background-pattern bg-no-repeat">
      <Header />
        {children}
      <Footer />
    </main>
  )
}

export default Layout