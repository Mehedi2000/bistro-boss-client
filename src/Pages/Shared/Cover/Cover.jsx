const Cover = ({ img, title, text }) => {
  return (
    <div
      className="hero h-[700px] w-full bg-center"
      style={{
        backgroundImage: `url(${img})`,
      }}
    >
      <div className="">
        <div className=" text-white bg-black opacity-50 text-center py-10 px-12 md:py-16 md:px-64 ">
          <h1 className="mb-5 uppercase text-3xl font-bold md:text-7xl">
            {title}
          </h1>
          <p className="mb-5 uppercase ">{text}</p>
        </div>
      </div>
    </div>
  );
};

export default Cover;
