import React from "react";

const ImageWrapper = ({
    className,
    data = [],
}) => {
    const [image, title] = data;

    return (
        <div className={className}>
            <img src={image} alt={title}/>
        </div>
    )
}

export default ImageWrapper;