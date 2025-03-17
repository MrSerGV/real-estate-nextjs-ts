'use client';
import ClipLoader from 'react-spinners/ClipLoader';

import { useTranslation } from '@/app/localization/client/useTranslation';

const override = {
    display: 'block',
    margin: '100px auto',
};

const LoadingPage = () => {
    const { t } = useTranslation('loadingLabel');

    return (
        <ClipLoader
            color='#3b82f6'
            cssOverride={override}
            size={150}
            aria-label={`${t()}`}
        />
    );
};
export default LoadingPage;
