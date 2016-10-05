import React from 'react';
import { Link } from 'react-router';

const upload = (e) => {
  e.preventDefault();
  cloudinary.openUploadWidget(CLOUDINARY_OPTIONS, function(error, results){
    if(!error){

      console.log(results);
    }
  }.bind(this));
}

const UploadButton = () => (
  <div className="upload-form">
    <button onClick={upload}>Upload new image!</button>
  </div>
);

export default UploadButton;
