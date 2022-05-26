import React, { useState } from "react";
import Button from "../Button/Button";
import Modal from "../Modal/Modal";

function ModalButton(props) {
  const [show, setShow] = useState();

  const img = props.img;
  const label = img.user.first_name;

  function onclick() {
    setShow(true);
  }
  return (
    <div>
      <Button label={label} onClick={onclick} />
      <Modal url={img.url} alt={`${img.alt_description}`} onClose={() => setShow(false)} show={show}>
        <img src={`${img.url}.jpg`} className="image-car" alt={`${img.alt_description}`} />
      </Modal>
    </div>
  );
}

export default ModalButton;
