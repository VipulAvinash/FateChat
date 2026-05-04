import { useChatStore } from "../store/useChatStore";
import Sidebar from "../components/Sidebar";
import NoChatSelected from "../components/NoChatSelected";
import ChatContainer from "../components/ChatContainer";

const HomePage = () => {
  const { selectedUser } = useChatStore();

  return (
    <div className="min-h-screen bg-gradient-to-tr from-base-100 via-base-200 to-base-300 transition-colors duration-500 flex flex-col justify-center relative overflow-hidden select-none">
      {/* Decorative Orbs */}
      <div className="absolute top-1/4 -left-32 w-96 h-96 bg-primary/10 rounded-full blur-3xl pointer-events-none -z-10 animate-pulse duration-10000" />
      <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-accent/10 rounded-full blur-3xl pointer-events-none -z-10 animate-pulse duration-8000 delay-1000" />

      <div className="flex items-center justify-center pt-24 pb-10 px-4 md:px-6 animate-fade-up">
        <div className="bg-base-100/60 backdrop-blur-xl rounded-3xl border border-base-300/60 shadow-2xl w-full max-w-7xl h-[calc(100vh-9.5rem)] min-h-[580px] overflow-hidden hover:border-primary/20 transition-all duration-500 flex">
          <div className="flex h-full w-full rounded-2xl overflow-hidden bg-base-100/40 backdrop-blur-sm">
            <Sidebar />
            {!selectedUser ? <NoChatSelected /> : <ChatContainer />}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;

