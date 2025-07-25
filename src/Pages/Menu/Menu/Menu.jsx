import { Helmet } from "react-helmet";
import Cover from "../../Shared/Cover/Cover";
import menuImg from "../../../assets/menu/banner3.jpg";
import SectionTitle from "../../../Component/SectionTitle/SectionTitle";
import useMenu from "../../../hooks/useMenu";
import MenuCategory from "../MenuCategory/MenuCategory";
import DessertCover from "../DessertCover/DessertCover";
import PizzaCover from "../PizzaCover/PizzaCover";
import SaladCover from "../SaladCover/SaladCover";
import SoupCover from "../SoupCover/SoupCover";

const Menu = () => {
  const [menu] = useMenu();
  const offeredMenu = menu.filter((item) => item.category === "offered");
  const dessertMenu = menu.filter((item) => item.category === "dessert");
  const pizzaMenu = menu.filter((item) => item.category === "pizza");
  const saladMenu = menu.filter((item) => item.category === "salad");
  const soupMenu = menu.filter((item) => item.category === "soup");
  return (
    <div>
      <Cover
        img={menuImg}
        title="Our Menu"
        text="Would you like to try a dish?"
      ></Cover>
      {/*Offered Menu*/}
      <SectionTitle
        subHeading="---Don't miss---"
        heading="Today's offer"
      ></SectionTitle>
      <MenuCategory items={offeredMenu}></MenuCategory>
      {/*dessert menu*/}
      <DessertCover></DessertCover>
      <MenuCategory items={dessertMenu} title="dessert"></MenuCategory>
      {/*pizza Menu*/}
      <PizzaCover></PizzaCover>
      <MenuCategory items={pizzaMenu} title="pizza"></MenuCategory>
      {/*salad Menu*/}
      <SaladCover></SaladCover>
      <MenuCategory items={saladMenu} title="salad"></MenuCategory>
      {/*soup menu*/}
      <SoupCover></SoupCover>
      <MenuCategory items={soupMenu} title="soup"></MenuCategory>
    </div>
  );
};

export default Menu;
