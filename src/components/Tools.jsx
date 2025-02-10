import React from 'react'

const header_with_url = [
    {

        header: "Product Finder",
        url: "https://whatisproduct.netlify.app/"
    },
    {
        header: "Inventory management",
        url: "https://sachinrawat6.github.io/test/"
    },
    {
        header: "PickList to MRP Label",
        url: "https://mrplabel.netlify.app/"
    },
    {
        header: "Github Account",
        url: "https://github.com/Sachinrawat6"
    },
    {
        header:"Inventory Product API",
        url:"https://sachinrawat6.github.io/api/"
    },
    {
        header:"Walmart Listing Generator",
        url:"https://qurvii.netlify.app/"
    },
    {
        header:"Walmart Listing API",
        url:"https://sachinrawat6.github.io/inventory/products.json"
    },{
        header:"Other",
        url:"#"
    }


]
const Tools = () => {
    return (
        <div className='md:container font-[Lexend] mx-auto md:max-w-7xl flex flex-col justify-center text-center px-10 mb-15'>
            <h3 className='text-5xl '>Tools</h3>
            <hr className='w-40  bg-blue-400 border-bg-blue-400 h-[4px] text-blue-400 rounded-full mx-auto' />

            <div className="tools-container grid  grid-cols-1  md:grid-cols-4 gap-2 mt-15   items-center">
            
                {header_with_url.map((header,i)=>{
                    return(
                        <div key={i+header.url} className={` ${i%2==0?"bg-blue-600 text-white hover:text-[#f2f2f2]":"transparent hover:text-blue-600"} duration-400 ease-in cursor-pointer tool border-1 text-xl py-4 px-4 h-30 rounded-xl border-gray-200 md:shadow-xs shadow grid items-center transition-1 `}>  <a className=' z-50' href={header.url} target='_blanck'> {header.header} </a>  </div>
                    )
                })}

            </div>

        </div>
    )
}

export default Tools