import React from "react";
import { Badge } from "react-bootstrap";

const InfoButton = (props) => {
  return (
    <div className="p-3">
      <h1>
        <Badge className="text-danger border border-danger" variant="warning">
          ?
        </Badge>
      </h1>
    </div>
  );
};

export default InfoButton;
