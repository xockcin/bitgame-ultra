import React from "react";
import {Badge, Button} from "react-bootstrap"
import ModeSwitch from "./ModeSwitch"

function getAscii(num) {
    const special = [
      "NUL",
      "SOH",
      "STX",
      "ETX",
      "EOT",
      "ENQ",
      "ACK",
      "BEL",
      "BS",
      "TAB",
      "LF",
      "VT",
      "FF",
      "CR",
      "SO",
      "SI",
      "DLE",
      "DC1",
      "DC2",
      "DC3",
      "DC4",
      "NAK",
      "SYN",
      "ETB",
      "CAN",
      "EM",
      "SUB",
      "ESC",
      "FS",
      "GS",
      "RS",
      "US",
      "SP",
    ];

    if (num < 33) {
      return special[num];
    } else if (num === 127) {
      return "DEL";
    } else {
      return String.fromCharCode(num);
    }
  }

function display(number, mode) {
  if (mode === "dec") {
    return number.toString(10)
  }
  else if (mode === "hex") {
    return number.toString(16)
  }
  else if (mode === "ascii") {
    return getAscii(number)
  }
}


const Steps = (props) => {
  const content = props.steps.map((step) => {
        return (
          <div className="d-flex justify-content-around m-2">
            <h3 className="align-self-center">
              <Badge className="m-1 border" variant="danger">{step.token}</Badge>
              <Badge className="border" variant="primary">{display(step.number, props.mode)}</Badge>
            </h3>
          </div>
        );
      })
  return (
    <div className="d-flex">
      {content}
    </div>
  )
}

const GameSpace = (props) => {
  if (props.number === props.goal) {
    return (
    <div className="d-flex bg-primary border mt-3 p-4 rounded-pill text-white">
      <h1>
        You made it from {props.origin} to {props.goal} in {props.steps.length} steps!
      </h1>
      <Button
        onClick={props.reset}
        className="ml-4 border rounded-pill shadow"
        variant="success">
        Play Again
      </Button>
    </div>
    )
  }
  return (
    <div className="d-flex">
      <div className="bg-success text-white border rounded m-4 shadow">
        <h1 className="p-1 m-0">{display(props.origin, props.mode)}</h1>
      </div>
      <div className="d-flex">
        <Steps steps={props.steps} mode={props.mode} />
      </div>
      <div className="bg-danger text-white border rounded m-4 shadow">
        <h1 className="p-1 m-0">{display(props.goal, props.mode)}</h1>
      </div>
    </div>
  );
}

export default GameSpace