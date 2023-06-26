import { FC } from "react";
import style from "./page.module.scss";
import { HeroProps } from "../hero/components/HeroContent/HeroContent";
import { socialMediaLinks } from "@/app/config/socialmedia/data";
import Link from "next/link";

const Footer: FC<HeroProps> = ({ links = socialMediaLinks }) => {
    const date = new Date();
    return (
        <footer className={style.wrapper}>
            <div className={style.visit}>
                <h3>Znajdziesz nas pod adresem: </h3>
                <h1>ul. Szczęśliwa 13 - Tczew</h1>
                <h2>Zarezeruj wizytę juz dziś dzięki Booksy</h2>
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
            <div>
                <h5>
                    <Link href="https://www.mkropidlowski.pl">Wykonał Michał Kropidłowski - {date.getFullYear()}</Link>
                </h5>
            </div>
        </footer>
    );
};

export default Footer;
