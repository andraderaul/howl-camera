import React, { useState, Fragment } from 'react';
//import logo from './logo.svg';
import Camera from 'react-html5-camera-photo';
import 'react-html5-camera-photo/build/css/index.css';

import './App.css';
import ImagePreview from './ImagePreview';

function App() {
  const [dataUri, setDataUri] = useState('');

  // function handleTakePhoto(dataUri) {
  //   console.log('takePhoto');
  // }

  function removeImage() {
    setDataUri('');
  }

  function handleTakePhotoAnimationDone(dataUri) {
    console.log('takePhoto');
    console.log(dataUri);
    setDataUri(dataUri);
  }

  function handleCameraError(error) {
    console.log('handleCameraError', error);
  }

  function handleCameraStart(stream) {
    console.log('handleCameraStart');
  }

  function handleCameraStop() {
    console.log('handleCameraStop');
  }

  const isFullscreen = false;
  return (
    <div>
      {(dataUri)
        ?
        <Fragment>
          <ImagePreview dataUri={dataUri}
            isFullscreen={isFullscreen} />
          <button onClick={removeImage}>New Picture</button>
        </Fragment>
        :
        <Camera
          onTakePhotoAnimationDone={handleTakePhotoAnimationDone}
          isFullscreen={isFullscreen}
          onCameraError={handleCameraError}
          onCameraStart={handleCameraStart}
          onCameraStop={handleCameraStop}
        />}
    </div>
  );
}

export default App;
