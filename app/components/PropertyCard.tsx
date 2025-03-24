import Image from 'next/image';
import Link from 'next/link';
import {
    FaBed,
    FaBath,
    FaRulerCombined,
    FaMoneyBill,
    FaMapMarker,
} from 'react-icons/fa';

import { PROPERTIES }  from '@/app/api/routes';
import { getDictionary } from '@/app/utils/getDictionary';
import { PropertiesType } from '@/types/propertiesTypes';

export interface PropertyCardProps {
    property: PropertiesType
}

const PropertyCard = async ({ property }: PropertyCardProps) => {
    const dict = await getDictionary();

    const getRateDisplay = () => {
        const { rates } = property;
        if (rates.monthly) {
            return `$${rates.monthly.toLocaleString()}/${dict.propertyCard.propertyMonthlyShort}`;
        } else if (rates.weekly) {
            return `$${rates.weekly.toLocaleString()}/${dict.propertyCard.propertyWeeklyShort}`;
        } else if (rates.nightly) {
            return `$${rates.nightly.toLocaleString()}/${dict.propertyCard.propertyNight}`;
        }
    };

    return (
        <div className='rounded-xl shadow-md relative'>
            <Image
                src={`/images${PROPERTIES}/${property.images[0]}`}
                alt=''
                height={0}
                width={0}
                sizes={'100vw'}
                className='w-full h-auto rounded-t-xl'
                priority={true}
            />
            <div className='p-4'>
                <div className='text-left md:text-center lg:text-left mb-6'>
                    <div className='text-gray-600'>{property.type}</div>
                    <h3 className='text-xl font-bold'>{property.name}</h3>
                </div>
                <h3 className='absolute top-[10px] right-[10px] bg-white px-4 py-2 rounded-lg text-blue-500 font-bold text-right md:text-center lg:text-right'>
                    {getRateDisplay()}
                </h3>

                <div className='flex justify-center gap-4 text-gray-500 mb-4'>
                    <p>
                        <FaBed className='md:hidden lg:inline mr-2' /> {property.beds}
                        <span className='md:hidden lg:inline'>{dict.propertyCard.propertyBeds}</span>
                    </p>
                    <p>
                        <FaBath className='md:hidden lg:inline mr-2' /> {property.baths}
                        <span className='md:hidden lg:inline'>{dict.propertyCard.propertyBaths}</span>
                    </p>
                    <p>
                        <FaRulerCombined className='md:hidden lg:inline  mr-2' />{' '}
                        {property.square_feet}
                        <span className='md:hidden lg:inline'>{dict.propertyCard.propertySquare}</span>
                    </p>
                </div>

                <div className='flex justify-center gap-4 text-green-900 text-sm mb-4'>
                    <p>
                        <FaMoneyBill className='md:hidden lg:inline mr-2' /> {dict.propertyCard.propertyWeekly}
                    </p>
                    <p>
                        <FaMoneyBill className='md:hidden lg:inline mr-2' /> {dict.propertyCard.propertyMonthly}
                    </p>
                </div>

                <div className='border border-gray-100 mb-5'></div>

                <div className='flex flex-col lg:flex-row justify-between mb-4'>
                    <div className='flex align-middle gap-2 mb-4 lg:mb-0'>
                        <FaMapMarker className='text-orange-700 mt-1' />
                        <span className='text-orange-700'>
                            {property.location.city}, {property.location.state}
            </span>
                    </div>
                    <Link
                        href={`${PROPERTIES}/${property._id}`}
                        className='h-[36px] bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg text-center text-sm'
                    >
                        {dict.propertyCard.buttonText}
                    </Link>
                </div>
            </div>
        </div>
    )
}
export default PropertyCard;