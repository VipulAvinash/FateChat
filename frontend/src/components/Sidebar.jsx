import React, { useEffect, useState } from "react";
import { useChatStore } from "../store/useChatStore";
import { useAuthStore } from "../store/useAuthStore";
import SidebarSkeleton from "./skeletons/SidebarSkeleton";
import { Users, Search, Sparkles } from "lucide-react";

const Sidebar = () => {
  const { getUsers, users, selectedUser, setSelectedUser, isUsersLoading } =
    useChatStore();
  const { onlineUsers } = useAuthStore();
  const [showOnlineOnly, setShowOnlineOnly] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    getUsers();
  }, [getUsers]);

  // Combined search and online status filters
  const filteredUsers = users.filter((user) => {
    const matchesSearch = user.fullName.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesOnline = !showOnlineOnly || onlineUsers.includes(user._id);
    return matchesSearch && matchesOnline;
  });

  if (isUsersLoading) return <SidebarSkeleton />;

  return (
    <aside className="h-full w-20 lg:w-76 border-r border-base-300/60 flex flex-col transition-all duration-300 bg-base-100/40 backdrop-blur-md select-none select-none">
      {/* Header */}
      <div className="border-b border-base-300/60 px-4 py-5 space-y-3 bg-base-100/30 backdrop-blur-sm">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="p-2 bg-primary/10 rounded-xl border border-primary/10 text-primary">
              <Users className="size-6" />
            </div>
            <span className="font-bold text-base hidden lg:block text-base-content/90 tracking-tight">
              Chats
            </span>
          </div>
          <div className="hidden lg:flex items-center gap-1.5 bg-base-200/60 border border-base-300/60 rounded-full px-2.5 py-1 text-xs text-base-content/70">
            <div className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse" />
            <span className="font-medium">{onlineUsers.length - 1} active</span>
          </div>
        </div>

        {/* Search & Show online section */}
        <div className="hidden lg:flex flex-col gap-2.5 pt-1">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 size-5 text-base-content/40" />
            <input
              type="text"
              placeholder="Search people..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-3 py-2 text-xs rounded-xl border border-base-300/80 bg-base-100/50 text-base-content placeholder-base-content/40 focus:outline-none focus:ring-1 focus:ring-primary/40 focus:border-primary/80 transition-all backdrop-blur-sm"
            />
          </div>
          
          <label className="cursor-pointer flex items-center justify-between bg-base-100/30 border border-base-300/60 rounded-xl px-3 py-1.5 hover:bg-base-200/40 transition-colors">
            <div className="flex items-center gap-2">
              <input
                type="checkbox"
                checked={showOnlineOnly}
                onChange={(e) => setShowOnlineOnly(e.target.checked)}
                className="checkbox checkbox-xs checkbox-primary"
              />
              <span className="text-xs font-semibold text-base-content/70">Active Only</span>
            </div>
            <Sparkles className="size-4 text-accent animate-pulse" />
          </label>
        </div>
      </div> 

      {/* User list */}
      <div className="overflow-y-auto flex-1 px-2 py-3 space-y-1 bg-base-100/10">
        {filteredUsers.map((user) => (
          <button
            key={user._id}
            onClick={() => setSelectedUser(user)}
            className={`
              group w-full flex items-center gap-3.5 rounded-2xl px-3 py-2.5
              transition-all duration-300 hover:bg-base-200/50 border border-transparent
              ${
                selectedUser?._id === user._id
                  ? "bg-base-200 border-base-300/80 shadow-lg ring-1 ring-primary/20 backdrop-blur-sm"
                  : ""
              }
            `}
          >
            {/* Profile pic */}
            <div className="relative flex-shrink-0">
              <div className={`p-0.5 rounded-full bg-gradient-to-tr transition-all duration-300 ${selectedUser?._id === user._id ? "from-primary to-accent" : "from-transparent to-transparent"}`}>
                <img
                  src={user.profilePic || "/avatar.png"}
                  alt={user.fullName}
                  className="size-11 lg:size-12 rounded-full object-cover border-2 border-base-100 shadow-sm"
                />
              </div>
              {onlineUsers.includes(user._id) && (
                <span className="absolute bottom-0 right-0 size-3.5 bg-green-500 rounded-full ring-2 ring-base-100 shadow-md animate-pulse" />
              )}
            </div>

            {/* Info */}
            <div className="hidden lg:block flex-1 min-w-0 text-left">
              <div className={`font-bold text-sm tracking-tight truncate ${selectedUser?._id === user._id ? "text-base-content" : "text-base-content/80 group-hover:text-base-content"}`}>
                {user.fullName}
              </div>
              <div className="text-xs font-medium text-base-content/50 flex items-center gap-1 mt-0.5">
                {onlineUsers.includes(user._id) ? (
                  <>
                    <div className="w-1.5 h-1.5 bg-green-500 rounded-full" />
                    <span>Active Now</span>
                  </>
                ) : (
                  <>
                    <div className="w-1.5 h-1.5 bg-base-content/30 rounded-full" />
                    <span>Away</span>
                  </>
                )}
              </div>
            </div>
          </button>
        ))}
        {filteredUsers.length === 0 && (
          <div className="text-center py-6 text-base-content/40 text-xs font-medium bg-base-200/20 rounded-xl border border-dashed border-base-300/40 m-2">
            No contacts found
          </div>
        )}
      </div>
    </aside>
  );
};

export default Sidebar;


