import DisplayCount from "./DisplayCount";

const DisplayCountRoot = ({ count }) => {
  return (
    <div>
      <h2>Display Counter Root</h2>
      <DisplayCount count={count}></DisplayCount>
    </div>
  );
};
export default DisplayCountRoot;
