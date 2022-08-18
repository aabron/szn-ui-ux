import React,{useState} from 'react';
import {AiOutlineClose, AiOutlineMenu} from 'react-icons/ai';
import {FiMonitor} from 'react-icons/fi';
import {BsPerson} from 'react-icons/bs';
import {AiOutlineCalendar} from 'react-icons/ai';
import {BsGear} from 'react-icons/bs';
import {RiDashboardLine} from 'react-icons/ri';

const NavBar = () => {
    const [nav, setNav] = useState(false);

    const handleNav = () => {
        setNav(!nav)
    }

    return(
        <div className='flex-col items-center h-24 max-w-[1240px] mx-left px-4 z-[100]'>
            <img className='hidden md:flex w-34 h-32 rounded-xl m-3 fixed' src={require('./logomaybe.png')} alt=''/>
            <ul className='hidden md:flex flex-col fixed mt-40'>
                <li className='p-3'><RiDashboardLine size = "1.9rem" className="navbar-icons"/>DashBoard</li>
                <li className='p-3'><FiMonitor size = "1.9rem" className="navbar-icons"/>Live Game</li>
                <li className='p-3'><BsPerson size = "1.9rem" className="navbar-icons"/>Your SZN NFT's</li>
                <li className='p-3'><AiOutlineCalendar size = "1.9rem" className="navbar-icons"/>Game Schedules</li>
                <li className='p-3'><BsGear size = "1.9rem" className="navbar-icons"/>Settings</li>
            </ul>
            
            <div className={!nav ? 'bg-[#363636] fixed left-0 top-0 w-[40%] h-full border-r border-gray-900 ease-in-out duration-500' : 'fixed left-[-100%]'}>
                <img className='w-28 h-28 rounded-xl m-3' src={require('./logomaybe.png')} alt=''/>
                <ul className='uppercase'>
                    <li className='p-4 border-b border-gray-900'><RiDashboardLine size = "1.9rem" className="navbar-icons"/>DashBoard</li>
                    <li className='p-4 border-b border-gray-900'><FiMonitor size = "1.9rem" className="navbar-icons"/>Live Game</li>
                    <li className='p-4 border-b border-gray-900'><BsPerson size = "1.9rem" className="navbar-icons"/>Your SZN NFT's</li>
                    <li className='p-4 border-b border-gray-900'><AiOutlineCalendar size = "1.9rem" className="navbar-icons"/>Game Schedule</li>
                    <li className='p-4 border-b border-gray-900'><BsGear size = "1.9rem" className="navbar-icons"/>Settings</li>
                </ul>

            </div>
            <div className={!nav ? 'fixed left-40 top-5 z-[30]':'mt-5 z-[30] block md:hidden'} onClick={handleNav}>
                {!nav ? <AiOutlineClose size={30}/>:<AiOutlineMenu size={30}/>}
            </div>
           
        </div>
        
    );
};

export default NavBar;