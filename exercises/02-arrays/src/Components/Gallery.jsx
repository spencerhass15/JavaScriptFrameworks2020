import React from "react";
import images from "../images/images";
function Gallery(props) {
    return (
        <div>
            {images.map(image => (
                <img key={image} src={image} />
            ))}
        </div>
    );
}
export default Gallery;