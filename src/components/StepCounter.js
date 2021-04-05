import React, {useState} from "react";
import { Badge } from "react-bootstrap";
import { Popover } from "react-tiny-popover"

const StepCounter = (props) => {
  const [isPopoverOpen, setIsPopoverOpen] = useState(false)
  return (
    <Popover
      isOpen={isPopoverOpen}
      positions={["top", "bottom", "left", "right"]} // preferred positions by priority
      content={<p>{props.cheat}</p>}
    >
      <div className="p-3" onClick={() => setIsPopoverOpen(!isPopoverOpen)}>
        <h1>
          <Badge className="text-danger border border-danger" variant="warning">
            {props.stepCount}
          </Badge>
        </h1>
      </div>
    </Popover>
  );
}

export default StepCounter