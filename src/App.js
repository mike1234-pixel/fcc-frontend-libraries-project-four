import React from "react";

// PREMIUM, BLACK AND WHITE GLOSSY FEEL

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      display: "0",
      lastSum: "",
    };
    this.handleClear = this.handleClear.bind(this);
    this.handleNum = this.handleNum.bind(this);
    this.handleEval = this.handleEval.bind(this);
    this.handleBackspace = this.handleBackspace.bind(this);
  }

  handleClear() {
    this.setState({ display: "0", lastSum: "" });
  }

  handleBackspace() {
    if (this.state.display === "0") {
      return;
    } else if (
      this.state.display === "1" ||
      this.state.display === "2" ||
      this.state.display === "3" ||
      this.state.display === "4" ||
      this.state.display === "5" ||
      this.state.display === "6" ||
      this.state.display === "7" ||
      this.state.display === "8" ||
      this.state.display === "9" ||
      this.state.display === "-" ||
      this.state.display === "Infinity" ||
      this.state.display === "NaN"
    ) {
      this.setState({
        display: "0",
      });
    } else if (this.state.display.endsWith(" ") === false) {
      let sliced = this.state.display.slice(0, 0 - 1);
      this.setState({
        display: sliced,
      });
    } else if (this.state.display.endsWith(" ") === true) {
      let sliced = this.state.display.slice(0, 0 - 3);
      this.setState({
        display: sliced,
      });
    }
  }

  componentDidUpdate() {
    document.querySelectorAll(".button").forEach((item) => {
      item.addEventListener("click", (event) => {
        if (
          this.state.lastSum.includes("+") ||
          this.state.lastSum.includes("-") ||
          this.state.lastSum.includes("/") ||
          this.state.lastSum.includes("*")
        ) {
          let displayValue = this.state.display;
          this.setState({
            lastSum: "Ans: " + displayValue,
          });
        }
      });
    });
  }

  componentDidMount() {
    document.addEventListener("keydown", (e) => {
      if ((e.shiftKey === false && e.keyCode === 187) || e.keyCode === 13) {
        this.handleEval();
      } else if (e.shiftKey === true && e.keyCode === 8) {
        this.handleClear();
      } else if (e.keyCode === 8) {
        this.handleBackspace();
      } else {
        this.handleNum(e);
      }
    });
  }

  handleNum(e) {
    if (this.state.display === "Infinity" || this.state.display === "NaN") {
      this.setState({ display: "" });
    }
    console.log(e.target.id); // gets the id of the clicked button

    if (e.target.id === "zero" || e.keyCode === 48 || e.keyCode === 96) {
      let lastValue = this.state.display.split(" ").splice(-1).toString();
      if (
        (this.state.display !== "0" &&
          this.state.display.startsWith("0", 0) === false &&
          this.state.display.endsWith(" 0") === false) ||
        this.state.display.endsWith(" ") ||
        lastValue.includes(".")
      ) {
        console.log("pass");
        this.setState((prevState) => ({
          display: prevState.display.toString() + "0",
        }));
      }
    } else if (e.target.id === "one" || e.keyCode === 49 || e.keyCode === 97) {
      // ONE
      if (this.state.display.slice(-2) === " 0") {
        // if string endsWith " 0", slice off last character and add zero
        let sliced = this.state.display.slice(0, -1); // removes last char and returns rest of string
        this.setState({
          display: sliced + "1",
        });
      }
      // if "display" is not 0 / starting value, concat 1 to the end of the string
      else if (this.state.display !== "0") {
        this.setState((prevState) => ({
          display: prevState.display.toString() + "1",
        }));
      } else if (this.state.display === "0") {
        // if "display" is 0 / starting value, set "display" to "1"
        this.setState({
          display: "1",
        });
      }
    } else if (e.target.id === "two" || e.keyCode === 50 || e.keyCode === 98) {
      // TWO

      if (this.state.display.endsWith(" 0") === true) {
        let sliced = this.state.display.slice(0, -1);
        this.setState({
          display: sliced + "2",
        });
      } else if (this.state.display !== "0") {
        this.setState((prevState) => ({
          display: prevState.display.toString() + "2",
        }));
      } else if (this.state.display === "0") {
        this.setState({
          display: "2",
        });
      }
    } else if (
      e.target.id === "three" ||
      e.keyCode === 51 ||
      e.keyCode === 99
    ) {
      // THREE

      if (this.state.display.endsWith(" 0") === true) {
        let sliced = this.state.display.slice(0, -1);
        this.setState({
          display: sliced + "3",
        });
      } else if (this.state.display !== "0") {
        this.setState((prevState) => ({
          display: prevState.display.toString() + "3",
        }));
      } else if (this.state.display === "0") {
        this.setState({
          display: "3",
        });
      }
    } else if (
      e.target.id === "four" ||
      e.keyCode === 52 ||
      e.keyCode === 100
    ) {
      // FOUR

      if (this.state.display.endsWith(" 0") === true) {
        let sliced = this.state.display.slice(0, -1);
        this.setState({
          display: sliced + "4",
        });
      } else if (this.state.display !== "0") {
        this.setState((prevState) => ({
          display: prevState.display.toString() + "4",
        }));
      } else if (this.state.display === "0") {
        this.setState({
          display: "4",
        });
      }
    } else if (
      e.target.id === "five" ||
      e.keyCode === 53 ||
      e.keyCode === 101
    ) {
      // FIVE

      if (this.state.display.endsWith(" 0") === true) {
        let sliced = this.state.display.slice(0, -1);
        this.setState({
          display: sliced + "5",
        });
      } else if (this.state.display !== "0") {
        this.setState((prevState) => ({
          display: prevState.display.toString() + "5",
        }));
      } else if (this.state.display === "0") {
        this.setState({
          display: "5",
        });
      }
    } else if (e.target.id === "six" || e.keyCode === 54 || e.keyCode === 102) {
      // SIX

      if (this.state.display.endsWith(" 0") === true) {
        let sliced = this.state.display.slice(0, -1);
        this.setState({
          display: sliced + "6",
        });
      } else if (this.state.display !== "0") {
        this.setState((prevState) => ({
          display: prevState.display.toString() + "6",
        }));
      } else if (this.state.display === "0") {
        this.setState({
          display: "6",
        });
      }
    } else if (
      e.target.id === "seven" ||
      e.keyCode === 55 ||
      e.keyCode === 103
    ) {
      // SEVEN

      if (this.state.display.endsWith(" 0") === true) {
        let sliced = this.state.display.slice(0, -1);
        this.setState({
          display: sliced + "7",
        });
      } else if (this.state.display !== "0") {
        this.setState((prevState) => ({
          display: prevState.display.toString() + "7",
        }));
      } else if (this.state.display === "0") {
        this.setState({
          display: "7",
        });
      }
    } else if (
      e.target.id === "eight" ||
      (e.shiftKey === false && e.keyCode === 56) ||
      e.keyCode === 104
    ) {
      // EIGHT

      if (this.state.display.endsWith(" 0") === true) {
        let sliced = this.state.display.slice(0, -1);
        this.setState({
          display: sliced + "8",
        });
      } else if (this.state.display !== "0") {
        this.setState((prevState) => ({
          display: prevState.display.toString() + "8",
        }));
      } else if (this.state.display === "0") {
        this.setState({
          display: "8",
        });
      }
    } else if (
      e.target.id === "nine" ||
      e.keyCode === 57 ||
      e.keyCode === 105
    ) {
      // NINE

      if (this.state.display.endsWith(" 0") === true) {
        let sliced = this.state.display.slice(0, -1);
        this.setState({
          display: sliced + "9",
        });
      } else if (this.state.display !== "0") {
        this.setState((prevState) => ({
          display: prevState.display.toString() + "9",
        }));
      } else if (this.state.display === "0") {
        this.setState({
          display: "9",
        });
      }
    } else if (
      e.target.id === "add" ||
      (e.shiftKey === true && e.keyCode === 187) ||
      e.keyCode === 107
    ) {
      if (
        this.state.display.endsWith(" +  - ") === true ||
        this.state.display.endsWith(" -  - ") === true ||
        this.state.display.endsWith(" *  - ") === true ||
        this.state.display.endsWith(" /  - ") === true
      ) {
        return;
      } else if (this.state.display.endsWith(" ") === true) {
        // if the string ends with an operator and a " "
        let sliced = this.state.display.slice(0, -3); // delete the last 3 characters and add the new operator
        this.setState({
          display: sliced + " + ",
        });
      } else if (this.state.display.endsWith(" ") === false) {
        this.setState((prevState) => ({
          display: prevState.display.toString() + " + ", // otherwise just add the operator
        }));
      }
    } else if (
      e.target.id === "subtract" ||
      e.keyCode === 189 ||
      e.keyCode === 109
    ) {
      // IF THE LAST TWO CHARACTERS ARE "- ", then do nothing, otherwise add the " - "
      if (
        this.state.display.endsWith(" +  - ") === true ||
        this.state.display.endsWith(" -  - ") === true ||
        this.state.display.endsWith(" *  - ") === true ||
        this.state.display.endsWith(" /  - ") === true
      ) {
        return;
      } else if (this.state.display.endsWith("- ") === false) {
        this.setState((prevState) => ({
          display: prevState.display.toString() + " - ",
        }));
      }
    } else if (
      e.target.id === "multiply" ||
      (e.shiftKey === true && e.keyCode === 56) ||
      e.keyCode === 106
    ) {
      if (
        this.state.display.endsWith(" +  - ") === true ||
        this.state.display.endsWith(" -  - ") === true ||
        this.state.display.endsWith(" *  - ") === true ||
        this.state.display.endsWith(" /  - ") === true
      ) {
        return;
      } else if (this.state.display.endsWith(" ") === true) {
        let sliced = this.state.display.slice(0, -3);
        this.setState({
          display: sliced + " * ",
        });
      } else if (this.state.display.endsWith(" ") === false) {
        this.setState((prevState) => ({
          display: prevState.display.toString() + " * ",
        }));
      }
    } else if (
      e.target.id === "divide" ||
      e.keyCode === 191 ||
      e.keyCode === 111
    ) {
      // IF LAST CHARACTERS IN A STRING ARE " + - ", " - - ", " * - " or " / - ", then do nothing
      if (
        this.state.display.endsWith(" +  - ") === true ||
        this.state.display.endsWith(" -  - ") === true ||
        this.state.display.endsWith(" *  - ") === true ||
        this.state.display.endsWith(" /  - ") === true
      ) {
        return;
      } else if (this.state.display.endsWith(" ") === true) {
        let sliced = this.state.display.slice(0, -3);
        this.setState({
          display: sliced + " / ",
        });
      } else if (this.state.display.endsWith(" ") === false) {
        this.setState((prevState) => ({
          display: prevState.display.toString() + " / ",
        }));
      }
    } else if (
      e.target.id === "decimal" ||
      e.keyCode === 110 ||
      e.keyCode === 190
    ) {
      let lastValue = this.state.display.split(" ").splice(-1).toString();

      if (lastValue.includes(".") === false) {
        this.setState((prevState) => ({
          display: prevState.display.toString() + ".",
        }));
      } else {
        return;
      }
    }
  }

  // if last char is an operator followed by a decimal  (" ."), return or replace "." with "0"

  handleEval() {
    try {
      // Do something that could throw
      eval(this.state.display);
    } catch (error) {
      console.log("error");
      this.setState({ display: "Error. Please Reset." });
    }

    let displayValue = this.state.display;

    this.setState({
      lastSum: displayValue + " =",
    });
    if (this.state.display.endsWith(" .") || this.state.display === "-") {
      let sliced = this.state.display.slice(0, -1);
      this.setState({
        display: eval(sliced + "0").toString(), // if last char is an operator followed by a decimal  (" ."), convert to "0", then evaluate
      });
    } else if (this.state.display.endsWith(" ") === true) {
      return; // if statement ends with an operator, exit function
    } else {
      let result = eval(this.state.display);
      console.log(result);
      if (typeof result === "number") {
        this.setState({
          display: eval(this.state.display).toString(),
        });
      }
    }
  }

  render() {
    return (
      <div>
        <p>HELLO CALCULATOR WORLD</p>
        <div id="last-sum">{this.state.lastSum}</div>
        <div id="display">{this.state.display}</div>
        <button id="equals" className="button" onClick={this.handleEval}>
          =
        </button>
        <button id="zero" className="button" onClick={this.handleNum}>
          0
        </button>
        <button id="one" className="1 button" onClick={this.handleNum}>
          1
        </button>
        <button id="two" className="button" onClick={this.handleNum}>
          2
        </button>
        <button id="three" className="button" onClick={this.handleNum}>
          3
        </button>
        <button id="four" className="button" onClick={this.handleNum}>
          4
        </button>
        <button id="five" className="button" onClick={this.handleNum}>
          5
        </button>
        <button id="six" className="button" onClick={this.handleNum}>
          6
        </button>
        <button id="seven" className="button" onClick={this.handleNum}>
          7
        </button>
        <button id="eight" className="button" onClick={this.handleNum}>
          8
        </button>
        <button id="nine" className="button" onClick={this.handleNum}>
          9
        </button>
        <button id="add" className="button" onClick={this.handleNum}>
          +
        </button>
        <button id="subtract" className="button" onClick={this.handleNum}>
          -
        </button>
        <button id="multiply" className="button" onClick={this.handleNum}>
          x
        </button>
        <button id="divide" className="button" onClick={this.handleNum}>
          ÷
        </button>
        <button id="decimal" className="button" onClick={this.handleNum}>
          .
        </button>
        <button
          id="backspace"
          className="button"
          onClick={this.handleBackspace}
        >
          backspace
        </button>
        <button id="clear" onClick={this.handleClear}>
          AC
        </button>
        <p>
          The keyboard shortcut for AC/Clear is shift + backspace.<br></br> The
          rest of the keyboard controls are standard
        </p>
      </div>
    );
  }
}

export default App;
