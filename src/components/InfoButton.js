import React, { useState } from "react";
import { Badge, Modal, ButtonGroup, Button } from "react-bootstrap";

const HelpModal = (props) => {
  const [currentScreen, setCurrentScreen] = useState("menu")

  const menu = (
    <ButtonGroup vertical size="lg">
      <Button variant="success" onClick={() => setCurrentScreen("about")}>
        About
      </Button>
      <Button variant="danger" onClick={() => setCurrentScreen("tutorial")}>
        Tutorial
      </Button>
    </ButtonGroup>
  );

  const about = (
    <div>
      <p>BITGAME-ULTRA is a game that teaches the fundamentals of bit manipulation.</p>
      <Button variant="dark" onClick={() => setCurrentScreen("menu")}>back</Button>
    </div>
  );

  const tutorial = (
    <div>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum impedit laudantium saepe alias, dolores reiciendis similique nam tempore atque fuga?</p>
      <Button variant="dark" onClick={() => setCurrentScreen("menu")}>
        back
      </Button>
    </div>
  );

  const screens = {
    menu,
    about,
    tutorial
  }

  return (
    <Modal show={props.show} onHide={props.handleClose} centered size="md">
      <Modal.Header className="bg-warning text-danger" closeButton>
        <Modal.Title>Menu</Modal.Title>
      </Modal.Header>
      <Modal.Body className="bg-warning d-flex justify-content-center">
        {screens[currentScreen]}
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
