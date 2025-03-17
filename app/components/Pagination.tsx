import Link from 'next/link';

import { PROPERTIES_PAGINATION_PAGE } from '@/app/api/routes';
import { getDictionary } from '@/app/utils/getDictionary';

interface PaginationProps {
    page: number;
    pageSize: number;
    totalItems: number;

}

const Pagination = async ({ page, pageSize, totalItems }: PaginationProps) => {
    const dict = await getDictionary();
    const totalPages = Math.ceil(totalItems / pageSize);

    return (
        <section className='container mx-auto flex justify-center items-center my-8'>
            {page > 1 ? (
                <Link
                    className='mr-2 px-2 py-1 border border-gray-300 rounded'
                    href={`${PROPERTIES_PAGINATION_PAGE}${page - 1}`}
                >
                    {dict.pagination.previousButtonText}
                </Link>
            ) : null}

            <span className='mx-2'>
        {' '}
                {dict.pagination.counterText.replace("{0}", `${page}`).replace("{1}", `${totalPages}`)}
      </span>

            {page < totalPages ? (
                <Link
                    className='ml-2 px-2 py-1 border border-gray-300 rounded'
                    href={`${PROPERTIES_PAGINATION_PAGE}${page + 1}`}
                >
                    {dict.pagination.nextButtonText}
                </Link>
            ) : null}
        </section>
    )
}
export default Pagination;