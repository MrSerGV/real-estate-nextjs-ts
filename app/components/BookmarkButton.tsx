'use client';
import { useState } from 'react';
import { FaBookmark } from 'react-icons/fa';

import { useTranslation } from '@/app/localization/client/useTranslation';


const BookmarkButton = () => {
  const { t } = useTranslation('bookmark');
  const [isBookmarked, setIsBookmarked] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleClick = () => {};

  if (loading) return <p className='text-center'>{t('bookmarkLoading')}</p>;

  return isBookmarked ? (
    <button
      onClick={handleClick}
      className='bg-red-500 hover:bg-red-600 text-white font-bold w-full py-2 px-4 rounded-full flex items-center justify-center'
    >
      <FaBookmark className='mr-2' />{t('removeBookmark')}
    </button>
  ) : (
    <button
      onClick={handleClick}
      className='bg-blue-500 hover:bg-blue-600 text-white font-bold w-full py-2 px-4 rounded-full flex items-center justify-center'
    >
      <FaBookmark className='mr-2' />{t('bookmarkText')}
    </button>
  );
};
export default BookmarkButton;
