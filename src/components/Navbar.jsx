import React from 'react'

const Navbar = () => {
  return (
    <nav className='container text-xl py-4 mx-auto font-[Lexend] items-center flex justify-between px-7 md:justify-center gap-20 text-center mt-8'>
        <div className="logo">
            <h2 className='md:text-4xl tracking-tight text-blue-600 font-bold'>Qurvii Tools</h2>
            
        </div>
        <div className="search">
            <form action="#">
                <input type="search" 
                className=' py-3 px-6 w-40 md:w-lg shadow-xs text-xs md:text-xl outline-blue-600 rounded-full  border-t-1 border-t-gray-200 inset'
                placeholder='Search here...' />
            </form>
        </div>
    </nav>
  )
}

export default Navbar