import Link from 'next/link';
import { usePathname } from 'next/navigation';

import { ADD_PROPERTIES, HOME, PROPERTIES } from '@/app/api/routes';

const MobileMenu = () => {
    const pathname = usePathname();
    
    return (
        <div id='mobile-menu'>
            <div className='space-y-1 px-2 pb-3 pt-2'>
                <Link
                    href={HOME}
                    className={`${
                        pathname === HOME ? 'bg-black' : ''
                    } text-white block rounded-md px-3 py-2 text-base font-medium`}
                >
                    Home
                </Link>
                <Link
                    href={PROPERTIES}
                    className={`${
                        pathname === PROPERTIES ? 'bg-black' : ''
                    } text-white block rounded-md px-3 py-2 text-base font-medium`}
                >
                    Properties
                </Link>
                <Link
                    href={ADD_PROPERTIES}
                    className={`${
                        pathname === ADD_PROPERTIES ? 'bg-black' : ''
                    } text-white block rounded-md px-3 py-2 text-base font-medium`}
                >
                    Add Property
                </Link>
            </div>
        </div>
    )
}

export default MobileMenu;