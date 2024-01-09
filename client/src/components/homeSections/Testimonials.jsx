import React from "react";

const Testimonials = () => {
  return (
    <section className="h-[100vh] justify-center items-center flex flex-col gap-y-16">
      <h3 className="text-4xl mb-10 lg:text-6xl lg:w-[64rem] text-center font-extrabold text-white">
        Discover why <span className="text-secondary">our CRM</span> can be your
        best choice
      </h3>
      <section className="flex items-center justify-center gap-x-4 lg:gap-x-12">
        <article className="bg-gray-100 flex items-center flex-col rounded-xl relative w-64 h-auto lg:h-56 lg:w-[48rem] border-t-[10px] border-secondary">
          <img
            src="https://img.freepik.com/free-photo/smiling-man-relaxing-outdoors_23-2148739334.jpg?w=360&t=st=1681006454~exp=1681007054~hmac=34948ef6a07c938956058f17df2814b7d7b80f65f29b624a16a6177fdc3f88fd"
            alt="smiling person"
            className="ring-[10px] ring-secondary w-24 h-24 lg:w-32 lg:h-32 object-cover rounded-full shadow-md absolute -top-12"
          />
          <p className="pt-16 pb-2 lg:pt-24 w-48  lg:w-[32rem] lg:h-auto text-center text-xl font-bold text-base-light">
            "A few months ago, we implemented a sales CRM in our company, and it
            has been a real revolution in the way we manage our clients."
          </p>
        </article>
      </section>
    </section>
  );
};

export default Testimonials;
