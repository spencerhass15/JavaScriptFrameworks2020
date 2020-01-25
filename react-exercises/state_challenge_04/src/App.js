import React, { useState } from "react";
import "./App.css";
import WordLength from "../src/components/WordLength/WordLength";
import LessText from "../src/components/LessText/LessText";

/**
 * Challenge 1)
 *  As a user, I would like to see the number of keystrokes a user types displayed on the screen.
 *  https://slides.com/accjavascript/intro-to-react-044411#/55
 *
 *  Instructions:
 *  Create a component named WordLength that requires no props.
 *  It will render an input field box that will capture user input.
 *  It will then render the length of the input on the screen.
 *
 *
 * Challenge 2)
 * As a developer, I would like a component that has the ability to truncate text.
 *
 * Instructions:
 * Create a component named LessText and it will accept two props.
 * The first prop will be named text and it  will accept a string.
 * The second prop will be named maxLength and it will accept an integer.
 *
 * The component will have two buttons.
 * The first button will say "Read More"
 * The second button will say "Read Less"
 *
 * Read More button will display the entire text.
 * Read Less button will truncate the set by the maxLength Prop.
 *
 *
 *
 */

function App() {
  return (
    <div className="App">
      <WordLength />
      <LessText
        text={`Focused, hard work is the real key
      to success. Keep your eyes on the goal, 
      and just keep taking the next step 
      towards completing it.`}
        maxLength={35}
      />
    </div>
  );
}

export default App;
