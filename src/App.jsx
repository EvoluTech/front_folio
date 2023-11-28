import { useState } from 'react'
import Header from './Layouts/Header'
import Main from './Layouts/Main'
import Service from './Layouts/Service'


function App() {
  return (
    <div className='container-lg container-fluid'>
        <Header/>
        <Main/>
        <Service/>
    </div>
  )
}

export default App
