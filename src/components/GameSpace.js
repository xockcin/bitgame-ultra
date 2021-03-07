import React from "react";
import {Badge, Button} from "react-bootstrap"

const Steps = (props) => {
  const content = props.steps.map((step) => {
        return (
          <div className="d-flex justify-content-around m-2">
            <h3 className="align-self-center">
              <Badge className="m-1 border" variant="danger">{step.token}</Badge>
              <Badge className="border" variant="primary">{step.number}</Badge>
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
      <div
        className="bg-success text-white border rounded m-4 shadow">
        <h1 className="p-1 m-0 display-1">{props.origin}</h1>
      </div>
      <div className="d-flex">
        <Steps steps={props.steps} />
      </div>
      <div className="bg-danger text-white border rounded m-4 shadow">
        <h1 className="p-1 m-0 display-1">{props.goal}</h1>
      </div>
    </div>
  );
}

export default GameSpace