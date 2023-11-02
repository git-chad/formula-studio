import React from "react";
import GithubBtn from "./GithubBtn";
import GoogleBtn from "./GoogleBtn";
import Link from "next/link";

const Login = () => {
  return (
    <div className="login-container">
      <div className="flex min-h-full flex-1">
        <div className="flex flex-col flex-1 justify-center px-4 p-y-12 sm:px-6 lg:flex-none lg:px-20 xl:px-24">
          <div className="mx-auto w-full max-w-sm lg:w-96">
            <div>
              <div className="logo container flex text-4xl justify-center">
                <p className="font-black bg-green-gradient bg-clip-text text-transparent">{`{`}</p>
                <h1 className="font-bold">Formula Studio</h1>
                <p className="font-black bg-green-gradient bg-clip-text text-transparent">{`}`}</p>
              </div>
              <h2 className="mt-8 text-2xl font-semibold leading-9 tracking-tight">
                Sign in to your account
              </h2>
              <p className="mt-2 text-sm leading-6">
                Already a member?{" "}
                <a href="#" className="font-semibold text-fsapple">
                  Sign in here
                </a>
              </p>
            </div>

            <div className="mt-10">
              <div>
                <form action="#" method="POST" className="space-y-6">
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm leading-6 text-fswhite opacity-60"
                    >
                      Email address
                    </label>
                    <div className="mt-2">
                      <input
                        id="email"
                        name="email"
                        type="email"
                        autoComplete="email"
                        required
                        className="block w-full rounded-lg border-0 py-1.5 shadow-sm text-fsblack focus:ring-2 focus:ring-inset focus:ring-fsapple sm:text-sm sm:leading-6"
                      />
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="password"
                      className="block text-sm leading-6 text-fswhite opacity-60"
                    >
                      Password
                    </label>
                    <div className="mt-2">
                      <input
                        id="password"
                        name="password"
                        type="password"
                        autoComplete="current-password"
                        required
                        className="block w-full rounded-lg border-0 py-1.5 shadow-sm text-fsblack focus:ring-2 focus:ring-inset focus:ring-fsapple sm:text-sm sm:leading-6"
                      />
                    </div>
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <input
                        id="remember-me"
                        name="remember-me"
                        type="checkbox"
                        className="h-4 w-4 rounded-lg border-gray-300"
                      />
                      <label
                        htmlFor="remember-me"
                        className="ml-3 block text-sm leading-6 text-fswhite"
                      >
                        Remember me
                      </label>
                    </div>

                    <div className="text-sm leading-6">
                      <a href="#" className="font-semibold text-fsapple">
                        Forgot password?
                      </a>
                    </div>
                  </div>

                  <div>
                    <Link href="/dashboard">
                      <button
                        type="submit"
                        className="flex w-full justify-center border-fsapple border rounded-lg px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:scale-[102%] transition-transform focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-fsgreen"
                      >
                        Sign in
                      </button>
                    </Link>
                  </div>
                </form>
              </div>
            </div>

            <div className="mt-10">
              <div className="relative">
                <div
                  className="absolute inset-0 flex items-center"
                  aria-hidden="true"
                >
                  <div className="w-full border-t border-gray-200" />
                </div>
                <div className="relative flex justify-center text-sm font-medium leading-6">
                  <span className="rounded px-6 text-fswhite bg-fsblack">
                    Or continue with
                  </span>
                </div>
              </div>

              <div className="mt-6 grid grid-cols-2 gap-4">
                <GoogleBtn />
                <GithubBtn />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
