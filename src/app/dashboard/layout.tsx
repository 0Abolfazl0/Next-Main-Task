import Link from 'next/link'
import React, { FC, ReactNode } from 'react'
interface IChildren {
    children: ReactNode
}
const DashboardLayout: FC<IChildren> = ({children}) => {
  return (
    <div className="min-h-screen flex flex-row justify-center">
      <header className="fixed top-0 z-50 w-3xl bg-gray-100 shadow-md rounded-3xl m-5 hover:shadow-2xl transition-shadow duration-300">
        <nav className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-14">
          <h1 className="text-lg font-semibold text-gray-800">داشبورد</h1>
          <div className="flex flex-row-reverse items-center space-x-4 space-x-reverse">
            <Link
              href="/about"
              className="text-gray-600 hover:text-blue-600 hover:bg-blue-50 px-2 py-1 rounded-md text-sm font-medium transition-colors duration-200"
            >
              ایونت ها 
            </Link>
            <Link
              href="/"
              className="text-gray-600 hover:text-blue-600 hover:bg-blue-50 px-2 py-1 rounded-md text-sm font-medium transition-colors duration-200"
            >
              خانه
            </Link>
          </div>
        </nav>
      </header>
      <div className="flex flex-row justify-center pt-14 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <main className="flex-1">
          {children}
        </main>
      </div>
    </div>
  )
}

export default DashboardLayout