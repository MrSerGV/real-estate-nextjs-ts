import PropertyCard, {PropertyCardProps} from '@/app/components/PropertyCard';
import PropertySearchForm from '@/app/components/PropertySearchForm';
import Pagination from '@/app/components/Pagination';
import properties from '@/properties.json';

interface PropertiesPageProps {
    searchParams: {
        pageSize: number;
        page: number;
    }
}

const PropertiesPage = async ({ searchParams }: PropertiesPageProps) => {
    const { pageSize = 9, page = 1 } = await searchParams;
    const total = await properties.length;
    const showPagination = total > pageSize;

    return (
        <>
            <section className='bg-blue-700 py-4'>
                <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-start'>
                    <PropertySearchForm />
                </div>
            </section>
            <section className='px-4 py-6'>
                <div className='container-xl lg:container m-auto px-4 py-6'>
                    <h1 className='text-2xl mb-4'>Browse Properties</h1>
                    {properties.length === 0 ? (
                        <p>No properties found</p>
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