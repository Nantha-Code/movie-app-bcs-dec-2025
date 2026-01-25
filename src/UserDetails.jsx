// Component = UI + Logic
// Props - Arg & Parameter - Properties
import css from "./App.css";



function UserDetails() {
  const Users = [
    {
      name: "Kitty",
      url: "https://media.gettyimages.com/id/452414691/photo/portrait-of-silver-tabby.jpg?s=612x612&w=gi&k=20&c=fMqjWIUNCurGU5qeOSHnfGm8FRs1qSHZLylQPWYA4Jk=",
    },
    {
      name: "Tiger",
      url: "https://i.icanvas.com/CBO25?d=2&sh=s&t=1758923638",
    },
    {
      name: "Black Panther",
      url: "https://img.pikbest.com/photo/20251102/black-panther-staring-intently_12002156.jpg!f305cw",
    },
  ];

  return (
    <div className="UserDetails">
      {Users.map(({ name, url }) => (
        <User key={name} name={name} url={url} />
      ))}
    </div>
  );
}

function User({ name, url }) {
  return (
    <div>
      <img src={url} alt={name} />
      <h3>Hello, {name}</h3>
    </div>
  );
}



export default UserDetails;
