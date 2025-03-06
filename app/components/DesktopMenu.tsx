import Link from 'next/link';
import { usePathname } from 'next/navigation';

import { ADD_PROPERTIES, HOME, PROPERTIES } from '@/app/api/routes';

const DesktopMenu = () => {
    const pathname = usePathname();
    
    return (
        <div className='hidden md:ml-6 md:block'>
            <div className='flex space-x-2'>
                <Link
                    href={HOME}
                    className={`${
                        pathname === HOME ? 'bg-black' : ''
                    } text-white hover:bg-gray-900 hover:text-white rounded-md px-3 py-2`}
                >
                    Home
                </Link>
                <Link
                    href={PROPERTIES}
                    className={`${
                        pathname === PROPERTIES ? 'bg-black' : ''
                    } text-white hover:bg-gray-900 hover:text-white rounded-md px-3 py-2`}
                >
                    Properties
                </Link>
                <Link
                    href={ADD_PROPERTIES}
                    className={`${
                        pathname === ADD_PROPERTIES ? 'bg-black' : ''
                    } text-white hover:bg-gray-900 hover:text-white rounded-md px-3 py-2`}
                >
                    Add Property
                </Link>
            </div>
        </div>
    )
}

export default DesktopMenu