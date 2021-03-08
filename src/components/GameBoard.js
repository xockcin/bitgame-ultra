import React from "react";
import "../App.css";
import { Container } from "react-bootstrap";
import { Button, ButtonGroup } from "react-bootstrap";

const Byte = (props) => {
  const buttons = props.byte
    .slice(0)
    .reverse()
    .map((bit, index) => {
      return (
        <Button
          className="m-2 rounded"
          variant={bit ? "dark" : "light"}
          size="sm"
        >
          {7 - index}
        </Button>
      );
    });

  return (
    <div className="d-flex bg-info rounded-pill justify-content-around">
      <ButtonGroup>
        {buttons}
      </ButtonGroup>
    </div>
  );
};

const Keypad = (props) => {
  return (
    <div className="d-flex bg-success rounded-pill justify-content-around">
      <ButtonGroup>
        <Button
          onClick={props.increment}
          className="btn m-2 mx-lg-5 border btn-danger rounded btn-lg"
        >
          +
        </Button>
        <Button
          onClick={props.shiftLeft}
          className="btn m-2 mx-lg-5 border btn-danger rounded btn-lg"
        >
          &lt;
        </Button>
        <Button
          onClick={props.complement}
          className="btn m-2 mx-lg-5 border btn-danger rounded btn-lg"
        >
          ~
        </Button>
        <Button
          onClick={props.shiftRight}
          className="btn m-2 mx-lg-5 border btn-danger rounded btn-lg"
        >
          &gt;
        </Button>
        <Button
          onClick={props.decrement}
          className="btn m-2 mx-lg-5 border btn-danger rounded btn-lg"
        >
          -
        </Button>
      </ButtonGroup>
    </div>
  );
};

const GameBoard = (props) => {
  return (
    <div class="container w-75 border rounded p-3 mt-4">
      <Byte byte={props.byte} />
      <hr />
      <Keypad
        complement={props.complement}
        shiftLeft={props.shiftLeft}
        shiftRight={props.shiftRight}
        increment={props.increment}
        decrement={props.decrement}
      />
    </div>
  );
};

export default GameBoard;