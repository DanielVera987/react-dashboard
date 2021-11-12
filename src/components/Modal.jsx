import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import ModalStrap from 'react-bootstrap/Modal';

const Modal = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Launch demo modal
      </Button>

      <ModalStrap show={show} onHide={handleClose}>
        <ModalStrap.Header closeButton>
          <ModalStrap.Title>ModalStrap heading</ModalStrap.Title>
        </ModalStrap.Header>
        <ModalStrap.Body>Woohoo, you're reading this text in a ModalStrap!</ModalStrap.Body>
        <ModalStrap.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </ModalStrap.Footer>
      </ModalStrap>
    </>
  );
}

export default Modal;
