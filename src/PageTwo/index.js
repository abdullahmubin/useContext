import { useContext } from "react";
import context from "./../context";
const PageTwo = () => {
  const size = useContext(context);
  return <p style={{ fontSize: `${size}px` }}>Content from the first page</p>;
};
export default PageTwo;