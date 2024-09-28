"use client";
import React from "react";
import Link from "next/link";
import { useSession, signOut } from "next-auth/react";

const Navbar = () => {
  const { data: session } = useSession();

  const handleLogout = () => {
    signOut();
  };

  return (
    <div className="flex justify-between items-center m-4 bg-white text-text">
      <Link href="/bicycles">
        <img src="/rebike.svg" alt="Logo" className="h-8 w-8 cursor-pointer" />
      </Link>
      <div className="absolute left-1/2 transform -translate-x-1/2 text-3xl font-bold">
        <span className="text-primary">re</span>
        <span className="text-accent">Bike</span>
      </div>
      {session ? (
        <button
          onClick={handleLogout}
          className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
        >
          Logout
        </button>
      ) : (
        <Link href="/auth/login">
          <button className="bg-primary hover:bg-accent text-white font-bold py-2 px-4 rounded">
            Login
          </button>
        </Link>
      )}
    </div>
  );
};

export default Navbar;
