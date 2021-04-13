import {Dropdown} from "react-bootstrap"
import React from 'react';

const DifficultySwitch = ({setDifficulty, difficulty}) => {
  const levels = [1,2,3,4,5,6,7,8,9,10].map(level => {
    return <Dropdown.Item onSelect={() => setDifficulty(level)} >{level}</Dropdown.Item>;
  })
  return (
    <Dropdown className="align-self-center p-3 ml-auto">
      <Dropdown.Toggle variant="success" id="dropdown-basic">
        level - {difficulty}
      </Dropdown.Toggle>

      <Dropdown.Menu>
        {levels}
      </Dropdown.Menu>
    </Dropdown>
  );
}

export default DifficultySwitch;
