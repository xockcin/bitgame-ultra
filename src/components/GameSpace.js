import React from "react";
import {Badge, Button} from "react-bootstrap"

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
        )
      })
  return (
    <div className="d-flex">
      {content}
    </div>
  )
}

const Origin = ({origin, mode}) => {
  return (
    <div className="bg-success text-white border rounded m-4 shadow">
      <h1 className="p-1 m-0">{display(origin, mode)}</h1>
    </div>
  );
}

const Goal = (props) => {
  return (
    <div 
      className="bg-danger text-white border rounded m-4 shadow"
      onMouseEnter={props.hoverHandler}
      onMouseLeave={props.unhoverHandler}
      >
      <h1 className="p-1 m-0">{display(props.goal, props.mode)}</h1>
    </div>
  )
}

const ResetButton = (props) => {
  return (
    <Button
      onClick={props.reset}
      className="ml-4 border rounded-pill"
      size="sm"
      variant={props.win ? "success" : "danger"}
    >
      {props.win ? "Play Again" : "Try Again"}
    </Button>
  )
}

const EndFrame = (props) => {
  const content = props.steps.map((step) => {
    return (
      <div className="d-flex justify-content-around m-2">
        <h3 className="align-self-center">
          <Badge 
            className="m-0 border text-danger border border-danger" 
            variant={props.win ? "warning" : "dark"}>
            {step.token}
          </Badge>
        </h3>
      </div>
    )
  })

  return (
    <div className="d-flex border mt-3 p-4 rounded-pill text-white">
      <Origin origin={props.origin} mode={props.mode} />
      {content}
      <Goal goal={props.goal} mode={props.mode} />
      <ResetButton reset={props.reset} win={props.win} />
    </div>
  );
}

const GameSpace = (props) => {

  if (props.stepCount === 0) {
    const win = (props.number === props.goal)
    return (
      <EndFrame
        reset={props.reset}
        resetWithSame={props.resetWithSame}
        steps={props.steps}
        origin={props.origin}
        goal={props.goal}
        mode={props.mode}
        win={win}
      />
    );
  }

  return (
    <div className="d-flex">
      <Origin origin={props.origin} mode={props.mode} />
      <div className="d-flex">
        <Steps steps={props.steps} mode={props.mode} />
      </div>
      <Goal
        goal={props.goal}
        mode={props.mode}
        hoverHandler={props.hoverHandler}
        unhoverHandler={props.unhoverHandler}
      />
    </div>
  );
}

export default GameSpace