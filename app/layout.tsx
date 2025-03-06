import '@assets/styles/globals.css';

import Navbar from '@/app/components/NavBar';
import Footer from '@/app/components/Footer';

export const metadata = {
    title: 'RealEstate',
    description: 'Find Your Real Estate Property',
    keywords: 'real estate, rental, property',
  };

interface MainLayoutProps {
    children: React.ReactNode;
}

const MainLayout = ({ children }: MainLayoutProps) => {
    return ( 
        <html> 
            <body>
            <Navbar />
            <main>{children}</main>
            <Footer />
            </body>
        </html>
    );
}
 
export default MainLayout;