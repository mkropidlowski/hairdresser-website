"use client";
import React, { FC } from "react";
import Slider from "react-slick";
import "./page.css";
import sliderData from "./helpers/data";
import Image from "next/image";

interface GalleryArrowProps {
    currentSlide: number;
    slideCount: number;
    className?: string;
    onClick?: () => void;
}

const ImageSlider: FC = () => {
    if (!Array.isArray(sliderData) || sliderData.length <= 0) {
        return null;
    }

    const GalleryPrevArrow: FC<GalleryArrowProps> = ({ currentSlide, slideCount, ...props }) => {
        const { className, onClick } = props;

        return (
            <div {...props} className="custom-prevArrow" onClick={onClick}>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                    <path d="M16.67 0l2.83 2.829-9.339 9.175 9.339 9.167-2.83 2.829-12.17-11.996z" />
                </svg>
            </div>
        );
    };
    const GalleryNextArrow: FC<GalleryArrowProps> = ({ currentSlide, slideCount, ...props }) => {
        const { className, onClick } = props;

        return (
            <div {...props} className="custom-nextArrow" onClick={onClick}>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                    <path d="M7.33 24l-2.83-2.829 9.339-9.175-9.339-9.167 2.83-2.829 12.17 11.996z" />
                </svg>
            </div>
        );
    };
    const settings = {
        className: "center",
        centerMode: true,
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        nextArrow: <GalleryNextArrow currentSlide={0} slideCount={0} />,
        prevArrow: <GalleryPrevArrow currentSlide={0} slideCount={0} />,
    };
    return (
        <Slider {...settings}>
            {sliderData.map((slide, index) => {
                return (
                    <div key={index} className="image-box">
                        <Image
                            src={slide.image}
                            alt="slider"
                            key={index}
                            className="image"
                            style={{ objectFit: "contain" }}
                            fill
                            priority
                        />
                    </div>
                );
            })}
        </Slider>
    );
};

export default ImageSlider;
