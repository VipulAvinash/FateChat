import React, { useState } from "react";
import { useAuthStore } from "../store/useAuthStore";
import {Mail,Lock,Eye,EyeOff,Loader2,MessageSquare,User,} from "lucide-react";
import { Link } from "react-router-dom";
import AuthImagePattern from "../components/skeletons/AuthImagePattern";

const LoginPage = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const { login, isLoggingIn } = useAuthStore();
  const handleSubmit = async (e) => {
    e.preventDefault();
    login(formData);
  };
  return (
    <div className="min-h-screen grid lg:grid-cols-2 dark:bg-gray-900">
      <div className="flex flex-col justify-center items-center p-6 sm:p-12">
        <div className="w-full max-w-md space-y-8 bg-white p-8 rounded-2xl shadow-md">
          <div className="text-center">
            <div className="flex flex-col items-center gap-2 group">
              <div className="size-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors duration-200">
                <MessageSquare className="size-6 text-primary" />
              </div>
              <h1 className="text-3xl font-bold mt-2 tracking-tight text-gray-800">
                Welcome Back
              </h1>
              <p className="text-sm text-gray-500">
                Sign in to your account
              </p>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="space-y-5">
            {/* Email */}
            <div className="space-y-2">
              <label className="text-sm font-medium text-black">Email</label>
              <div className="relative">
                <span className="absolute inset-y-0 left-0 pl-3 flex items-center text-black">
                  <Mail className="size-5" />
                </span>
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  placeholder="Enter your email"
                  className="w-full pl-10 pr-4 py-2 rounded-lg border border-gray-300 text-black bg-white placeholder-gray-400 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary transition-all text-sm"
                />
              </div>
            </div>

            {/* Password */}
            <div className="space-y-2">
              <label className="text-sm font-medium text-black">Password</label>
              <div className="relative">
                <span className="absolute inset-y-0 left-0 pl-3 flex items-center text-black">
                  <Lock className="size-5" />
                </span>
                <input
                  type={showPassword ? "text" : "password"}
                  className="w-full pl-10 pr-10 py-2 rounded-lg border border-gray-300 bg-white text-black placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary transition-all text-sm"
                  placeholder="••••••••"
                  value={formData.password}
                  onChange={(e) =>
                    setFormData({ ...formData, password: e.target.value })
                  }
                />
                <button
                  type="button"
                  className="absolute inset-y-0 right-0 pr-3 flex items-center"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? (
                    <EyeOff className="size-5 text-black" />
                  ) : (
                    <Eye className="size-5 text-black" />
                  )}
                </button>
              </div>
            </div>

            {/* Submit Button */}
            <div>
              <button
                type="submit"
                className="w-full py-2 px-4 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors font-medium text-sm flex items-center justify-center gap-2"
                disabled={isLoggingIn}
              >
                {isLoggingIn ? (
                  <>
                    <Loader2 className="size-5 animate-spin" />
                    Loading...
                  </>
                ) : (
                  "Sign in "
                )}
              </button>
            </div>
          </form>
          <div className="text-center">
            <p className="text-black">
              Don't have an account?{" "}
              <Link to="/signup" className="link ">
                Create Account
              </Link>
            </p>
          </div>
        </div>
      </div>
      {/* Right side section*/}
      <div>
        <AuthImagePattern />
      </div>
    </div>
  );
};

export default LoginPage;
