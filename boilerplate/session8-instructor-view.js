// ============================================================
// STATE & HOOKS CODE-ALONG — INSTRUCTOR VIEW
// Same five exercises as code-along.js, fully solved, with notes on
// what to watch for and why each answer is correct.
// ============================================================


// ------------------------------------------------------------
// Exercise 1 — Spot the State (Slide 4)
// Typical time: 5 min
// ------------------------------------------------------------

function StudentCardExample({ name, major }) {
  const [likes, setLikes] = useState(0);
  // ...
}

// ANSWER KEY
// 1. name   -> PROPS. Comes in from whoever renders <StudentCard />; never reassigned.
// 2. major  -> PROPS. Same reasoning as name.
// 3. likes  -> STATE. Created with useState inside the component; only
//              StudentCard itself can change it.
//
// WATCH FOR: students conflating "could change" with "is React state."
// If someone argues `name` could be state because "it might change,"
// redirect: the question isn't whether a value can ever change, it's who
// is allowed to change it from inside this component.


// ------------------------------------------------------------
// Exercise 2 — Your First useState (Slides 5–7)
// Typical time: 7 min
// ------------------------------------------------------------

import { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);
  return <p>Count: {count}</p>;
}

// WATCH FOR: `import useState from 'react';` (default import) instead of
// `import { useState } from 'react';` (named import) — useState is a
// named export, so the braces are required. This is the single most
// common miss on this exercise.


// ------------------------------------------------------------
// Exercise 3 — Build a Toggle (Slide 8)
// Typical time: 10 min
// ------------------------------------------------------------

function LikeButton() {
  const [isLiked, setIsLiked] = useState(false);

  const handleClick = () => {
    setIsLiked(prev => !prev);
  };

  return (
    <button onClick={handleClick}>
      {isLiked ? '♥ Liked' : '♡ Like'}
    </button>
  );
}

// NOTE: setIsLiked(prev => !prev) isn't strictly required here —
// setIsLiked(!isLiked) also works for a single click — but modeling the
// functional form now makes Exercise 4's version feel familiar instead
// of brand new.
//
// WATCH FOR: onClick={handleClick()} instead of onClick={handleClick}
// (fires immediately on render instead of on click); missing curly
// braces around the ternary in the JSX.


// ------------------------------------------------------------
// Exercise 4 — Build a Counter + Make It Safer (Slides 9–11)
// Typical time: 12 min
// ------------------------------------------------------------

function ClickCounter() {
  const [clicks, setClicks] = useState(0);

  const handleClick = () => {
    setClicks(prevClicks => prevClicks + 1);
  };

  return (
    <div>
      <p>Clicks: {clicks}</p>
      <button onClick={handleClick}>Click me</button>
    </div>
  );
}

// THE STRETCH DEMO, EXPLAINED: calling setClicks(clicks + 1) twice in one
// handler schedules two updates that both read the same stale `clicks`
// from this render — the second overwrites the first, so the count only
// goes up by 1. Calling setClicks(prevClicks => prevClicks + 1) twice
// schedules two functions that each receive the true latest value when
// React runs them, so the count goes up by 2. This is the clearest live
// proof that the functional form isn't just stylistic preference.
//
// WATCH FOR: students who get a working counter with `clicks + 1` and
// stop there without ever switching to the functional form — the plain
// version "works" for single clicks, so the bug is easy to miss.


// ------------------------------------------------------------
// Final Challenge — StudentCard.js
// Typical time: remainder of session
// ------------------------------------------------------------

function StudentCard({ name, major }) {
  const [likes, setLikes] = useState(0);

  const handleLike = () => {
    setLikes(prevLikes => prevLikes + 1);
  };

  return (
    <div className="student-card">
      <h3>{name}</h3>
      <p>{major}</p>
      <button onClick={handleLike}>❤️ Like</button>
      <p>❤️ Likes: {likes}</p>
    </div>
  );
}

// GRADING RUBRIC (5 checks):
// [ ] useState imported correctly
// [ ] State initialized to 0
// [ ] A "Like" button exists in the JSX
// [ ] Clicking it increments the count (functional form preferred, not required)
// [ ] The current count is displayed and updates live
//
// PAIRING SUGGESTION: if a student finishes Exercises 1–4 quickly, pair
// them with someone still debugging Exercise 3 or 4 rather than letting
// them start the Final Challenge alone — explaining the toggle pattern
// out loud cements it faster than a fifth repetition.
//
// IF STUDENTS STALL: point them back to Exercise 3 (same TODO shape)
// before pointing them at the lab's own hints — the muscle memory from
// the code-along transfers directly.
