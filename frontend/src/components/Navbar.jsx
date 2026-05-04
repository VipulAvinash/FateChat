import { Link } from "react-router-dom";
import { useAuthStore } from "../store/useAuthStore";
import { LogOut, MessageSquare, Settings, User, Sparkles } from "lucide-react";

const Navbar = () => {
  const { logout, authUser } = useAuthStore();

  return (
    <header className="fixed top-0 z-40 w-full bg-base-100/60 border-b border-base-300/80 backdrop-blur-md select-none transition-all duration-300 hover:border-base-300">
      <div className="container mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo & Brand */}
        <Link
          to="/"
          className="flex items-center gap-3 hover:opacity-95 transition-all group"
        >
          <div className="size-11 rounded-xl bg-gradient-to-tr from-primary/20 via-primary/5 to-accent/20 flex items-center justify-center border border-primary/10 shadow-sm relative transition-transform duration-300 group-hover:scale-105 group-hover:rotate-3">
            <MessageSquare className="w-6 h-6 text-primary" />
            <div className="absolute -top-1 -right-1">
              <Sparkles className="w-4 h-4 text-accent animate-pulse" />
            </div>
          </div>
          <span className="text-2xl font-extrabold tracking-tight bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
            FateChat
          </span>
        </Link>
        <div className="flex items-center gap-3">
          <Link to="/settings" className="btn btn-sm btn-ghost gap-2 border border-transparent hover:border-base-300 rounded-xl px-3 hover:bg-base-200/60 transition-all font-medium text-base-content/80 hover:text-base-content">
            <Settings className="w-5 h-5 text-primary/80" />
            <span className="hidden sm:inline">Settings</span>
          </Link>
          {authUser && (
            <>
              <Link to="/profile" className="btn btn-sm btn-ghost gap-2 border border-transparent hover:border-base-300 rounded-xl px-3 hover:bg-base-200/60 transition-all font-medium text-base-content/80 hover:text-base-content">
                <User className="size-5 text-secondary/80" />
                <span className="hidden sm:inline">Profile</span>
              </Link>
              <button
                onClick={logout}
                className="btn btn-sm btn-outline gap-2 border-base-300 hover:border-error hover:bg-error/10 hover:text-error rounded-xl px-3 transition-all font-medium"
              >
                <LogOut className="w-5 h-5" />
                <span className="hidden sm:inline">Logout</span>
              </button>
            </>
          )}
        </div>
      </div>
    </header>
  );
};

export default Navbar;


