import React from "react";
import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
  useLocation,
} from "react-router-dom";

import Sidebar from "./components/Sidebar";
import ProtectedRoute from "./components/ProtectedRoute";

import Login from "./pages/Login";
import Register from "./pages/Register";
import ForgotPassword from "./pages/ForgotPassword";
import EmailVerification from "./pages/EmailVerification";
import RegistrationSuccess from "./pages/RegistrationSuccess";

import Dashboard from "./pages/Dashboard";
import Stocks from "./pages/Stocks";
import Crypto from "./pages/Crypto";
import Forex from "./pages/Forex";
import Futures from "./pages/Futures";
import Indices from "./pages/Indices";
import ChartTerminal from "./components/ChartTerminal";

function Layout({ children }) {
  const location = useLocation();

  // ROUTES WHERE SIDEBAR SHOULD NOT APPEAR
  const hideSidebarRoutes = [
    "/login",
    "/register",
    "/forgot-password",
    "/email-verification",
    "/register-success",
  ];

  const shouldHideSidebar =
    hideSidebarRoutes.includes(location.pathname) ||
    location.pathname.startsWith("/reset");

  return (
    <div className="flex">
      {/* Sidebar shows ONLY when loggedIn EXISTS */}
      {!shouldHideSidebar && localStorage.getItem("loggedIn") && <Sidebar />}

      <div className="flex-1">{children}</div>
    </div>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          {/* PUBLIC ROUTES */}
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
          <Route path="/email-verification" element={<EmailVerification />} />
          <Route path="/register-success" element={<RegistrationSuccess />} />

          {/* PROTECTED DASHBOARD PAGES */}
          <Route
            path="/"
            element={
              <ProtectedRoute>
                <Dashboard />
              </ProtectedRoute>
            }
          />

          <Route
            path="/indices"
            element={
              <ProtectedRoute>
                <Indices />
              </ProtectedRoute>
            }
          />

          <Route
            path="/stocks"
            element={
              <ProtectedRoute>
                <Stocks />
              </ProtectedRoute>
            }
          />

          <Route
            path="/crypto"
            element={
              <ProtectedRoute>
                <Crypto />
              </ProtectedRoute>
            }
          />

          <Route
            path="/forex"
            element={
              <ProtectedRoute>
                <Forex />
              </ProtectedRoute>
            }
          />

          <Route
            path="/futures"
            element={
              <ProtectedRoute>
                <Futures />
              </ProtectedRoute>
            }
          />

          <Route
            path="/chart/:symbol"
            element={
              <ProtectedRoute>
                <ChartTerminal />
              </ProtectedRoute>
            }
          />

          {/* CATCH-ALL → REDIRECT */}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

// import React from "react";
// import {
//   BrowserRouter,
//   Routes,
//   Route,
//   Navigate,
//   useLocation,
// } from "react-router-dom";

// import Sidebar from "./components/Sidebar";
// import ProtectedRoute from "./components/ProtectedRoute";

// import Login from "./pages/Login";
// import Register from "./pages/Register";
// import ForgotPassword from "./pages/ForgotPassword";
// import EmailVerification from "./pages/EmailVerification";
// import RegistrationSuccess from "./pages/RegistrationSuccess";

// import Dashboard from "./pages/Dashboard";
// import Stocks from "./pages/Stocks";
// import Crypto from "./pages/Crypto";
// import Forex from "./pages/Forex";
// import Futures from "./pages/Futures";
// import Indices from "./pages/Indices";
// import ChartTerminal from "./components/ChartTerminal";

// function Layout({ children }) {
//   const location = useLocation();
//   const hideSidebarRoutes = [
//     "/login",
//     "/register",
//     "/forgot-password",
//     "/email-verification",
//     "/register-success",
//   ];

//   const shouldHideSidebar =
//     hideSidebarRoutes.includes(location.pathname) ||
//     location.pathname.startsWith("/reset");

//   return (
//     <div className="flex">
//       {!shouldHideSidebar && localStorage.getItem("loggedIn") && <Sidebar />}
//       <div className="flex-1">{children}</div>
//     </div>
//   );
// }

// export default function App() {
//   return (
//     <BrowserRouter>
//       <Layout>
//         <Routes>
//           {/* PUBLIC ROUTES */}
//           <Route path="/login" element={<Login />} />
//           <Route path="/register" element={<Register />} />
//           <Route path="/forgot-password" element={<ForgotPassword />} />
//           <Route path="/email-verification" element={<EmailVerification />} />
//           <Route path="/register-success" element={<RegistrationSuccess />} />

//           {/* PROTECTED ROUTES */}
//           <Route
//             path="/"
//             element={
//               <ProtectedRoute>
//                 <Dashboard />
//               </ProtectedRoute>
//             }
//           />

//           <Route
//             path="/indices"
//             element={
//               <ProtectedRoute>
//                 <Indices />
//               </ProtectedRoute>
//             }
//           />

//           <Route
//             path="/stocks"
//             element={
//               <ProtectedRoute>
//                 <Stocks />
//               </ProtectedRoute>
//             }
//           />

//           <Route
//             path="/crypto"
//             element={
//               <ProtectedRoute>
//                 <Crypto />
//               </ProtectedRoute>
//             }
//           />

//           <Route
//             path="/forex"
//             element={
//               <ProtectedRoute>
//                 <Forex />
//               </ProtectedRoute>
//             }
//           />

//           <Route
//             path="/futures"
//             element={
//               <ProtectedRoute>
//                 <Futures />
//               </ProtectedRoute>
//             }
//           />

//           <Route
//             path="/chart/:symbol"
//             element={
//               <ProtectedRoute>
//                 <ChartTerminal />
//               </ProtectedRoute>
//             }
//           />

//           {/* FALLBACK ROUTE */}
//           <Route path="*" element={<Navigate to="/" replace />} />
//         </Routes>
//       </Layout>
//     </BrowserRouter>
//   );
// }

// import React from "react";
// import { BrowserRouter, Routes, Route } from "react-router-dom";
// import Login from "./pages/Login";
// import Dashboard from "./pages/Dashboard";
// import Stocks from "./pages/Stocks";
// import Crypto from "./pages/Crypto";
// import Forex from "./pages/Forex";
// import Futures from "./pages/Futures";
// import Indices from "./pages/Indices";
// import Register from "./pages/Register";
// import ProtectedRoute from "./components/ProtectedRoute";

// import ChartTerminal from "./components/ChartTerminal";

// export default function App() {
//   return (
//     <BrowserRouter>
//       <div className="flex">
//         {/* Sidebar should not show on login page */}
//         {localStorage.getItem("loggedIn") && <Sidebar />}

//         <div className="flex-1">
//           <Routes>
//             <Route path="/login" element={<Login />} />
//             <Route path="/register" element={<Register />} />

//             {/* Protected pages */}
//             <Route
//               path="/"
//               element={
//                 <ProtectedRoute>
//                   <Dashboard />
//                 </ProtectedRoute>
//               }
//             />

//             <Route
//               path="/indices"
//               element={
//                 <ProtectedRoute>
//                   <Indices />
//                 </ProtectedRoute>
//               }
//             />

//             <Route
//               path="/stocks"
//               element={
//                 <ProtectedRoute>
//                   <Stocks />
//                 </ProtectedRoute>
//               }
//             />

//             <Route
//               path="/crypto"
//               element={
//                 <ProtectedRoute>
//                   <Crypto />
//                 </ProtectedRoute>
//               }
//             />

//             <Route
//               path="/forex"
//               element={
//                 <ProtectedRoute>
//                   <Forex />
//                 </ProtectedRoute>
//               }
//             />

//             <Route
//               path="/futures"
//               element={
//                 <ProtectedRoute>
//                   <Futures />
//                 </ProtectedRoute>
//               }
//             />

//             <Route
//               path="/chart/:symbol"
//               element={
//                 <ProtectedRoute>
//                   <ChartTerminal />
//                 </ProtectedRoute>
//               }
//             />
//           </Routes>
//         </div>
//       </div>
//     </BrowserRouter>
//   );
// }

// // import React from "react";
// // import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// // import Login from "./pages/Login";
// // import Dashboard from "./pages/Dashboard";
// // import Stocks from "./pages/Stocks";
// // import Crypto from "./pages/Crypto";
// // import Forex from "./pages/Forex";
// // import Futures from "./pages/Futures";
// // import Indices from "./pages/Indices";
// // import ChartTerminal from "./components/ChartTerminal";

// // export default function App() {
// //   const isAuthenticated = true; // fake auth
// //   return (
// //     <Router>
// //       <Routes>
// //         <Route path="/login" element={<Login />} />
// //         <Route path="/" element={<Dashboard />} />
// //         <Route path="/stocks" element={<Stocks />} />
// //         <Route path="/crypto" element={<Crypto />} />
// //         <Route path="/forex" element={<Forex />} />
// //         <Route path="/futures" element={<Futures />} />
// //         <Route path="/indices" element={<Indices />} />
// //         <Route path="/chart/:symbol" element={<ChartTerminal />} />
// //       </Routes>
// //     </Router>
// //   );
// // }
