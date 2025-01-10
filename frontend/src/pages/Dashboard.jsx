import { useState,useEffect } from "react";
import { AppBar } from "../components/AppBar";
import { Balance } from "../components/Balance";
import { Users } from "../components/Users";
import axios from "axios";

const Dashboard = () => {
  const [balance, setBalance] = useState(0);

  useEffect(() => {
    const token = localStorage.getItem("authorization");

    if (!token) {
      console.error("No token found. Authorization required.");
      return;
    }

    axios
      .get("http://localhost:3000/api/v1/account/balance", {
        headers: {
          authorization: token,
        },
      })
      .then((result) => {
        setBalance(result.data.balance);
      });
  }, []);

  return (
    <>
      <div className="p-4">
        <AppBar />
        <div className="mt-5">
          <Balance value={balance} />
          <Users />
        </div>
      </div>
    </>
  );
};

export default Dashboard;
