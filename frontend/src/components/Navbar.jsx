import { Link } from "react-router-dom";
import { useAuthStore } from "../store/useAuthStore";
import { LogOut, MessageSquare, Settings, User } from "lucide-react";

const Navbar = () => {
  const { logout, authUser } = useAuthStore();

  return (
    <header className="fixed top-0 z-40 w-full bg-base-100/80 border-b border-base-300 backdrop-blur-lg">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        {/* Logo & Brand */}
        <Link
          to="/"
          className="flex items-center gap-3 hover:opacity-90 transition-all"
        >
          <div className="size-9 rounded-lg bg-primary/10 flex items-center justify-center">
            <MessageSquare className="w-5 h-5 text-primary" />
          </div>
          <span className="text-xl font-bold tracking-tight text-primary">
            FateChat
          </span>
        </Link>
        <div className="flex items-center gap-2">
          <Link to="/settings" className="btn btn-sm btn-ghost gap-2">
            <Settings className="w-4 h-4" />
            <span className="hidden sm:inline">Settings</span>
          </Link>
          {authUser && (
            <>
              <Link to="/profile" className="btn btn-sm btn-ghost gap-2">
                <User className="size-4" />
                <span className="hidden sm:inline">Profile</span>
              </Link>
              <button
                onClick={logout}
                className="btn btn-sm btn-outline gap-2 hover:bg-base-200 transition-all"
              >
                <LogOut className="w-4 h-4" />
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
