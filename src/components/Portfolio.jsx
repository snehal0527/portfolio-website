import React from 'react'
import food from "../assets/food-ordering.jpg"
import landing from "../assets/landing-page.jpg"
import todo from "../assets/to-do.png"

const Portfolio = () => {
    const portfolios = [
        {
            id: 1,
            src: food,
            title: 'Online food ordering platform'
        },
        {
            id: 2,
            src: landing,
            title: 'Responsive landig page'
        },{
            id: 3,
            src: todo,
            title: 'To do list application'
        }
    ]
  return (
    <div name="portfolio" className='bg-gradient-to-b from-black to-gray-800 text-white w-full md:h-screen'>
        <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
            <div className="pb-8">
                <p className="text-4xl font-bold inline border-b-4 border-gray-500 ">Portfolio</p>
                <p className='py-6'>Check out my work right here!</p>
            </div>

            <div className='grid sm:grid-cols-1 md:grid-cols-3 gap-8 py-4 px-12 sm:px-0'>
                {
                    portfolios.map(({id, src, title}) => (
                        <div className='shadow-md shadow-gray-600 rounded-lg'>
                            <img key={id} src={src} alt='' className='rounded-md duration-200 hover:scale-105'></img>
                            <div className='flex items-center justify-center'>
                                {/* <button className='w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105'>Demo</button>
                                <button className='w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105'>Code</button> */}
                                <p>{title}</p>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    </div>
  )
}

export default Portfolio