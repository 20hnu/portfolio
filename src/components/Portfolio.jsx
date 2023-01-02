// import arrayDestruct from "../assets/portfolio/arrayDestruct.jpg";
// import installNode from "../assets/portfolio/installNode.jpg";
// import navbar from "../assets/portfolio/navbar.jpg";
// import reactWeather from "../assets/portfolio/reactWeather.jpg";
// import reactSmooth from "../assets/portfolio/reactSmooth.jpg";
// import usestate from "../assets/portfolio/usestate.jpg";

// const Portfolio = () => {
//     const portfolios=[
//         {
//             id:1,
//             src:arrayDestruct
//         },
//         {
//             id:2,
//             src:installNode
//         },
//         {
//             id:3,
//             src:navbar
//         },
//         {
//             id:4,
//             src:reactWeather
//         },
//         {
//             id:5,
//             src:reactSmooth
//         },
//         {
//             id:6,
//             src:usestate
//         },
//     ];

//   return (
//     <div name="portfolio" className='bg-gradient-to-b from-black  to-gray-800 w-full text-white md:h-screen p-5'>
//       <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
//         <div className='pb-8'>
//             <p className='text-4xl font-bold inline border-b-4 border-gray-500'>Portfolio</p>
//             <p className='py-6'>Check out my some projects</p>
//         </div>
//             <div  className='grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-0 sm:px-12'>
//         {
//             portfolios.map(({id,src})=>
//             <div key={id} className='shadow-md shadow-gray-500 rounded-lg'>
//                 <img src={src} alt="" className='rounded-md hover:scale-105 duration-200' />
//                 <div className=' flex item-center justify-center'>
//                     <button className='w-1/2 px-6 py3 m-4 duration-200 hover:scale-105'>Demo</button>
//                     <button className='w-1/2 px-6 py3 m-4 duration-200 hover:scale-105'>Code</button>
//                 </div>
//             </div>
//             )}
//         </div>
//       </div>
//     </div>
//   )
// }
// export default Portfolio
import React from "react";

const Portfolio = () => {
  return (
    <div
      name="portfolio"
      className="w-full h-screen bg-gradient-to-b from-black to-gray-800 text-white p-2"
    >
      <div className="max-w-screen-lg p-4 mx-auto  flex flex-col justify-center w-full h-full">
        <div>
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Portfolio
          </p>
        </div>
        <p className="text-xl mt-20">
          I haven't done anything.I am learning different languages and
          frameworks.I am familiar with some languages and framework which you
          can see in experience part.
        </p>
        <br />
        <p className="text-xl">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi
          nostrum, dolores quia ut quaerat quo porro mollitia, ea officiis
          repellendus numquam voluptas, consequuntur possimus. Repudiandae iure
          ut laboriosam eos sint, nostrum quod quae accusamus sed voluptate!
          Sunt autem quasi velit ab praesentium aliquid obcaecati sequi ullam
          quod ad, sapiente enim.
        </p>
        <br/>
        <p className="text-xl">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi
          nostrum, dolores quia ut quaerat quo porro mollitia, ea officiis
          repellendus numquam voluptas, consequuntur possimus. Repudiandae iure
          ut laboriosam eos sint, nostrum quod quae accusamus sed voluptate!
          Sunt autem quasi velit ab praesentium aliquid obcaecati sequi ullam
          quod ad, sapiente enim.
        </p>
      </div>
    </div>
  );
};

export default Portfolio;
