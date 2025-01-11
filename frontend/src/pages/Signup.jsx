import { useState } from "react";
import { Button } from "../components/Button";
import { InputBox } from "../components/InputBox";
import { WarningLink } from "../components/WarningLink";
import { useNavigate } from "react-router-dom";
import axios from "axios";
const Signup = () => {

  const navigate = useNavigate();

  const [user, setUser] = useState({
    username: "",
    firstname: "",
    lastname: "",
    password: "",
  });

  const InputHandler = (e) => {
    const { name, value } = e.target;

    setUser((user) => ({
      ...user,
      [name]: value,
    }));
  };

  const SignupHandler = (e) => {
    e.preventDefault();
    if (!user.username || !user.firstname || !user.lastname || !user.password) {
      alert("All fields are required.");
      return;
    }
  
    axios
      .post("https://v-pay-api.vercel.app/api/v1/user/signup", user)
      .then((result) => {
        localStorage.setItem("authorization", `Bearer ${result.data.token}`);
        navigate('/dashboard')
        setUser({
          username: "",
          firstname: "",
          lastname: "",
          password: "",
        });
      })
      .catch((e) => {
        console.log("Signup error:", e.response?.data?.message || e.message); // Log error message from backend
      });
  };
  return (
    <>
      <section className="flex bg-gray-50 align-middle items-center justify-center ">
        <div className="ml-52 mr-0 hidden md:block">
          <svg
            version="1.0"
            xmlns="http://www.w3.org/2000/svg"
            width="300.000000pt"
            height="300.000000pt"
            viewBox="0 0 300.000000 300.000000"
            preserveAspectRatio="xMidYMid meet"
          >
            {" "}
            <g
              transform="translate(0.000000,300.000000) scale(0.100000,-0.100000)"
              fill="#1f496c"
              stroke="none"
            >
              {" "}
              <path d="M844 2283 c54 -72 231 -321 336 -473 151 -219 311 -440 319 -440 5 0 94 120 199 268 315 441 463 646 478 663 23 25 17 29 -39 29 -46 0 -55 -3 -64 -22 -10 -23 -193 -274 -362 -498 -48 -63 -109 -145 -135 -182 -26 -37 -55 -70 -65 -73 -32 -10 -65 14 -102 73 -20 31 -68 102 -106 157 -122 178 -234 359 -229 372 3 7 0 13 -6 13 -7 0 -9 -14 -6 -38 5 -35 58 -127 164 -288 19 -28 34 -56 34 -62 0 -7 5 -12 10 -12 6 0 10 -7 10 -15 0 -8 5 -15 12 -15 6 0 9 -3 5 -6 -3 -3 3 -15 14 -27 10 -11 19 -25 19 -31 0 -15 -6 -7 -117 149 -259 365 -313 443 -313 454 0 6 8 11 18 11 9 1 72 3 139 7 99 4 125 3 137 -9 23 -23 227 -297 269 -361 60 -90 66 -94 157 -95 l80 -2 72 97 c39 54 122 167 185 251 l113 152 -53 0 c-49 0 -55 -3 -77 -32 -115 -159 -345 -447 -359 -451 -15 -4 -38 22 -107 117 -48 66 -128 176 -178 243 l-91 122 -198 1 -199 0 36 -47z m1146 -170 c-11 -16 -33 -46 -48 -68 -38 -57 -104 -137 -109 -132 -4 4 109 165 145 208 26 30 36 22 12 -8z m-151 -35 c-13 -18 -26 -35 -29 -38 -3 -3 -30 -40 -60 -83 -29 -43 -62 -83 -72 -88 -17 -9 -18 -8 -9 9 5 10 25 37 43 60 18 22 43 54 56 70 13 17 36 45 52 64 16 18 30 37 30 42 0 5 3 7 6 3 3 -3 -4 -21 -17 -39z m-15 -190 c-13 -22 -94 -138 -159 -228 -34 -47 -83 -115 -109 -152 -26 -38 -52 -68 -59 -68 -12 1 -67 73 -67 89 0 5 13 4 28 -1 55 -21 88 -1 154 94 59 84 159 220 179 241 10 12 19 24 19 29 0 4 5 8 11 8 5 0 7 -6 3 -12z" />{" "}
              <path d="M1100 2137 c0 -8 336 -485 363 -514 24 -27 58 -30 79 -5 8 9 41 55 73 102 73 104 42 84 -72 -49 -35 -41 -54 -35 -99 31 -116 173 -344 461 -344 435z" />{" "}
              <path d="M1224 2095 c30 -54 160 -246 193 -285 40 -46 30 -15 -15 48 -26 37 -77 108 -112 157 -71 101 -90 124 -66 80z" />{" "}
              <path d="M1320 1280 c-19 -4 -35 -25 -67 -90 -58 -116 -55 -142 5 -54 7 11 2 -3 -12 -31 -13 -27 -25 -57 -28 -65 -2 -8 -31 35 -64 98 -57 108 -60 112 -92 112 -19 0 -32 -3 -30 -8 26 -61 137 -253 147 -257 23 -9 44 20 120 164 39 74 71 135 71 136 0 4 -27 1 -50 -5z" />{" "}
              <path d="M1377 1232 c-12 -13 -16 -42 -18 -122 l-2 -105 26 -3 c24 -3 26 0 29 40 l3 43 60 5 c33 3 66 9 74 14 21 13 42 74 35 101 -9 36 -32 45 -117 45 -58 0 -77 -4 -90 -18z m141 -41 c8 -5 12 -17 10 -27 -2 -15 -14 -20 -55 -22 -44 -3 -52 0 -58 17 -3 12 -3 25 0 31 8 12 85 13 103 1z" />{" "}
              <path d="M1616 1154 c-25 -53 -46 -99 -46 -102 0 -3 -10 -16 -22 -30 l-23 -24 35 4 c31 3 38 9 59 53 13 28 26 44 28 38 3 -7 18 -13 34 -13 23 0 32 -7 49 -40 17 -34 25 -40 53 -40 l32 0 -59 125 c-43 89 -65 125 -77 125 -12 0 -31 -29 -63 -96z m73 -15 c14 -41 14 -49 -1 -49 -7 0 -13 10 -14 23 0 12 -4 30 -8 40 -5 10 -4 17 2 17 6 0 15 -14 21 -31z" />{" "}
              <path d="M1757 1228 c56 -63 83 -116 83 -166 0 -31 5 -52 13 -54 26 -10 37 4 37 49 0 48 36 118 80 158 28 25 25 35 -10 35 -29 0 -44 -12 -84 -65 -9 -11 -16 -15 -16 -8 0 6 -12 25 -26 42 -20 24 -34 31 -62 31 l-35 0 20 -22z" />{" "}
            </g>{" "}
          </svg>
        </div>
        <div className="md:w-[90%] w-[100%]">
          <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
            <a
              href="./Signup.jsx"
              className="flex items-center mb-6 text-2xl font-semibold text-gray-900 "
            >
              <img
                className="w-40 h-10 mr-2"
                src="/Untitled_design__2___1_-removebg-preview.png"
                alt="logo"
              />
            </a>
            <div className="w-full bg-white rounded-lg shadow md:mt-0 sm:max-w-md xl:p-0">
              <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl">
                  Create an account
                </h1>
                <form className="space-y-4 md:space-y-6 text-left" action="#">
                  <InputBox
                    label={"Your email"}
                    iname={"username"}
                    placeholder={"name@company.com"}
                    onChange={InputHandler}
                    ivalue={user.username}
                  />
                  <InputBox
                    label={"First name"}
                    iname={"firstname"}
                    placeholder={"mukesh"}
                    onChange={InputHandler}
                    ivalue={user.firstname}
                  />

                  <InputBox
                    label={"Last name"}
                    iname={"lastname"}
                    placeholder={"ambani"}
                    onChange={InputHandler}
                    ivalue={user.lastname}
                  />

                  <InputBox
                    label={"Password"}
                    iname={"password"}
                    ivalue={user.password}
                    onChange={InputHandler}
                    placeholder={"••••••••"}
                  />

                  <div className="flex items-start">
                    <div className="flex items-center h-5">
                      <input
                        id="terms"
                        aria-describedby="terms"
                        type="checkbox"
                        className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300"
                        required=""
                      />
                    </div>
                    <div className="ml-3 text-sm">
                      <label className="font-light text-gray-500">
                        I accept the{" "}
                        <a
                          className="font-medium hover:underline text-blue-500"
                          href="#"
                        >
                          Terms and Conditions
                        </a>
                      </label>
                    </div>
                  </div>
                  <Button label={"Create an account"} onClick={SignupHandler} />
                  <WarningLink
                    label={"Already have an account?"}
                    buttonText={"Login"}
                    to={"/login"}
                  />
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Signup;
