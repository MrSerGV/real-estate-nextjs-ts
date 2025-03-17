import Link from 'next/link';

import PropertyCard from './PropertyCard';
import properties from '@/properties.json';
import { PROPERTIES } from '@/app/api/routes';
import { getDictionary } from '@/app/utils/getDictionary';

const HomePageProperties = async () => {
    const recentProperties = properties.slice(0,3);
    const dict = await getDictionary();
    
    return (
        <>
            <section className='px-4 py-6'>
                <div className='container-xl lg:container m-auto'>
                    <h2 className='text-3xl font-bold text-blue-500 mb-6 text-center'>
                        {dict.homePageProperties.recentPropertiesText}
                    </h2>
                    <div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
                        {recentProperties.length === 0 ? (
                            <p>{dict.homePageProperties.noPropertiesFoundText}</p>
                        ) : (
                            recentProperties.map((property) => (
                                <PropertyCard key={property._id} property={property} />
                            ))
                        )}
                    </div>
                </div>
            </section>
            <section className='m-auto max-w-lg my-10 px-6'>
                <Link
                    href={PROPERTIES}
                    className='block bg-black text-white text-center py-4 px-6 rounded-xl hover:bg-gray-700'
                >
                    {dict.homePageProperties.viewAllPropertiesText}
                </Link>
            </section>
        </>
    );
};

export default HomePageProperties;
