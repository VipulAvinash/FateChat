import { MessageSquare, Sparkles } from "lucide-react";

const NoChatSelected = () => {
  return (
    <div className="w-full flex flex-1 flex-col items-center justify-center p-8 bg-gradient-to-br from-base-100/40 via-base-100/60 to-base-200/40 backdrop-blur-md select-none">
      <div className="max-w-md text-center space-y-6 bg-base-200/50 p-10 rounded-3xl border border-base-300/60 shadow-2xl backdrop-blur-sm animate-all duration-500 hover:shadow-primary/5 hover:border-primary/20 transition-all group">
        {/* Icon Display */}
        <div className="flex justify-center mb-2">
          <div className="relative flex items-center justify-center">
            <div
              className="w-24 h-24 rounded-2xl bg-gradient-to-tr from-primary/20 via-primary/5 to-accent/20 flex items-center
             justify-center shadow-lg border border-primary/10 transition-all duration-300 group-hover:scale-105 group-hover:rotate-3 relative"
            >
              <MessageSquare className="w-12 h-12 text-primary animate-pulse" />
              <div className="absolute -top-1.5 -right-1.5">
                <Sparkles className="w-6 h-6 text-accent animate-spin duration-10000" />
              </div>
            </div>
            <div className="absolute w-32 h-32 bg-primary/10 blur-2xl rounded-full -z-10 animate-fade-in" />
          </div>
        </div>

        {/* Welcome Text */}
        <div className="space-y-2">
          <h2 className="text-3xl font-extrabold bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent tracking-tight">
            Welcome to FateChat
          </h2>
          <p className="text-base-content/70 font-medium max-w-xs mx-auto leading-relaxed">
            Where your chat meets destiny. Select a friend from the sidebar to connect instantly.
          </p>
        </div>

        {/* Decorative subtle element */}
        <div className="pt-2">
          <div className="inline-flex items-center gap-1.5 bg-primary/5 border border-primary/10 rounded-full px-3 py-1.5 text-xs text-primary/80 font-semibold shadow-inner">
            <div className="w-2.5 h-2.5 rounded-full bg-primary animate-ping" />
            Always Secure & Fast
          </div>
        </div>
      </div>
    </div>
  );
};

export default NoChatSelected;


