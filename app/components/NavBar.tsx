"use client"; // Ensure this component runs on the client

import { Home, Bell, MessageSquare, Users, Share2, LogIn, LogOut, PlusCircle } from "lucide-react";
import Link from "next/link";
import { useAuth } from "../contexts/AuthContext";

const NavBar = () => {
  const { user, logout } = useAuth();

  return (
    <div className="flex flex-col items-center h-full py-4 space-y-4">
      <NavItem href="/" icon={<Home />} />
      <NavItem href="/notifications" icon={<Bell />} />
      <NavItem href="/chats" icon={<MessageSquare />} />
      <NavItem href="/groups" icon={<Users />} />
      <NavItem href="/share" icon={<Share2 />} />
      <NavItem href="/create" icon={<PlusCircle />} />

      {user ? (
        <button onClick={logout} className="p-2 rounded-lg hover:bg-gray-200">
          <LogOut className="w-6 h-6" />
        </button>
      ) : (
        <NavItem href="/login" icon={<LogIn />} />
      )}
    </div>
  );
};

const NavItem = ({ href, icon }: { href: string; icon: React.ReactNode }) => (
  <Link href={href} className="p-2 rounded-lg hover:bg-gray-200">
    <span className="w-6 h-6">{icon}</span>
  </Link>
);

export default NavBar;
