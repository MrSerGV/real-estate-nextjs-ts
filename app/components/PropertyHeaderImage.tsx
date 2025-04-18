import Image from 'next/image';

import { PROPERTIES } from '@/app/api/routes';

interface PropertyHeaderImageProps {
    image: string;
}

const PropertyHeaderImage = ({ image }: PropertyHeaderImageProps) => {
  return (
    <section>
      <div className='container-xl m-auto'>
        <div className='grid grid-cols-1'>
          <Image
            src={`/images${PROPERTIES}/${image}`}
            alt=''
            className='object-cover h-[400px] w-full'
            width={0}
            height={0}
            sizes='100vw'
            priority={true}
          />
        </div>
      </div>
    </section>
  );
};

export default PropertyHeaderImage;
