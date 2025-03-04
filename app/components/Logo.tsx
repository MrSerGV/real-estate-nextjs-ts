import Link from 'next/link';
import Image from 'next/image';

import logo from '@assets/images/logo-black.png';

const Logo = () => {
    return (
        <Link className='flex flex-shrink-0 items-center' href='/'>
            <Image className='h-10 w-auto' src={logo} alt='RealEstate' />
            <span className='hidden md:block text-white text-2xl font-bold ml-2'>
                RealEstate
            </span>
        </Link> 
    )
}

export default Logo;