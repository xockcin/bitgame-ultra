import React, { useState } from "react";
import { Badge, Modal, ButtonGroup, Button } from "react-bootstrap";

const Menu = () => {
  return (
    <ButtonGroup vertical size="lg">
      <Button variant="success">About</Button>
      <Button variant="danger">Tutorial</Button>
    </ButtonGroup>
  )
}

const HelpModal = (props) => {
    return (
      <Modal show={props.show} onHide={props.handleClose} centered size="sm">
        <Modal.Header className="bg-warning text-danger" closeButton>
          <Modal.Title>Menu</Modal.Title>
        </Modal.Header>
        <Modal.Body className="bg-warning d-flex justify-content-center">
          <Menu />
        </Modal.Body>
      </Modal>
    );
}

const InfoButton = () => {
  const [show, setShow] = useState(true);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <div id="Popover1" className="p-3">
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

      <HelpModal show={show} handleClose={handleClose} />

    </>
  );
}

export default InfoButton;
