import PropertyCard from '@/app/components/PropertyCard';
import PropertySearchForm from '@/app/components/PropertySearchForm';
import Pagination from '@/app/components/Pagination';
import Property from '@/models/Property';
import connectDB from '@/config/database';
import { PropertiesType } from '@/types/propertiesTypes';
import { getDictionary } from '@/app/utils/getDictionary';

interface PropertiesPageProps {
    searchParams: {
        pageSize: number;
        page: number;
    }
}

const PropertiesPage = async ({ searchParams }: PropertiesPageProps) => {
    await connectDB();
    const dict = await getDictionary();
    const { pageSize = 9, page = 1 } = await searchParams;
    const total = await Property.countDocuments({});
    const showPagination = total > pageSize;
    const skip = (page - 1) * pageSize;
    const properties: PropertiesType[] = await Property.find({}).skip(skip).limit(pageSize);

    return (
        <>
            <section className='bg-blue-700 py-4'>
                <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-start'>
                    <PropertySearchForm />
                </div>
            </section>
            <section className='px-4 py-6'>
                <div className='container-xl lg:container m-auto px-4 py-6'>
                    <h1 className='text-2xl mb-4'>{dict.propertyCard.propertyBrowse}</h1>
                    {properties.length === 0 ? (
                        <p>{dict.propertyCard.propertyManyNotFound}</p>
                    ) : (
                        <div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
                            {properties.map((property, index: number) => (
                                <PropertyCard property={property} key={index} />
                            ))}
                        </div>
                    )}
                    {showPagination && (
                        <Pagination
                            page={page}
                            pageSize={pageSize}
                            totalItems={total}
                        />
                    )}
                </div>
            </section>
        </>
    );
}
 
export default PropertiesPage;