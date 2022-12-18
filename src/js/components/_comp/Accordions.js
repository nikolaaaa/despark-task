import React, { useState, useRef, useEffect } from 'react';
import ImageWrapper from './ImageWrapper';

const Accordions = ({
    data = null,
    activeIndex,
    handleClick = () => {}
}) => {
    const [height, setHeight] = useState(0);
    const contentRef = useRef(null);
    
    // Set accourdion height
    useEffect(() => {

        setTimeout(() => {
            if(contentRef.current) {
                setHeight(contentRef.current.scrollHeight);
            }
        }, 400);
        
        window.addEventListener('resize', () => {
            if(contentRef.current) {
                setHeight(contentRef.current.scrollHeight);
            }
        });
        
    }, []);

    return (
        <div className="accordion">
            {data.map(({icon, title, content, image}, index) => {
                return (
                    <div className={`accordion-item${index === activeIndex ? ' open' : ''}`} key={index}>
                        <div className="accordion-title" onClick={() => handleClick(index)}>
                            {icon && icon}
                            <h3>{title}</h3>

                            <i className="arrow d-none d-block-sm"></i>
                        </div>

                        <div 
                            ref={contentRef}
                            className="accordion-content"
                            style={{ 
                                maxHeight: `${index === activeIndex ? `${height}px` : ''}`,
                            }}
                        >
                            <p className="m-0">{content}</p>
                            
                            {image && (
                                <ImageWrapper data={[image, title]} className={'mobile-image-wrapper d-none d-block-sm'} />
                            )}
                        </div>
                    </div>
                )
            })}
        </div>
    )
}

export default Accordions;