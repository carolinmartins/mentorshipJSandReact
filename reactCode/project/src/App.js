import { useState } from "react";
import "./styles.css";

function ListItem({ title }) {
  return (
    <li>
      <input type="checkbox" />
      <span>{title}</span>
      <button>Delete</button>
    </li>
  );
}

export default function App() {
  const [list, setList] = useState([]);
  const [inputValue, setInputValue] = useState("");

  const addItem = () => {
    setList([...list, { title: inputValue }]);
    setInputValue("");
  };

  const handleKeydown = (ev) => {
    if (ev.keyCode !== 13) return;
    if (inputValue.trim() === "") return;
    addItem();
  };

  const handleInputChange = (ev) => {
    setInputValue(ev.target.value);
  };

  return (
    <>
      <h1>To Do List</h1>
      <ul id="list">
        {list.map((item) => {
          return <ListItem key={item.title} title={item.title} />;
        })}
        <div className="Input">
          <input
            onKeyDown={handleKeydown}
            id="newTask"
            type="text"
            value={inputValue}
            onChange={handleInputChange}
            placeholder="What's on your mind?"
          />
          <button onClick={addItem} type="button">
            Add task{" "}
          </button>
        </div>
      </ul>
    </>
  );
}
