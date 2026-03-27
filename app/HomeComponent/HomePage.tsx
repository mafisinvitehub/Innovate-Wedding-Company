import AboutSection from './AboutSection'
import CTASection from './CTASection '
import HeroSection from './HeroSection'
import ServiceSection from './ServiceSection'
import TestimonialSection from './TestimonialSection'
import WorkSection from './WorkSection'

const HomePage = () => {
    return (
        <div>
            <HeroSection />
            <AboutSection />
            <ServiceSection />
            <WorkSection />
            <TestimonialSection />
            <CTASection />
        </div>
    )
}

export default HomePage