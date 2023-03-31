import React from 'react';
import Laptop from '../assets/laptop.jpg';
// import Image2 from '../assets/image2.png';
// import Image3 from '../assets/image3.png';
// import Image4 from '../assets/image4.png';

const Analytics = () => {

  return (
    <div className='w-full bg-white py-16 px-4'>
        <div className='max-w-[1240px] mx-auto grid md:grid-cols-2 '>
            <img src={Laptop} alt="image 1" className='mx-auto my-4 ' />
            <div className='flex flex-col justify-center'>
                <p className='text-[#00df9a] font-bold '>DATA ANALYTICS DASHBOARD</p>
                <h1 className='md:text-4xl sm:text-3xl text-2xl font-bold py-2'>Manage Data Analytics Centrally</h1>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore officia, quos, tenetur dicta magnam explicabo quas eveniet, cupiditate laudantium illo excepturi sequi. Nostrum sit dolore modi libero eos similique dolores?
                </p>
                <button className="bg-black w-[200px] text-[#00df9a] rounded-md font-medium my-6 mx-auto md:mx-0 py-3">Get Started</button>
            </div>
        </div>
    </div>
  )
}

export default Analytics