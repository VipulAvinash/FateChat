import { X, Sparkles } from "lucide-react";
import { useAuthStore } from "../store/useAuthStore";
import { useChatStore } from "../store/useChatStore";

const ChatHeader = () => {
  const { selectedUser, setSelectedUser } = useChatStore();
  const { onlineUsers } = useAuthStore();
  const isOnline = onlineUsers.includes(selectedUser?._id);

  return (
    <div className="p-4 border-b border-base-300/60 bg-base-100/40 backdrop-blur-md select-none transition-all duration-300">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3.5">
          {/* Avatar */}
          <div className="avatar select-none">
            <div className={`size-12 rounded-full p-0.5 bg-gradient-to-tr shadow-md relative group ${isOnline ? "from-primary to-accent animate-pulse ring-offset-2 ring-2 ring-primary/20" : "from-base-300 to-base-200"}`}>
              <img
                src={selectedUser?.profilePic || "/avatar.png"}
                alt={selectedUser?.fullName}
                className="rounded-full object-cover border border-base-100"
              />
            </div>
          </div>

          {/* User info */}
          <div className="flex flex-col">
            <div className="flex items-center gap-1.5">
              <h3 className="font-bold text-base tracking-tight text-base-content/90">{selectedUser?.fullName}</h3>
              {isOnline && <Sparkles className="size-5 text-accent animate-pulse" />}
            </div>
            <p className="text-xs font-semibold flex items-center gap-1.5 mt-0.5">
              {isOnline ? (
                <>
                  <span className="w-1.5 h-1.5 bg-green-500 rounded-full" />
                  <span className="text-green-500">Active Now</span>
                </>
              ) : (
                <>
                  <span className="w-1.5 h-1.5 bg-base-content/40 rounded-full" />
                  <span className="text-base-content/50">Away</span>
                </>
              )}
            </p>
          </div>
        </div>

        {/* Close button */}
        <button
          className="btn btn-sm btn-ghost btn-circle hover:bg-error/15 hover:text-error hover:scale-105 active:scale-95 transition-all text-base-content/40"
          onClick={() => setSelectedUser(null)}
        >
          <X className="size-5" />
        </button>
      </div>
    </div>
  );
};

export default ChatHeader;


