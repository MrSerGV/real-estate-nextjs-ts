'use client';
import Link from 'next/link';
import Image from 'next/image';

import logo from '@assets/images/logo-black.png';
import { useTranslation } from '@/app/localization/client/useTranslation';

const Logo = () => {
    const { t } = useTranslation('logoText');

    return (
        <Link className='flex flex-shrink-0 items-center' href='/'>
            <Image className='h-10 w-auto' src={logo} alt='RealEstate' />
            <span className='hidden md:block text-white text-2xl font-bold ml-2'>
                {t()}
            </span>
        </Link> 
    )
}

export default Logo;