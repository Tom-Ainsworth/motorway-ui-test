import React, { useEffect, useState } from "react";
import "./App.css";
import ModalButton from "./ModalButton/ModalButton";

const App = () => {
  const [images, setImages] = useState();

  useEffect(() => {
    fetch("images?limit=10")
      .then((res) => res.json())
      .then((data) => {
        console.log("Success:", data);
        setImages(data);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }, []);

  return (
    <div className="app">
      {images &&
        images.map((img) => (
          <div key={img.id} className="card">
            <img src={`${img.user.profile_image}.webp`} className="image-profile" alt={`Profile of ${img.user.name}`} />
            <ModalButton img={img} />
            <div className="container">
              <h4>Name: {`${img.user.name}`}</h4>
              <p>
                Bio: <br></br>
                {`${img.user.bio}`}
              </p>
            </div>
          </div>
        ))}
    </div>
  );
};

export default App;
