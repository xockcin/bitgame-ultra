import React, { useState } from "react";
import { Badge, Modal, Popover, OverlayTrigger, Button, Carousel } from "react-bootstrap";

const helpText = [
  "Welcome to BITGAME ULTRA",
  "The byte is made up of eight bits.", 
  "Each bit can be either one or zero, either on or off.",
  "The ~ button reverses the value of each bit, so every zero becomes a one and every one becomes a zero.",
  "The < button shifts the bit values one position to the left...", 
  "...so every bit takes on the value of the bit to its right...",
  "...the value of the rightmost bit becomes zero, and the value of the leftmost bit is lost.",
  "The > button is the same except for right instead of left.",
  "The + button increments the byte by one.",
  "The - button...you get the idea.",
  "The green number is your origin. The red number is your goal.",
  "The object of the game is to transform the byte from the green number to the red number, using the five operators, in as few steps as possible.",
  "There are two ways to approach the game:",
  "The first is mathematically, treating the numbers as quantities, < and > as doubling and halving and ~ as distance from 255. In this case, it will be easier to use decimal mode.",
  "The second is treating the numbers as binary configurations, in which case it will be easier to use hex mode.",
  "Hover over the goal number to peek at its bit configuration.",
  "If you want to be really hardcore, try a few rounds in ASCII mode.",
  "While you play, enjoy a curated selection of my favorite albums to listen to while coding.",
];

const HelpList = () => {
  return (
    <ol>
      {helpText.map(helpItem => {
        return <li>{helpItem}</li>
      })}
    </ol>
  )
}

const HelpCarousel = () => {
  const carouselItems = helpText.map(helpItem => {
    return (
      <Carousel.Item>
        <h3 className="m-3 text-center">{helpItem}</h3>
      </Carousel.Item>
    )})
  return (
    <Carousel fade indicators={false} interval={null} className="p-4">
      {carouselItems}
    </Carousel>
  );
}

const HelpModal = (props) => {
    return (
      <Modal show={props.show} onHide={props.handleClose} centered size="lg">
        <Modal.Header className="bg-warning text-danger" closeButton>
          <Modal.Title>How to Play</Modal.Title>
        </Modal.Header>
        <Modal.Body className="bg-warning">
          <HelpCarousel />
        </Modal.Body>
      </Modal>
    );
}

const popover = (
  <Popover id="popover-basic">
    <Popover.Title as="h3">Popover right</Popover.Title>
    <Popover.Content>
      And here's some <strong>amazing</strong> content. It's very engaging.
      right?
    </Popover.Content>
  </Popover>
);

export const PopoverButton = () => {
  return (
    <OverlayTrigger trigger="click" placement="right" overlay={popover}>
      <Button variant="success">Click me to see</Button>
    </OverlayTrigger>
  )
}

const InfoButton = () => {
  const [show, setShow] = useState(true);
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

      <HelpModal show={show} handleClose={handleClose} />

    </>
  );
}

export default InfoButton;
