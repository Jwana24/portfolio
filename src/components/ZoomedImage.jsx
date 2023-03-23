// modules
import React from "react";
import Zoom from 'react-medium-image-zoom';

// scss
import 'react-medium-image-zoom/dist/styles.css';

const ZoomedImage = ({ src, alt, className }) => {
    return (
        <Zoom><img src={src} alt={alt} className={className} title={alt} /></Zoom>
    )
}

export default ZoomedImage