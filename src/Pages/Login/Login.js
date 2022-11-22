import React, { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthProvider/AuthProvider";
import useTitle from "../../hooke/useTitle";
import loginImg from "./70640-floating-magic-link-login.gif";

const Login = () => {
  useTitle("Login");
  // add auth contexts function
  const { signIn, signInWithGoogle } = useContext(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();
  const [error, setError] = useState("");
  const from = location?.state?.from?.pathname || "/";

  //login with email and password function
  const handleLogin = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    setError("");
    signIn(email, password)
      .then((result) => {
        const user = result.user;
        form.reset();
        navigate(from, { replace: true });
        form.reset();
        const currentUser = {
          email: user.email,
        };
        // get jwt token
        fetch("https://genius-car-server-khaki-three.vercel.app/jwt", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(currentUser),
        })
          .then((res) => res.json())
          .then((data) => {
            localStorage.setItem("Token", data.token);
          })
          .catch((error) => console.log(error));
      })
      .catch((error) => {
        setError(error.message);
      });
  };

  // login with google function
  const handleGoogle = () => {
    setError("");
    signInWithGoogle()
      .then((result) => {
        const user = result.user;
        const currentUser = {
          email: user.email,
        };
        navigate(from, { replace: true });
        fetch("https://genius-car-server-khaki-three.vercel.app/jwt", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(currentUser),
        })
          .then((res) => res.json())
          .then((data) => {
            localStorage.setItem("Token", data.token);
          })
          .catch((error) => console.log(error));
      })
      .catch((error) => setError(error.message));
  };
  return (
    <section className="py-6 dark:bg-white dark:text-gray-900">
      <div className="md:flex justify-around">
        <div className="py-6 md:py-0 md:px-6">
          <h1 className="text-4xl font-bold text-center my-3">Please LogIn</h1>
          <img src={loginImg} alt="" className="w-96 md:w-full" />
        </div>
        <div className="mx-10 md:mx-0 h-full">
          <div className="w-full p-8 space-y-3 rounded-xl dark:bg-gray-900 dark:text-gray-100">
            <h1 className="text-2xl font-bold text-center">Login</h1>
            <form
              onSubmit={handleLogin}
              className="space-y-6 ng-untouched ng-pristine ng-valid "
            >
              <div className="space-y-1 text-sm">
                <label htmlFor="password" className="block dark:text-gray-400">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  required
                  placeholder="email"
                  className="border w-full px-4 py-3 rounded-md dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100 focus:dark:border-violet-400"
                />
              </div>
              <div className="space-y-1 text-sm">
                <label htmlFor="password" className="block dark:text-gray-400">
                  Password
                </label>
                <input
                  type="password"
                  name="password"
                  required
                  placeholder="Password"
                  className="border w-full px-4 py-3 rounded-md dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100 focus:dark:border-violet-400"
                />
              </div>
              <button className="block w-full p-3 text-center rounded-sm dark:text-gray-900 dark:bg-violet-400">
                Sign in
              </button>
              <p className="mt-2 text-red-500">{error}</p>
            </form>
            <div className="flex items-center pt-4 space-x-1">
              <div className="flex-1 h-px sm:w-16 dark:bg-gray-700"></div>
              <p className="px-3 text-sm dark:text-gray-400">
                Login with social accounts
              </p>
              <div className="flex-1 h-px sm:w-16 dark:bg-gray-700"></div>
            </div>
            <div className="flex justify-center space-x-4">
              <button
                onClick={handleGoogle}
                aria-label="Log in with Google"
                className="p-3 rounded-sm"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 32 32"
                  className="w-5 h-5 fill-current"
                >
                  <path d="M16.318 13.714v5.484h9.078c-0.37 2.354-2.745 6.901-9.078 6.901-5.458 0-9.917-4.521-9.917-10.099s4.458-10.099 9.917-10.099c3.109 0 5.193 1.318 6.38 2.464l4.339-4.182c-2.786-2.599-6.396-4.182-10.719-4.182-8.844 0-16 7.151-16 16s7.156 16 16 16c9.234 0 15.365-6.49 15.365-15.635 0-1.052-0.115-1.854-0.255-2.651z"></path>
                </svg>
              </button>
            </div>
            <p className="text-xs text-center sm:px-6 dark:text-gray-400">
              Don't have an account?
              <Link to="/register" className="underline dark:text-gray-100">
                Register
              </Link>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Login;
