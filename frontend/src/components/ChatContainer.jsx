import { useChatStore } from "../store/useChatStore";
import { useEffect, useRef } from "react";

import ChatHeader from "./ChatHeader";
import MessageInput from "./MessageInput";
import MessageSkeleton from "./skeletons/MessageSkeleton";
import { useAuthStore } from "../store/useAuthStore";
import { formatMessageTime } from "../lib/utils";

const ChatContainer = () => {
  const {
    messages,
    getMessages,
    isMessagesLoading,
    selectedUser,
    subscribeToMessages,
    unsubscribeFromMessages,
  } = useChatStore();
  const { authUser } = useAuthStore();
  const messageEndRef = useRef(null);

  useEffect(() => {
    getMessages(selectedUser._id);

    subscribeToMessages();

    return () => unsubscribeFromMessages();
  }, [selectedUser._id, getMessages, subscribeToMessages, unsubscribeFromMessages]);

  useEffect(() => {
    if (messageEndRef.current && messages) {
      messageEndRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages]);

  if (isMessagesLoading) {
    return (
      <div className="flex-1 flex flex-col overflow-hidden bg-base-100/30 backdrop-blur-sm animate-fade-in">
        <ChatHeader />
        <MessageSkeleton />
        <MessageInput />
      </div>
    );
  }

  return (
    <div className="flex-1 flex flex-col overflow-hidden bg-gradient-to-b from-base-100/30 via-base-100/50 to-base-200/40 backdrop-blur-md select-none">
      <ChatHeader />

      <div className="flex-1 overflow-y-auto p-5 space-y-5">
        {messages.map((message) => {
          const isSentByMe = message.senderId === authUser._id;
          return (
            <div
              key={message._id}
              className={`chat ${isSentByMe ? "chat-end" : "chat-start"} animate-fade-up hover-lift`}
              ref={messageEndRef}
            >
              <div className="chat-image avatar select-none">
                <div className={`size-10 rounded-full p-0.5 bg-gradient-to-tr shadow-md hover:scale-105 transition-all duration-300 ${isSentByMe ? "from-primary/40 to-secondary/40" : "from-secondary/40 to-accent/40"}`}>
                  <img
                    src={
                      isSentByMe
                        ? authUser.profilePic || "/avatar.png"
                        : selectedUser.profilePic || "/avatar.png"
                    }
                    alt="profile pic"
                    className="rounded-full object-cover border border-base-100"
                  />
                </div>
              </div>
              
              {/* TimeStamp */}
              <div className="chat-header mb-1 select-none">
                <time className="text-[10px] font-bold opacity-50 ml-1.5 bg-base-200/60 px-2 py-0.5 rounded-full border border-base-300/40 backdrop-blur-sm">
                  {formatMessageTime(message.createdAt)}
                </time>
              </div>

              {/* Chat Bubble */}
              <div
                className={`chat-bubble flex flex-col p-3.5 rounded-2xl shadow-md backdrop-blur-sm max-w-[85%] sm:max-w-[75%] border select-text transition-all duration-300 hover:shadow-lg
                  ${
                    isSentByMe
                      ? "bg-gradient-to-br from-primary via-primary to-secondary/90 text-primary-content font-medium rounded-tr-none border-primary/20 hover:border-primary/40"
                      : "bg-gradient-to-br from-base-200 via-base-200 to-base-100/80 text-base-content font-medium rounded-tl-none border-base-300/80 hover:border-base-300"
                  }
                `}
              >
                {message.image && (
                  <div className="relative group overflow-hidden rounded-xl border border-base-300/40 shadow-sm mb-2 max-w-full">
                    <img
                      src={message.image}
                      alt="Attachment"
                      className="w-full h-auto max-h-[300px] object-cover rounded-xl transition-all duration-500 group-hover:scale-[1.03]"
                    />
                  </div>
                )}
                {message.text && (
                  <p className="text-sm leading-relaxed whitespace-pre-wrap select-text break-words">
                    {message.text}
                  </p>
                )}
              </div>
            </div>
          );
        })}
        {messages.length === 0 && (
          <div className="text-center py-10 flex flex-col items-center justify-center gap-2 select-none h-full">
            <div className="badge badge-primary badge-outline px-4 py-3 font-semibold text-xs tracking-tight animate-fade-in border-dashed">
              Start of a new chat destiny
            </div>
            <p className="text-base-content/50 text-xs font-medium max-w-xs mx-auto">
              Send a warm wave or a nice message to begin the conversation.
            </p>
          </div>
        )}
      </div>

      <MessageInput />
    </div>
  );
};

export default ChatContainer;

