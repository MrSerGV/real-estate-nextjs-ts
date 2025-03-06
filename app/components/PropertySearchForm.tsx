'use client';
import { useState, FormEvent, ChangeEvent } from 'react';
import { useRouter } from 'next/navigation';

enum PropertyTypes {
    All = 'All',
    Apartment = 'Apartment',
    Studio = 'Studio',
    Condo = 'Condo',
    House = 'House',
    CabinOrCottage = 'Cabin or Cottage',
    Loft = 'Loft',
    Room = 'Room',
    Other = 'Other'
}

type PropertyType = keyof typeof PropertyTypes | typeof PropertyTypes[keyof typeof PropertyTypes];

const PropertySearchForm = () => {
    const [location, setLocation] = useState<string>('');
    const [propertyType, setPropertyType] = useState<PropertyType>(PropertyTypes.All);

    const router = useRouter();

    const handleSubmit = (event:  FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        if (location === '' && propertyType === PropertyTypes.All) {
            router.push('/properties');
        } else {
            const query = `?location=${location}&propertyType=${propertyType}`;

            router.push(`/properties/search-results${query}`);
        }
    };

    return (
        <form
            onSubmit={handleSubmit}
            className='mt-3 mx-auto max-w-2xl w-full flex flex-col md:flex-row items-center'
        >
            <div className='w-full md:w-3/5 md:pr-2 mb-4 md:mb-0'>
                <label htmlFor='location' className='sr-only'>
                    Location
                </label>
                <input
                    type='text'
                    id='location'
                    placeholder='Enter Keywords or Location'
                    className='w-full px-4 py-3 rounded-lg bg-white text-gray-800 focus:outline-none focus:ring focus:ring-blue-500'
                    value={location}
                    onChange={(e: ChangeEvent<HTMLInputElement>) => setLocation(e.target.value)}
                />
            </div>
            <div className='w-full md:w-2/5 md:pl-2'>
                <label htmlFor='property-type' className='sr-only'>
                    Property Type
                </label>
                <select
                    id='property-type'
                    className='w-full px-4 py-3 rounded-lg bg-white text-gray-800 focus:outline-none focus:ring focus:ring-blue-500'
                    value={propertyType}
                    onChange={(e: ChangeEvent<HTMLSelectElement>) => setPropertyType(e.target.value as PropertyType)}
                >
                    {(Object.keys(PropertyTypes) as Array<keyof typeof PropertyTypes>)
                        .map((type, index) => (<option key={index} value={`${type}`}>{type}</option>))}
                </select>
            </div>
            <button
                type='submit'
                className='md:ml-4 mt-4 md:mt-0 w-full md:w-auto px-6 py-3 rounded-lg bg-blue-500 text-white hover:bg-blue-600 focus:outline-none focus:ring focus:ring-blue-500'
            >
                Search
            </button>
        </form>
    )
}

export default PropertySearchForm;