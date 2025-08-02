import Cover from "../../Shared/Cover/Cover";
import orderImg from "../../../assets/shop/banner2.jpg";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import { useState } from "react";
import useMenu from "../../../hooks/useMenu";
import OrderTab from "../OrderTab/OrderTab";
import { useParams } from "react-router-dom";

const Order = () => {
  const categories = ["salad", "pizza", "soup", "dessert"];
  const { category } = useParams();
  const initialIndex = categories.indexOf(category);
  const [tabIndex, setTabIndex] = useState(initialIndex);
  const [menu] = useMenu();
  const drinksMenu = menu.filter((item) => item.category === "drinks");
  const dessertMenu = menu.filter((item) => item.category === "dessert");
  const pizzaMenu = menu.filter((item) => item.category === "pizza");
  const saladMenu = menu.filter((item) => item.category === "salad");
  const soupMenu = menu.filter((item) => item.category === "soup");
  return (
    <div>
      <Cover
        img={orderImg}
        title="Our shop"
        text="Would you like to try a dish?"
      ></Cover>
      <Tabs
        className="my-20"
        defaultIndex={tabIndex}
        onSelect={(index) => setTabIndex(index)}
      >
        <TabList className="text-[14px] md:text-[18px] text-center mb-8 font-medium">
          <Tab>SALAD</Tab>
          <Tab>PIZZA</Tab>
          <Tab>SOUP</Tab>
          <Tab>DESSERT</Tab>
          <Tab>DRINKS</Tab>
        </TabList>
        <TabPanel>
          <OrderTab items={saladMenu}></OrderTab>
        </TabPanel>
        <TabPanel>
          <OrderTab items={pizzaMenu}></OrderTab>
        </TabPanel>
        <TabPanel>
          <OrderTab items={soupMenu}></OrderTab>
        </TabPanel>
        <TabPanel>
          <OrderTab items={dessertMenu}></OrderTab>
        </TabPanel>
        <TabPanel>
          <OrderTab items={drinksMenu}></OrderTab>
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default Order;
