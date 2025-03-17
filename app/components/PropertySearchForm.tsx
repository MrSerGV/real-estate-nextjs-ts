'use client';
import { useState, ChangeEvent } from 'react';
import { useRouter } from 'next/navigation';

import { useTranslation } from '@/app/localization/client/useTranslation';
import { PROPERTIES, PROPERTIES_SEARCH_RESULT } from '@/app/api/routes';

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
    const { t } = useTranslation('propertySearchForm');
    const [location, setLocation] = useState<string>('');
    const [propertyType, setPropertyType] = useState<PropertyType>(PropertyTypes.All);

    const router = useRouter();

    const handleSubmit = (event:  React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        if (location === '' && propertyType === PropertyTypes.All) {
            router.push(PROPERTIES);
        } else {
            const query = `?location=${location}&propertyType=${propertyType}`;

            router.push(`${PROPERTIES_SEARCH_RESULT}/${query}`);
        }
    };

    return (
        <form
            onSubmit={handleSubmit}
            className='mt-3 mx-auto max-w-2xl w-full flex flex-col md:flex-row items-center'
        >
            <div className='w-full md:w-3/5 md:pr-2 mb-4 md:mb-0'>
                <label htmlFor='location' className='sr-only'>
                    {t('inputLabel')}
                </label>
                <input
                    type='text'
                    id='location'
                    placeholder={t('inputPlaceholder')}
                    className='w-full px-4 py-3 rounded-lg bg-white text-gray-800 focus:outline-none focus:ring focus:ring-blue-500'
                    value={location}
                    onChange={(e: ChangeEvent<HTMLInputElement>) => setLocation(e.target.value)}
                />
            </div>
            <div className='w-full md:w-2/5 md:pl-2'>
                <label htmlFor='property-type' className='sr-only'>
                    {t('selectLabel')}
                </label>
                <select
                    id='property-type'
                    className='w-full px-4 py-3 rounded-lg bg-white text-gray-800 focus:outline-none focus:ring focus:ring-blue-500'
                    value={propertyType}
                    onChange={(e: ChangeEvent<HTMLSelectElement>) => setPropertyType(e.target.value as PropertyType)}
                >
                    {(Object.keys(PropertyTypes) as Array<keyof typeof PropertyTypes>)
                        .map((type, index) => (<option key={index} value={`${type}`}>{t(`${PropertyTypes[type]}`)}</option>))}
                </select>
            </div>
            <button
                type='submit'
                className='md:ml-4 mt-4 md:mt-0 w-full md:w-auto px-6 py-3 rounded-lg bg-blue-500 text-white hover:bg-blue-600 focus:outline-none focus:ring focus:ring-blue-500'
            >
                {t('searchBtnText')}
            </button>
        </form>
    )
}

export default PropertySearchForm;