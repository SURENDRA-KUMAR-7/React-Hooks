import { useState } from "react";




const App = () => {
  const [input, setInput] = useState({
    name: "",
    email: "",
    password: ""
  });

  const inputHandle = (e) => {
    const { name, value } = e.target;
    setInput({ ...input, [name]: value });
  };

  const submitHandle = (e) => {
    e.preventDefault();
  };

  return (
    <div className="hero">
      <form onSubmit={submitHandle}>
        <label>
          Name:
          <input
            type="text"
            value={input.name}
            onChange={inputHandle}
            placeholder="Enter"
            name="name"
          />
        </label>
        <br />
        <label>
          email:
          <input
            type="text"
            value={input.email}
            onChange={inputHandle}
            placeholder="Enter"
            name="email"
          />
        </label>
        <br />
        <label>
          Password:
          <input
            type="text"
            value={input.password}
            onChange={inputHandle}
            placeholder="Enter"
            name="password"
          />
        </label>
        <br />
        <button>Submit</button>
      </form>
    </div>
  );
};

export default App;
