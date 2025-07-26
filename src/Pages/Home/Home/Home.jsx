import { Helmet } from "react-helmet";
import Banner from "../Banner/Banner";
import Callus from "../CallUs/Callus";
import Category from "../Category/Category";
import Featured from "../Featured/Featured";
import PopularMenu from "../PopularMenu/PopularMenu";
import Service from "../Service/Service";
import Testimonials from "../Testimonials/Testimonials";
import RecommendsMenu from "../RecommendsMenu/RecommendsMenu";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <Category></Category>
      <Service></Service>
      <PopularMenu></PopularMenu>
      <Callus></Callus>
      <RecommendsMenu></RecommendsMenu>
      <Featured></Featured>
      <Testimonials></Testimonials>
    </div>
  );
};

export default Home;
