import { useLoaderData } from "react-router-dom";
import DashboardSectionTitle from "../../../Component/DashboardSectionTitle/DashboardSectionTitle";
import { useForm } from "react-hook-form";
import useAxiosPublic from "../../../hooks/useAxiosPublic";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import Swal from "sweetalert2";

const image_hosting_key = import.meta.env.VITE_IMAGE_HOSTING_KEY;
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`;

const UpdateItem = () => {
  const { name, category, recipe, price, _id } = useLoaderData();

  const { register, handleSubmit, reset } = useForm();
  const axiosPublic = useAxiosPublic();
  const axiosSecure = useAxiosSecure();
  const onSubmit = async (data) => {
    console.log(data);
    const imageFile = { image: data.image[0] };
    const res = await axiosPublic.post(image_hosting_api, imageFile, {
      headers: { "content-type": "multipart/form-data" },
    });
    console.log(res.data);
    if (res.data.success) {
      const menuItem = {
        name: data.name,
        category: data.category,
        recipe: data.recipe,
        price: parseFloat(data.price),
        image: res.data.data.display_url,
      };
      const menuRes = await axiosSecure.patch(`/menu/${_id}`, menuItem);
      console.log(menuRes.data);
      if (menuRes.data.modifiedCount > 0) {
        reset();
        Swal.fire({
          position: "top",
          icon: "success",
          title: `${data.name} is updated to the menu.`,
          showConfirmButton: false,
          timer: 1500,
        });
      }
    }
  };

  return (
    <div>
      <DashboardSectionTitle
        subHeading="---Refresh Info---"
        heading="Update an Item"
      ></DashboardSectionTitle>
      <div className="bg-gray-100 p-4 md:p-12">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="mb-4">
            <fieldset className="fieldset">
              <legend className="fieldset-legend font-bold">
                Recipe name*
              </legend>
              <input
                defaultValue={name}
                {...register("name")}
                type="text"
                className="input w-full"
                placeholder="Recipe name"
              />
            </fieldset>
          </div>
          <div className="flex flex-col md:flex-row gap-4 mb-4">
            {/*category*/}
            <div className="w-full md:w-1/2">
              <fieldset className="fieldset">
                <legend className="fieldset-legend font-bold">Category*</legend>
                <select
                  {...register("category")}
                  defaultValue={category}
                  className="select w-full"
                >
                  <option disabled={true}>Select a Category</option>
                  <option value="salad">Salad</option>
                  <option value="pizza">Pizza</option>
                  <option value="soup">Soup</option>
                  <option value="dessert">Dessert</option>
                  <option value="drinks">Drinks</option>
                </select>
              </fieldset>
            </div>
            {/*price*/}
            <div className="w-full md:w-1/2">
              <fieldset className="fieldset">
                <legend className="fieldset-legend font-bold">Price*</legend>
                <input
                  defaultValue={price}
                  {...register("price")}
                  type="number"
                  className="input w-full"
                  placeholder="Price"
                />
              </fieldset>
            </div>
          </div>
          <div className="mb-4">
            <fieldset className="fieldset">
              <legend className="fieldset-legend font-bold">
                Recipe Details*
              </legend>
              <textarea
                defaultValue={recipe}
                {...register("recipe")}
                className="textarea h-40 w-full"
                placeholder="Recipe Details"
              ></textarea>
            </fieldset>
          </div>
          <div className="mb-4">
            <input
              {...register("image")}
              type="file"
              className="file-input file-input-ghost"
            />
          </div>
          <button className="btn bg-yellow-600 text-white">
            Update Recipe Details
          </button>
        </form>
      </div>
    </div>
  );
};

export default UpdateItem;
