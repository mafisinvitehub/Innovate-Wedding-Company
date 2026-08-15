import { client } from '@/lib/sanity'
import AboutSection from './AboutSection'
import CTASection from './CTASection '
import HeroSection from './HeroSection'
import ServiceSection from './ServiceSection'
import TestimonialSection from './TestimonialSection'
import WorkSection from './WorkSection'
import { featuredCategoriesQuery } from '@/lib/queries'

const HomePage = async () => {
    const works = await client.fetch(featuredCategoriesQuery)

    return (
        <div>
            <HeroSection />
            <AboutSection />
            <ServiceSection />
            <WorkSection works={works} />
            <TestimonialSection />
            <CTASection />
        </div>
    )
}

export default HomePage