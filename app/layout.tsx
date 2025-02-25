import '@assets/styles/globals.css';

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
            <main>{children}</main>
            </body>
        </html>
    );
}
 
export default MainLayout;