import React, { useState } from "react";
import { Badge, Modal } from "react-bootstrap";

function InfoButton() {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <div className="p-3">
        <h1>
          <Badge
            type="button"
            className="text-danger border border-danger"
            variant="warning"
            onClick={handleShow}
          >
            ?
          </Badge>
        </h1>
      </div>

      <Modal show={show} onHide={handleClose} centered size="lg">
        <Modal.Header className="bg-warning text-danger" closeButton>
          <Modal.Title>How to Play</Modal.Title>
        </Modal.Header>
        <Modal.Body className="bg-warning">
          <h4>Get from the green number to the red number in as few moves as possible using only the five bit operators.</h4>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default InfoButton;
