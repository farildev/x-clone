import { Link } from "react-router-dom";
import { FaXTwitter } from "react-icons/fa6";

const Sidebar = () => {
  return (
    <aside className="w-[275px] flex flex-col min-h-screen max-h-screen px-2 border-r sticky z-[2] top-0">
    <div className="py-0.5">
      <Link className="h-[52px] w-[52px] rounded-full flex items-center justify-center hover:bg-[#eff3f41a] transition-colors" to='/'><FaXTwitter size={32} /></Link>
    </div>
    <nav className="gap-4 mt-0.5 mb-1">
      
    </nav>
  </aside>
  )
}

export default Sidebar