import { useForm } from "react-hook-form";
import DashboardSectionTitle from "../../../Component/DashboardSectionTitle/DashboardSectionTitle";
import { FaUtensils } from "react-icons/fa";
import useAxiosPublic from "../../../hooks/useAxiosPublic";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import Swal from "sweetalert2";

const image_hosting_key = import.meta.env.VITE_IMAGE_HOSTING_KEY;
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`;

const AddItems = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const axiosPublic = useAxiosPublic();
  const axiosSecure = useAxiosSecure();

  const onSubmit = async (data) => {
    const imageFile = { image: data.image[0] };
    const res = await axiosPublic.post(image_hosting_api, imageFile, {
      headers: { "content-type": "multipart/form-data" },
    });
    if (res.data.success) {
      const menuItem = {
        name: data.name,
        category: data.category,
        recipe: data.recipe,
        price: parseFloat(data.price),
        image: res.data.data.display_url,
      };
      const menuRes = await axiosSecure.post("/menu", menuItem);
      if (menuRes.data.insertedId) {
        reset();
        Swal.fire({
          position: "top",
          icon: "success",
          title: `${data.name} is added to the menu.`,
          showConfirmButton: false,
          timer: 1500,
        });
      }
    }
  };
  return (
    <div>
      <DashboardSectionTitle
        subHeading="---What's new?---"
        heading="ADD AN ITEM"
      ></DashboardSectionTitle>
      <div className="bg-gray-100 py-4 px-4 md:p-12">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="mb-4">
            <fieldset className="fieldset">
              <legend className="fieldset-legend font-bold">
                Recipe name*
              </legend>
              <input
                {...register("name", { required: true })}
                type="text"
                className="input w-full"
                placeholder="Recipe name"
              />
              {errors.name && (
                <span className="text-red-600 font-semibold">
                  Recipe name field is required
                </span>
              )}
            </fieldset>
          </div>
          <div className="mb-4 flex flex-col md:flex-row gap-4">
            {/*category*/}
            <div className="w-full md:w-1/2">
              <fieldset className="fieldset">
                <legend className="fieldset-legend font-bold">Category*</legend>
                <select
                  {...register("category", { required: true })}
                  defaultValue="Select a Category"
                  className="select w-full"
                >
                  <option disabled={true}>Select a Category</option>
                  <option value="salad">Salad</option>
                  <option value="pizza">Pizza</option>
                  <option value="soup">Soup</option>
                  <option value="dessert">Dessert</option>
                  <option value="drinks">Drinks</option>
                </select>
                {errors.category && (
                  <span className="text-red-600 font-semibold">
                    Category field is required
                  </span>
                )}
              </fieldset>
            </div>
            {/*price*/}
            <div className="w-full md:w-1/2">
              <fieldset className="fieldset">
                <legend className="fieldset-legend font-bold">Price*</legend>
                <input
                  {...register("price", { required: true })}
                  type="number"
                  className="input w-full"
                  placeholder="Price"
                />
                {errors.price && (
                  <span className="text-red-600 font-semibold">
                    Price field is required
                  </span>
                )}
              </fieldset>
            </div>
          </div>
          <div className="mb-4">
            <fieldset className="fieldset">
              <legend className="fieldset-legend font-bold">
                Recipe Details*
              </legend>
              <textarea
                {...register("recipe")}
                className="textarea h-40 w-full"
                placeholder="Recipe Details"
              ></textarea>
              {errors.recipe && (
                <span className="text-red-600 font-semibold">
                  Recipe Details field is required
                </span>
              )}
            </fieldset>
          </div>
          <div className="mb-4">
            <input
              {...register("image", { required: true })}
              type="file"
              className="file-input file-input-ghost"
            />
            {errors.image && (
              <span className="text-red-600 font-semibold">
                Image is required
              </span>
            )}
          </div>

          <button className="btn bg-yellow-600 text-white">
            Add Item <FaUtensils></FaUtensils>
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddItems;
