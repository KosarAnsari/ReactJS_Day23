📘 Day 23 – ReactJS Learning

Today I explored some very useful concepts in ReactJS that help in writing clean, reusable, and efficient code.


---

🔹 Fragment in ReactJS

Fragments let you return multiple elements without adding extra nodes to the DOM.

import React, { Fragment } from "react";

function StudentInfo() {
  return (
    <Fragment>
      <h2>Student Name: John</h2>
      <p>Class: 10th</p>
    </Fragment>
  );
}

export default StudentInfo;

✅ Cleaner DOM
✅ No unnecessary <div> wrappers


---

🔹 Do’s & Don’ts for Custom Hooks

✅ Do:

Start hook names with use (e.g., useToggle, useFetch)

Keep them small, reusable, and single-purpose

Call hooks at the top level of a component


❌ Don’t:

Call hooks inside loops, conditions, or nested functions

Create hooks that are too specific

Use contradictory names



---

🔹 Custom Hook – useToggle

A simple custom hook to toggle between true/false.

import { useState } from "react";

function useToggle(initialValue = false) {
  const [value, setValue] = useState(initialValue);

  const toggle = () => {
    setValue((prev) => !prev);
  };

  return [value, toggle];
}

export default useToggle;

Usage:

import React from "react";
import useToggle from "./useToggle";

function ToggleExample() {
  const [isVisible, toggleVisibility] = useToggle();

  return (
    <div>
      <button onClick={toggleVisibility}>
        {isVisible ? "Hide" : "Show"} Text
      </button>
      {isVisible && <p>This is toggleable text!</p>}
    </div>
  );
}

export default ToggleExample;


---

🔹 Context API

Context API is used to share data globally without prop drilling.

1. Create Context

// ContextData.js
import { createContext } from "react";
export const SubjectContext = createContext();

2. Provide Data

// App.jsx
import React, { useState } from "react";
import { SubjectContext } from "./ContextData";
import College from "./College";

function App() {
  const [subject, setSubject] = useState("Maths");

  return (
    <div style={{ backgroundColor: "yellow", padding: "10px" }}>
      <h2>Context API</h2>
      <select value={subject} onChange={(e) => setSubject(e.target.value)}>
        <option value="Maths">Maths</option>
        <option value="Science">Science</option>
      </select>

      <SubjectContext.Provider value={subject}>
        <College />
      </SubjectContext.Provider>
    </div>
  );
}

export default App;

3. Consume Data in Nested Components

// College.jsx
import React from "react";
import Class from "./Class";

function College() {
  return (
    <div style={{ backgroundColor: "orange", padding: "10px" }}>
      <h3>College Component</h3>
      <Class />
    </div>
  );
}

export default College;

// Class.jsx
import React from "react";
import Student from "./Student";

function Class() {
  return (
    <div style={{ backgroundColor: "lightblue", padding: "10px" }}>
      <h4>Class</h4>
      <Student />
    </div>
  );
}

export default Class;

// Student.jsx
import React, { useContext } from "react";
import { SubjectContext } from "./ContextData";

function Student
