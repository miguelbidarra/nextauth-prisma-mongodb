"use client";

import React, { useEffect, useState } from "react";
import { signIn, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { FaGoogle } from "react-icons/fa";

const SignInForm = () => {
  const router = useRouter();
  const  session = useSession();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async () => {
    try {
      const res = await signIn("credentials", {
        email,
        password,
        redirect: false,
      });

      if (!res || res.ok !== true) {
      } else {
        router.refresh();
      }
    } catch (err) {
      console.log(err);
    }
  };

  const handleGoogleSignIn = async () => {
    await signIn("google", { callbackUrl: "/" });
  };

  const handleRegister = () => {
    router.push("/auth/register");
  };

  useEffect(() => {
    if (session.data) {
      router.refresh();
      router.push("/");
    }
  }, [session]);

  return (
    <div className="flex items-center justify-center min-h-screen bg-background">
      <div className="bg-white p-8 rounded-lg w-full max-w-md">
        <h1 className="text-2xl font-bold text-text mb-6 text-center">Sign In</h1>
        <div className="flex flex-col gap-4">
          <input
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full p-3 border border-gray-300 rounded-lg"
            placeholder="Email"
          />
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full p-3 border border-gray-300 rounded-lg"
            placeholder="Password"
          />
          <button
            onClick={handleSubmit}
            className="w-full bg-primary text-white p-3 rounded-lg hover:bg-accent"
          >
            Sign in
          </button>
          <button
            onClick={handleGoogleSignIn}
            className="w-full bg-text text-white p-3 rounded-lg hover:bg-gray-500 flex items-center justify-center gap-2"
          >
            <FaGoogle />
            Sign in with Google
          </button>
          <button
            onClick={handleRegister}
            className="w-full text-primary p-3 rounded-lg hover:bg-blue-50"
          >
            No account? Create one
          </button>
        </div>
      </div>
    </div>
  );
};

export default SignInForm;