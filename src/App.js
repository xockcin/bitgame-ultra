import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import React, { Component } from "react"
import GameSpace from "./components/GameSpace"
import GameBoard from "./components/GameBoard"
import JukeBox from "./components/JukeBox";
import StepCounter from "./components/StepCounter";
import ModeSwitch from "./components/ModeSwitch"
import InfoButton from "./components/InfoButton"

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      byte: [false, false, false, false, false, false, false, false],
      steps: [],
      origin: Math.floor(Math.random() * 256),
      goal: Math.floor(Math.random() * 256),
      mode: "dec"
    };

    this.complement = this.complement.bind(this)
    this.shiftLeft = this.shiftLeft.bind(this)
    this.shiftRight = this.shiftRight.bind(this)
    this.increment = this.increment.bind(this)
    this.decrement = this.decrement.bind(this)
    this.reset = this.reset.bind(this)
    this.setMode = this.setMode.bind(this);
  }

  complement() {
    const newByte = this.state.byte.map((bit) => !bit);
    const newStep = {
      token: "~",
      number: this.getNumber(newByte),
    };
    this.setState((currentState) => {
      return {
        byte: newByte,
        steps: currentState.steps.concat(newStep),
      };
    });
  }

  shiftLeft() {
    const newByte = [false].concat(this.state.byte.slice(0, -1));
    const newStep = {
      token: "<",
      number: this.getNumber(newByte),
    };
    this.setState((currentState) => {
      return {
        byte: newByte,
        steps: currentState.steps.concat(newStep),
      };
    });
  }

  shiftRight() {
    const newByte = this.state.byte.slice(1).concat(false);
    const newStep = {
      token: ">",
      number: this.getNumber(newByte),
    };
    this.setState((currentState) => {
      return {
        byte: newByte,
        steps: currentState.steps.concat(newStep),
      };
    });
  }

  increment() {
    const number = this.getNumber(this.state.byte);
    const newByte = this.fromNumber(number + 1)
    const newStep = {
      token: "+",
      number: this.getNumber(newByte),
    };
    
    this.setState((currentState) => {
      return {
        byte: newByte,
        steps: currentState.steps.concat(newStep),
      };
    });
  }

  decrement() {
    const number = this.getNumber(this.state.byte);
    const newByte = this.fromNumber(number - 1);
    const newStep = {
      token: "-",
      number: this.getNumber(newByte),
    };
    
    this.setState((currentState) => {
      return {
        byte: newByte,
        steps: currentState.steps.concat(newStep),
      }
    })
  }

  fromNumber(number) {
    const newByte = [];
    for (let i = 0; i < 8; i++) {
      newByte[i] = !!(number & (1 << i));
    }
    return newByte
  }

  getNumber(byte) {
    let num = 0;
    for (let i = 0; i < 8; i++) {
      num += byte[i] << i;
    }
    return num;
  }

  setMode(newMode) {
    this.setState((currentState) => {
      return {
        mode: newMode,
      };
    });
  }

  reset() {
    const newOrigin = Math.floor(Math.random() * 256);
    const newGoal = Math.floor(Math.random() * 256);
    const newSteps = [];
    const newByte = this.fromNumber(newOrigin);
    this.setState((currentState) => {
      return {
        byte: newByte,
        origin: newOrigin,
        goal: newGoal,
        steps: newSteps
      };
    });
  }

  componentWillMount() {
    this.setState((currentState) => {
      return {
        byte: this.fromNumber(this.state.origin)
      }
    })
  }

  render() {
    const number = this.getNumber(this.state.byte);
    const hex = number.toString(16);

    return (
      <div className="container p-2 my-5 border rounded">
        <div className="d-flex p-2 rounded-pill border">
          <h1 className="p-2 ml-3 text-white">bitgame</h1>
          <ModeSwitch
          setMode={this.setMode}
          mode={this.state.mode} />
        </div>
        <div className="container-flex d-flex flex-row justify-content-around rounded-pill m-2">
          <GameSpace
            number={number}
            hex={hex}
            origin={this.state.origin}
            goal={this.state.goal}
            steps={this.state.steps}
            reset={this.reset}
            mode={this.state.mode}
          />
        </div>
        <div className="container d-inline-flex align-items-center">
          <InfoButton />
          <GameBoard
            byte={this.state.byte}
            complement={this.complement}
            shiftLeft={this.shiftLeft}
            shiftRight={this.shiftRight}
            increment={this.increment}
            decrement={this.decrement}
          />
          <StepCounter
            className="align-self-center ml-0"
            stepCount={this.state.steps.length}
          />
        </div>
        <hr />
        <div className="container-flex d-flex justify-content-center p-3">
          <JukeBox />
        </div>
      </div>
    );
  }
}

export default App;

