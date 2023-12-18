"use client";

import Link from "next/link";
import React from "react";

const Home: React.FC = () => {
  return (
    <div className="bg-gray-100 min-h-screen flex flex-row justify-center items-center joined rounded-md drop-shadow-lg">
      {/* Picture Section */}
      <div className="flex flex-row w-full justify-center items-center">
        <section className="w-[280px] h-full hidden md:block object-cover relative">
          {/* Adjust the image source accordingly */}
          <img
            src="https://images.unsplash.com/photo-1562751362-404243c2eea3?q=80&w=2787&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Picture"
            className="w-full h-full object-cover"
          />
        </section>

        {/* Login Form Section */}
        <div className="w-full max-w-md p-6 bg-white shadow-md text-gray-600">
          <div className="mb-8 text-center">
            <h1 className="my-3 text-3xl font-bold">Sign in</h1>
            <p className="text-sm text-gray-400">
              Sign in to access your account
            </p>
          </div>
          <form action="" className="space-y-6">
            <div className="space-y-4">
              <div>
                <label htmlFor="email" className="block mb-2 text-sm">
                  Email address
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
                />
              </div>
              <div>
                <div className="flex justify-between mb-2">
                  <label htmlFor="password" className="text-sm">
                    Password
                  </label>
                  <a href="#" className="text-xs hover:underline text-gray-400">
                    Forgot password?
                  </a>
                </div>
                <input
                  type="password"
                  name="password"
                  id="password"
                  className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
                />
              </div>
            </div>
            <div className="space-y-2">
              <div>
                <button
                  type="button"
                  className="w-full px-8 py-3 font-semibold rounded-md bg-blue-500 text-white"
                >
                  Sign in
                </button>
              </div>
              <p className="px-6 text-sm text-center text-gray-400">
                Don't have an account yet?
                <Link
                  href="/cms/register"
                  className="hover:underline text-blue-500"
                >
                  Sign up
                </Link>
                .
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
export default Home;
