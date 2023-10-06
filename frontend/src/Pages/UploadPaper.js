import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Upload.css';

const UploadPaper = () => {
  const [originalImage, setOriginalImage] = useState(null);
  const [studentImage, setStudentImage] = useState(null);
  const navigate = useNavigate();

  const handleImageSelect = (event, type) => {
    const imageFile = event.target.files[0];
    if (type === 'original') {
      setOriginalImage(imageFile);
    } else if (type === 'student') {
      setStudentImage(imageFile);
    }
  };

  const handleDrop = (event, type) => {
    event.preventDefault();
    const imageFile = event.dataTransfer.files[0];
    if (type === 'original') {
      setOriginalImage(imageFile);
    } else if (type === 'student') {
      setStudentImage(imageFile);
    }
  };

  const handleDragOver = (event) => {
    event.preventDefault();
  };

  const uploadImagesToServer = async () => {
    if (!originalImage || !studentImage) {
      return;
    }

    const formData = new FormData();
    formData.append('originalImage', originalImage);
    formData.append('studentImage', studentImage);

    try {
      const response = await fetch('http://localhost:5000/api/upload', {
        method: 'POST',
        body: formData,
      });

      if (response.ok) {
        const data = await response.json();
        const imageId = data._id;

        console.log('Images uploaded successfully');
        console.log('Image ID:', imageId);

        navigate(`/gallery/${imageId}`);
      } else {
        console.error('Image upload failed');
      }
    } catch (error) {
      console.error('Image upload error:', error);
    }
  };

  return (
    <div className="upload-container">
      <div className="content1">
        <h2>Upload The Original Answer Sheet</h2>
        <div
          className="drop-area"
          onDrop={(event) => handleDrop(event, 'original')}
          onDragOver={handleDragOver}
        >
          <label htmlFor="original-file-input" className="file-label">
            <input
              type="file"
              accept="image/*"
              onChange={(event) => handleImageSelect(event, 'original')}
              id="original-file-input"
              className="file-input"
            />
            <p>Drag & drop an original image here or click to browse.</p>
          </label>
          {originalImage && (
            <img
              src={URL.createObjectURL(originalImage)}
              alt="Selected Original"
              className="selected-image"
            />
          )}
        </div>
      </div>
      <div className="content2">
        <h2>Upload The Student Answer Sheet</h2>
        <div
          className="drop-area"
          onDrop={(event) => handleDrop(event, 'student')}
          onDragOver={handleDragOver}
        >
          <label htmlFor="student-file-input" className="file-label">
            <input
              type="file"
              accept="image/*"
              onChange={(event) => handleImageSelect(event, 'student')}
              id="student-file-input"
              className="file-input"
            />
            <p>Drag & drop a student image here or click to browse.</p>
          </label>
          {studentImage && (
            <img
              src={URL.createObjectURL(studentImage)}
              alt="Selected Student"
              className="selected-image"
            />
          )}
        </div>
      </div>

      {originalImage && studentImage && (
        <button className="edit-btn" onClick={uploadImagesToServer}>
          Upload Images
        </button>
      )}
    </div>
  );
};

export default UploadPaper;
