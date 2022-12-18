import React from "react";
import Slider from "react-slick";
import { accordionsList } from "../../api";
import ImageWrapper from "../_comp/ImageWrapper";

const SlickSlider = () => {
    const settings = {
        dots: true,
        arrows: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        centerMode: true,
        centerPadding: '32px',
        appendDots: dots => (
            <ul className="slick-dots">{dots}</ul>
        ),
        customPaging: i => (<div className="dot"></div>)
    };

    return (
        <Slider {...settings}>
            {accordionsList.map(({icon, image, title, content}, index) => {
                return (
                    <div key={index} className="slide">
                        <h3 className="slide-title">
                            {icon && icon}
                            {title}
                        </h3>

                        <ImageWrapper 
                            key={index}
                            data={[image, title]}
                            className={'slide-image'}
                        />

                        <div className="slide-content">{content}</div>
                    </div>
                )
            })}
        </Slider>
    );
}

export default SlickSlider;