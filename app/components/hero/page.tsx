import HeroContent from "./components/HeroContent/HeroContent";
import HeroImage from "./components/HeroImage/HeroImage";
import style from "./page.module.scss";

const Hero = () => {
    return (
        <div className={style.wrapper}>
            <HeroImage />
            <HeroContent />
        </div>
    );
};

export default Hero;
