import React from "react";
import "../App.css";
import { Button, ButtonGroup } from "react-bootstrap";
import { fromNumber } from "../shared/methods";

export const Byte = (props) => {
  const toShow = props.showGoal ? props.goal : props.number
  const buttons = fromNumber(toShow)
    .slice(0)
    .map((bit, index) => {
      return (
        <Button
          className="m-2 rounded"
          variant={bit ? "dark" : "light"}
          size="sm"
        >
          {index}
        </Button>
      );
    });
    const classes =
      "d-flex mb-2 rounded-pill justify-content-around";
  return (
    <div className={props.showGoal ? "bg-danger " + classes : "bg-info " + classes}>
      <ButtonGroup className="p-2 d-flex flex-row-reverse">
        {buttons}
      </ButtonGroup>
    </div>
  );
};

const Keypad = ({handleButton}) => {
  const tokens = ["+", "<", "~", ">", "-"]
  const buttons = tokens.map(token => {
    return (
      <Button
        className="btn m-2 mx-lg-5 border btn-danger rounded btn-lg"
        onClick={() => handleButton(token)}
      >
        {token}
      </Button>
    );
  })
  return (
    <div className="container d-flex bg-success rounded-pill justify-content-around">
      <ButtonGroup>{buttons}</ButtonGroup>
    </div>
  );
}

const GameBoard = (props) => {
  return (
    <div className="container w-75 border rounded p-3">
      <Byte
        number={props.number}
        byte={props.byte} 
        goal={props.goal} 
        showGoal={props.showGoal} 
      />
      <Keypad handleButton={props.handleButton} />
    </div>
  );
};

export default GameBoard;