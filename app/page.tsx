import SearchBar from '@/app/components/SearchBar';
import InfoBoxesList from '@/app/components/InfoBoxesList';
import HomePageProperties from '@/app/components/HomePageProperties';

const HomePage = () => {
    return ( 
        <div className='home-page'>
            <SearchBar />
            <InfoBoxesList />
            <HomePageProperties />
        </div>
    );
}
 
export default HomePage;