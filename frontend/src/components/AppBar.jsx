import { useState } from "react";
import { useNavigate } from "react-router-dom";

export const AppBar = () => {
  const navigate = useNavigate();
  const [isVisible, setIsVisible] = useState(false);

  const UserHandler = () => {
    setIsVisible((prev) => !prev);
  };

  const LogoutHandler = () => {
    localStorage.clear();
    navigate("/");
  };

  return (
    <div className="shadow h-14 flex justify-between">
      <div className="flex justify-center h-full items-center">
        <img
          className="w-44 h-10 mr-2"
          src="/Untitled_design__2___1_-removebg-preview.png"
          alt="logo"
        />
        <p className="mt-2 ml-0 text-xl text-blue-950">
          Secure Payments Simplified
        </p>
      </div>
      <div className="flex ">
        <div className="flex flex-col mt-3 text-xl h-full mr-4 to-blue-800">
          Hello
        </div>
        <button onClick={UserHandler}>
          <div className="rounded-full h-12 w-12 bg-blue-200 flex justify-center mt-0 mr-2">
            <div className="flex flex-col justify-center h-full text-xl">U</div>
          </div>
        </button>
        {isVisible && (
          <div className=" bg-blue-200 shadow  absolute rounded-md top-[69px] flex flex-col right-3 ">
            <button
              onClick={() => {
                navigate("/update");
              }}
              className=" mx-2 text-sm text-white m-1 mt-2 px-3 bg-blue-600 hover:bg-blue-700 focus:ring-2 focus:outline-none focus:ring-blue-300 font-medium rounded-lg  py-2 text-center"
            >
              Update Account
            </button>
            <button
              onClick={LogoutHandler}
              className=" mx-2 text-sm text-white m-1  px-3 bg-blue-600 hover:bg-blue-700 focus:ring-2 focus:outline-none focus:ring-blue-300 font-medium rounded-lg  py-2 text-center"
            >
              Logout
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
