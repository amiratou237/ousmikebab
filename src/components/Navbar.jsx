import { useState } from 'react'
import { Link } from 'react-scroll'
import logo from "../assets/image/logo_restaurant-removebg-preview.png"
function Navbar() {
    const [menu, setMenu] = useState(false);
    const handleChange = () => {
        setMenu(!menu);
    }
    const closeMenu = () => {
        setMenu(false);
    }

    return (
        <div className=" ">
            <div>
                <div className=" flex flex-row justify-between p-5 md:px-32 px-5 bg-white shadow-[0_3px_10px_rgba(0,0,0,0.2)]">
                    <div className=" flex flex-row items-center cursor-pointer">
                        <img src={logo} alt="logo" className=" object-cover h-20 w-35"/>
                    </div>
                    <nav className=" hidden md:flex flex-row items-center text-lg font-medium gap-8">
                        <Link to="home" spy={true} smooth={true} duration={500} className=" hover:text-brightColor transition-all cursor-pointer">Accueil</Link>
                        <Link to="menu" spy={true} smooth={true} duration={500} className=" hover:text-brightColor transition-all cursor-pointer">Menu</Link>
                        <Link to="contact" spy={true} smooth={true} duration={500} className=" hover:text-brightColor transition-all cursor-pointer">Contact</Link>
                        <a href="https://wa.me/393716232953" className="  transition-all  bg-brightColor rounded-3xl p-2 hover:bg-sombreColor ">Commandez</a>
                    </nav>
                    <div className=" md:hidden flex items-center gap-1"> 
                        {menu ? (
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6" onClick={handleChange}>
                                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                            </svg>


                        ) : (
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6" onClick={handleChange}>
                                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                            </svg>

                        )
                        }
                    </div>
                </div>
                <div className={` ${menu ? "translate-x-0" : "-translate-x-full"} lg:hidden flex flex-col absolute bg-black text-white left-0 top-20 font-semibold text-2xl text-center pt-8 pb-4 gap-8 w-full h-fit transition-transform duration-300`}>                    
                    <Link to="home" spy={true} smooth={true} duration={500} className=" hover:text-brightColor transition-all cursor-pointer">Accueil</Link>
                    <Link to="menu" spy={true} smooth={true} duration={500} className=" hover:text-brightColor transition-all cursor-pointer">Menu</Link>
                    <Link to="contact" spy={true} smooth={true} duration={500} className=" hover:text-brightColor transition-all cursor-pointer">Contact</Link>
                    <a href="tel:+39 3716232953" className="  transition-all  bg-brightColor rounded-3xl p-2 hover:bg-sombreColor ">Commandez</a>
                </div>
            </div>
        </div>
    )
}

export default Navbar