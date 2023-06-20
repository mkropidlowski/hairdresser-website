import style from "./heroContent.module.scss";
import { FC } from "react";
import { socialMediaLinks } from "@/app/config/socialmedia/data";
import { LinksProps } from "@/app/config/socialmedia/types";
import Link from "next/link";

interface Props {
    links?: LinksProps[];
}

const HeroContent: FC<Props> = ({ links = socialMediaLinks }) => (
    <div className={style.wrapper}>
        <h1 className={style.heading}>Fryzjerstwo Męskie</h1>
        <div className={style.description}>
            <p className={style.content}>
                Wykonujemy fryzjerstwo męskie, precyzyjne strzyżenia, pielęgnacje włosów, brody oraz golenie. Nasz salon
                powstał z myślą o wymagających klientach, dla których bardzo ważna jest jakość usług... Chcesz się
                przekonać?
            </p>
            <p className={style.welcome}>Zapraszamy!</p>
        </div>
        <div className={style.socialMedia}>
            {Object.values(links).map(({ href, icon }) => {
                return (
                    <Link key={href} href={href}>
                        {icon}
                    </Link>
                );
            })}
        </div>
    </div>
);
export default HeroContent;
