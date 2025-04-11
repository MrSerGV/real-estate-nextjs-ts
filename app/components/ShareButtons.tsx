'use client';
import { useTranslation } from '@/app/localization/client/useTranslation';

const ShareButtons = () => {
  const { t } = useTranslation('shareButtons');

  return (
    <>
      <h3 className='text-xl font-bold text-center pt-2'>
        {t('shareText')}
      </h3>
      <div className='flex gap-3 justify-center pb-5'>
      </div>
    </>
  );
};
export default ShareButtons;
