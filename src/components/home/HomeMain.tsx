import HomeHero from '@/components/home/HomeHero';
import HomeProjects from '@/components/home/HomeProjects';
import HomeAbout from '@/components/home/HomeAbout';
import HomeSkills from '@/components/home/HomeSkills';
import HomeContact from '@/components/home/HomeContact';
import HomeExperience from '@/components/home/HomeExperience';

const HomeMain = () => {
    return (
        <main className="container mx-auto px-4">
            <HomeHero />
            <HomeAbout />
            <HomeSkills />
            <HomeExperience />
            <HomeProjects />
            <HomeContact />
        </main>
    );
};

export default HomeMain;