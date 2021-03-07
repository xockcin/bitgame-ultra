import React from "react";
import { Badge } from "react-bootstrap";

const StepCounter = (props) => {
  return (
    <div>
      <h1>
        <Badge variant="secondary">steps: {props.stepCount}</Badge>
      </h1>
    </div>
  )
}

export default StepCounter