import WorkHeroSection from './WorkHeroSection'
import WorkGallerySection from './WorkGallerySection'
import WorkCTASection from './WorkCTASection'

const OurWorkPage = ({ works }: any) => {
    return (
        <div>
            <WorkHeroSection />
            <WorkGallerySection works={works} />
            <WorkCTASection />
        </div>
    )
}

export default OurWorkPage