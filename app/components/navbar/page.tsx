"use client";
import { FC, HTMLProps, useEffect, useState } from "react";
import { NavbarProps } from "./helpers/types";
import style from "./page.module.scss";
import { navbarLinks } from "./helpers/data";
import Link from "next/link";
import clsx from "clsx";
import { HairdresserLogo } from "../icons";
import useMediaQuery from "@/app/hooks/useMediaQuery";

export enum BREAKPOINT {
    "MAX-MD" = "(max-width: 768px)",
}

const Navbar: FC<NavbarProps & HTMLProps<HTMLDivElement>> = ({ links = navbarLinks, showMenu, className }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [isMobile, setIsMobile] = useState(false);
    const isMobileDevice = useMediaQuery(BREAKPOINT["MAX-MD"]);

    useEffect(() => {
        if (isMobileDevice) {
            setIsMobile(true);
        } else {
            setIsMobile(false);
        }
    }, [isMobileDevice]);

    const handleMenuClick = () => {
        setIsOpen(!isOpen);
    };

    const handleLinkClick = () => {
        setIsOpen(false);
    };

    return (
        <nav className={style.wrapper}>
            <div className={style.logo}>
                <HairdresserLogo width={50} height={50} />
                <h3>Nazwa_strony</h3>
            </div>

            {isMobile ? (
                <div className={style.hamburgerIcon} onClick={handleMenuClick}>
                    <div className={style.bar}></div>
                    <div className={style.bar}></div>
                    <div className={style.bar}></div>
                </div>
            ) : null}

            <ul className={clsx(style.menu, isOpen ? style.menuOpen : "")}>
                {Object.values(links).map(({ id, text }) => {
                    const linkHref = `/#${id}`;
                    return (
                        <li key={text} className={style.link}>
                            <Link href={linkHref}>
                                <button className={style.button} onClick={handleLinkClick}>
                                    {text}
                                </button>
                            </Link>
                        </li>
                    );
                })}
            </ul>
        </nav>
    );
};

export default Navbar;
