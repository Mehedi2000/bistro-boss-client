import { useQuery } from "@tanstack/react-query";
import SectionTitle from "../../../Component/SectionTitle/SectionTitle";
import useAxiosPublic from "../../../hooks/useAxiosPublic";
import FoodCard from "../../Shared/FoodCard/FoodCard";

const RecommendsMenu = () => {
  const axiosPublic = useAxiosPublic();
  const { data: recommendsMenu = [] } = useQuery({
    queryKey: ["recommendsMenu"],
    queryFn: async () => {
      const res = await axiosPublic.get(
        "https://bistro-boss-server-eight-ruby.vercel.app/recommendsMenu"
      );
      return res.data;
    },
  });
  return (
    <div className="mb-16">
      <SectionTitle
        subHeading="---Should Try---"
        heading="CHEF RECOMMENDS"
      ></SectionTitle>
      <div className="grid justify-center md:grid-cols-3 gap-8 mt-12">
        {recommendsMenu.map((item) => (
          <FoodCard item={item} key={item._id}></FoodCard>
        ))}
      </div>
    </div>
  );
};

export default RecommendsMenu;
