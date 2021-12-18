import {FaGlobeAmericas, FaSun, FaMoon, FaChevronLeft} from 'react-icons/fa';


const SideBar = () => {
    return (
        <div className="fixed top-0 md:left-0 -left-16 h-screen w-16 m-0
                        flex flex-col
                        dark:bg-sideBar dark:text-white
                        bg-gray-100 text-gray-900
                        shadow-lg">
            <div className='flex flex-col relative h-full'>
                <SideBarIcon icon={<FaGlobeAmericas size="28" />} text="Home"/>
                <div id="darkLightSwitch"><FaSun className='hidden dark:block' size="23" /><FaMoon className="block dark:hidden" size="23" /></div>
                <div id="chevron"><FaChevronLeft size="20" /></div>
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