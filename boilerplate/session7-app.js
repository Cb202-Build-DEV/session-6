// ============================================================
// STATE & HOOKS CODE-ALONG
// Work through these five exercises in order, in this same file.
// Test each one (render it, click it) before moving to the next.
// ============================================================


// ------------------------------------------------------------
// Exercise 1 — Spot the State (Slide 4)
// No code to write — just look, then fill in your answers below.
// ------------------------------------------------------------

function StudentCardExample({ name, major }) {
  const [likes, setLikes] = useState(0);
  // ...
}

// Your task: for each variable, write PROPS or STATE and one sentence why.
//
// 1. name   -> PROPS
// 2. major  -> PROPS
// 3. likes  -> STATE


// ------------------------------------------------------------
// Exercise 2 — Your First useState (Slides 5–7)
// Fill in the four blanks so this compiles, starts at 0, and shows the count.
// Test it: render <Counter /> — it should show "Count: 0" with no console errors.
// ------------------------------------------------------------

import { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);
  return <p>Count: {count}</p>;
}


// ------------------------------------------------------------
// Exercise 3 — Build a Toggle (Slide 8)
// Finish the four TODOs below to make a like button that flips between two states.
// Test it: click the button — the symbol and word should flip every time, forever.
//
// Common trap: writing onClick={handleClick()} instead of onClick={handleClick} —
// if your button does nothing after the first click, that's almost always it.
// ------------------------------------------------------------

import { useState } from 'react';

function LikeButton() {
  // TODO 1: create a boolean state variable called isLiked, starting false
    const [isLiked, setisLiked] = useState(false);
  // TODO 2: write a handleClick function that flips isLiked
    const handleClick = () => {
  setisLiked(!isLiked);
    };
  return (
    <button onClick={handleClick}>
      {isLiked ? '♥ Liked' : '♡ Like'} {/* TODO 4: show '♥ Liked' when true, '♡ Like' when false */}
    </button>
  );
}


// ------------------------------------------------------------
// Exercise 4 — Build a Counter + Make It Safer (Slides 9–11)
// Step 1: get a plain click counter working (fill in TODO 1).
// Step 2: rewrite TODO 1 using the functional update form —
//         setClicks(prevClicks => prevClicks + 1) instead of setClicks(clicks + 1).
//
// Stretch (optional): inside handleClick, call setClicks twice in a row.
// With the functional form, one click should add 2. With the plain
// `clicks + 1` form, one click still only adds 1 — try both and compare.
//
// Test it: click several times fast — the count should never skip or lag.
// ------------------------------------------------------------

function ClickCounter() {
  const [clicks, setClicks] = useState(0);

  const handleClick = () => {
    // TODO 1: increment clicks (start plain, then make it safe)
    //setClicks(clicks +1)
    setClicks(prevClicks => prevClicks + 1);
  };

  return (
    <div>
      <p>Clicks: {clicks}</p>
      <button onClick={handleClick}>Click me</button>
    </div>
  );
}
