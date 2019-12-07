import React from 'react';
import logo from './logo.svg';
import Webcam from "react-webcam";
import './App.css';


class PictureCapture extends React.Component {

    constructor(props){
        super(props);
        this.takeSnapshot = this.takeSnapshot.bind(this);
        this.webCamRef = React.createRef(null);
    }

    takeSnapshot() {
        let imageSrc = this.webCamRef.current.getScreenshot();
        this.props.onSnapshot(imageSrc);
    }

    render() {
        return (
            <React.Fragment>
                <Webcam
                    ref={this.webCamRef}/>
                <button onClick={this.takeSnapshot} type="button">Take Picture!</button>
            </React.Fragment>
        );
    }
}
  
export default PictureCapture;
  