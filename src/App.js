import FontSizeContext from "./context";
import { useState } from "react";
import PageOne from "./PageOne";
import PageTwo from "./PageTwo";
const App = () => {
  const [size, setSize] = useState(16);
  return (
    <FontSizeContext.Provider value={size}>
      <PageOne />
      <PageTwo />
      <button onClick={() => setSize(size + 5)}>Increase font</button>
      <button
        onClick={() =>
          setSize((prevSize) => Math.min(11, prevSize - 5))
        }
      >
        Decrease font
      </button>
    </FontSizeContext.Provider>
  );
};
export default App;