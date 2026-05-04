import { THEMES } from "../constants";
import { useThemeStore } from "../store/useThemeStore";
import { Send, Palette, Sparkles, Layout } from "lucide-react";

const PREVIEW_MESSAGES = [
  { id: 1, content: "Hey! How's it going?", isSent: false },
  {
    id: 2,
    content: "I'm doing great! Just testing out the new chat theme.",
    isSent: true,
  },
];

const SettingsPage = () => {
  const { theme, setTheme } = useThemeStore();

  return (
    <div className="min-h-screen container mx-auto px-6 pt-24 max-w-5xl bg-gradient-to-br from-base-100 via-base-200 to-base-300 pb-12 select-none">
      <div className="space-y-8 animate-fade-in">
        {/* Title */}
        <div className="flex flex-col gap-1.5 bg-base-100/60 p-6 rounded-2xl border border-base-300/80 backdrop-blur-md">
          <div className="flex items-center gap-2">
            <Palette className="w-5 h-5 text-primary" />
            <h2 className="text-xl font-extrabold tracking-tight text-base-content/90">Appearance</h2>
          </div>
          <p className="text-sm font-medium text-base-content/60">
            Customize your interface theme and see a live preview of how your chat looks.
          </p>
        </div>

        {/* Theme select section */}
        <div className="bg-base-100/60 backdrop-blur-md rounded-3xl border border-base-300/80 p-8 space-y-6 shadow-xl hover:border-primary/10 transition-all">
          <div className="flex items-center justify-between border-b border-base-300/60 pb-3 mb-2">
            <div className="flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-accent" />
              <span className="font-bold text-base-content/80 text-base">Select Theme</span>
            </div>
            <span className="badge badge-primary badge-outline font-semibold">{theme}</span>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-3">
            {THEMES.map((t) => (
              <button
                key={t}
                className={`
                  group flex flex-col items-center gap-2 p-2.5 rounded-2xl transition-all border
                  ${theme === t ? "bg-base-200 border-primary shadow-lg ring-1 ring-primary/40" : "bg-base-200/40 border-base-300/60 hover:bg-base-200 hover:border-base-300"}
                `}
                onClick={() => setTheme(t)}
              >
                <div
                  className="relative h-10 w-full rounded-xl overflow-hidden shadow-inner border border-base-300/40"
                  data-theme={t}
                >
                  <div className="absolute inset-0 grid grid-cols-4 gap-px p-1.5">
                    <div className="rounded-lg bg-primary"></div>
                    <div className="rounded-lg bg-secondary"></div>
                    <div className="rounded-lg bg-accent"></div>
                    <div className="rounded-lg bg-neutral"></div>
                  </div>
                </div>
                <span className="text-[11px] font-bold truncate w-full text-center text-base-content/80">
                  {t.charAt(0).toUpperCase() + t.slice(1)}
                </span>
              </button>
            ))}
          </div>
        </div>

        {/* Preview Section */}
        <div className="bg-base-100/60 backdrop-blur-md rounded-3xl border border-base-300/80 p-8 space-y-6 shadow-xl hover:border-primary/10 transition-all">
          <div className="flex items-center gap-2 border-b border-base-300/60 pb-3">
            <Layout className="w-4 h-4 text-secondary" />
            <span className="font-bold text-base-content/80 text-base">Interface Preview</span>
          </div>

          <div className="rounded-2xl border border-base-300 overflow-hidden bg-base-100/40 shadow-inner p-4 max-w-lg mx-auto">
            {/* Mock Chat UI */}
            <div className="bg-base-100 rounded-xl shadow-xl overflow-hidden border border-base-300/80">
              {/* Chat Header */}
              <div className="px-4 py-3.5 border-b border-base-300 bg-base-100/60 backdrop-blur-md">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-full bg-primary flex items-center justify-center text-primary-content font-bold relative group">
                    J
                    <span className="absolute bottom-0 right-0 size-2.5 bg-green-500 rounded-full ring-2 ring-base-100" />
                  </div>
                  <div>
                    <h3 className="font-bold text-sm text-base-content">John Doe</h3>
                    <p className="text-xs text-green-500 font-semibold animate-pulse">Online</p>
                  </div>
                </div>
              </div>

              {/* Chat Messages */}
              <div className="p-4 space-y-4 min-h-[220px] max-h-[220px] overflow-y-auto bg-base-100/30 backdrop-blur-sm">
                {PREVIEW_MESSAGES.map((message) => (
                  <div
                    key={message.id}
                    className={`flex ${
                      message.isSent ? "justify-end" : "justify-start"
                    }`}
                  >
                    <div
                      className={`
                        max-w-[80%] rounded-2xl p-3 shadow-md
                        ${
                          message.isSent
                            ? "bg-primary text-primary-content font-medium rounded-tr-none"
                            : "bg-base-200 text-base-content font-medium rounded-tl-none border border-base-300/80"
                        }
                      `}
                    >
                      <p className="text-sm leading-relaxed">{message.content}</p>
                      <p
                        className={`
                          text-[10px] mt-1 text-right font-medium
                          ${
                            message.isSent
                              ? "text-primary-content/70"
                              : "text-base-content/60"
                          }
                        `}
                      >
                        12:00 PM
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Chat Input */}
              <div className="p-4 border-t border-base-300 bg-base-100/60 backdrop-blur-md">
                <div className="flex gap-2">
                  <input
                    type="text"
                    className="input input-bordered input-sm flex-1 text-sm h-10 rounded-xl bg-base-100/50"
                    placeholder="Type a message..."
                    value="This is a preview"
                    readOnly
                  />
                  <button className="btn btn-primary btn-sm h-10 min-h-0 rounded-xl px-3 shadow-md shadow-primary/20">
                    <Send size={16} />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SettingsPage;

