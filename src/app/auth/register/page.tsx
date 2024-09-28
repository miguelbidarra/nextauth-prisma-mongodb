'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';

const Register = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const res = await fetch("/api/auth/register", {
      method: "POST",
      body: JSON.stringify({
        email: email,
        password: password,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (res.ok) {
      router.push("/auth/login");
    }
  };

  const handleLoginRedirect = () => {
    router.push("/auth/login");
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-background">
      <div className="bg-white p-8 rounded-lg w-full max-w-md">
        <h1 className="text-2xl font-bold text-text mb-6 text-center">Register</h1>
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
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
            type="submit"
            className="w-full bg-primary text-white p-3 rounded-lg hover:bg-accent"
          >
            Sign up
          </button>
        </form>
        <button
          onClick={handleLoginRedirect}
          className="w-full mt-4 text-primary p-3 rounded-lg hover:bg-blue-50"
        >
          Have an account? Login
        </button>
      </div>
    </div>
  );
};

export default Register;