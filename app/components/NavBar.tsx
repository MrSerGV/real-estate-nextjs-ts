'use client';
import { useState, useEffect } from 'react';

import MobileMenuButton from '@/app/components/MobileMenuButton';
import Logo from '@/app/components/Logo';
import DesktopMenu from '@/app/components/DesktopMenu';
import RightSideMenu from '@/app/components/RightSideMenu';
import MobileMenu from '@/app/components/MobileMenu';


const Navbar = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<boolean>(false);

    useEffect(() => {

        // Close mobile menu if the viewport size is changed
        window.addEventListener('resize', () => {
            setIsMobileMenuOpen(false);
        });
    }, []);

    return (
        <nav className='bg-blue-700 border-b border-blue-500'>
            <div className='mx-auto max-w-7xl px-2 sm:px-6 lg:px-8'>
                <div className='relative flex h-20 items-center justify-between'>
                    <div className='absolute inset-y-0 left-0 flex items-center md:hidden'>
                        <MobileMenuButton onClickButton={() => setIsMobileMenuOpen(!isMobileMenuOpen)}/>
                    </div>
                    <div className='flex flex-1 items-center justify-center md:items-stretch md:justify-start'>
                        <Logo />
                        <DesktopMenu />
                    </div>
                    <RightSideMenu />
                </div>
            </div>
            {isMobileMenuOpen && <MobileMenu />}
        </nav>
    );
};
export default Navbar;
