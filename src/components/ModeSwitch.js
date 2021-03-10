import React from "react";
import { ToggleButtonGroup, ToggleButton } from "react-bootstrap";

const ModeSwitch = (props) => {
  const modes = ["dec","hex","ascii"]
  return (
    <div className="p-3 mr-1">
      <div>
        <ToggleButtonGroup
          className="border"
          type="radio"
          name="modes"
          defaultValue="dec"
        >
          {modes.map((mode) => {
            return (
              <ToggleButton
                type="radio"
                name="mode"
                value={mode}
                checked={mode === "dec"}
                onClick={() => props.setMode(mode)}
              >
                {mode}
              </ToggleButton>
            )
          })}
        </ToggleButtonGroup>
      </div>
    </div>
  );
};

export default ModeSwitch;