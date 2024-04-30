import Logo from "./logo";
import Menu from "./menu";

const Sidebar = () => {
  return (
    <aside className="w-[275px] flex flex-col min-h-screen max-h-screen px-2 sticky z-[2] top-0">
      <Logo />
      <Menu />
    </aside>
  )
}

export default Sidebar