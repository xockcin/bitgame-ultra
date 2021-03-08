import React, { Component } from 'react'
import { Form, Badge, FormCheck } from 'react-bootstrap'

const SwitchBadge = (props) => {
  return (
    <div className="">
      <Form>
        <FormCheck
          custom
          inline
          type="switch"
        />
      </Form>
    </div>
  )
}

class ModeSwitch extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hexMode: false
    }
  }

  render() { 
    return (
      <SwitchBadge />
    );
  }
}

export default ModeSwitch;