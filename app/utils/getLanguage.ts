import { cookies } from 'next/headers';
import { LANG_KEY } from '@/middleware';

export const getLanguage = async () => {
    const cookieStore = await cookies();
    return cookieStore.get(LANG_KEY)?.value;
}