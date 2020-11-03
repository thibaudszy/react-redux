import "./App.css";
import Counter from "./components/Counter";
import { useSelector } from "react-redux";
import { selectDevelopers } from "./store/developers/selectors";
import { useState } from "react";

function App() {
  const [favoriteId, setFavoriteId] = useState(2);
  const devs = useSelector(selectDevelopers);
  const resources = useSelector((state) => state.resources);
  console.log("id", typeof favoriteId);
  const developersWithThisFavorite = useSelector((state) => {
    return state.developers.filter((dev) => dev.favorites.includes(favoriteId));
  });
  console.log(developersWithThisFavorite);
  return (
    <div>
      <h1>Web development resources</h1>
      <div className="counter-blocks">
        <Counter dataSource={devs} tag="developers" />
        <Counter dataSource={resources} tag="resources" />
      </div>
      <h1>
        Who likes
        <select onChange={(e) => setFavoriteId(parseInt(e.target.value))}>
          {resources.map((res) => (
            <option key={res.id} value={res.id}>
              {res.name}
            </option>
          ))}
        </select>
        ?
      </h1>
      <ul>
        {developersWithThisFavorite.map((dev) => (
          <li key={`dev ${dev.id}`}> {dev.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
