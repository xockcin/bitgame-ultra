import React, { Component } from "react";
import GameSpace from "./GameSpace";
import GameBoard from "./GameBoard";
import JukeBox from "./JukeBox";
import StepCounter from "./StepCounter";
import ModeSwitch from "./ModeSwitch";
import InfoButton, { PopoverButton } from "./InfoButton";
import DifficultySwitch from "./DifficultySwitch";
import { doToken } from "../shared/methods";

const _ = require("lodash");

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      number: 0,
      steps: [],
      origin: 0,
      goal: 0,
      mode: "dec",
      showGoal: false,
      cheat: "",
      difficulty: 3,
    };

    this.reset = this.reset.bind(this);
    this.resetWithDifficulty = this.resetWithDifficulty.bind(this);
    this.resetWithSame = this.resetWithSame.bind(this);
    this.setMode = this.setMode.bind(this);
    this.hoverHandler = this.hoverHandler.bind(this);
    this.unhoverHandler = this.unhoverHandler.bind(this);
    this.update = this.update.bind(this);
    this.cheat = this.cheat.bind(this);
    this.setDifficulty = this.setDifficulty.bind(this);
    this.handleButton = this.handleButton.bind(this);
  }

  cheat(origin, goal) {
    fetch(
      "https://raw.githubusercontent.com/xockcin/bitgame/main/pairchart.json"
    )
      .then((response) => response.json())
      .then((data) => {
        this.setState({ cheat: data[origin][goal]["steps"] });
      });
  }

  update(number, token) {
    const newStep = {
      token,
      number,
    };
    this.setState((currentState) => {
      return {
        number,
        steps: currentState.steps.concat(newStep),
      };
    });
  }

  handleButton(token) {
    const newNumber = doToken(this.state.number, token, 256);
    this.update(newNumber, token);
  }

  setMode(newMode) {
    this.setState((currentState) => {
      return {
        mode: newMode,
      };
    });
  }

  setDifficulty(newDifficulty) {
    this.setState((currentState) => {
      return {
        difficulty: newDifficulty,
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

  resetWithDifficulty() {
    const difficulty = this.state.difficulty;

    fetch(
      "https://raw.githubusercontent.com/xockcin/bitgame/main/length_index2.json"
    )
      .then((response) => response.json())
      .then((data) => {
        const pair = _.sample(data[difficulty]);
        const newOrigin = pair[0];
        const newGoal = pair[1];
        this.cheat(newOrigin, newGoal);
        const newSteps = [];
        const newNumber = newOrigin;
        this.setState((currentState) => {
          return {
            number: newNumber,
            origin: newOrigin,
            goal: newGoal,
            steps: newSteps,
          };
        });
      });
  }

  reset() {
    const newOrigin = Math.floor(Math.random() * 256);
    const newNumber = newOrigin;
    const newGoal = Math.floor(Math.random() * 256);
    this.cheat(newOrigin, newGoal);
    const newSteps = [];
    const newByte = this.fromNumber(newOrigin);
    this.setState((currentState) => {
      return {
        number: newNumber,
        origin: newOrigin,
        goal: newGoal,
        steps: newSteps,
      };
    });
  }

  resetWithSame() {
    this.setState((currentState) => {
      return {
        steps: [],
      };
    });
  }

  componentWillMount() {
    this.resetWithDifficulty();
  }

  render() {
    return (
      <div className="container p-2 my-1 border rounded">
        <div className="d-flex p-2 rounded-pill border">
          <h1 className="p-2 ml-3 text-white">bitgame</h1>
          <ModeSwitch setMode={this.setMode} mode={this.state.mode} />
          <DifficultySwitch
            className="mr-1 align-self-center border border-light"
            difficulty={this.state.difficulty}
            setDifficulty={this.setDifficulty}
          />
        </div>
        <div className="container-flex d-flex flex-row justify-content-around rounded-pill m-2">
          <GameSpace
            number={this.state.number}
            origin={this.state.origin}
            goal={this.state.goal}
            steps={this.state.steps}
            mode={this.state.mode}
            reset={this.resetWithDifficulty}
            resetWithSame={this.resetWithSame}
            hoverHandler={this.hoverHandler}
            unhoverHandler={this.unhoverHandler}
            stepCount={this.state.cheat.length - this.state.steps.length}
          />
        </div>
        <div className="container d-inline-flex align-items-center">
          <InfoButton />
          <GameBoard
            number={this.state.number}
            goal={this.state.goal}
            showGoal={this.state.showGoal}
            handleButton={this.handleButton}
          />
          <StepCounter
            className="align-self-center ml-0"
            stepCount={this.state.cheat.length - this.state.steps.length}
            cheat={this.state.cheat}
          />
        </div>
        <hr />
        <div className="container-flex d-flex justify-content-center p-1">
          <JukeBox />
        </div>
      </div>
    );
  }
}

export default App;
