import React, { useState } from "react";
import { useAuthStore } from "../store/useAuthStore";
import { Mail, Lock, Eye, EyeOff, Loader2, MessageSquare, Sparkles } from "lucide-react";
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
    <div className="min-h-screen grid lg:grid-cols-2 bg-gradient-to-br from-base-100 via-base-200 to-base-300">
      <div className="flex flex-col justify-center items-center p-6 sm:p-12">
        <div className="w-full max-w-md space-y-8 bg-base-100/60 p-8 rounded-3xl border border-base-300/80 shadow-2xl backdrop-blur-md select-none group transition-all duration-300 hover:border-primary/20 hover:shadow-primary/5">
          <div className="text-center">
            <div className="flex flex-col items-center gap-2 group cursor-pointer">
              <div className="size-16 rounded-2xl bg-gradient-to-tr from-primary/20 to-accent/20 flex items-center justify-center group-hover:scale-105 transition-all duration-300 relative border border-primary/10">
                <MessageSquare className="size-8 text-primary animate-pulse" />
                <div className="absolute -top-1 -right-1">
                  <Sparkles className="size-5 text-accent animate-spin duration-10000" />
                </div>
              </div>
              <h1 className="text-3xl font-extrabold mt-3 tracking-tight bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
                Welcome Back
              </h1>
              <p className="text-sm text-base-content/70 font-medium">
                Sign in to your FateChat account
              </p>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="space-y-5">
            {/* Email */}
            <div className="space-y-2">
              <label className="text-sm font-semibold text-base-content/80">Email</label>
              <div className="relative">
                <span className="absolute inset-y-0 left-0 pl-3.5 flex items-center text-base-content/50">
                  <Mail className="size-6" />
                </span>
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  placeholder="Enter your email"
                  className="w-full pl-12 pr-4 py-3 rounded-xl border border-base-300 bg-base-100/50 text-base-content placeholder-base-content/40 focus:outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary transition-all text-sm backdrop-blur-sm"
                />
              </div>
            </div>

            {/* Password */}
            <div className="space-y-2">
              <label className="text-sm font-semibold text-base-content/80">Password</label>
              <div className="relative">
                <span className="absolute inset-y-0 left-0 pl-3.5 flex items-center text-base-content/50">
                  <Lock className="size-6" />
                </span>
                <input
                  type={showPassword ? "text" : "password"}
                  className="w-full pl-12 pr-12 py-3 rounded-xl border border-base-300 bg-base-100/50 text-base-content placeholder-base-content/40 focus:outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary transition-all text-sm backdrop-blur-sm"
                  placeholder="••••••••"
                  value={formData.password}
                  onChange={(e) =>
                    setFormData({ ...formData, password: e.target.value })
                  }
                />
                <button
                  type="button"
                  className="absolute inset-y-0 right-0 pr-3.5 flex items-center text-base-content/40 hover:text-base-content/80 transition-colors"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? (
                    <EyeOff className="size-6" />
                  ) : (
                    <Eye className="size-6" />
                  )}
                </button>
              </div>
            </div>

            {/* Submit Button */}
            <div className="pt-2">
              <button
                type="submit"
                className="w-full py-3 px-4 bg-primary hover:bg-primary/90 text-primary-content rounded-xl transition-all font-semibold text-sm flex items-center justify-center gap-2 shadow-lg shadow-primary/20 hover:scale-[1.02] active:scale-[0.98]"
                disabled={isLoggingIn}
              >
                {isLoggingIn ? (
                  <>
                    <Loader2 className="size-6 animate-spin" />
                    Loading...
                  </>
                ) : (
                  "Sign in"
                )}
              </button>
            </div>
          </form>
          <div className="text-center pt-2">
            <p className="text-sm text-base-content/70">
              Don't have an account?{" "}
              <Link to="/signup" className="link link-primary font-semibold hover:opacity-80 transition-opacity">
                Create Account
              </Link>
            </p>
          </div>
        </div>
      </div>
      {/* Right side section*/}
      <div className="hidden lg:flex items-center justify-center">
        <AuthImagePattern />
      </div>
    </div>
  );
};

export default LoginPage;


