import FontSizeContext from "./Context/context";
import { useState } from "react";
import UseContextExample from "./UseContextExample";

const App = () => {
  const [size, setSize] = useState(16);
  return (
    <FontSizeContext.Provider value={size}>
      <div style={{ width: '500px', margin: 'auto' }}>
        <UseContextExample />

        <button onClick={() => setSize(size + 5)}>Increase font size</button>
        <button
          onClick={() =>
            setSize((prevSize) => Math.min(prevSize - 5))
          }
        >
          Decrease font size
        </button>
      </div>
    </FontSizeContext.Provider>
  );
};
export default App;