import {Dropdown} from "react-bootstrap"
import React from 'react';

const DifficultySwitch = ({setDifficulty}) => {
  const levels = [1,2,3,4,5,6,7,8,9,10].map(level => {
    return <Dropdown.Item onSelect={() => setDifficulty(level)} >{level}</Dropdown.Item>;
  })
  return (
    <Dropdown>
      <Dropdown.Toggle variant="success" id="dropdown-basic">
        difficulty
      </Dropdown.Toggle>

      <Dropdown.Menu>
        {levels}
      </Dropdown.Menu>
    </Dropdown>
  );
}

export default DifficultySwitch;
