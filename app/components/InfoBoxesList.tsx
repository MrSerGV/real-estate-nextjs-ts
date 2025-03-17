import InfoBox from '@/app/components/InfoBox';

import { ADD_PROPERTIES, PROPERTIES } from '@/app/api/routes';
import { getDictionary } from '@/app/utils/getDictionary';

const InfoBoxesList = async () => {
    const dict = await getDictionary();

    return (
        <section>
            <div className='container-xl lg:container m-auto'>
                <div className='grid grid-cols-1 md:grid-cols-2 gap-4 p-4 rounded-lg'>
                    <InfoBox
                        heading={dict.infoBoxesList.headingText1}
                        backgroundColor='bg-gray-100'
                        buttonInfo={{
                            text: dict.infoBoxesList.buttonText1,
                            link: PROPERTIES,
                            backgroundColor: 'bg-black',
                        }}
                    >
                        {dict.infoBoxesList.infoText1}
                    </InfoBox>
                    <InfoBox
                        heading={dict.infoBoxesList.headingText2}
                        backgroundColor='bg-blue-100'
                        buttonInfo={{
                            text: dict.infoBoxesList.buttonText2,
                            link: ADD_PROPERTIES,
                            backgroundColor: 'bg-blue-500',
                        }}
                    >
                        {dict.infoBoxesList.infoText2}
                    </InfoBox>
                </div>
            </div>
        </section>
    )
}

export default InfoBoxesList