import "./App.css";
import Counter from "./components/Counter";
import { useSelector } from "react-redux";
import { selectDevelopers } from "./store/developers/selectors";

function App() {
  const devs = useSelector(selectDevelopers);
  const resources = useSelector((reduxState) => reduxState.resources);

  return (
    <div>
      <h1>Web development resources</h1>
      <div className="counter-blocks">
        <Counter dataSource={devs} tag="developers" />
        <Counter dataSource={resources} tag="resources" />
      </div>
    </div>
  );
}

export default App;
