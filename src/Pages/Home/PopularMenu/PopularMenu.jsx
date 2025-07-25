import SectionTitle from "../../../Component/SectionTitle/SectionTitle";
import MenuItem from "../../Shared/MenuItem/MenuItem";
import useMenu from "../../../hooks/useMenu";

const PopularMenu = () => {
  const [menu] = useMenu();
  const popularMenu = menu.filter((item) => item.category === "popular");
  return (
    <section className="mb-12">
      <SectionTitle
        heading="from our menu"
        subHeading="---Popular items---"
      ></SectionTitle>
      <div className="grid md:grid-cols-2 gap-8 mt-12">
        {popularMenu.map((item) => (
          <MenuItem key={item._id} item={item}></MenuItem>
        ))}
      </div>
      <div className="text-center mt-8">
        <button className="btn btn-outline border-0 border-b-4">
          VIEW FULL MENU
        </button>
      </div>
    </section>
  );
};

export default PopularMenu;
