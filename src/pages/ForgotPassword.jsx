import React, { useState } from "react";
import { motion } from "framer-motion";

export default function ForgotPassword() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);

    setTimeout(() => {
      window.location.href = "/email-verification";
    }, 1500);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#0b0f19] relative overflow-hidden">
      <motion.div
        className="absolute inset-0 opacity-20"
        animate={{ x: [-50, 50, -50] }}
        transition={{ duration: 12, repeat: Infinity }}
      >
        <img src="/market-lines.svg" className="w-full h-full object-cover" />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-[#151a24] p-10 rounded-xl shadow-xl w-[400px] relative z-10"
      >
        <h1 className="text-white text-2xl font-bold mb-2">Forgot Password</h1>
        <p className="text-gray-400 mb-6">
          Enter your email to reset your password.
        </p>

        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <div>
            <label className="text-gray-300 text-sm">Email Address</label>
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full bg-[#1e2533] text-white p-3 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
            />
          </div>

          <motion.button
            whileTap={{ scale: 0.95 }}
            type="submit"
            className="py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-semibold"
          >
            {submitted ? "Sending..." : "Send Reset Link"}
          </motion.button>
        </form>

        <p className="text-gray-400 text-sm mt-6 text-center">
          Remembered your password?{" "}
          <a href="/login" className="text-blue-400 hover:underline">
            Login
          </a>
        </p>
      </motion.div>
    </div>
  );
}

// import React, { useState } from "react";
// import { motion } from "framer-motion";

// export default function ForgotPassword() {
//   const [email, setEmail] = useState("");
//   const [submitted, setSubmitted] = useState(false);

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     setSubmitted(true);
//     setTimeout(() => {
//       window.location.href = "/email-verification";
//     }, 1500);
//   };

//   return (
//     <div className="min-h-screen flex items-center justify-center bg-[#0b0f19] relative overflow-hidden">
//       {/* Animated Background SVG */}
//       <motion.div
//         className="absolute inset-0 opacity-20"
//         animate={{ x: [-50, 50, -50] }}
//         transition={{ duration: 12, repeat: Infinity }}
//       >
//         <img src="/market-lines.svg" className="w-full h-full object-cover" />
//       </motion.div>

//       <motion.div
//         initial={{ opacity: 0, y: 30 }}
//         animate={{ opacity: 1, y: 0 }}
//         className="bg-[#151a24] p-10 rounded-xl shadow-xl w-[400px] relative z-10"
//       >
//         <h1 className="text-white text-2xl font-bold mb-2">Forgot Password</h1>
//         <p className="text-gray-400 mb-6">
//           Enter your email to reset your password.
//         </p>

//         <form onSubmit={handleSubmit} className="flex flex-col gap-4">
//           <div>
//             <label className="text-gray-300 text-sm">Email Address</label>
//             <input
//               type="email"
//               required
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
//               className="w-full bg-[#1e2533] text-white p-3 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
//             />
//           </div>

//           <motion.button
//             whileTap={{ scale: 0.95 }}
//             type="submit"
//             className="py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-semibold"
//           >
//             {submitted ? "Sending..." : "Send Reset Link"}
//           </motion.button>
//         </form>

//         <p className="text-gray-400 text-sm mt-6 text-center">
//           Remembered your password?{" "}
//           <a href="/login" className="text-blue-400 hover:underline">
//             Login
//           </a>
//         </p>
//       </motion.div>
//     </div>
//   );
// }
