import { NavLink } from "react-router-dom";
import { FaXTwitter } from "react-icons/fa6";
const Logo = () => {
  return (
    <div className="py-0.5">
      <NavLink className="h-[52px] w-[52px] rounded-full flex items-center justify-center hover:bg-[#eff3f41a] transition-colors" to='/'><FaXTwitter size={32} /></NavLink>
    </div>
  )
}

export default Logo