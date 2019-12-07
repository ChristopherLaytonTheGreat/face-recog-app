import React from 'react';
import logo from './logo.svg';
import PictureCapture from "./PictureCapture";
import ImageRow from "./ImageRow";
import './App.css';

class App extends React.Component {

  constructor(props){
    super(props);
    this.snapshot = this.snapshot.bind(this);
    this.removeImage = this.removeImage.bind(this);
    this.state = {
      images : []
    }
  }

  snapshot(image) {
    let images = this.state.images || []
    images.push(image);
    this.setState({images: images});
  }

  removeImage(inx) {
    let images = this.state.images;
    images.splice(inx,1);
    this.setState({images: images});
  }

  render() {
    return (
      <div className="App">
        <div className="snapshot-row">
          <ImageRow 
            images={this.state.images}
            onRemoveImage={this.removeImage}
            />
        </div>
        <div className="webcam-wrapper">
          <PictureCapture
            onSnapshot={this.snapshot}
          />
        </div>
      </div>
    );
  }
}

export default App;
