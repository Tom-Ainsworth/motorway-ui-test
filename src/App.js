import React, { useEffect, useState } from 'react';
import './App.css';
import Modal from './Modal/Modal'

const App = () => {
  const [images, setImages] = useState();
  const [show, setShow] = useState(false);
  useEffect(() => {
    fetch('images?limit=10')
      .then(res => res.json())
      .then(data => {
        console.log('Success:', data);
        setImages(data);
      })
      .catch(error => {
        console.error('Error:', error);
      });
  }, []);


  return (
    <div className='app'>
      {
        images && images.map(img => (
          <div key={img.id} className='card'>
            
            <img src={`${img.user.profile_image}.webp`} className='image-profile' alt={`Profile of ${img.user.name}`} />
            <button className='modal-button' onClick={ () => setShow(true) }>See {img.user.first_name}'s car</button>
            <div className='container'>
              <h4>Name: {`${img.user.name}`}</h4>
              <p>Bio: <br></br>
              {`${img.user.bio}`}</p>
              <Modal url={img.url} alt={`${img.alt_description}`}onClose={() => setShow(false)} show={show}>
                <img src={`${img.url}.jpg`} className='image-car' alt={`${img.alt_description}`} />
              </Modal>
            </div>
          </div>
        ))
      }
    </div>
  );
}



export default App;

