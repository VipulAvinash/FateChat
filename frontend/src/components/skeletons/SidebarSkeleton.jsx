import { Users } from "lucide-react";

const SidebarSkeleton = () => {
  const skeletonContacts = Array(8).fill(null);
  return (
    <aside className="h-full w-20 lg:w-76 border-r border-base-300/60 flex flex-col transition-all duration-300 bg-base-100/40 backdrop-blur-md select-none animate-pulse">
      {/* Header */}
      <div className="border-b border-base-300/60 w-full p-5 bg-base-100/30 backdrop-blur-sm">
        <div className="flex items-center gap-2">
          <div className="p-1.5 bg-base-200 rounded-xl border border-base-300/60">
            <Users className="w-5 h-5 text-base-content/40" />
          </div>
          <span className="font-bold text-base hidden lg:block text-base-content/40 tracking-tight">Chats</span>
        </div>
      </div>
      {/* Skeleton Contacts */}
      <div className="overflow-y-auto w-full py-3 px-2 space-y-1">
        {skeletonContacts.map((_, idx) => (
          <div key={idx} className="w-full p-3 flex items-center gap-3.5 rounded-2xl bg-base-100/20 border border-transparent">
            {/* Avatar skeleton */}
            <div className="relative mx-auto lg:mx-0">
              <div className="skeleton size-11 lg:size-12 rounded-full border-2 border-base-200" />
            </div>
            <div className="hidden lg:block text-left min-w-0 flex-1">
              <div className="skeleton h-4 w-28 mb-2 rounded-md" />
              <div className="skeleton h-3 w-16 rounded-md" />
            </div>
          </div>
        ))}
      </div>
    </aside>
  );
};
export default SidebarSkeleton;

