import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { Eye, EyeOff, Github, Mail } from "lucide-react";

export default function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [showPass, setShowPass] = useState(false);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleLogin = (e) => {
    e.preventDefault();

    if (!email || !pass) {
      setError("All fields are required");
      return;
    }

    setError("");
    setLoading(true);

    setTimeout(() => {
      const stored = JSON.parse(localStorage.getItem("users")) || [];
      const found = stored.find(
        (u) => u.email === email && u.password === pass
      );

      if (!found) {
        setError("Invalid email or password");
        setLoading(false);
        return;
      }

      localStorage.setItem("loggedIn", "true");
      navigate("/");
    }, 1200);
  };

  return (
    <div className="relative w-full h-screen flex items-center justify-center bg-[#0B0F17] overflow-hidden">
      {/* 🔥 Background SVG Animation */}
      <motion.svg
        className="absolute top-0 left-0 w-full h-full opacity-20"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.2 }}
        transition={{ duration: 2 }}
      >
        <motion.polyline
          points="0,300 200,200 400,350 600,150 800,300 1000,180"
          fill="none"
          stroke="#22c55e"
          strokeWidth="3"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{
            repeat: Infinity,
            duration: 6,
            ease: "easeInOut",
            repeatType: "loop",
          }}
        />
      </motion.svg>

      {/* LOGIN CARD */}
      <motion.div
        initial={{ opacity: 0, y: 35 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="relative z-10 w-[380px] p-8 rounded-2xl bg-white/10 backdrop-blur-lg shadow-xl border border-white/20"
      >
        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-3xl font-semibold text-white text-center mb-6"
        >
          Welcome Back 👋
        </motion.h2>

        {/* FORM */}
        <form onSubmit={handleLogin} className="flex flex-col gap-4">
          {/* Email */}
          <div>
            <label className="text-sm text-gray-300">Email</label>
            <input
              type="email"
              className={`w-full p-3 mt-1 rounded-lg bg-white/10 text-white outline-none 
                ${error ? "border border-red-500" : "border border-white/20"}
              `}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          {/* Password */}
          <div>
            <label className="text-sm text-gray-300">Password</label>
            <div
              className={`flex items-center bg-white/10 border 
                ${error ? "border-red-500" : "border-white/20"} 
                rounded-lg mt-1`}
            >
              <input
                type={showPass ? "text" : "password"}
                className="w-full p-3 bg-transparent text-white outline-none"
                value={pass}
                onChange={(e) => setPass(e.target.value)}
              />
              <button
                type="button"
                className="px-3 text-gray-300"
                onClick={() => setShowPass(!showPass)}
              >
                {showPass ? <EyeOff size={20} /> : <Eye size={20} />}
              </button>
            </div>
          </div>

          {/* Remember + Forgot */}
          <div className="flex justify-between items-center text-sm mt-1">
            <div className="flex items-center gap-2">
              <input type="checkbox" className="accent-green-500" />
              <p className="text-gray-300">Remember me</p>
            </div>

            {/* ✔ FIXED FORGOT PASSWORD BUTTON */}
            <button
              type="button"
              onClick={() => navigate("/forgot-password")}
              className="text-green-400 hover:underline"
            >
              Forgot Password?
            </button>
          </div>

          {/* Error */}
          {error && <p className="text-red-400 text-sm">{error}</p>}

          {/* Login button */}
          <button
            className="w-full p-3 rounded-lg bg-green-500 hover:bg-green-600 text-black font-semibold mt-2 transition flex items-center justify-center"
            disabled={loading}
          >
            {loading ? (
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 0.8, repeat: Infinity, ease: "linear" }}
                className="w-5 h-5 border-2 border-black border-t-transparent rounded-full"
              />
            ) : (
              "Login"
            )}
          </button>
        </form>

        {/* Divider */}
        <div className="flex items-center my-4">
          <div className="flex-1 h-px bg-white/20"></div>
          <p className="text-gray-300 text-sm px-3">OR</p>
          <div className="flex-1 h-px bg-white/20"></div>
        </div>

        {/* Social */}
        <div className="flex flex-col gap-3">
          <button className="flex items-center gap-3 bg-white/20 p-3 rounded-lg hover:bg-white/30 transition text-white">
            <Mail size={18} /> Login with Google
          </button>

          <button className="flex items-center gap-3 bg-white/20 p-3 rounded-lg hover:bg-white/30 transition text-white">
            <Github size={18} /> Login with GitHub
          </button>
        </div>

        {/* Register */}
        <p className="text-center text-gray-300 text-sm mt-4">
          Don't have an account?{" "}
          <span
            onClick={() => navigate("/register")}
            className="text-green-400 cursor-pointer hover:underline"
          >
            Register now
          </span>
        </p>
      </motion.div>
    </div>
  );
}

// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import { motion } from "framer-motion";
// import { Eye, EyeOff, Github, Mail } from "lucide-react";

// export default function Login() {
//   const navigate = useNavigate();
//   const [email, setEmail] = useState("");
//   const [pass, setPass] = useState("");
//   const [showPass, setShowPass] = useState(false);
//   const [error, setError] = useState("");
//   const [loading, setLoading] = useState(false);

//   const handleLogin = (e) => {
//     e.preventDefault();
//     if (!email || !pass) {
//       setError("All fields are required");
//       return;
//     }

//     setError("");
//     setLoading(true);

//     setTimeout(() => {
//       const stored = JSON.parse(localStorage.getItem("users")) || [];
//       const found = stored.find(
//         (u) => u.email === email && u.password === pass
//       );

//       if (!found) {
//         setError("Invalid email or password");
//         setLoading(false);
//         return;
//       }

//       localStorage.setItem("loggedIn", "true");
//       navigate("/");
//     }, 1200);
//   };

//   return (
//     <div className="relative w-full h-screen flex items-center justify-center bg-[#0B0F17] overflow-hidden">
//       {/* 🔥 Animated SVG Background */}
//       <motion.svg
//         className="absolute top-0 left-0 w-full h-full opacity-20"
//         initial={{ opacity: 0 }}
//         animate={{ opacity: 0.2 }}
//         transition={{ duration: 2 }}
//       >
//         <motion.polyline
//           points="0,300 200,200 400,350 600,150 800,300 1000,180"
//           fill="none"
//           stroke="#22c55e"
//           strokeWidth="3"
//           initial={{ pathLength: 0 }}
//           animate={{ pathLength: 1 }}
//           transition={{
//             repeat: Infinity,
//             duration: 6,
//             ease: "easeInOut",
//             repeatType: "loop",
//           }}
//         />
//       </motion.svg>

//       {/* LOGIN CARD */}
//       <motion.div
//         initial={{ opacity: 0, y: 35 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.6 }}
//         className="relative z-10 w-[380px] p-8 rounded-2xl bg-white/10 backdrop-blur-lg shadow-xl border border-white/20"
//       >
//         {/* Heading */}
//         <motion.h2
//           initial={{ opacity: 0, y: 10 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ delay: 0.1 }}
//           className="text-3xl font-semibold text-white text-center mb-6"
//         >
//           Welcome Back 👋
//         </motion.h2>

//         {/* Form */}
//         <form onSubmit={handleLogin} className="flex flex-col gap-4">
//           {/* Email */}
//           <motion.div
//             initial={{ opacity: 0, x: -10 }}
//             animate={{ opacity: 1, x: 0 }}
//             transition={{ delay: 0.2 }}
//           >
//             <label className="text-sm text-gray-300">Email</label>
//             <input
//               type="email"
//               className={`w-full p-3 mt-1 rounded-lg bg-white/10 text-white outline-none
//                 ${error ? "border border-red-500" : "border border-white/20"}
//               `}
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
//             />
//           </motion.div>

//           {/* Password */}
//           <motion.div
//             initial={{ opacity: 0, x: -10 }}
//             animate={{ opacity: 1, x: 0 }}
//             transition={{ delay: 0.3 }}
//           >
//             <label className="text-sm text-gray-300">Password</label>
//             <div
//               className={`flex items-center bg-white/10 border
//                 ${error ? "border-red-500" : "border-white/20"}
//                 rounded-lg mt-1`}
//             >
//               <input
//                 type={showPass ? "text" : "password"}
//                 className="w-full p-3 bg-transparent text-white outline-none"
//                 value={pass}
//                 onChange={(e) => setPass(e.target.value)}
//               />
//               <button
//                 type="button"
//                 className="px-3 text-gray-300"
//                 onClick={() => setShowPass(!showPass)}
//               >
//                 {showPass ? <EyeOff size={20} /> : <Eye size={20} />}
//               </button>
//             </div>
//           </motion.div>

//           {/* Remember Me */}
//           <motion.div
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             transition={{ delay: 0.35 }}
//             className="flex items-center gap-2 mt-1"
//           >
//             <input type="checkbox" className="accent-green-500" />
//             <p className="text-gray-300 text-sm">Remember me</p>
//           </motion.div>

//           {/* Error Message */}
//           {error && (
//             <motion.p
//               initial={{ opacity: 0 }}
//               animate={{ opacity: 1 }}
//               className="text-red-400 text-sm"
//             >
//               {error}
//             </motion.p>
//           )}

//           {/* Login Button */}
//           <motion.button
//             whileTap={{ scale: 0.95 }}
//             className="w-full p-3 rounded-lg bg-green-500 hover:bg-green-600 text-black font-semibold mt-2 transition flex items-center justify-center"
//             disabled={loading}
//           >
//             {loading ? (
//               <motion.div
//                 animate={{ rotate: 360 }}
//                 transition={{ duration: 0.8, repeat: Infinity, ease: "linear" }}
//                 className="w-5 h-5 border-2 border-black border-t-transparent rounded-full"
//               />
//             ) : (
//               "Login"
//             )}
//           </motion.button>
//         </form>

//         {/* Divider */}
//         <div className="flex items-center my-4">
//           <div className="flex-1 h-px bg-white/20"></div>
//           <p className="text-gray-300 text-sm px-3">OR</p>
//           <div className="flex-1 h-px bg-white/20"></div>
//         </div>

//         {/* Social Login */}
//         <motion.div
//           initial={{ opacity: 0, y: 8 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ delay: 0.5 }}
//           className="flex flex-col gap-3"
//         >
//           <button className="flex items-center gap-3 bg-white/20 p-3 rounded-lg hover:bg-white/30 transition text-white">
//             <Mail size={18} /> Login with Google
//           </button>

//           <button className="flex items-center gap-3 bg-white/20 p-3 rounded-lg hover:bg-white/30 transition text-white">
//             <Github size={18} /> Login with GitHub
//           </button>
//         </motion.div>

//         {/* Register Link */}
//         <motion.p
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           transition={{ delay: 0.6 }}
//           className="text-center text-gray-300 text-sm mt-4"
//         >
//           Don't have an account?{" "}
//           <span
//             onClick={() => navigate("/register")}
//             className="text-green-400 cursor-pointer hover:underline"
//           >
//             Register now
//           </span>
//         </motion.p>
//       </motion.div>
//     </div>
//   );
// }

// import React, { useState, useEffect } from "react";
// import { Link, useNavigate } from "react-router-dom";
// import { motion } from "framer-motion";

// /*
//   Features:
//   - Stock market SVG animated header
//   - Show/hide password toggle
//   - Validation with red borders and messages
//   - Loading button animation
//   - Remember me (store remembered email in localStorage)
//   - Social login (simulated)
// */

// const StockSVG = ({ className = "w-36 h-20" }) => {
//   // simple animated polyline (mock market line)
//   const points = "0,40 30,20 60,35 90,10 120,30 150,15 180,25 210,5 240,30";
//   return (
//     <svg viewBox="0 0 240 40" className={className} preserveAspectRatio="none">
//       <defs>
//         <linearGradient id="g1" x1="0" x2="1">
//           <stop offset="0%" stopColor="#34d399" />
//           <stop offset="100%" stopColor="#60a5fa" />
//         </linearGradient>
//       </defs>

//       <motion.polyline
//         points={points}
//         fill="none"
//         stroke="url(#g1)"
//         strokeWidth="3"
//         strokeLinecap="round"
//         strokeLinejoin="round"
//         strokeDasharray="400"
//         strokeDashoffset="400"
//         initial={{ strokeDashoffset: 400 }}
//         animate={{ strokeDashoffset: 0 }}
//         transition={{ duration: 1.6, ease: "easeOut" }}
//       />

//       {/* subtle glowing circle that animates */}
//       <motion.circle
//         cx="120"
//         cy="30"
//         r="2.2"
//         fill="#60a5fa"
//         initial={{ scale: 0.5, opacity: 0 }}
//         animate={{ scale: [0.7, 1.2, 0.9], opacity: [0, 1, 0.6] }}
//         transition={{ repeat: Infinity, duration: 2.5, repeatDelay: 1 }}
//       />
//     </svg>
//   );
// };

// export default function Login() {
//   const navigate = useNavigate();

//   const [email, setEmail] = useState(
//     () => localStorage.getItem("rememberEmail") || ""
//   );
//   const [password, setPassword] = useState("");
//   const [showPw, setShowPw] = useState(false);
//   const [remember, setRemember] = useState(
//     () => !!localStorage.getItem("rememberEmail")
//   );
//   const [errors, setErrors] = useState({});
//   const [loading, setLoading] = useState(false);

//   useEffect(() => {
//     // if user already logged in, go dashboard
//     if (localStorage.getItem("loggedIn") === "true") {
//       navigate("/");
//     }
//   }, [navigate]);

//   const validate = () => {
//     const e = {};
//     if (!email) e.email = "Email is required";
//     else if (!/^\S+@\S+\.\S+$/.test(email)) e.email = "Invalid email";

//     if (!password) e.password = "Password is required";
//     else if (password.length < 6)
//       e.password = "Password must be at least 6 characters";

//     setErrors(e);
//     return Object.keys(e).length === 0;
//   };

//   const handleSubmit = async (ev) => {
//     ev.preventDefault();
//     if (!validate()) return;

//     setLoading(true);
//     setErrors({});

//     // simulate network latency
//     await new Promise((r) => setTimeout(r, 900));

//     const stored = JSON.parse(localStorage.getItem("user"));
//     if (!stored || stored.email !== email || stored.password !== password) {
//       setErrors({ form: "Invalid email or password" });
//       setLoading(false);
//       return;
//     }

//     // success
//     localStorage.setItem("loggedIn", "true");
//     localStorage.setItem(
//       "username",
//       stored.email.split("@")[0] || stored.email
//     );

//     if (remember) localStorage.setItem("rememberEmail", email);
//     else localStorage.removeItem("rememberEmail");

//     // tiny delay to show loading
//     setTimeout(() => {
//       setLoading(false);
//       navigate("/");
//     }, 400);
//   };

//   const handleSocial = async (provider) => {
//     // simulate social login flow
//     setLoading(true);
//     await new Promise((r) => setTimeout(r, 900));

//     // create a dummy user and log in
//     const dummy = {
//       email: `${provider.toLowerCase()}@example.com`,
//       password: "social",
//     };
//     localStorage.setItem("user", JSON.stringify(dummy));
//     localStorage.setItem("loggedIn", "true");
//     localStorage.setItem("username", provider);
//     setLoading(false);
//     navigate("/");
//   };

//   return (
//     <div className="min-h-screen flex items-center justify-center bg-linear-to-br from-[#071024] to-[#08111a] text-white px-4">
//       <motion.div
//         className="max-w-md w-full bg-white/5 backdrop-blur-md border border-white/6 rounded-2xl p-8 shadow-2xl"
//         initial={{ opacity: 0, y: 12 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.45 }}
//       >
//         <div className="flex items-center gap-4 mb-6">
//           <StockSVG />
//           <div>
//             <h1 className="text-2xl font-bold">Welcome back</h1>
//             <p className="text-sm text-gray-300">
//               Sign in to continue to Market Tracker
//             </p>
//           </div>
//         </div>

//         {errors.form && (
//           <div className="bg-red-600/20 text-red-200 p-2 rounded mb-3 text-sm">
//             {errors.form}
//           </div>
//         )}

//         <form onSubmit={handleSubmit} className="flex flex-col gap-3">
//           {/* email */}
//           <div>
//             <label className="text-sm text-gray-300 mb-1 block">Email</label>
//             <input
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
//               type="email"
//               placeholder="you@company.com"
//               className={`w-full p-3 rounded-lg bg-white/3 placeholder-gray-400 outline-none transition ${
//                 errors.email
//                   ? "border-2 border-red-500"
//                   : "border border-white/6"
//               }`}
//             />
//             {errors.email && (
//               <p className="text-red-400 text-xs mt-1">{errors.email}</p>
//             )}
//           </div>

//           {/* password */}
//           <div>
//             <label className="text-sm text-gray-300 mb-1 block">Password</label>
//             <div className="relative">
//               <input
//                 value={password}
//                 onChange={(e) => setPassword(e.target.value)}
//                 type={showPw ? "text" : "password"}
//                 placeholder="Your password"
//                 className={`w-full p-3 rounded-lg bg-white/3 placeholder-gray-400 outline-none transition ${
//                   errors.password
//                     ? "border-2 border-red-500"
//                     : "border border-white/6"
//                 }`}
//               />
//               <button
//                 type="button"
//                 onClick={() => setShowPw((s) => !s)}
//                 className="absolute right-3 top-1/2 -translate-y-1/2 text-sm text-gray-300"
//                 aria-label="Toggle password visibility"
//               >
//                 {showPw ? "Hide" : "Show"}
//               </button>
//             </div>
//             {errors.password && (
//               <p className="text-red-400 text-xs mt-1">{errors.password}</p>
//             )}
//           </div>

//           {/* remember + forgot */}
//           <div className="flex items-center justify-between text-sm text-gray-300">
//             <label className="flex items-center gap-2">
//               <input
//                 type="checkbox"
//                 checked={remember}
//                 onChange={(e) => setRemember(e.target.checked)}
//                 className="accent-accent"
//               />
//               Remember me
//             </label>
//             <Link to="/register" className="text-blue-300 hover:underline">
//               Create account
//             </Link>
//           </div>

//           {/* submit */}
//           <motion.button
//             type="submit"
//             disabled={loading}
//             whileTap={{ scale: 0.995 }}
//             className="mt-2 relative w-full py-3 rounded-lg bg-linear-to-r from-[#06b6d4] to-[#3b82f6] font-semibold text-black flex items-center justify-center"
//           >
//             {loading ? (
//               <svg
//                 className="animate-spin w-5 h-5 text-black"
//                 viewBox="0 0 24 24"
//               >
//                 <circle
//                   className="opacity-25"
//                   cx="12"
//                   cy="12"
//                   r="10"
//                   stroke="black"
//                   strokeWidth="4"
//                   fill="none"
//                 />
//                 <path
//                   className="opacity-75"
//                   fill="black"
//                   d="M4 12a8 8 0 018-8v8z"
//                 />
//               </svg>
//             ) : (
//               "Sign in"
//             )}
//           </motion.button>
//         </form>

//         {/* OR */}
//         <div className="flex items-center gap-3 my-4">
//           <div className="h-px bg-white/6 flex-1" />
//           <div className="text-sm text-gray-400">or continue with</div>
//           <div className="h-px bg-white/6 flex-1" />
//         </div>

//         <div className="flex gap-3">
//           <button
//             onClick={() => handleSocial("Google")}
//             className="flex-1 py-2 rounded-lg border border-white/6 bg-white/3 hover:bg-white/5 flex items-center justify-center gap-2"
//           >
//             <svg
//               width="16"
//               height="16"
//               viewBox="0 0 48 48"
//               className="inline-block"
//             >
//               <path
//                 fill="#EA4335"
//                 d="M24 9.5c3.9 0 6.8 1.7 8.4 3.2l6.1-6.1C34.1 3 29.6 1 24 1 14.1 1 5.9 6.9 2.5 15.1l7.3 5.6C12 13.1 17.7 9.5 24 9.5z"
//               />
//               <path
//                 fill="#4285F4"
//                 d="M46.5 24.5c0-1.6-.1-2.7-.4-3.9H24v7.4h12.6c-.5 3-2.2 5.6-4.8 7.3l7.3 5.6C44.2 38 46.5 31.9 46.5 24.5z"
//               />
//             </svg>
//             Google
//           </button>

//           <button
//             onClick={() => handleSocial("GitHub")}
//             className="flex-1 py-2 rounded-lg border border-white/6 bg-white/3 hover:bg-white/5 flex items-center justify-center gap-2"
//           >
//             <svg
//               width="16"
//               height="16"
//               viewBox="0 0 24 24"
//               className="inline-block"
//             >
//               <path
//                 fill="currentColor"
//                 d="M12 .5C5.7.5.9 5.3.9 11.6c0 4.7 3 8.7 7.1 10.1.5.1.7-.2.7-.5v-1.9c-2.9.6-3.5-1.2-3.5-1.2-.4-1-1-1.3-1-1.3-.8-.6.1-.6.1-.6.9.1 1.4.9 1.4.9.8 1.4 2.1 1 2.6.8.1-.6.3-1 .6-1.3-2.3-.3-4.7-1.1-4.7-5 0-1.1.4-2 1-2.7-.1-.3-.4-1.3.1-2.7 0 0 .8-.3 2.8 1 .8-.2 1.6-.3 2.4-.3.8 0 1.6.1 2.4.3 2-.1 2.8-1 2.8-1 .5 1.4.2 2.4.1 2.7.6.7 1 1.6 1 2.7 0 3.9-2.4 4.7-4.7 5 .3.3.7.9.7 1.9v2.8c0 .3.2.6.7.5 4.1-1.4 7.1-5.4 7.1-10.1C23.1 5.3 18.3.5 12 .5z"
//               />
//             </svg>
//             GitHub
//           </button>
//         </div>
//       </motion.div>
//     </div>
//   );
// }
