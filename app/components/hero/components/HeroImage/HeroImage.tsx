import heroBackground from "public/images/background.jpeg";
import Image from "next/image";

const HeroImage = () => (
    <>
        <div>
            <Image src={heroBackground} alt="background" fill priority style={{ objectFit: "cover" }} />
        </div>
    </>
);

export default HeroImage;
