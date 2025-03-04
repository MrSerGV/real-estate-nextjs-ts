import Link from 'next/link';

interface ProfileMenuProps {
    onClickProfile: () => void;
    onClickSave: () => void;
    onClickSignOut: () => void;
}

const ProfileMenu = ({ onClickProfile, onClickSave, onClickSignOut }: ProfileMenuProps) => {
    return <div
        id='user-menu'
        className='absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none'
        role='menu'
        aria-orientation='vertical'
        aria-labelledby='user-menu-button'
        tabIndex={-1}
    >
        <Link
            href='/profile'
            className='block px-4 py-2 text-sm text-gray-700'
            role='menuitem'
            tabIndex={-1}
            id='user-menu-item-0'
            onClick={onClickProfile}
        >
            Your Profile
        </Link>
        <Link
            href='/properties/saved'
            className='block px-4 py-2 text-sm text-gray-700'
            role='menuitem'
            tabIndex={-1}
            id='user-menu-item-2'
            onClick={onClickSave}
        >
            Saved Properties
        </Link>
        <button
            onClick={onClickSignOut}
            className='block px-4 py-2 text-sm text-gray-700'
            role='menuitem'
            tabIndex={-1}
            id='user-menu-item-2'
        >
            Sign Out
        </button>
    </div>
}

export default ProfileMenu;