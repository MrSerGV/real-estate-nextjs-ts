import Link from 'next/link';
import { usePathname } from 'next/navigation';

const MobileMenu = () => {
    const pathname = usePathname();
    
    return (
        <div id='mobile-menu'>
            <div className='space-y-1 px-2 pb-3 pt-2'>
                <Link
                    href='/'
                    className={`${
                        pathname === '/' ? 'bg-black' : ''
                    } text-white block rounded-md px-3 py-2 text-base font-medium`}
                >
                    Home
                </Link>
                <Link
                    href='/properties'
                    className={`${
                        pathname === '/properties' ? 'bg-black' : ''
                    } text-white block rounded-md px-3 py-2 text-base font-medium`}
                >
                    Properties
                </Link>
                <Link
                    href='/properties/add'
                    className={`${
                        pathname === '/properties/add' ? 'bg-black' : ''
                    } text-white block rounded-md px-3 py-2 text-base font-medium`}
                >
                    Add Property
                </Link>
            </div>
        </div>
    )
}

export default MobileMenu;