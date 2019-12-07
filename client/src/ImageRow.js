import React from 'react';
import logo from './logo.svg';
import Webcam from "react-webcam";
import './App.css';


class ImageRow extends React.Component {

    constructor(props){
        super(props);
        this.removeImage = this.removeImage.bind(this);
    }

    removeImage(inx) {
        this.props.onRemoveImage(inx)
    }

    render() {
        let images = this.props.images.map((imageSrc,inx) => {
            return (
                    <li key={inx}>
                        <img onClick={() => {this.removeImage(inx)}} className="snap-shot" src={imageSrc}/>
                    </li>
            );
        });
        return (
            <ul className="snapshot-list">
                {images}
            </ul>
        );
    }
}
  
export default ImageRow;
  