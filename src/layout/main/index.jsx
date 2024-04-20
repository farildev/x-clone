import Sidebar from "@/components/Sidebar"
import { Outlet } from "react-router-dom"

const HomeLayout = () => {
  return (
    <div className="flex items-center max-w-[1260px] w-full mx-auto">
      <Sidebar />
      <main className="h-screen flex flex-1">
        <main className="w-[600px] py-4 px-2">
          <Outlet />
        </main>
        <div className="flex-1 py-4 px-2">
          Right Sidebar
        </div>
      </main>
    </div>  
  )
}

export default HomeLayout