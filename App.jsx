import { Fragment, useState } from 'react';
import useToggle from './useToggle';
import College from './College';
import { SubjectContext } from './ContextData';

function App() {
  const [subject, setsubj] = useState('English');
  const [value, toggleVal] = useToggle(true);
  return (
    <>
      <Data />
      <h2>Rules for making customized react hooks</h2>
      <ul>
        <li>Start with use__. eg:- useState,useEffect etc.</li>
        <li>Use hooks at Top Level.</li>
        <li>Do not call Hooks inside conditions or loops.</li>
        <li>Do not call Hooks after a conditional return statement</li>
        <li>Do not call Hooks in event Handlers.</li>
        <li>Do not call hooks in class components.</li>
        <li>Do not call Hooks inside try/catch/finally blocks.</li>
        <li>Call Hooks from React function components.</li>
        <li>Call Hooks from custom Hooks.</li>
        <li>Don't call Hooks from JS regular functions.</li>
        <li>Don't use contradictory names/same names.</li>
        <li>
          Pre-defined Hooks can be used in custom Hooks, a custom Hook can be
          used inside another custom hook.
        </li>
      </ul>
      <button onClick={toggleVal}>Toggle Heading</button>
      <button onClick={() => toggleVal(true)}>Show Heading</button>
      <button onClick={() => toggleVal(false)}>Hide Heading</button>
      {value ? <h2>Making Custom Hooks </h2> : null}

      <h2>Context API</h2>
      <p>
        data can be shared using context API from one component to other without
        props drilling. it has three parts-
      </p>
      <ul>
        <li>createContext: To initiate context API, a separate file</li>
        <li>
          Provider: use for update or provide data i.e, it will in the component
          from where data has to be shared
        </li>
        <li>
          useContext: get data from context api i.e, it will be in the
          compononent where data has to be received.
        </li>
      </ul>

      <div style={{ backgroundColor: 'yellow', padding: '10' }}>
        <SubjectContext.Provider value={subject}>
          <select
            value={subject}
            onChange={(event) => setsubj(event.target.value)}
            style={{
              backgroundColor: 'teal',
              color: 'white',
              borderRadius: '5px',
            }}
          >
            <option value="">--SELECT--</option>
            <option value="Maths"> MATHS</option>
            <option value="English">ENGLISH</option>
            <option value="Science">SCIENCE</option>
          </select>
          <h1>Context API</h1>
          <button
            style={{ backgroundColor: 'burlywood', color: 'black' }}
            onClick={() => setsubj('')}
          >
            Clear Subject
          </button>
          <College />
        </SubjectContext.Provider>
      </div>
    </>
  );
}
export default App;

function Data() {
  return (
    <Fragment>
      <h1>Fragment in ReactJS</h1>
      <p>
        can be used in place of a parent element and does not generate any html
        element. eliminates extra parent elements from documentation
      </p>
    </Fragment>
  );
}
