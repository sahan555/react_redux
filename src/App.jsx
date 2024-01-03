import { useSelector, useDispatch } from "react-redux";
import { Inc, Dec } from "./states/reducers/index";
const App = () => {
  const curState = useSelector((state) => state.number);
  const dispatch = useDispatch();
  return (
    <div>
      <h1>React Redux</h1>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        {curState}
        <div>
          <button onClick={() => dispatch(Inc(5))}>INC</button>
          <button onClick={() => dispatch(Dec())}>DRE</button>
        </div>
      </div>
    </div>
  );
};

export default App;
