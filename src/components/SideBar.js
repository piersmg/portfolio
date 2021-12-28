import { NavLink } from "react-router-dom";
import { FaMoon } from 'react-icons/fa';
import { BsFillSunFill } from "react-icons/bs";

const SideBar = () => {
	return (
		<div className="fixed flex top-0 md:-left-8 lg:left-0 h-screen md:w-16 m-0 flex-col bg-white dark:bg-primary md:bg-transparent z-20" id="nav-wrap">
			<div className="flex md:hidden flex-col rounded-full bg-secondary fixed right-4 bottom-4 p-3 h-14 w-14 justify-center items-center shadow-md overflow-hidden" id="menuToggle">
				<input type="checkbox" className="block w-10 h-10 absolute cursor-pointer opacity-0 z-20" onClick={navOpenClose}/>
				<span></span>
				<span></span>
				<span></span>
			</div>
			<nav className='hidden md:flex flex-col absolute top-2/4 w-full md:w-auto'>
				<div className='nav-items flex flex-col md:ml-16 mx-auto justify-center items-center md:items-start'>
					<NavLink className={({ isActive }) => isActive ? "active" : ""} to={"/"} >
						Home
					</NavLink>
					<NavLink className={({ isActive }) => isActive ? "active" : ""} to={"/about"} >
						About
					</NavLink>
					{/* <NavLink className={`mb-4 font-bold relative hover:text-secondary ${({ isActive }) => isActive ? "active" : ""}`} to={"/about"} >
						About
					</NavLink> */}
					<NavLink className={({ isActive }) => isActive ? "active" : ""} to={"/contact"} >
						Contact
					</NavLink>
				</div>
				{/* <div id="chevron" className="text-primary dark:text-white"><FaChevronLeft size="20" /></div> */}
			</nav>
			<div id="darkLightSwitch" className="hidden md:flex absolute bottom-8 left-8 md:left-16 lg:left-8 text-primary dark:text-white hover:text-secondary dark:hover:text-secondary cursor-pointer transition-transform">
				<BsFillSunFill className='hidden dark:block' size="23" /><FaMoon className="block dark:hidden" size="20" />
				{/* <div id="circle"></div> */}
			</div>
		</div>
	)
};

function navOpenClose(e) {
	const nav = document.getElementById('nav-wrap');
	const navInner = nav.querySelector('nav');
	const darkLightSwitch = nav.querySelector('#darkLightSwitch');
	const navItems = nav.querySelectorAll('.nav-items a');
	if(e.target.checked === true) {
		nav.classList.add('active');
		navInner.classList.remove('hidden');
		darkLightSwitch.classList.remove('hidden');
		document.body.style.overflow = 'hidden';
		navItems.forEach(item => {
			item.addEventListener('click', (e) => {
				nav.classList.remove('active');
				navInner.classList.add('hidden');
				darkLightSwitch.classList.add('hidden');
				document.body.style.overflow = 'auto';
				nav.querySelector('#menuToggle input').checked = false;
			})
		});
	} else {
		nav.classList.remove('active');
		navInner.classList.add('hidden');
		darkLightSwitch.classList.add('hidden');
		document.body.style.overflow = 'auto';
	}
}

// const SideBarIcon = ({icon, text}) => (
// 	<div className="sidebar-icon group">
// 		{icon}
// 		{text.length > 0 &&
// 		<span className="sidebar-tooltip group-hover:scale-100">
// 				{text}
// 		</span>
// 		}
// 	</div>
// )

export default SideBar;