import { useContext } from "react";
import context from "../Context/context";
const UseContextExample = () => {
    const size = useContext(context);
    return <p style={{ fontSize: `${size}px` }}>font size now {size}px</p>;
};
export default UseContextExample;