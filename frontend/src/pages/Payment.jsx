import { InputBox } from "../components/InputBox";

const Payment = () => {
  return (
    <>
      <div className="font-manrope flex h-screen w-full items-center bg-gray-50 justify-center">
        <div className="mx-auto box-border rounded-lg w-[365px] shadow border bg-white p-4">
          <div className="flex items-center rounded-lg justify-between">
            <span className="text-[#1f9528] font-bold text-xl">Sending Money</span>
            <div className="cursor-pointer border rounded-[4px]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-[#64748B]"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                stroke-width="2"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </div>
          </div>

          <div className="mt-6">
            <div className="flex justify-between">
              <span className="font-semibold text-[#191D23]">Receiving</span>
            </div>

            <div className="flex items-center gap-x-[10px] bg-neutral-100 p-3 mt-2 rounded-[4px]">
              <img
                className="h-10 w-10 rounded-full"
                src="https://images.unsplash.com/photo-1507019403270-cca502add9f8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
                alt=""
              />
              <div>
                <div className="font-semibold">Kathy Miller</div>
                <div className="text-[#64748B]">@KittyKatmills</div>
              </div>
            </div>
          </div>

          <div className="mt-6">
            <div className="font-semibold text-left">Amount (in Rs.)</div>
            <div>
              <InputBox onChange={""} label={""} placeholder={100.0} />
            </div>
          </div>

          <div className="mt-6">
            <button
              type="submit"
              className="w-full text-white bg-green-600 hover:bg-green-700 focus:ring-2 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
            >
              Send $100:00
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Payment;
