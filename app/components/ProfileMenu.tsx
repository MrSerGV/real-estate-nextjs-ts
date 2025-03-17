'use client'

import Link from 'next/link';

import { useTranslation } from '@/app/localization/client/useTranslation';
import { PROFILE, PROPERTIES_SAVED } from '@/app/api/routes';

interface ProfileMenuProps {
    onClickProfile: () => void;
    onClickSave: () => void;
    onClickSignOut: () => void;
}

const ProfileMenu = ({ onClickProfile, onClickSave, onClickSignOut }: ProfileMenuProps) => {
    const { t } = useTranslation('profileMenu');

    return <div
        id='user-menu'
        className='absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none'
        role='menu'
        aria-orientation='vertical'
        aria-labelledby='user-menu-button'
        tabIndex={-1}
    >
        <Link
            href={PROFILE}
            className='block px-4 py-2 text-sm text-gray-700'
            role='menuitem'
            tabIndex={-1}
            id='user-menu-item-0'
            onClick={onClickProfile}
        >
            {t('profileButtonText')}
        </Link>
        <Link
            href={PROPERTIES_SAVED}
            className='block px-4 py-2 text-sm text-gray-700'
            role='menuitem'
            tabIndex={-1}
            id='user-menu-item-2'
            onClick={onClickSave}
        >
            {t('savePropertiesButtonText')}
        </Link>
        <button
            onClick={onClickSignOut}
            className='block px-4 py-2 text-sm text-gray-700'
            role='menuitem'
            tabIndex={-1}
            id='user-menu-item-2'
        >
            {t('singOutButtonText')}
        </button>
    </div>
}

export default ProfileMenu;