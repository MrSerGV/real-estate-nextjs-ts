import Link from 'next/link';

import Navbar from '@/app/components/NavBar';

const HomePage = () => {
    return ( 
        <div className='home-page'>
            <Navbar />
            <h1>Home Page</h1>
            <Link href='/properties'>
                Properties
            </Link>
        </div>
    );
}
 
export default HomePage;