import Navbar from "../Components/Navbar";
import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();

  return (
    <>
      <Navbar />

      <div className="flex flex-col
       items-center justify-center
       min-h-screen bg-grandient-to-br
       from-blue-100 via-purple-100
       to-pink-100"> 
        <h1 className="text-6xl 
        font-extrabold text-blue-700
        text-center">
          Student Notes Sharing Platform
        </h1>

        <p className="mt-4 text-lg text-gray-600">
          Share, Upload and Download Notes Easily
        </p>

        <button
          onClick={() => navigate("/login")}
          className="mt-6 bg-green-600 text-white px-6 py-3 rounded-lg"
        >
          Get Started
        </button>
      </div>
    </>
  );
}

export default Home;