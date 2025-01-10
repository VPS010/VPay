import { useEffect, useState } from "react";
import { Button } from "./Button";
import axios from "axios";

export const Users = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const token = localStorage.getItem("authorization");

    if (!token) {
      console.error("No token found. Authorization required.");
      return;
    }
    axios
      .get("http://localhost:3000/api/v1/user/bulk", {
        headers: {
          authorization: token,
        },
      })
      .then((result) => {
        setUsers(result.data.users);
      })
      .catch((error) => {
        if (error.response) {
          console.error("Error Response Data:", error.response.data); // Log response data
        } else {
          console.error("Error:", error.message); // Log general error
        }
      });
  }, []);

  return (
    <>
      <div className="font-bold mt-6 text-lg">Find People</div>
      <div className="my-2">
        <input
          type="text"
          placeholder="Search users..."
          className="w-full px-2 py-1 border border-blue-200 rounded"
        ></input>
      </div>
      <div>
        {users.length > 0 ? (
          users.map((user) => (
            <div key={user.username}>
              <User user={user} />
            </div>
          ))
        ) : (
          <p>No users found</p>
        )}
      </div>
    </>
  );
};

function User({ user }) {
  return (
    <div className="flex justify-between">
      <div className="flex">
        <div className="rounded-full h-12 w-12 bg-slate-200 flex justify-center mt-1 mr-2">
          <div className="flex flex-col justify-center h-full text-xl">
            {user.firstname[0]}
          </div>
        </div>
        <div className="flex flex-col justify-center h-ful">
          <div>
            {user.firstname} {user.lastname}
          </div>
        </div>
      </div>

      <div className="flex flex-col justify-center h-ful">
        <Button onClick={""} label={"Send Money"} />
      </div>
    </div>
  );
}
