import { useEffect, useState } from "react";
import { getUser } from "../services/user.service";

interface UserDTO {
  id: number;
  email: string;
  app_id: string;
}

function AboutMe() {
  let [user, setUser] = useState<UserDTO>();

  useEffect(() => {
    getUser().then((data) => {
      setUser(data);
    });
  }, []);
  return (
    <>
      <div className="w-full h-full  bg-gray-400">
        <h1 className="text-2xl font-bold mb-4 text-center">
          App id {user?.app_id}
        </h1>
      </div>
    </>
  );
}

export default AboutMe;
