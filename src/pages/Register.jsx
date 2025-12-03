import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { Eye, EyeOff, Github, Mail } from "lucide-react";

export default function Register() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [confirmPass, setConfirmPass] = useState("");
  const [showPass, setShowPass] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);
  const [error, setError] = useState("");
  const [strength, setStrength] = useState("");

  // Password Strength Checker
  const checkStrength = (value) => {
    if (value.length < 4) return "Bad";
    if (value.length < 6) return "Weak";
    if (value.length < 8) return "Good";
    return "Strong";
  };

  const handleRegister = (e) => {
    e.preventDefault();

    if (!email || !pass || !confirmPass) {
      setError("All fields are required.");
      return;
    }

    if (!email.includes("@")) {
      setError("Invalid email format.");
      return;
    }

    if (pass !== confirmPass) {
      setError("Passwords do not match.");
      return;
    }

    if (pass.length < 6) {
      setError("Password must be at least 6 characters.");
      return;
    }

    setError("");

    // Save user to localStorage
    const users = JSON.parse(localStorage.getItem("users")) || [];

    const exists = users.find((u) => u.email === email);
    if (exists) {
      setError("User already exists. Try logging in.");
      return;
    }

    users.push({ email, password: pass });
    localStorage.setItem("users", JSON.stringify(users));

    navigate("/login");
  };

  return (
    <div className="relative w-full h-screen flex items-center justify-center bg-[#0B0F17] overflow-hidden">
      {/* 🔥 Animated SVG Background */}
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

      {/* Register Card */}
      <motion.div
        initial={{ opacity: 0, y: 35 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="relative z-10 w-[420px] p-8 rounded-2xl bg-white/10 backdrop-blur-lg shadow-xl border border-white/20"
      >
        <h2 className="text-3xl font-semibold text-white text-center mb-6">
          Create Your Account 🚀
        </h2>

        <form onSubmit={handleRegister} className="flex flex-col gap-4">
          {/* Email Input */}
          <div>
            <label className="text-sm text-gray-300">Email</label>
            <input
              type="email"
              className={`w-full p-3 mt-1 rounded-lg bg-white/10 text-white outline-none border ${
                error ? "border-red-500" : "border-white/20"
              }`}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          {/* Password */}
          <div>
            <label className="text-sm text-gray-300">Password</label>
            <div
              className={`flex items-center bg-white/10 border mt-1 rounded-lg ${
                error ? "border-red-500" : "border-white/20"
              }`}
            >
              <input
                type={showPass ? "text" : "password"}
                className="w-full p-3 bg-transparent text-white outline-none"
                value={pass}
                onChange={(e) => {
                  setPass(e.target.value);
                  setStrength(checkStrength(e.target.value));
                }}
              />
              <button
                type="button"
                className="px-3 text-gray-300"
                onClick={() => setShowPass(!showPass)}
              >
                {showPass ? <EyeOff size={20} /> : <Eye size={20} />}
              </button>
            </div>

            {/* Password Strength Indicator */}
            {pass && (
              <p
                className={`text-sm mt-1 ${
                  strength === "Bad"
                    ? "text-red-500"
                    : strength === "Weak"
                    ? "text-orange-400"
                    : strength === "Good"
                    ? "text-yellow-400"
                    : "text-green-400"
                }`}
              >
                Strength: {strength}
              </p>
            )}
          </div>

          {/* Confirm Password */}
          <div>
            <label className="text-sm text-gray-300">Confirm Password</label>
            <div
              className={`flex items-center bg-white/10 border mt-1 rounded-lg ${
                error ? "border-red-500" : "border-white/20"
              }`}
            >
              <input
                type={showConfirm ? "text" : "password"}
                className="w-full p-3 bg-transparent text-white outline-none"
                value={confirmPass}
                onChange={(e) => setConfirmPass(e.target.value)}
              />
              <button
                type="button"
                className="px-3 text-gray-300"
                onClick={() => setShowConfirm(!showConfirm)}
              >
                {showConfirm ? <EyeOff size={20} /> : <Eye size={20} />}
              </button>
            </div>
          </div>

          {/* Error Message */}
          {error && <p className="text-red-400 text-sm">{error}</p>}

          {/* Register Button */}
          <motion.button
            whileTap={{ scale: 0.95 }}
            className="w-full p-3 rounded-lg bg-green-500 hover:bg-green-600 text-black font-semibold mt-2 transition"
          >
            Register
          </motion.button>
        </form>

        <div className="flex items-center my-4">
          <div className="flex-1 h-px bg-white/20"></div>
          <p className="text-gray-300 text-sm px-3">OR</p>
          <div className="flex-1 h-px bg-white/20"></div>
        </div>

        {/* Social Signup */}
        <div className="flex flex-col gap-3">
          <button className="flex items-center gap-3 bg-white/20 p-3 rounded-lg hover:bg-white/30 transition text-white">
            <Mail size={18} /> Sign up with Google
          </button>

          <button className="flex items-center gap-3 bg-white/20 p-3 rounded-lg hover:bg-white/30 transition text-white">
            <Github size={18} /> Sign up with GitHub
          </button>
        </div>

        {/* Login Link */}
        <p className="text-center text-gray-300 text-sm mt-4">
          Already have an account?{" "}
          <span
            onClick={() => navigate("/login")}
            className="text-green-400 cursor-pointer hover:underline"
          >
            Login here
          </span>
        </p>
      </motion.div>
    </div>
  );
}
