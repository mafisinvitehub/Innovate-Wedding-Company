import AboutPage from './components/AboutPage'
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: "About Innovate Wedding Company | Wedding Experts in Nagercoil",
    description:
        "Learn about Innovate Wedding Company, a premium wedding and event management company based in Nagercoil, serving clients across Tamil Nadu.",
};

const About = () => {
    return (
        <div>
            <AboutPage />
        </div>
    )
}

export default About