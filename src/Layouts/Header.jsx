import React from 'react'
import logo from "./Image2.png"

export default function Header() {
  return (
    <>
        <header>
            <div className="d-flex align-items-center justify-content-between py-3">
                <div>
                    <img src={logo} className='' style={{width:'40%'}}/>
                </div>
                <div>
                    <button className='p-2'>Nous contacter</button>
                </div>
            </div>
        </header>    
    </>
  )
}
