import { useChatStore } from "../store/useChatStore";
import Sidebar from "../components/Sidebar";
import NoChatSelected from "../components/NoChatSelected";
import ChatContainer from "../components/ChatContainer";

const HomePage = () => {
  const { selectedUser } = useChatStore();

  return (
    <div className="min-h-screen bg-gradient-to-br from-base-100 via-base-200 to-base-300 transition-colors duration-500 flex flex-col justify-center">
      <div className="flex items-center justify-center pt-24 pb-10 px-4 md:px-6">
        <div className="bg-base-100/60 backdrop-blur-md rounded-3xl border border-base-300/80 shadow-2xl w-full max-w-7xl h-[calc(100vh-9.5rem)] min-h-[580px] overflow-hidden select-none hover:border-primary/10 transition-all duration-500 flex">
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

