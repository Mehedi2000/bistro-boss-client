import React from "react";

const Cover = ({ img, title, text }) => {
  return (
    <div
      className="hero h-[700px]"
      style={{
        backgroundImage: `url(${img})`,
      }}
    >
      <div className=""></div>
      <div className="hero-content text-neutral-content text-center">
        <div className="w-full text-white bg-black py-16 px-64 opacity-50">
          <h1 className="mb-5 text-7xl font-bold uppercase">{title}</h1>
          <p className="mb-5 uppercase">{text}</p>
        </div>
      </div>
    </div>
  );
};

export default Cover;
