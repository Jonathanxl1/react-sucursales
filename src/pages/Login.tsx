import { useState } from "react";

function Login() {
  let [email, setEmail] = useState<string>("");
  let [password, setPassword] = useState<string>("");

  function submit() {
    let data = {
      email,
      password,
    };

    console.log(data);
  }
  return (
    <>
      <div className="flex flex-col justify-center items-center w-full min-h-[200px] bg-gray-100">
        <div className="w-4/12 h-8/12 bg-white p-8 rounded-lg shadow-md">
          <h1 className="my-12">Login Form</h1>
          <form
            onSubmit={(e) => e.preventDefault()}
            className="flex flex-col space-y-5">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              name="email"
              id="email"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring focus:ring-blue-300"
              onChange={(e) => setEmail(e.target.value)}
            />
            <label htmlFor="password">Password</label>
            <input
              type="password"
              name="password"
              id="email"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring focus:ring-blue-300"
              onChange={(e) => setPassword(e.target.value)}
            />
            <button
              className="w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded focus:outline-none focus:ring focus:ring-blue-300 transition duration-200"
              onClick={submit}>
              Log In
            </button>
          </form>
        </div>
      </div>
    </>
  );
}

export default Login;
