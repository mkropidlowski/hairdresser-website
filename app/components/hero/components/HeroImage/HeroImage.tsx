import style from "./heroImage.module.scss";
import heroBackground from "public/images/background.jpeg";
import Image from "next/image";

const HeroImage = () => (
    <>
        <div className={style.image}>
            <Image src={heroBackground} alt="background" fill={true} priority={true} style={{ objectFit: "cover" }} />
        </div>
    </>
);

export default HeroImage;
