import { NextRequest, NextResponse } from 'next/server';

import { HOME } from '@/app/api/routes';

export const LANG_KEY = 'lang';
export const DEFAULT_LANGUAGE = 'en';

export function middleware(request: NextRequest): NextResponse {
    const langCookie = request.cookies.get(LANG_KEY);

    if (!langCookie) {
        const response = NextResponse.next();
        response.cookies.set(LANG_KEY, DEFAULT_LANGUAGE, { path: HOME });
        return response;
    }

    return NextResponse.next();
}