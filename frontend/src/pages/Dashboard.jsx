import { AppBar } from "../components/AppBar";
import { Balance } from "../components/Balance";
import { Users } from "../components/Users";

const Dashboard = () => {
  return (
    <>
    <div className="p-4">
        
      <AppBar />
      <div className="mt-5">
        
        
      <Balance />
      <Users />
      </div>
    </div>
    </>
  );
};

export default Dashboard;
