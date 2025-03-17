import PropertySearchForm from '@/app/components/PropertySearchForm';
import { getDictionary } from '@/app/utils/getDictionary';

const SearchBar = async () => {
    const dict = await getDictionary();

    return (
        <section className='bg-blue-700 py-20 mb-4'>
            <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center'>
                <div className='text-center'>
                    <h1 className='text-4xl font-extrabold text-white sm:text-5xl md:text-6xl'>
                        {dict.homePage.title}
                    </h1>
                    <p className='my-4 text-xl text-white'>
                        {dict.homePage.description}
                    </p>
                </div>
                <PropertySearchForm />
            </div>
        </section>
    )
}

export default SearchBar;