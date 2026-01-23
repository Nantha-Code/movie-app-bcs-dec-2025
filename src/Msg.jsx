import React from "react";

function Msg1() {
  let name = "Suriya";
  let followers = 100;

  return (
    <div>
      <h1 className="user-msg">Hello, {name} 🎊</h1>
      <h2>
        {name} has {followers * 2} followers
      </h2>
    </div>
  );
}

export default Msg1;