import ServiceHeroSection from './ServiceHeroSection'
import ServicesDetailedSection from './ServicesDetailedSection'
import HowItWorksSection from './HowItWorksSection'
import WhyChooseUsCompact from './WhyChooseUsCompact'
import FAQSection from './FAQSection'
import ServiceCTASection from './ServiceCTASection'

const ServicePage = () => {
    return (
        <div>
            <ServiceHeroSection />
            <ServicesDetailedSection />
            <HowItWorksSection />
            <WhyChooseUsCompact />
            <FAQSection />
            <ServiceCTASection />
        </div>
    )
}

export default ServicePage