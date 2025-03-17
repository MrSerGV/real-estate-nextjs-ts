'use client'
import Image from 'next/image';

import profileDefault from '@assets/images/profile.png';
import { useTranslation } from '@/app/localization/client/useTranslation';

interface ProfileDropdownButtonProps {
    onClickButton: () => void;
}

const ProfileDropdownButton = ({ onClickButton }: ProfileDropdownButtonProps) => {
    const { t } = useTranslation('menu');

    return (
            <div>
                <button
                    type='button'
                    className='relative flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800'
                    id='user-menu-button'
                    aria-expanded='false'
                    aria-haspopup='true'
                    onClick={onClickButton}
                >
                    <span className='absolute -inset-1.5'></span>
                    <span className='sr-only'>{t('openUserMenuButtonText')}</span>
                    <Image
                        className='h-8 w-8 rounded-full'
                        src={profileDefault}
                        alt=''
                        width={40}
                        height={40}
                    />
                </button>
            </div>
    )
}

export default ProfileDropdownButton;