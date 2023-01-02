import React from 'react'

const Contact = () => {
  return (

    <div  name='contact' className='w-full h-full bg-gradient-to-b  to-gray-800  from-black py-15'>
      <div className='p-4 flex flex-col justify-centern max-w-screen-lg mx-auto h-full'>
        <div className='text-white pb-8'>
        <p className='text-4xl font-bold inline border-b-4 border-gray-500 p-2'>Contact</p>
        <p className='py-6'>Fill the form to be with:</p>
        </div>
        <div className='flex justify-center items-center'>
            <form className='flex flex-col p-2 w-full md:w-3/4 ' action="https://getform.io/f/f88041be-8346-417d-ae90-8d89ddd7b691" method='POST'>
                <input type="text" name="name" placeholder="Enter your name"
                className='p-2 bg-transparent border-2 rounded-md text-white focus:outline-none' />
                <input type="text" name="email" placeholder="Enter your email"
                className='my-4 p-2 bg-transparent border-2 rounded-md text-white focus:outline-none' />
               <textarea name="message" placeholder="Enter your message" rows="10"col="60" className='p-2 bg-transparent border-2 rounded-md text-white focus:outline-none'></textarea>
           
           <button className='bg-gradient-to-b from-cyan-300 to-blue-500 px-6 my-8 py-3 mx-auto flex items-center rounded-md hover:scale-110 duration-300'>Submit</button> </form>
        </div>
        </div>
    </div>
  )
}

export default Contact
