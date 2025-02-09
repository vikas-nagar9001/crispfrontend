import Hero from '../Components/Landing/Hero/Hero';
import Sportlight from '../Components/Landing/SportlightEclip/Eclip';
import FeaturedSection from '../Components/Landing/FeaturedSection/Featured';
import CardSection from '../Components/Landing/CardSection/CardSection';
import CodeMirror from '../Components/Landing/CodeMirror/CodeMirror';
import Progress from '../Components/Landing/ProgressSection/Progress';
import AwardSection from '../Components/Landing/AwardSection/Award';
import TestimonialSlider from '../Components/Landing/TestimonialSlider/TestimonialSlider';
import DeveloperSection from '../Components/Landing/DeveloperSection/DeveloperSection';

const LandingPage = () => {
    return (
        <>
            <Hero />
            <Sportlight />
            <FeaturedSection />
            <CardSection />
            <DeveloperSection/>
            <CodeMirror />
            <Progress />
            <AwardSection />
            <TestimonialSlider />
        </>
    )
}

export default LandingPage;