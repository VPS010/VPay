import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSearchParams } from "react-router-dom";
import axios from "axios";

const Payment = () => {
  const navigate = useNavigate();
  const [amount, setAmount] = useState(100.0);
  const [searchParams] = useSearchParams();
  const id = searchParams.get("id");
  const name = searchParams.get("name");
  const uname = searchParams.get("uname");
  const lname = searchParams.get("lname");

  const TransferHandler = async () => {
    if (!id || amount <= 0 || isNaN(amount)) {
      alert("Invalid transfer details. Please check the amount and recipient.");
      return;
    }

    try {
      const token = localStorage.getItem("authorization");
      if (!token) {
        alert("You must be logged in to make a transfer.");
        return;
      }
      console.log(token);
      await axios.post(
        "https://v-pay-api.vercel.app/api/v1/account/transfer",
        {
          to: id,
          amount: parseFloat(amount),
        },
        {
          headers: {
            authorization: token,
          },
        }
      );

      alert(`Successfully transferred ₹${amount} to ${name}!`);
      navigate("/dashboard");
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <>
      <div className="font-manrope m-5 md:m-0 flex h-screen w-full items-center bg-gray-50 justify-center">
        <div className="mx-auto box-border rounded-lg w-[365px] shadow border bg-white p-4">
          <div className="flex items-center rounded-lg justify-between">
            <span className="text-[#1f9528] font-bold text-xl">
              Sending Money
            </span>
            <div className="cursor-pointer border rounded-[4px]">
              <button
                onClick={() => {
                  navigate("/dashboard");
                }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-[#64748B]"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
          </div>

          <div className="mt-6">
            <div className="flex justify-between">
              <span className="font-semibold text-[#191D23]">Receiving</span>
            </div>

            <div className="flex items-center gap-x-[10px] bg-neutral-100 p-3 mt-2 rounded-[4px]">
              <div className="rounded-full h-12 w-12 bg-blue-300 flex justify-center mt-1 mr-2">
                <div className="flex flex-col justify-center h-full text-xl text-white">
                  {name[0]}
                </div>
              </div>
              <div className="flex flex-col justify-start">
                <div className="flex font-semibold ">
                  {name} {lname}
                </div>
                <div className="text-[#64748B] flex">{uname}</div>
              </div>
            </div>
          </div>

          <div className="mt-6">
            <div className="font-semibold text-left">Amount (in Rs.)</div>
            <div>
              <input
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 "
                onChange={(e) => {
                  setAmount(parseFloat(e.target.value) || 0);
                }}
                label={""}
                value={amount}
                placeholder={100.0}
                type="text"
              />
            </div>
          </div>

          <div className="mt-6">
            <button
              onClick={TransferHandler}
              type="submit"
              className="w-full text-white bg-green-600 hover:bg-green-700 focus:ring-2 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
            >
              Send ₹{amount}
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Payment;
