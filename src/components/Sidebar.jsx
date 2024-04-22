import { Link } from "react-router-dom";
import { FaXTwitter } from "react-icons/fa6";
import { GoHome } from "react-icons/go";

const Sidebar = () => {
  return (
    <aside className="w-[250px] flex flex-col h-screen px-2 border-r border-gray-500/30">
      <div className="h-[52px] w-full">
        <Link className="py-2" to='/'><FaXTwitter size={32} /></Link>
      </div>
      <nav className="flex flex-col gap-4 mt-5 ">
        <Link to="/" className="flex items-center gap-x-2 text-xl font-base py-2 hover:bg-gray-300/30 w-full rounded-full"><GoHome className="ml-2" size={28}/>Home</Link>
        <Link to="/explore" className="flex items-center gap-x-2 text-xl font-base py-2 hover:bg-gray-300/30 w-full rounded-full"><GoHome className="ml-2" size={28}/>Explore</Link>
        <Link to="/notifications" className="flex items-center gap-x-2 text-xl font-base py-2 hover:bg-gray-300/30 w-full rounded-full"><GoHome className="ml-2" size={28}/>Notifications</Link>
        <Link to="/messages" className="flex items-center gap-x-2 text-xl font-base py-2 hover:bg-gray-300/30 w-full rounded-full"><GoHome className="ml-2" size={28}/>Messages</Link>
        <Link to="/lists" className="flex items-center gap-x-2 text-xl font-base py-2 hover:bg-gray-300/30 w-full rounded-full"><GoHome className="ml-2" size={28}/>Lists</Link>
        <Link to="/bookmarks" className="flex items-center gap-x-2 text-xl font-base py-2 hover:bg-gray-300/30 w-full rounded-full"><GoHome className="ml-2" size={28}/>Bookmarks</Link>
        <Link to="/communities" className="flex items-center gap-x-2 text-xl font-base py-2 hover:bg-gray-300/30 w-full rounded-full"><GoHome className="ml-2" size={28}/>Communities</Link>
        <Link to="/premium" className="flex items-center gap-x-2 text-xl font-base py-2 hover:bg-gray-300/30 w-full rounded-full"><GoHome className="ml-2" size={28}/>Premium</Link>
        <Link to="/profile" className="flex items-center gap-x-2 text-xl font-base py-2 hover:bg-gray-300/30 w-full rounded-full"><GoHome className="ml-2" size={28}/>Profile</Link>
        <Link to="/" className="flex items-center gap-x-2 text-xl font-base py-2 hover:bg-gray-300/30 w-full rounded-full"><GoHome className="ml-2" size={28}/>More</Link>
      </nav>
      <button className="bg-blue-500 outline-none border-none h-[52px] rounded-full max-w-[233px] w-full mt-5">Send</button>
    </aside>
  )
}

export default Sidebar