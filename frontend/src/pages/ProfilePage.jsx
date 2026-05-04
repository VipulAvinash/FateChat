import React, { useState } from "react";
import { useAuthStore } from "../store/useAuthStore";
import { Camera, Mail, User, Sparkles, ShieldCheck } from "lucide-react";

const ProfilePage = () => {
  const { authUser, isUpdatingProfile, updateProfile } = useAuthStore();
  const [selectedImg, setSelectedImg] = useState(null);

  const handleImageUpload = async (e) => {
    const file = e.target.files[0];
    if (!file) return;
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = async () => {
      const base64Image = reader.result;
      setSelectedImg(base64Image);
      await updateProfile({ profilePic: base64Image });
    };
  };

  return (
    <div className="min-h-screen pt-24 bg-gradient-to-br from-base-100 via-base-200 to-base-300 pb-12 select-none">
      <div className="max-w-2xl mx-auto p-4 py-4 animate-fade-in">
        <div className="bg-base-100/60 backdrop-blur-md rounded-3xl border border-base-300/80 p-8 space-y-8 shadow-2xl hover:border-primary/15 transition-all duration-300 group">
          <div className="text-center space-y-2">
            <h1 className="text-3xl font-extrabold tracking-tight bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
              My Profile
            </h1>
            <p className="text-sm font-medium text-base-content/60">
              Manage and customize your account details
            </p>
          </div>

          {/* Image section */}
          <div className="flex flex-col items-center gap-4">
            <div className="relative group/avatar cursor-pointer">
              <div className="relative p-1 rounded-full bg-gradient-to-tr from-primary/30 to-accent/30 shadow-xl group-hover/avatar:scale-[1.02] transition-transform duration-300 border border-primary/10">
                <img
                  src={selectedImg || authUser?.profilePic || "/avatar.png"}
                  alt="Profile"
                  className="size-36 rounded-full object-cover border-4 border-base-100 shadow-inner group-hover/avatar:opacity-90 transition-opacity"
                />
              </div>
              <label
                htmlFor="avatar-upload"
                className={`
                  absolute bottom-1 right-1 
                  bg-primary hover:bg-primary/90 hover:scale-110
                  p-3 rounded-full cursor-pointer 
                  transition-all duration-300 shadow-lg text-primary-content border-2 border-base-100
                  ${isUpdatingProfile ? "animate-pulse pointer-events-none" : ""}
                `}
              >
                <Camera className="w-6 h-6" />
                <input
                  type="file"
                  id="avatar-upload"
                  className="hidden"
                  accept="image/*"
                  onChange={handleImageUpload}
                  disabled={isUpdatingProfile}
                />
              </label>
            </div>
            <p className="text-xs font-semibold text-base-content/60 bg-base-200/50 px-3 py-1.5 rounded-full border border-base-300/60 backdrop-blur-sm animate-pulse">
              {isUpdatingProfile
                ? "Uploading your new avatar..."
                : "Click the camera to edit profile picture"}
            </p>
          </div>

          <div className="space-y-5">
            <div className="space-y-1.5">
              <div className="text-sm font-semibold text-base-content/70 flex items-center gap-2 px-1">
                <User className="w-5 h-5 text-primary/70" />
                Full Name
              </div>
              <div className="px-4 py-3 bg-base-200/40 rounded-xl border border-base-300/80 text-base-content backdrop-blur-sm font-medium flex items-center justify-between">
                <span>{authUser?.fullName || "Not set"}</span>
              </div>
            </div>

            <div className="space-y-1.5">
              <div className="text-sm font-semibold text-base-content/70 flex items-center gap-2 px-1">
                <Mail className="w-5 h-5 text-secondary/70" />
                Email Address
              </div>
              <div className="px-4 py-3 bg-base-200/40 rounded-xl border border-base-300/80 text-base-content backdrop-blur-sm font-medium flex items-center justify-between">
                <span>{authUser?.email || "Not set"}</span>
              </div>
            </div>
          </div>

          <div className="mt-6 bg-base-200/40 border border-base-300/80 rounded-2xl p-6 backdrop-blur-sm">
            <h2 className="text-lg font-bold text-base-content/80 mb-4 flex items-center gap-2">
              <ShieldCheck className="w-6 h-6 text-accent" /> Account Information
            </h2>
            <div className="space-y-3 text-sm">
              <div className="flex items-center justify-between py-2.5 border-b border-base-300/60">
                <span className="text-base-content/60 font-medium">Member Since</span>
                <span className="font-semibold text-base-content/80">{authUser?.createdAt?.split("T")[0] || "Unknown"}</span>
              </div>
              <div className="flex items-center justify-between py-2.5">
                <span className="text-base-content/60 font-medium">Account Status</span>
                <span className="badge badge-success badge-outline font-bold flex items-center gap-1.5 py-2.5">
                  <div className="w-1.5 h-1.5 rounded-full bg-success animate-ping" />
                  Active
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;


