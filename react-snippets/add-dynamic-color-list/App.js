import { useState } from "react";
import "./App.css";
//Importing bootstrap and other modules
//import 'bootstrap/dist/css/bootstrap.min.css';

export default function App() {
  const [color, setColor] = useState("green");
  const styles = { background: color, color: color };
  const [list, setList] = useState(["red", "yellow"]);
  return (
    <div className="App">
      <input
        type="text"
        style={styles}
        onChange={(event) => setColor(event.target.value)}
      />
      {/* <Box /> */}
      <button onClick={() => setList([...list, color])}>Add Color</button>
      {list.map((li) => (
        <Box li={li} />
      ))}
    </div>
  );
}

function Box({ li }) {
  const styles = {
    background: li,
    height: "25px",
    width: "250px",
    marginTop: "10px",
  };
  return <div className="App" style={styles}></div>;
}
//onchange event we need inform react so we are using hooks here, hooks will be stating with a keyword "use"

