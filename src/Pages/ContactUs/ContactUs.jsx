import Cover from "../Shared/Cover/Cover";
import bannerImg from "../../assets/contact/banner.jpg";
import SectionTitle from "../../Component/SectionTitle/SectionTitle";
import { BiSolidPhoneCall } from "react-icons/bi";
import { FaLocationDot } from "react-icons/fa6";
import { GoClockFill } from "react-icons/go";
import { useForm } from "react-hook-form";
import { FaPaperPlane, FaUtensils } from "react-icons/fa";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import Swal from "sweetalert2";

const ContactUs = () => {
  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const axiosPublic = useAxiosPublic();

  const onSubmit = async (data) => {
    const res = await axiosPublic.post("/contactUs", data);
    if (res.data.success) {
      reset();
      Swal.fire({
        title: "Message Sent Successfully",
        icon: "success",
        draggable: true,
      });
    }
  };
  return (
    <div className="mb-6">
      <Cover
        img={bannerImg}
        title="Contact Us"
        text="Would you like to try a dish?"
      ></Cover>
      <SectionTitle
        subHeading="---Visit Us---"
        heading="OUR LOCATION"
      ></SectionTitle>
      <div className="grid justify-center md:grid-cols-3 gap-8">
        <div className="w-80 md:w-96 text-center">
          <div className="bg-yellow-600 flex justify-center items-center py-4">
            <BiSolidPhoneCall className="text-3xl text-white"></BiSolidPhoneCall>
          </div>
          <div className="bg-gray-100 pt-12 pb-20">
            <h2 className="text-lg font-semibold">PHONE</h2>
            <p>+38 (012) 34 56 789</p>
          </div>
        </div>
        <div className="w-80 md:w-96 text-center">
          <div className="bg-yellow-600 flex justify-center items-center py-4">
            <FaLocationDot className="text-3xl text-white"></FaLocationDot>
          </div>
          <div className="bg-gray-100 pt-12 pb-20">
            <h2 className="text-lg font-semibold">ADDRESS</h2>
            <p>123 ABS street,Uni 21,Bangladesh</p>
          </div>
        </div>
        <div className="w-80 md:w-96 text-center">
          <div className="bg-yellow-600 flex justify-center items-center py-4">
            <GoClockFill className="text-3xl text-white"></GoClockFill>
          </div>
          <div className="bg-gray-100 pt-12 pb-20">
            <h2 className="text-lg font-semibold">WORKING HOURS</h2>
            <div className="flex gap-2 justify-center items-center">
              <p>Mon - Fri: 08:00 - 22:00</p>
              <p>Sat - Sun: 10:00 - 23:00</p>
            </div>
          </div>
        </div>
      </div>
      <SectionTitle
        subHeading="---Send Us a Message---"
        heading="CONTACT FORM"
      ></SectionTitle>
      <div className="bg-gray-100 p-6 md:p-12">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="mb-4">
            <fieldset className="fieldset">
              <legend className="fieldset-legend font-bold">Name*</legend>
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
          <div className="md:flex md:gap-6 mb-4">
            {/*Email*/}
            <div className="mb-4 md:w-1/2">
              <fieldset className="fieldset">
                <legend className="fieldset-legend font-bold">Email*</legend>
                <input
                  {...register("email", { required: true })}
                  type="email"
                  className="input w-full"
                  placeholder="Enter your email"
                />
                {errors.email && (
                  <span className="text-red-600 font-semibold">
                    Email field is required
                  </span>
                )}
              </fieldset>
            </div>
            {/*Phone*/}
            <div className="md:w-1/2">
              <fieldset className="fieldset">
                <legend className="fieldset-legend font-bold">Phone*</legend>
                <input
                  {...register("phone", { required: true })}
                  type="number"
                  className="input w-full"
                  placeholder="Enter your phone number"
                />
                {errors.phone && (
                  <span className="text-red-600 font-semibold">
                    Phone field is required
                  </span>
                )}
              </fieldset>
            </div>
          </div>
          <div className="mb-4">
            <fieldset className="fieldset">
              <legend className="fieldset-legend font-bold">Message*</legend>
              <textarea
                {...register("message", { required: true })}
                className="textarea h-40 w-full"
                placeholder="Write your message here"
              ></textarea>
              {errors.message && (
                <span className="text-red-600 font-semibold">
                  Message field is required
                </span>
              )}
            </fieldset>
          </div>
          <button type="submit" className="btn bg-yellow-600 text-white mt-4">
            Send Message <FaPaperPlane></FaPaperPlane>
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactUs;
