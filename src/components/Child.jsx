import React from "react";

function Child({ greeting }) {
  return (
    <div>
      <h2>Child Component</h2>
      <p>Greeting from parent: <strong>{greeting}</strong></p>
    </div>
  );
}

export default Child;
