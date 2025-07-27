import FoodCard from "../../Shared/FoodCard/FoodCard";

const OrderTab = ({ items }) => {
  return (
    <div className="grid justify-center md:grid-cols-3 gap-8">
      {items.map((item) => (
        <FoodCard item={item} key={item._id}></FoodCard>
      ))}
    </div>
  );
};

export default OrderTab;
