import OurWorkPage from './components/OurWorkPage'
import { allCategoriesQuery, allWorksQuery } from '@/lib/queries';
import { client } from '@/lib/sanity';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: "Our Wedding Works | Nagercoil Wedding Portfolio",
    description:
        "Explore Innovate Wedding Company's wedding portfolio featuring photography, videography and event management projects across Nagercoil and Tamil Nadu.",
};

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