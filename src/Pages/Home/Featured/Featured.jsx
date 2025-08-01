import SectionTitle from "../../../Component/SectionTitle/SectionTitle";
import featuredImg from "../../../assets/home/featured.jpg";
import "./Featured.css";

const Featured = () => {
  return (
    <div className="featured-item text-white pt-8 my-12 ">
      <SectionTitle
        subHeading="---Check it out---"
        heading="Featured Item"
      ></SectionTitle>
      <div className="md:flex items-center justify-center bg-black opacity-70 pb-20 pt-10 px-3 md:px-16">
        <div>
          <img src={featuredImg} alt="" />
        </div>
        <div className="md:ml-10">
          <p>Aug 20 , 2025</p>
          <p className="uppercase">Where can i get some?</p>
          <p className="mb-4">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Totam
            incidunt dolore, placeat quos consectetur tenetur, velit aspernatur
            enim molestiae nesciunt culpa? Dolore aliquam tempore,
            necessitatibus quis voluptatibus ipsa aspernatur reiciendis aliquid
            sequi est veritatis in sint temporibus facere! Commodi maiores optio
            odio rem molestias voluptates modi culpa esse inventore
            perspiciatis!
          </p>
          <button className="btn btn-outline border-0 border-b-4">
            Order Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default Featured;
