import { useState } from "react";
import Navbar from "../Components/Navbar";
import { supabase } from "../supabase";

function Signup() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignup = async () => {
    const { error } = await supabase.auth.signUp({
      email: email,
      password: password,
      options: {
        data: {
          full_name: name,
        },
      },
    });

    if (error) {
      alert(error.message);
    } else {
      alert("Signup Successful! Check your Email.");
    }
  };

  return (
    <>
      <Navbar />

      <div className="flex justify-center
      iteams-center min-h-screen
      bg-gradient-to-br from-blue-100
      via-purple-100 to-pink-100">
        <div className="bg-white p-10
        rounded-3xl shadow-2xl w-[420px]
        border border-gray-200">
          <p className="text-center
          text-green-600 font-semibold mb-2">
          </p>
          <h2 className="text-3xl font-bold text-center mb-2">
            Signup
          </h2>
          <p className="text-center
          text-gray-500 mb-6">
            Create an account to get started
          </p>

          <input
            type="text"
            placeholder="Enter Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full border 
            border-gray-300 rounded-xl px-4 py-3
            mb-4 focus:outline-none focus:ring-2
            focus:ring-green-500"
          />

          <input
            type="email"
            placeholder="Enter Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full border 
            border-gray-300 rounded-xl px-4 py-3
            mb-4 focus:outline-none focus:ring-2
            focus:ring-green-500"
          />

          <input
            type="password"
            placeholder="Enter Password" 
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full border
            border-gray-300 rounded-xl px-4 py-3
            mb-4 focus:outline-none focus:ring-2
            focus:ring-green-500"
          />

          <button
            onClick={handleSignup}
            className="w-full bg-green-600 
            hover:bg-green-700 text-white py-3
            rounded-xl font-semibold transition
            duration-300"
          >
            Signup
          </button>
        </div>
      </div>
    </>
  );
}

export default Signup;