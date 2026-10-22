import { useState } from "react";

function ClickCounter() {
  const [clicks, setClicks] = useState(0);

  const handleClick = () => {
    //setClicks(clicks + 1);
    setClicks(prevClicks => (prevClicks +1));
  };

  return (
    <div>
      <p>Clicks: {clicks}</p>
      <button onClick={handleClick}>Click me</button>
    </div>
  );
}

export default ClickCounter;
