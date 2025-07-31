import { useContext, useEffect, useState } from "react";
import {
  loadCaptchaEnginge,
  LoadCanvasTemplate,
  validateCaptcha,
} from "react-simple-captcha";
import { AuthContext } from "../../Providers/AuthProvider";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import SocialLogin from "../../Component/SocialLogin/SocialLogin";
import loginImg from "../../assets/others/authenticationLogin1.gif";

const Login = () => {
  const [disabled, setDisabled] = useState(true);
  const navigate = useNavigate();
  const location = useLocation();
  const [error, setError] = useState(null);

  const from = location.state?.from?.pathname || "/";

  useEffect(() => {
    loadCaptchaEnginge(6);
  }, []);

  const { signIn } = useContext(AuthContext);

  const handleLogin = (event) => {
    event.preventDefault();
    setError("");
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password);
    signIn(email, password)
      .then((result) => {
        const user = result.user;
        console.log(user);
        Swal.fire({
          title: "User Login Successfully",
          icon: "success",
          draggable: true,
        });
        navigate(from, { replace: true });
      })
      .catch((error) => {
        console.log(error.message);
        setError(error.message);
      });
  };

  const handleValidateCaptcha = (e) => {
    setError("");
    const user_captcha_value = e.target.value;
    if (validateCaptcha(user_captcha_value)) {
      setDisabled(false);
    } else {
      setError("Invalid Captcha entry!");
      setDisabled(true);
    }
  };

  return (
    <div className="hero bg-base-200 min-h-screen">
      <div className="hero-content flex-col my-8 lg:flex-row-reverse">
        <div className="card bg-base-100 md:w-1/2 max-w-sm  shadow-2xl">
          <h1 className="text-center text-3xl font-bold mt-4">Login Now!</h1>
          <form onSubmit={handleLogin} className="card-body pb-0">
            <fieldset className="fieldset">
              <label className="label font-bold text-[14px] my-1">Email</label>
              <input
                type="email"
                name="email"
                className="input"
                placeholder="Email"
              />
              <label className="label font-bold text-[14px] my-1">
                Password
              </label>
              <input
                type="password"
                name="password"
                className="input"
                placeholder="Password"
              />
              <div className="mt-2">
                <label className="label font-bold text-[14px] my-1">
                  <span>
                    <LoadCanvasTemplate />
                  </span>
                </label>
                <input
                  type="text"
                  onBlur={handleValidateCaptcha}
                  name="captcha"
                  className="input mt-2"
                  placeholder="Type the captcha above"
                />
              </div>
              <span className="text-red-600 mt-2 text-[14px]">{error}</span>
              <input
                disabled={disabled}
                className="btn btn-neutral mt-3"
                type="submit"
                value="Login"
              />
            </fieldset>
          </form>
          <div className="divider">OR</div>
          <SocialLogin></SocialLogin>
          <p className="text-center font-semibold mb-4">
            <small>
              New Here?
              <Link
                to="/signup"
                className="text-indigo-600 ml-1 font-medium text-[14px]"
              >
                Create a New Account
              </Link>
            </small>
          </p>
        </div>
        <div className="text-center md:w-1/2 lg:text-left">
          <img src={loginImg} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Login;
