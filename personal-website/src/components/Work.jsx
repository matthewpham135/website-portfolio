import React from 'react';
import Hackathon from '../assets/hackathon.JPG';
import Quiz from '../assets/quiz.png'
import HashTree from '../assets/hashtree.png'
import ServerClient from '../assets/serverclient.png'

const Work = () => {
  return (
    <div name='work' className='w-full md:h-screen text-gray-300 bg-[#0a192f]'>
        <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
            <div className='pb-8'>
                <p className='text-4xl font-bold inline border-b-4 text-gray-300 border-pink-600'>
                    Work
                </p>
                <p className='py-6'>Check out some of my projects</p>
            </div>

        {/* Container */}
            <div className='grid sm:grid-cols-2 gap-4'>

                {/* Grid Item */}
                <div
                style={{ backgroundImage: `url(${Hackathon})` }}
                className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'
                >
                    {/* Hover Effects */}
                    <div className='opacity-0 group-hover:opacity-100'>
                        <span className='text-2xl font-bold text-white tracking-wider'>
                            2021 HackUTD Winner
                        </span>
                        <div className='pt-8 text-center'>
                            <a href='https://devpost.com/software/home-oversight' target='_blank'>
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                                    Link
                                </button>
                            </a>
                            <a href='https://github.com/WillowArk/Home-Oversight' target='_blank'>
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                                    Code
                                </button>
                            </a>
                        </div>
                    </div>
                </div>
                {/* Grid Item */}
                <div
                style={{ backgroundImage: `url(${Quiz})` }}
                className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'
                >
                    {/* Hover Effects */}
                    <div className='opacity-0 group-hover:opacity-100'>
                        <span className='text-1.8xl font-bold text-white tracking-wider'>
                            API Quiz Generator in React
                        </span>
                        <div className='pt-8 text-center'>
                            <a href='https://github.com/matthewpham135/Quiz-Generator' target='_blank'>
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                                    Code
                                </button>
                            </a>
                        </div>
                    </div>
                </div>
                {/* Grid Item */}
                <div
                style={{ backgroundImage: `url(${HashTree})` }}
                className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'
                >
                    {/* Hover Effects */}
                    <div className='opacity-0 group-hover:opacity-100'>
                        <span className='text-1.8xl font-bold text-white tracking-wider'>
                            Multi-Threaded Hash Tree in C
                        </span>
                        <div className='pt-8 text-center'>
                            <a href='https://github.com/matthewpham135/Multi-Threaded-Hash-Tree' target='_blank'>
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                                    Code
                                </button>
                            </a>
                        </div>
                    </div>
                </div>
                {/* Grid Item */}
                <div
                style={{ backgroundImage: `url(${ServerClient})` }}
                className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'
                >
                    {/* Hover Effects */}
                    <div className='opacity-0 group-hover:opacity-100'>
                        <span className='text-2xl font-bold text-white tracking-wider'>
                            Server-Client in C
                        </span>
                        <div className='pt-8 text-center'>
                            <a href='https://github.com/matthewpham135/Server-Client' target='_blank'>
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                                    Code
                                </button>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  );
};

export default Work;