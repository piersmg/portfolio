import {NavLink} from "react-router-dom";
import {FaSun, FaMoon} from 'react-icons/fa';

const SideBar = () => {
	return (
		<div className="relative top-0 md:left-0 -left-16 h-screen w-16 m-0
			flex flex-col bg-transparent">
			<nav className='flex flex-col absolute top-2/4'>
				<div className='nav-items nav-items flex flex-col ml-16'>
					<NavLink className={({ isActive }) => isActive ? "active" : ""} to={"/"} >
						Home
					</NavLink>
					<NavLink className={({ isActive }) => isActive ? "active" : ""} to={"/about"} >
						About
					</NavLink>
					<NavLink className={({ isActive }) => isActive ? "active" : ""} to={"/contact"} >
						Contact
					</NavLink>
				</div>
				{/* <div id="chevron" className="text-primary dark:text-white"><FaChevronLeft size="20" /></div> */}
			</nav>
			<div id="darkLightSwitch" className="absolute bottom-8 left-8 text-primary dark:text-white hover:text-secondary dark:hover:text-secondary cursor-pointer">
				<FaSun className='hidden dark:block' size="23" /><FaMoon className="block dark:hidden" size="23" />
			</div>
		</div>
	)
};
const SideBarIcon = ({icon, text}) => (
	<div className="sidebar-icon group">
		{icon}
		{text.length > 0 &&
		<span className="sidebar-tooltip group-hover:scale-100">
				{text}
		</span>
		}
	</div>
)

export default SideBar;