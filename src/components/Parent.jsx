import React from "react";
import Child from "./Child";

function Parent() {
  const greetingMessage = "Hello from the Parent! 👋";

  return (
    <div>
      <h1>Parent Component</h1>
      <Child greeting={greetingMessage} />
    </div>
  );
}

export default Parent;
