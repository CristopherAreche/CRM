import React, { useState } from "react";
import {
  RiArrowLeftLine,
  RiMailLine,
  RiLock2Line,
  RiEyeOffLine,
  RiEyeLine,
  RiTyphoonFill,
} from "react-icons/ri";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../../services/authServices";
import { useEffect } from "react";
import Cookies from "universal-cookie";
// import { useAuth0 } from "@auth0/auth0-react";

const Login = () => {
  const [password, setPassWord] = useState("");
  const [email, setEmail] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const status = useSelector((state) => state.auth.status);
  const user = useSelector((state) => state.auth.User);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  // const { loginWithRedirect } = useAuth0();

  const cookies = new Cookies();
  const myToken = cookies.get("myToken");

  const valUser = (value) => {
    setEmail(value.trim());
  };

  const valPassword = (value) => {
    setPassWord(value.trim());
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(login({ email, password }));
  };

  useEffect(() => {
    if (myToken !== undefined) {
      if (user.enable) navigate("/dashboard");
      else navigate("/dashboard/perfil");
    }
  }, [myToken, navigate]);

  return (
    <section className="flex flex-col items-start justify-center min-h-screen px-8 lg:px-20 gap-y-4">
      <div className="block lg:hidden absolute top-4 left-4">
        <Link
          to="/"
          className="flex gap-x-1 items-center font-medium group hover:text-white/90 transition-colors"
        >
          <RiArrowLeftLine className="text-2xl group-hover:-translate-x-1 transition-transform" />
          Volver atras
        </Link>
      </div>
      <div className="text-3xl flex justify-start items-center gap-x-2  font-bold tracking-widest pt-2">
        <RiTyphoonFill className="text-white" />
        <p className="bg-gradient-to-r from-primary  to-secondary text-end  text-transparent bg-clip-text hover:underline hover:text-light transition-all cursor-pointer">
          CRM
        </p>
      </div>
      <h3 className="text-2xl font-medium text-light">Hey, Welcome Back ✋</h3>
      <p className="text-gray-400 ">
        Enter the information you provided when registering
      </p>
      <form
        onSubmit={(e) => {
          handleSubmit(e);
        }}
        className="flex flex-col w-full gap-y-4 mb-4"
      >
        <div className="relative flex flex-col gap-y-1 mb-2">
          <label className="font-medium text-gray-200">Email</label>
          <input
            name="email"
            value={email}
            placeholder="example@gmail.com"
            type="text"
            onChange={(e) => valUser(e.target.value)}
            className="bg-base-light/60 py-2 pl-10 pr-4 w-full rounded-md outline-none shadow-md"
          />
          <RiMailLine className="absolute top-1/2 translate-y-1 left-2 text-2xl text-secondary " />
        </div>
        <div className="relative flex flex-col gap-y-1">
          <label className="font-medium text-gray-200">Password</label>
          <input
            name="password"
            value={password}
            placeholder="Password"
            type={showPassword ? "text" : "password"}
            onChange={(e) => valPassword(e.target.value)}
            className="bg-base-light/60 py-2 pl-10 pr-4  w-full rounded-md outline-none shadow-md"
          />
          <RiLock2Line className="absolute top-1/2 translate-y-1 left-2 text-2xl text-secondary " />
          {showPassword ? (
            <RiEyeLine
              className="absolute top-1/2 translate-y-1 right-2 text-xl cursor-pointer text-secondary "
              onClick={() => setShowPassword(!showPassword)}
            />
          ) : (
            <RiEyeOffLine
              className="absolute top-1/2 translate-y-1 right-2 text-xl cursor-pointer text-secondary "
              onClick={() => setShowPassword(!showPassword)}
            />
          )}
        </div>
        <div className="flex justify-between">
          <Link
            to="/authentication/register"
            className="bg-gradient-to-r text-light  hover:underline hover:text-white transition-all cursor-pointer"
          >
            Does not have an account? Register now
          </Link>
          <p className="bg-gradient-to-r from-primary  to-secondary text-end  text-transparent bg-clip-text hover:underline hover:text-light transition-all cursor-pointer">
            Forgot password?
          </p>
        </div>
        <button
          type="submit"
          disabled={status === "loading"}
          className="text-center bg-gradient-to-r from-primary to-secondary py-2 px-4 rounded-md font-bold text-lg hover:scale-[1.02] transition-all"
        >
          {status === "loading"
            ? "Cargando..."
            : status === "failed"
            ? "Sign In"
            : "Sign In"}
        </button>
      </form>
    </section>
  );
};

export default Login;
