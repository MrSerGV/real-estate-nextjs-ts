import Link from 'next/link';
import { FaArrowLeft } from 'react-icons/fa';

import connectDB from '@/config/database';
import Property from '@/models/Property';
import PropertyHeaderImage from '@/app/components/PropertyHeaderImage';
import PropertyDetails from '@/app/components/PropertyDetails';
import PropertyImages from '@/app/components/PropertyImages';
import BookmarkButton from '@/app/components/BookmarkButton';
import ShareButtons from '@/app/components/ShareButtons';
import { convertToSerializeableObject } from '@/app/utils/convertToObject';
import { getDictionary } from '@/app/utils/getDictionary';
import { PropertiesType } from 'types/propertiesTypes'


interface PropertyPageProps {
    params: {
        id: string
    }
}

const PropertyPage = async ({ params }: PropertyPageProps) => {

  await connectDB();
  const { id } =  await params
  const dict = await getDictionary();
  const propertyDoc = await Property.findById(id).lean();

  if (!propertyDoc) {
    return (
        <h1 className='text-center text-2xl font-bold mt-10'>
          {dict.propertyCard.propertyOneNotFound}
        </h1>
    );
  }

  const property: PropertiesType = convertToSerializeableObject(propertyDoc);

  return (
      <>
        <PropertyHeaderImage image={property.images[0]} />
        <section>
          <div className='container m-auto py-6 px-6'>
            <Link
                href='/properties'
                className='text-blue-500 hover:text-blue-600 flex items-center'
            >
              <FaArrowLeft className='mr-2' />{dict.propertyCard.propertyBack}
            </Link>
          </div>
        </section>
        <section className='bg-blue-50'>
          <div className='container m-auto py-10 px-6'>
            <div className='grid grid-cols-1 md:grid-cols-70/30 w-full gap-6'>
              <PropertyDetails property={property} />
              <aside className='space-y-4'>
                <BookmarkButton />
                <ShareButtons />
              </aside>
            </div>
          </div>
        </section>
        <PropertyImages images={property.images} />
      </>
  );
};
export default PropertyPage;
