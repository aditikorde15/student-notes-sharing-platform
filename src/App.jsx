import Vision from "./pages/Vision";
import AI from "./pages/AI";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Notes from "./pages/Notes";
import Dashboard from "./pages/Dashboard";
import ProtectedRoute from "./ProtectedRoute";

function App() {
return (
<Routes>
<Route path="/" element={<Home />} />
<Route path="/login" element={<Login />} />
<Route path="/signup" element={<Signup />} />
<Route path="/ai" element={<AI />} />
<Route path="/vision" element={<Vision />} />
<Route
path="/notes"
element={
<ProtectedRoute>
<Notes />
</ProtectedRoute>
}
/>
<Route
path="/dashboard"
element={
<ProtectedRoute>
<Dashboard />
</ProtectedRoute>
}
/>
</Routes>
);
}

export default App;
he bg