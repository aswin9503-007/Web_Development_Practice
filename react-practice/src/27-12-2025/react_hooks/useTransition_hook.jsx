import { useState, useTransition } from "react";

const App = () => {
  const [text, setText] = useState("");
  const [list, setList] = useState([]);
  const [isPending, startTransition] = useTransition();

  const handleChange = (e) => {
    const value = e.target.value;

    // Urgent update
    setText(value);

    // Non-urgent update
    startTransition(() => {
      const bigList = Array.from({ length: 10000 }, (_, i) => value + " " + i);
      setList(bigList);
    });
  };

  return (
    <div>
      <h2>useTransition Example</h2>

      <input
        type="text"
        value={text}
        onChange={handleChange}
        placeholder="Type here..."
      />

      {isPending && <p>Loading...</p>}

      <ul>
        {list.slice(0, 10).map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
};

export default App;
