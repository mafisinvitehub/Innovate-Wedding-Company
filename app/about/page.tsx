import AboutPage from './components/AboutPage'
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: "Wedding Services in Nagercoil | Photography, Catering & Event Management",
    description:
        "Explore our premium wedding services in Nagercoil including photography, videography, catering, decoration and full event planning.",
};

const About = () => {
    return (
        <div>
            <AboutPage />
        </div>
    )
}

export default About