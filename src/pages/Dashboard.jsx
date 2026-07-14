import Navbar from "../Components/Navbar";
import { useEffect, useState } from "react";
import { supabase } from "../supabase";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
} from "recharts";

function Dashboard() {
  const [notesCount, setNotesCount] = useState(0);

  useEffect(() => {
    fetchNotesCount();
  }, []);

  async function fetchNotesCount() {
    const { data ,  error } = await supabase
      .from("Student_notes")
      .select("*");
      console.log( data);
      console.log( error);
    setNotesCount(data?.length  || 0);
  }

  const data = [
    {
      name: "Notes",
      Total: notesCount,
    },
  ];
    return (
  <>
    <Navbar />

    <div className="p-6 bg-gray-100 min-h-screen">
      
      <h1 className="text-3xl font-bold mb-6">
        Analytics Dashboard
      </h1>

      <div className="bg-white rounded-x1
      shadow-md p-6 w-72 mb-6 border-1-4
      border-blue-600">
        <h2 className="text-gray-500
        text-lg">
          Total Notes
        </h2>
      <p className="text-5xl font-bold
      text-blue-600 mt-3">
        {notesCount}
      </p>
      <p className="text-sm text-gray-400
      mt-2">
        Notes uploaded by students
      </p>
      </div>


      <div className="bg-white rounded-x1
      shadow-md p-6 flex justify-center">
        <BarChart width={600} height={350}
        data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Bar dataKey="Total" fill="#3b82f6" />
        </BarChart>
      </div>

    </div>
  </>
);
}
export default Dashboard;