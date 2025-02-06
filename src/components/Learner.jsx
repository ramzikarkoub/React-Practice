import React from "react";

export default function Learner(props) {
  console.log(props);
  return (
    <div>
      <h4>{props.learner.name}</h4>
    </div>
  );
}
