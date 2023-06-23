import clsx from "clsx";
import { FC } from "react";
import style from "./page.module.scss";
import { SectionProps } from "./types";

const Sections: FC<SectionProps> = ({ id, heading, columnContent, shouldBeRow, isImageVisible, visualContent }) => {
    return (
        <section className={clsx(style.container)} key={id} id={id}>
            <h1 className={style.heading}>{heading}</h1>

            <div className={clsx(style.content, shouldBeRow && style.columnFlexRow)}>
                {columnContent ? (
                    <div className={style.columnContent}>
                        <h2 className={style.columnHeading}>{columnContent?.columnHeading}</h2>
                        <p className={style.description}>{columnContent?.description}</p>
                        {columnContent?.buttonPrimary ? (
                            <button className={style.buttonPrimary}>{columnContent?.buttonPrimary}</button>
                        ) : null}
                    </div>
                ) : (
                    visualContent
                )}
                {isImageVisible ? <div className={style.imageBox}>{isImageVisible}</div> : null}
            </div>
        </section>
    );
};

export default Sections;
