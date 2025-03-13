import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router";

const Signup = () => {
  const navigate = useNavigate();

  const [dataForm, setDataForm] = useState({
    userName: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setDataForm({ ...dataForm, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:4000/user/signup", dataForm);
      console.log(response.data);
      alert("Signup successful! Please log in.");
      navigate("/login");
    } catch (error) {
      console.log("Error Register:", error.response?.data || error.message);
    } finally {
      setDataForm({
        userName: "",
        email: "",
        password: "",
      });
    }
  };

  return (
    <div className="flex justify-center my-20 bg-slate-500 w-1/2 mx-auto py-6">
      <div className="flex flex-col gap-y-4">
        <div>
          <p className="text-xl font-semibold">Create an account on my website</p>
        </div>
        <form onSubmit={handleSubmit} className="flex flex-col gap-y-4">
          <label className="flex flex-col gap-y-2">
            <span>Username</span>
            <input
              type="text"
              name="userName"
              id="userName"
              value={dataForm.userName}
              placeholder="Enter your username"
              className="py-2 px-3 outline-none"
              onChange={handleChange}
              required
              autoComplete="username"
            />
          </label>
          <label className="flex flex-col gap-y-2">
            <span>Email</span>
            <input
              type="email"
              name="email"
              id="email"
              value={dataForm.email}
              placeholder="Enter your email"
              className="py-2 px-3 outline-none"
              onChange={handleChange}
              required
              autoComplete="email"
            />
          </label>
          <label className="flex flex-col gap-y-2">
            <span>Password</span>
            <input
              type="password"
              name="password"
              id="password"
              value={dataForm.password}
              placeholder="Enter your password"
              className="py-2 px-3 outline-none"
              onChange={handleChange}
              required
              autoComplete="new-password"
            />
          </label>
          <div className="my-3">
            <button type="submit" className="border py-1 rounded-sm bg-green-500 text-white px-3">
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Signup;
