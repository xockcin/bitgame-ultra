import React from "react";
import { Badge } from "react-bootstrap";

const StepCounter = (props) => {
  return (
      <div className="p-3">
        <h1>
          <Badge className="text-danger border border-danger" variant="warning">{props.stepCount}</Badge>
        </h1>
      </div>
  )
}

export default StepCounter