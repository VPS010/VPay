import axios from "axios";
import { useEffect, useState } from "react";

export const Balance = ({ value }) => {
  const token = localStorage.getItem("authorization");
  const [firstname, setFirstname] =useState("");
  const [lastname, setLastname] = useState("");

  if (!token) {
    console.error("No token found. Authorization required.");
    return;
  }

  useEffect(() => {
    axios
      .get("https://v-pay-api.vercel.app/api/v1/user/info", {
        headers: {
          authorization: token,
        },
      })
      .then((result) => {
        setFirstname(result.data.firstname);
        setLastname(result.data.lastname);
      });
  }, []);

  const formattedValue = new Intl.NumberFormat("en-IN", {
    style: "decimal",
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  }).format(value);

  return (
    <div className="flex flex-col  ml-4 shadow ">
      <div className="flex mx-2 font-medium md:text-4xl text-2xl text-blue-950">{firstname}{" "}{lastname}</div>
      <div className="flex bg-white h-12 items-center rounded ">
        <div className=" mx-2 font-bold md:text-xl text-md text-blue-950">
          Your balance:
        </div>
        <div className=" md:mx-2 font-semibold md:ml-4 text-xl">
          Rs. {formattedValue}
        </div>
      </div>
    </div>
  );
};
