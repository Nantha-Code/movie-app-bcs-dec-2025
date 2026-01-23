import "./App.css";

// Component = UI + Logic
// Props - Arg & Parameter - Properties
export default function App() {
  // Logic Starts

  // Logic Ends
  return (
    // UI Starts
    <div className="App">
      <User
        name="Kitty"
        url="https://media.gettyimages.com/id/452414691/photo/portrait-of-silver-tabby.jpg?s=612x612&w=gi&k=20&c=fMqjWIUNCurGU5qeOSHnfGm8FRs1qSHZLylQPWYA4Jk="
      />

      <User
        name="Tiger"
        url="https://i.icanvas.com/CBO25?d=2&sh=s&t=1758923638"
      />

      <User
        name="Black Panther"
        url="https://img.pikbest.com/photo/20251102/black-panther-staring-intently_12002156.jpg!f305cw"
      />
    </div>
  );
}

// function Msg({ name }) {
//   return (
//     <div>
//       <h1 className="user-msg">Hello, {name} 🎊</h1>
//     </div>
//   );
// }
function User({ name, url }) {
  return (
    <div>
      <img className="profile-pic" src={url} alt="" />
      <p>
        Hello, <span className="p-name">{name}</span> 🎊
      </p>
    </div>
  );
}
// function Msg(props) {
//   const { name } = props;

//   return (
//     <div>
//       <h1 className="user-msg">Hello, {name} 🎊</h1>
//     </div>
//   );
// }

// function Msg(props) {
//   console.log(props, typeof props);
//   // let name = "NK";

//   return (
//     <div>
//       <h1 className="user-msg">Hello, {props.name} 🎊</h1>
//     </div>
//   );
// }

// function print(name) {
//   return `Hello, ${name}`;
// }

// print('nk')
// print('pusha')
// print('tara')

// Component Rules
// 1. Start with Capital (PascalCase)
// 2. Return JSX



// JSX - JavaScript XML
// Babel -> JSX -> JS
// class -> reserverd keyword

// // Component = UI + Logic
// export default function App() {
//   // Logic Starts
//   let name = "Suriya";

//   // Logic Ends
//   return (
//     // UI Starts
//     <div className="App">
//       <input type="text" placeholder="Tell me your fav color" />
//       <h1 className="user-msg">Hello, Vikas 🎊</h1>
//     </div>
//     // UI Ends
//   );
// }

// // JSX - JavaScript XML
// // Babel -> JSX -> JS
// // class -> reserverd keyword
