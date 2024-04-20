import { Link } from "react-router-dom";
import { FaXTwitter } from "react-icons/fa6";
import { GoHome } from "react-icons/go";

const Sidebar = () => {
  return (
    <aside className="w-[250px] flex flex-col h-screen px-2 py-4 border-r border-gray-500/30">
      <Link to='/'><FaXTwitter size={32} /></Link>
      <nav className="flex flex-col gap-4 mt-5 ">
        <Link className="flex items-center gap-x-2 text-xl font-medium px-2 py-3 hover:bg-gray-300/30 w-fit rounded-full"><GoHome size={28}/>Home</Link>
        <Link className="flex items-center gap-x-2 text-xl font-medium px-2 py-3 hover:bg-gray-300/30 w-fit rounded-full"><GoHome size={28}/>Anasayfa</Link>
        <Link className="flex items-center gap-x-2 text-xl font-medium px-2 py-3 hover:bg-gray-300/30 w-fit rounded-full"><GoHome size={28}/>Anasayfa</Link>
        <Link className="flex items-center gap-x-2 text-xl font-medium px-2 py-3 hover:bg-gray-300/30 w-fit rounded-full"><GoHome size={28}/>Notifications</Link>
        <Link className="flex items-center gap-x-2 text-xl font-medium px-2 py-3 hover:bg-gray-300/30 w-fit rounded-full"><GoHome size={28}/>Anasayfa</Link>
        <Link className="flex items-center gap-x-2 text-xl font-medium px-2 py-3 hover:bg-gray-300/30 w-fit rounded-full"><GoHome size={28}/>Anasayfa</Link>

      </nav>
    </aside>
  )
}

export default Sidebar