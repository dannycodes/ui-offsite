import React, { useEffect, useState } from "react";
import logo from "./logo.svg";
import "./App.css";

const SPEED = 50;

// const imageToLevelMap = {
//   1: logo,
// };

const IMAGE_WIDTH = 80;
const IMAGE_HEIGHT = 80;

const DURATION_IN_MILLISECONDS = 1000;

function App() {
  const [level, setLevel] = useState(1);

  // const [mousePosition, setMousePosition] = useState({ x: 100, y: 200 });
  const [imageLocation, setImageLocation] = useState({ x: 100, y: 200 });

  const maxX = 800;
  const maxY = 600;

  setTimeout(() => {
    setImageLocation({
      x: Math.random() * 800,
      y: Math.random() * 600,
    });
  }, 2000);

  // const resetImagePosition = () => {
  //   setImageLocation({ x: 100, y: 200 });
  // };

  return (
    <div className="container">
      <div
        className="game-box"
        // onMouseMove={(e) => {
        //   setOldX(e.clientX + e.currentTarget.offsetLeft);
        //   setOldY(e.clientY);

        //   // const newX = (imagePosition.x - mouse.position.x) * speed * level;
        //   setMousePosition({
        //     y: e.clientY,
        //     x: e.clientX + e.currentTarget.offsetLeft,
        //   });
        // }}
      >
        <img
          className="logo"
          src={logo}
          style={{
            height: IMAGE_HEIGHT,
            width: IMAGE_WIDTH,
            transform: `translate(${imageLocation.x - IMAGE_WIDTH / 2}px, ${
              imageLocation.y - IMAGE_HEIGHT / 2
            }px)`,
          }}
          onClick={() => {
            setLevel(level + 1);
          }}
        />
      </div>
      {/* <button onClick={resetImagePosition}>Reset</button> */}
      <div>Current level: {level}</div>
    </div>
  );
}

export default App;
