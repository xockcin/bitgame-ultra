import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import React, { Component } from "react"
import GameSpace from "./components/GameSpace"
import GameBoard from "./components/GameBoard"
import JukeBox from "./components/JukeBox";
import StepCounter from "./components/StepCounter";
import ModeSwitch from "./components/ModeSwitch"
import InfoButton, {PopoverButton} from "./components/InfoButton"

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      byte: [false, false, false, false, false, false, false, false],
      steps: [],
      origin: Math.floor(Math.random() * 256),
      goal: Math.floor(Math.random() * 256),
      mode: "dec",
      showGoal: false,
    };

    this.complement = this.complement.bind(this);
    this.shiftLeft = this.shiftLeft.bind(this);
    this.shiftRight = this.shiftRight.bind(this);
    this.increment = this.increment.bind(this);
    this.decrement = this.decrement.bind(this);
    this.reset = this.reset.bind(this);
    this.setMode = this.setMode.bind(this);
    this.hoverHandler = this.hoverHandler.bind(this);
    this.unhoverHandler = this.unhoverHandler.bind(this);
    this.update = this.update.bind(this)
  }

  update(newByte, token) {
    const newStep = {
      token,
      number: this.getNumber(newByte),
    };
    this.setState((currentState) => {
      return {
        byte: newByte,
        steps: currentState.steps.concat(newStep),
      };
    });
  }

  complement() {
    const newByte = this.state.byte.map((bit) => !bit)
    this.update(newByte)
  }

  shiftLeft() {
    const newByte = [false].concat(this.state.byte.slice(0, -1));
    this.update(newByte)
  }

  shiftRight() {
    const newByte = this.state.byte.slice(1).concat(false);
    this.update(newByte);
  }

  increment() {
    const number = this.getNumber(this.state.byte);
    const newByte = this.fromNumber(number + 1);
    this.update(newByte);
  }

  incrementAlt() {
    let newByte = this.state.byte
    for (let i = 0; i < 8; i++) {
      if (!newByte[i]) {
        newByte[i] = !newByte[i]
        break
      }
      else {
        newByte[i] = !newByte[i]
        continue
      }
    }
    this.update(newByte);
  }

  decrement() {
    const number = this.getNumber(this.state.byte);
    const newByte = this.fromNumber(number - 1);
    this.update(newByte);
  }

  fromNumber(number) {
    const newByte = [];
    for (let i = 0; i < 8; i++) {
      newByte[i] = !!(number & (1 << i));
    }
    return newByte;
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

  hoverHandler() {
    this.setState((currentState) => {
      return {
        showGoal: true,
      };
    });
  }

  unhoverHandler() {
    this.setState((currentState) => {
      return {
        showGoal: false,
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
        steps: newSteps,
      };
    });
  }

  componentWillMount() {
    this.setState((currentState) => {
      return {
        byte: this.fromNumber(this.state.origin),
      };
    });
  }

  render() {
    const number = this.getNumber(this.state.byte);
    const hex = number.toString(16);

    return (
      <div className="container p-2 my-5 border rounded">
        <div className="d-flex p-2 rounded-pill border">
          <h1 className="p-2 ml-3 text-white">bitgame</h1>
          <ModeSwitch setMode={this.setMode} mode={this.state.mode} />
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
            hoverHandler={this.hoverHandler}
            unhoverHandler={this.unhoverHandler}
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
            goal={this.fromNumber(this.state.goal)}
            showGoal={this.state.showGoal}
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

