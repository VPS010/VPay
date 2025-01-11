import { useState, useEffect } from "react";
import { AppBar } from "../components/AppBar";
import { Balance } from "../components/Balance";
import { Users } from "../components/Users";
import axios from "axios";
import Footer from "../components/Footer";

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
        <div className="mt-6 mb-0">
          <Balance value={balance} />
          <Users />
        </div>
      </div>
      <div className="px-4 pb-0">
        <Footer />
      </div>
    </>
  );
};

export default Dashboard;
