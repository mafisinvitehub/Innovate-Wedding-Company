import React from 'react'
import OurWorkPage from './components/OurWorkPage'
import { allCategoriesQuery, allWorksQuery } from '@/lib/queries';
import { client } from '@/lib/sanity';

const OurWork = async () => {
    // const works = await client.fetch(allWorksQuery);
    const works = await client.fetch(allCategoriesQuery);
    return (
        <div>
            <OurWorkPage works={works} />
        </div>
    )
}

export default OurWork