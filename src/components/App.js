// // i// import React, { Component, useState } from "react";
// // import '../styles/App.css';

// // class App extends Component {
// //     constructor(props) {
// //         super(props)
// //         this.state = {
// //             renderBall: false,
// //             posi : 0,
// //             ballPosition: { left: "0px" }
// //         };
// //         this.renderChoice = this.renderBallOrButton.bind(this)
// //         this.buttonClickHandler = this.buttonClickHandler.bind(this)
// //     };

// //     buttonClickHandler() {
   
// //    }
// //     renderBallOrButton() {
// // 		if (this.state.renderBall) {
// // 		    return <div className="ball" style={this.state.ballPosition}></div>
// // 		} else {
// // 		    return <button onClick={this.buttonClickHandler} >Start</button>
// // 		}
// //     }

// //     // bind ArrowRight keydown event
// //     componentDidMount() {
      
// //     }

// //     render() {
// //         return (
// //             <div className="playground">
// //                 {this.renderBallOrButton()}
// //             </div>
// //         )
// //     }
// // }
// // return(
// //     <Game/>
// // )
// // };
// import React, { useState, useEffect } from "react";
// import "../styles/App.css";
// import Game from "./Game/Game";

// const App = () => {
// //   const [renderBall, setRenderBall] = useState(false);
// //   const [ballPosition, setBallPosition] = useState({ left: "0px" });

// //   const buttonClickHandler = () => {
// //     setRenderBall(true);
// //   };

// //   const handleKeyDown = (event) => {
// //     if (event.key === "ArrowRight" && renderBall) {
// //       setBallPosition((prevPosition) => ({
// //         ...prevPosition,
// //         left: parseInt(prevPosition.left) + 5 + "px",
// //       }));
// //     }
// //   };

// //   useEffect(() => {
// //     window.addEventListener("keydown", handleKeyDown);

// //     return () => {
// //       window.removeEventListener("keydown", handleKeyDown);
// //     };
// //   }, [renderBall]);

// //   const renderBallOrButton = () => {
// //     if (renderBall) {
// //       return <div className="ball" style={ballPosition}></div>;
// //     } else {
// //       return <button onClick={buttonClickHandler}>Start</button>;
// //     }
// //   };

// //   return <div className="playground">{renderBallOrButton()}</div>;
// return(
//     <Game/>
// )
// };

//  export default App;

import React, { Component } from "react";
import '../styles/App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      renderBall: false,
      ballPosition: { left: "0px" }
    };
    this.buttonClickHandler = this.buttonClickHandler.bind(this);
    this.handleKeyDown = this.handleKeyDown.bind(this);
  }

  buttonClickHandler() {
    this.setState({
      renderBall: true
    });
    document.addEventListener("keydown", this.handleKeyDown);
  }

  handleKeyDown(event) {
    if (event.keyCode === 39) { // Right arrow key
      const newPos = parseInt(this.state.ballPosition.left) + 5;
      this.setState({
        ballPosition: { left: `${newPos}px` }
      });
    }
  }

  componentWillUnmount() {
    document.removeEventListener("keydown", this.handleKeyDown);
  }

  render() {
    return (
      <div className="playground">
        {this.state.renderBall ? (
          <div className="ball" style={this.state.ballPosition}></div>
        ) : (
          <button className="start" onClick={this.buttonClickHandler}>Start</button>
        )}
      </div>
    );
  }
}

export default App;