import { useContext } from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProvider";
import Swal from "sweetalert2";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import SocialLogin from "../../Component/SocialLogin/SocialLogin";
import loginImg from "../../assets/others/authenticationLogin1.gif";

const SignUp = () => {
  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const axiosPublic = useAxiosPublic();
  const { createUser, updateUserProfile } = useContext(AuthContext);
  const navigate = useNavigate();

  const onSubmit = (data) => {
    createUser(data.email, data.password).then((result) => {
      const user = result.user;
      console.log(user);
      updateUserProfile(data.name, data.photoUrl)
        .then(() => {
          // console.log("Profile update successfully");
          const userInfo = {
            name: data.name,
            email: data.email,
          };
          axiosPublic.post("/users", userInfo).then((res) => {
            if (res.data.insertedId) {
              reset();
              Swal.fire({
                title: "User Created Successfully",
                icon: "success",
                draggable: true,
              });
              navigate("/");
            }
          });
        })
        .catch((error) => console.log(error));
    });
  };

  return (
    <div className="hero bg-base-200 min-h-screen">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="text-center md:w-1/2 lg:text-left">
          <img src={loginImg} alt="" />
        </div>
        <div className="card bg-base-100 md:w-1/2 max-w-sm  shadow-2xl">
          <h1 className="text-center text-3xl font-bold mt-4">Sign Up!</h1>
          <form onSubmit={handleSubmit(onSubmit)} className="card-body pb-0">
            <fieldset className="fieldset">
              <label className="label font-bold text-[14px] my-1">Name</label>
              <input
                type="text"
                {...register("name", { required: true })}
                name="name"
                className="input"
                placeholder="Name"
              />
              {errors.name && (
                <span className="text-red-600 font-semibold">
                  Name field is required
                </span>
              )}
              <label className="label font-bold text-[14px] my-1">
                Photo URL
              </label>
              <input
                type="text"
                {...register("photoUrl", { required: true })}
                className="input"
                placeholder="Photo URL"
              />
              {errors.photoUrl && (
                <span className="text-red-600 font-semibold">
                  photoUrl field is required
                </span>
              )}
              <label className="label font-bold text-[14px] my-1">Email</label>
              <input
                type="email"
                {...register("email", { required: true })}
                name="email"
                className="input"
                placeholder="Email"
              />
              {errors.email && (
                <span className="text-red-600 font-semibold">
                  Email field is required
                </span>
              )}
              <label className="label font-bold text-[14px] my-1">
                Password
              </label>
              <input
                type="password"
                {...register("password", {
                  required: true,
                  minLength: 6,
                  maxLength: 20,
                })}
                name="password"
                className="input"
                placeholder="Password"
              />
              {errors.password?.type === "required" && (
                <span className="text-red-600 font-semibold">
                  Password field is required
                </span>
              )}
              {errors.password?.type === "minLength" && (
                <span className="text-red-600 font-semibold">
                  Password must be 6 characters
                </span>
              )}
              {errors.password?.type === "maxLength" && (
                <span className="text-red-600 font-semibold">
                  Password must be less than 20 characters
                </span>
              )}
              <input
                className="btn btn-neutral mt-3"
                type="submit"
                value="Sign Up"
              />
            </fieldset>
          </form>
          <div className="divider">OR</div>
          <SocialLogin></SocialLogin>
          <p className="text-center font-semibold mb-4">
            <small>
              Already Registered?
              <Link
                to="/login"
                className="text-indigo-600 ml-1 font-medium text-[14px]"
              >
                Go to log in
              </Link>
            </small>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
