import { client } from '@/lib/sanity'
import AboutSection from './AboutSection'
import CTASection from './CTASection '
import HeroSection from './HeroSection'
import ServiceSection from './ServiceSection'
import TestimonialSection from './TestimonialSection'
import WorkSection from './WorkSection'
import { allWorksQuery } from '@/lib/queries'

const HomePage = async () => {
    const works = await client.fetch(allWorksQuery)

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