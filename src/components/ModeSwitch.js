import React from "react";
import { ToggleButtonGroup, ToggleButton } from "react-bootstrap";

const ModeSwitch = (props) => {
  return (
    <div className="p-3 mr-1">
      <div>
        <ToggleButtonGroup 
          className="border"
          type="radio" 
          name="options" 
          defaultValue={1}>
          <ToggleButton value={1}>dec</ToggleButton>
          <ToggleButton value={2}>hex</ToggleButton>
          <ToggleButton value={3}>ascii</ToggleButton>
        </ToggleButtonGroup>
      </div>
    </div>
  );
};

export default ModeSwitch;