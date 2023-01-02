import React from "react";

const About = () => {
  return (
    <div
      name="about"
      className="w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white p-4"
    >
      <div className="max-w-screen-lg p-4 mx-auto  flex flex-col justify-center w-full h-full">
        <div>
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            About
          </p>
        </div>
        <p className="text-xl mt-20">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maiores,
          debitis tempore rerum libero minima quia illum, repudiandae
          repellendus assumenda enim ipsum et nesciunt laboriosam, aliquam error
          vitae recusandae quasi quae magni atque omnis maxime facere voluptas.
          A laudantium distinctio, ea perspiciatis aut tenetur, aliquid enim
          unde quia minima, nobis earum?
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
        <br />
        <p className="text-xl">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Omnis
          laboriosam voluptate quibusdam.
        </p>
      </div>
    </div>
  );
};

export default About;
