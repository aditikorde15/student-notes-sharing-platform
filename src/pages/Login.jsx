import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../Components/Navbar";
import { supabase } from "../supabase";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleLogin = async () => {
    const { error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (error) {
      alert(error.message);
    } else {
      alert("Login Successful!");
      navigate("/notes");
    }
  };

  return (
    <>
      <Navbar />

      <div className="flex justify-center 
      items-center min-h-screen 
      bg-gradient-to-br from-blue-100
       via-purple-100 to-pink-100">
        <div className="bg-white p-10
        rounded-3xl shadow-2xl w-[420px]
        border border-gray-200">
          <p className="text-center
          text-blue-600 font-semibold mb-2">
          Welcome Back
          </p>
          <h2 className="text-3xl font-bold text-center mb-6">
            login
          </h2>
          <p className="text-center
          text-gray-500 mb-6">
            Sign in to continue
          </p>

          <input
            type="email"
            placeholder="Enter Email"
            className="w-full bg-blue-600
            hover:bg-blue-700 text-white py-3
            rounded-xl font-semibold transation
            duration-300" 
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <input
            type="password"
            placeholder="Enter Password"
            className="w-full border
            border-gray-300 rounded-xl px-4 py-3
            md-4 focus:outline-none focus:ring-2
            focus:ring-blue-500"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <button
            onClick={handleLogin}
            className="w-full bg-blue-600 text-white p-2 rounded"
          >
            Login
          </button>
        </div>
      </div>
    </>
  );
}

export default Login;