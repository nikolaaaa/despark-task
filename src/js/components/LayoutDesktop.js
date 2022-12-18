import React, { useState } from "react";
import Accordions from '../components/_comp/Accordions';
import { accordionsList } from '../api';
import ImageWrapper from '../components/_comp/ImageWrapper';

const LayoutDesktop = () => {
    const [activeTab, setActiveTab] = useState(0);
    
    return (
        <div className="content">
            <Accordions data={accordionsList} handleClick={setActiveTab} activeIndex={activeTab}/>

            <div className="images-wrapper">
                {accordionsList.map(({image, title}, index) => {
                    return (
                        <ImageWrapper 
                            key={index}
                            data={[image, title]}
                            className={`image${index === activeTab ? ' active' : ''}`}
                        />
                    )
                })}
            </div>
        </div>
    );
}

export default LayoutDesktop;