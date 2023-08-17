import React from 'react'

const About = () => {
  return (
    <div name="about" className="w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white">
        <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full ">
            <div className="pb-8">
                <p className="text-4xl font-bold inline border-b-4 border-gray-500 ">About</p>
            </div>
            <p className="text-xl mt-15">I am skilled in creating dynamic and interactive websites using React.js, using modern techniques like React Hooks for better performance. I am experienced in building smooth navigation within single-page applications using React Router.
            I have also implemented code splitting. Used methods to speed up web page loading and performance by splitting the code into smaller parts. Worked on creating custom hooks. Created reusable code blocks (hooks) to make coding more organized and efficient. 
            Designed websites to look good and work well on all types of devices like phones, tablets, and desktops. Familiar with consuming data from RESTful APIs and integrating them into your React applications. 
            </p>
            <br />

            <p className="text-xl">
            Proficient in using Git to manage and track changes in code, making collaboration with teammates easier. Experienced in finding and fixing issues in the code to improve the overall quality of applications. Worked on HTML, CSS, and JavaScript to create attractive and user-friendly websites.
            </p>
        </div>
    </div>
  )
}

export default About;
