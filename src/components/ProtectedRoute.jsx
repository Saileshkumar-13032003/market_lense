import React from "react";
import { Navigate } from "react-router-dom";

export default function ProtectedRoute({ children }) {
  const isLoggedIn = localStorage.getItem("loggedIn");
  return isLoggedIn ? children : <Navigate to="/login" replace />;
}

// import React from "react";
// import { Navigate } from "react-router-dom";

// export default function ProtectedRoute({ children }) {
//   const isLoggedIn = localStorage.getItem("loggedIn");

//   if (!isLoggedIn) {
//     return <Navigate to="/login" replace />;
//   }

//   return children;
// }

// import React from "react";
// import { Navigate } from "react-router-dom";

// export default function ProtectedRoute({ children }) {
//   const isLoggedIn = localStorage.getItem("loggedIn");

//   if (!isLoggedIn) return <Navigate to="/login" replace />;

//   return children;
// }
