import Sidebar from "./sidebar";
import Rightbar from "./rightbar";
import { Outlet } from "react-router-dom"

const HomeLayout = () => {
  return (
    <div className="flex items-center max-w-[1265px] w-full mx-auto">
      <Sidebar />
      <main className="flex-1 flex gap-[30px]">
        <main className="max-w-[600px] flex-1 border-x">
          <Outlet />
        </main>
        <Rightbar />
      </main>
    </div>  
  )
}

export default HomeLayout