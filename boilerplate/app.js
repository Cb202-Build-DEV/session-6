/* ============================================================
   REACT LESSON — CODE-ALONG FILE (STUDENT VIEW)
   ------------------------------------------------------------
   Keep this open next to the slides. Each block below is
   labeled with the lesson timestamp it belongs to and which
   real file to type it into. Fill in the TODOs as we go —
   don't peek at the instructor's screen if you get stuck,
   try it yourself first.
   ============================================================ */


/* ------------------------------------------------------------
   |  JSX SYNTAX
   These are concept examples — type them into any scratch file,
   not the project yet. Goal is pattern recognition.
------------------------------------------------------------- */

// A JSX expression is just a regular JS value:
const element = <h1>Hello, world!</h1>;

// RULE 1 — one root element per component.
// This is INVALID — two siblings, nothing wrapping them:
//
//   function Broken() {
//     return (
//       <h1>Title</h1>
//       <p>Text</p>
//     );
//   }
//
// TODO: fix it below so it has one root element instead of two.

function Fixed() {
  return (
    // your fix here
  );
}

// RULE 2 — class -> className
//   INVALID (HTML habit): <div class="card">
//   VALID (JSX):           <div _____________="card">   // fill the blank

// RULE 3 — for -> htmlFor
//   INVALID: <label for="name">
//   VALID:   <label _____________="name">   // fill the blank

// RULE 4 — every tag must close, including self-closing ones
//   INVALID: <img>
//   VALID:   <img ___ >   // fill the blank


/* ------------------------------------------------------------
   |  FUNCTIONAL COMPONENTS
   Create a new file: src/StudentCard.jsx
   Follow along and fill in the blanks below as we build it
   together.
------------------------------------------------------------- */

function ____________() {          // TODO: name the component (capitalized!)
  return (
    <div className="____________">  {/* TODO: give it the right className */}
      <h2>Student Name</h2>
      <p>Grade: A</p>
    </div>
  );
}

export default ____________;        // TODO: export what you named above


/* ------------------------------------------------------------
   |  RENDERING THE COMPONENT
   Open src/App.jsx, delete the Vite boilerplate, and fill in
   the blanks below.
------------------------------------------------------------- */

import ____________ from './____________';   // TODO: import your component

function App() {
  return (
    <>
      {/* TODO: render your component here */}
      {/* TODO: and again — render it a second time */}
    </>
  );
}

export default App;

// Run `npm run dev` and confirm you see two identical student
// cards on the page. Two identical cards is correct and
// expected — we haven't covered props yet, so every StudentCard
// renders the same hardcoded content. That's next lesson's
// problem to solve, not today's.


/* ------------------------------------------------------------
   |  REACT DEVELOPER TOOLS
   Nothing to type here — open your browser DevTools, click the
   "Components" tab, and find the App -> StudentCard -> StudentCard
   tree matching the code above.
------------------------------------------------------------- */


/* ------------------------------------------------------------
   |  LAB — YOUR FIRST REACT APP
   From here, close this file and build it yourself from a fresh
   `npm create vite@latest`. Everything above was the warm-up —
   the lab asks for the same shape of code, written by you,
   from scratch, with at least three StudentCards rendered.
------------------------------------------------------------- */
