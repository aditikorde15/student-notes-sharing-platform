import { Navigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { supabase } from "./supabase";

function ProtectedRoute({ children }) {
  const [session, setSession] = useState(undefined);

  useEffect(() => {
    supabase.auth.getSession().then(({ data }) => {
      setSession(data.session);
    });
  }, []);

  if (session === undefined) {
    return <h2>Loading...</h2>;
  }

  return session ? children : <Navigate to="/login" />;
}

export default ProtectedRoute;