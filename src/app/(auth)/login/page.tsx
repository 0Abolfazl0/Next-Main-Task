import React from 'react'
import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';
const LoginPage = () => {
  const LoginHandler = async (formdata: FormData) => {
    "use server"
    const cookieStore = await cookies()
    const username = formdata.get("username")
    const password = formdata.get("password")
    if(username === "Admin" && password === "password") {
      cookieStore.set("token", `${username}-${password}-my-token`);
      redirect("/dashboard")
    }
  }
  return (
    <div className="flex justify-center items-center min-h-screen">
      <form action={LoginHandler} className="w-full max-w-sm bg-white/90 backdrop-blur-sm p-8 rounded-xl shadow-lg">
        <div className="flex flex-col gap-5">
          <div className="flex-1">
            <label htmlFor="username" className="text-sm font-medium text-teal-700">نام کاربری</label>
            <input
              type="text"
              name="username"
              id="username"
              placeholder="نام کاربری خود را وارد کنید"
              className="w-full mt-2 p-3 border border-teal-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 text-right placeholder:text-right placeholder:text-teal-400 transition-all duration-300"
            />
          </div>
          <div className="flex-1">
            <label htmlFor="password" className="text-sm font-medium text-teal-700">رمز عبور</label>
            <input
              type="password"
              name="password"
              id="password"
              placeholder="رمز عبور خود را وارد کنید"
              className="w-full mt-2 p-3 border border-teal-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 text-right placeholder:text-right placeholder:text-teal-400 transition-all duration-300"
            />
          </div>
          <button
            type="submit"
            className="w-full mt-6 bg-teal-600 text-white p-3 rounded-lg hover:bg-teal-700 hover:scale-105 transition-all duration-300"
          >
            ورود
          </button>
        </div>
      </form>
    </div>
  );
}

export default LoginPage