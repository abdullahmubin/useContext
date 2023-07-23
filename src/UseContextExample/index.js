import { useContext } from "react";
import fontSizeContext from "../Context/context";
const UseContextExample = () => {
    const size = useContext(fontSizeContext);
    return <p style={{ fontSize: `${size}px` }}>font size now {size}px</p>;
};
export default UseContextExample;