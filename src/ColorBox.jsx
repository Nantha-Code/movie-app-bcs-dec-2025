// import React from "react";

// function ColorBox() {
// //     const styles = {
// //         height: "1.5rem",
// //         width: "10rem",
// //         // marginTop: "1rem",
// //         backgroundColor: "pink",
// //     };
// //     const Colors  = ["crimson", "orange", "green", "yellow"]

//   return (

//   );

  
// }

// export default ColorBox;
// Parent -> Child -> props
import React from "react";

 function ColorBox({ clr }) {
const styles = {
    height: "1.5rem",
    width: "10rem",
    marginTop: "1rem",
    backgroundColor: clr,
};

  return <div style={styles}></div>;
}

export default ColorBox;