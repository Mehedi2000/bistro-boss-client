const MenuItem = ({ item }) => {
  const { name, recipe, image, price } = item;
  return (
    <div className="flex space-x-2 px-2">
      <img
        style={{ borderRadius: "0 200px 200px 200px" }}
        src={image}
        className="w-[80px] h-[60px] md:w-[120px] md:h-[100px]"
        alt=""
      />
      <div>
        <h3 className="uppercase">{name}--------</h3>
        <p>{recipe}</p>
      </div>
      <p className="text-yellow-600 font-semibold">${price}</p>
    </div>
  );
};

export default MenuItem;
