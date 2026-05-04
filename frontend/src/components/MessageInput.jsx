import React, { useRef, useState } from "react";
import { useChatStore } from "../store/useChatStore";
import { Image, Send, X, Smile } from "lucide-react";
import toast from "react-hot-toast";

const MessageInput = () => {
  const [text, setText] = useState("");
  const [imagePreview, setImagePreview] = useState(null);
  const fileInputRef = useRef(null);
  const { sendMessage } = useChatStore();

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (!file) return;
    if (!file.type.startsWith("image/")) {
      toast.error("Please select an image file.");
      return;
    }
    const reader = new FileReader();
    reader.onloadend = () => {
      setImagePreview(reader.result);
    };
    reader.readAsDataURL(file);
  };

  const removeImage = () => {
    setImagePreview(null);
    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
  };

  const handleSendMessage = async (e) => {
    e.preventDefault();
    if (!text.trim() && !imagePreview) return;
    try {
      await sendMessage({
        text: text.trim(),
        image: imagePreview,
      });
      // Clear form
      setText("");
      setImagePreview(null);
      if (fileInputRef.current) fileInputRef.current.value = "";
    } catch (error) {
      console.log("Failed to send message", error);
    }
  };

  return (
    <div className="p-4 w-full bg-base-100/40 backdrop-blur-md border-t border-base-300/60 select-none">
      {imagePreview && (
        <div className="mb-3 flex items-center gap-2 animate-fade-in bg-base-200/50 p-2 rounded-2xl border border-base-300/40 backdrop-blur-sm max-w-max">
          <div className="relative">
            <img
              src={imagePreview}
              alt="Preview"
              className="w-16 h-16 object-cover rounded-xl border border-primary/20 shadow-sm"
            />
            <button
              onClick={removeImage}
              className="absolute -top-1.5 -right-1.5 w-6 h-6 rounded-full bg-base-100 border border-base-300
              flex items-center justify-center hover:bg-error hover:text-error-content hover:scale-105 active:scale-95 transition-all shadow-md"
              type="button"
            >
              <X className="size-4" />
            </button>
          </div>
        </div>
      )}

      <form onSubmit={handleSendMessage} className="flex items-center gap-2.5">
        <div className="flex-1 flex gap-2 items-center bg-base-100/50 backdrop-blur-sm px-3.5 py-1 rounded-2xl border border-base-300/80 focus-within:border-primary/40 focus-within:ring-2 focus-within:ring-primary/20 transition-all hover:border-base-300">
          <input
            type="text"
            className="flex-1 bg-transparent border-0 outline-none text-sm text-base-content placeholder-base-content/40 focus:outline-none min-h-[44px]"
            placeholder="Type your message..."
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
          <input
            type="file"
            accept="image/*"
            className="hidden"
            ref={fileInputRef}
            onChange={handleImageChange}
          />

          <button
            type="button"
            className={`btn btn-sm btn-ghost btn-circle hover:bg-base-200 hover:text-primary transition-all duration-300 hover:scale-110
                     ${imagePreview ? "text-emerald-500 bg-emerald-50/10" : "text-base-content/40 hover:text-primary/80"}`}
            onClick={() => fileInputRef.current?.click()}
          >
            <Image size={22} />
          </button>
        </div>

        <button
          type="submit"
          className={`btn btn-sm btn-circle h-11 w-11 rounded-2xl shadow-lg border-0 transition-all duration-300 hover:scale-105 active:scale-95
            ${text.trim() || imagePreview 
              ? "bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90 text-primary-content shadow-primary/20" 
              : "bg-base-200 text-base-content/30 cursor-not-allowed"}`}
          disabled={!text.trim() && !imagePreview}
        >
          <Send size={20} className={`${text.trim() || imagePreview ? "translate-x-0.5 animate-pulse" : ""}`} />
        </button>
      </form>
    </div>
  );
};

export default MessageInput;



