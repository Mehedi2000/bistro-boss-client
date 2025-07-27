import { IoIosRocket } from "react-icons/io";
import DashboardSectionTitle from "../../../Component/DashboardSectionTitle/DashboardSectionTitle";
import { useForm } from "react-hook-form";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import Swal from "sweetalert2";
const AddReview = () => {
  const axiosSecure = useAxiosSecure();
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();
  const onSubmit = async (data) => {
    console.log(data);
    const review = {
      name: data.name,
      rating: data.rating,
      details: data.details,
    };
    const res = await axiosSecure.post("/reviews", review);
    console.log(res.data.insertedId);
    if (res.data.insertedId) {
      reset();
      Swal.fire({
        title: "Review added Successfully",
        icon: "success",
        draggable: true,
      });
    }
  };
  return (
    <div>
      <DashboardSectionTitle
        subHeading="---Sharing is Caring!!!---"
        heading="GIVE A REVIEW..."
      ></DashboardSectionTitle>
      <div className="bg-gray-100 p-4 md:p-12">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="mb-4">
            <fieldset className="fieldset">
              <legend className="fieldset-legend font-bold">
                Customer name*
              </legend>
              <input
                {...register("name", { required: true })}
                type="text"
                className="input w-full"
                placeholder="Enter your name"
              />
              {errors.name && (
                <span className="text-red-600 font-semibold">
                  Name field is required
                </span>
              )}
            </fieldset>
          </div>
          <div>
            <fieldset className="fieldset">
              <legend className="fieldset-legend font-bold">Rating*</legend>
              <input
                {...register("rating", { required: true, min: 1, max: 5 })}
                type="number"
                className="input w-full"
                placeholder="Enter your rating (Less than or equal to 5)"
              />
              {errors.rating?.type === "required" && (
                <span className="text-red-600 font-semibold">
                  Rating field is required
                </span>
              )}
              {errors.rating?.type === "min" && (
                <span className="text-red-600 font-semibold">
                  Rating must be greater than or equal to 1
                </span>
              )}
              {errors.rating?.type === "max" && (
                <span className="text-red-600 font-semibold">
                  Rating must be less than or equal to 5
                </span>
              )}
            </fieldset>
          </div>
          <div className="mb-4">
            <fieldset className="fieldset">
              <legend className="fieldset-legend font-bold">Details*</legend>
              <textarea
                {...register("details", { required: true })}
                className="textarea h-40 w-full"
                placeholder="Enter details"
              ></textarea>
              {errors.details && (
                <span className="text-red-600 font-semibold">
                  Details field is required
                </span>
              )}
            </fieldset>
          </div>
          <button className="btn bg-yellow-600 text-white">
            Send Review <IoIosRocket className="text-[24px]"></IoIosRocket>
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddReview;
