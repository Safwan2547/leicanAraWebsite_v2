import React, { useEffect } from 'react';
import { motion, useAnimation, useAnimationControls } from 'framer-motion';
import { useLocation } from 'react-router-dom';
import TransitionLink from './TransitionLink';

const SubNavBar = () => {
    // Add your social media links here
    const socialMediaLinks = [
        { name: 'Instagram', url: '#' },
        { name: 'Behance', url: '#' },
        // Add more social media links as needed
    ];

    return (
        <div className="menu-item subnav-bar flex absolute bottom-14 justify-center gap-8">
            {socialMediaLinks.map((link, index) => (
                <a key={index} href={link.url} className="subnav-link text-white buttonC hover:scale-110 duration-500 cursor-pointer hover:animate-pulse hover:text-gray-300 text-2xl transition-all">{link.name}</a>
            ))}
        </div>
    );
};

const NavMenu = ({ navOpen, toggleNav }) => {
    const location = useLocation();
    const isAboutPage = location.pathname === "/AboutPage";
    const isFAQPage = location.pathname === "/FAQPage";
    const controls = useAnimationControls();

    const navVariants = {
        overlayOpen: { clipPath: 'circle(150% at 100% 0)', opacity: 1, transition: { duration: 0.6, ease: "circInOut" } },
        overlayClose: { clipPath: 'circle(0% at 100% 0)', opacity: 1, transition: { duration: 0.6, ease: "circInOut" } }
    };
    const childVarients = {
        overlayOpen: { clipPath: 'circle(150% at 0% 0)', opacity: 1,transform:"scale(1)", transition: {  duration: 1, ease: "circInOut" } },
        overlayClose: { clipPath: 'circle(0% at 0% 0)', opacity: 1,transform:"scale(0.85)", transition: { duration: 1, ease: "circInOut" } }
    };

    useEffect(() => {
        if (navOpen) {
            controls.start("overlayOpen");
        } else {
            controls.start("overlayClose");
        }
    }, [navOpen, controls]);

    return (
        <motion.div animate={controls} variants={navVariants} className={`overflow-hidden overlay no-scrollbar::-webkit-scrollbar z-100 text-center top-0 left-0 w-screen h-screen fixed bg-NightFall ${navOpen ? ' opacity-100' : 'opacity-0 '}`}>
            <motion.div animate={controls} variants={childVarients}>
                <div data-speed="3" className='overlay-menu fixed overflow-hidden flex flex-col w-screen h-screen gap-24 justify-center items-center font-Lora text-8xl text-MainBeige'>
                    <div className={`menu-item `} onClick={() => toggleNav(false)}>
                        <TransitionLink to="/AboutPage" className={`${isAboutPage ? 'opacity-20' : 'opacity-100'} hover:text-LunarTwilight transform ease-in-out transition-button duration-700 hover:scale-100 scale-[90%] hidden lg:block buttonC font-Lora cursor-pointer`}>
                            About
                        </TransitionLink>
                    </div>
                    <div className={`menu-item`} onClick={() => toggleNav(false)}>
                        <TransitionLink to="/FAQPage" className={`${isFAQPage ? 'opacity-20' : 'opacity-100'} hover:text-LunarTwilight transform ease-in-out transition-button duration-700 hover:scale-100 scale-[90%] hidden lg:block buttonC font-Lora cursor-pointer`}>
                            FAQ
                        </TransitionLink>
                    </div>
                    <div className='menu-item'>
                        <a href='#'>Contact</a>
                    </div>
                    <SubNavBar />
                </div>
            </motion.div>
        </motion.div>
    );
};

export default NavMenu;
