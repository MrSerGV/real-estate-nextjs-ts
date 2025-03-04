import Link from 'next/link';
import { usePathname } from 'next/navigation';

const DesktopMenu = () => {
    const pathname = usePathname();
    
    return (
        <div className='hidden md:ml-6 md:block'>
            <div className='flex space-x-2'>
                <Link
                    href='/'
                    className={`${
                        pathname === '/' ? 'bg-black' : ''
                    } text-white hover:bg-gray-900 hover:text-white rounded-md px-3 py-2`}
                >
                    Home
                </Link>
                <Link
                    href='/properties'
                    className={`${
                        pathname === '/properties' ? 'bg-black' : ''
                    } text-white hover:bg-gray-900 hover:text-white rounded-md px-3 py-2`}
                >
                    Properties
                </Link>
                <Link
                    href='/properties/add'
                    className={`${
                        pathname === '/properties/add' ? 'bg-black' : ''
                    } text-white hover:bg-gray-900 hover:text-white rounded-md px-3 py-2`}
                >
                    Add Property
                </Link>
            </div>
        </div>
    )
}

export default DesktopMenu