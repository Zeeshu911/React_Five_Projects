import React, { useState } from "react";
import "./App.css";

const App = () => {
  const [value, setValue] = useState(0);
  return (
    <>
      <article>
        <header>COUNTER APP</header>
        <section>
          <h1>{value}</h1>
          <div className="buttons">
            <button
              className="btn"
              onClick={() => setValue(value - 1)}
              disabled={value === 0}
            >
              -
            </button>
            <button className="btn" onClick={() => setValue(value + 1)}>
              +
            </button>
          </div>
        </section>
        <footer>&copy; All Rights Reserved By CodeWithZeeshu</footer>
      </article>
    </>
  );
};

export default App;
