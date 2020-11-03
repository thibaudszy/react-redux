import "./App.css";
import Counter from "./components/Counter";
import { useSelector } from "react-redux";
import {
  selectDevelopers,
  selectDevelopersWithFavorite,
} from "./store/developers/selectors";
import { selectFavsFromDev } from "./store/selectors";
import { useState } from "react";

function App() {
  const [favoriteId, setFavoriteId] = useState(2);
  const [selectedDev, setSelectedDev] = useState(1);

  const devs = useSelector(selectDevelopers);
  const resources = useSelector((state) => state.resources);
  const developersWithThisFavorite = useSelector(
    selectDevelopersWithFavorite(favoriteId)
  );
  const favs = useSelector(selectFavsFromDev(selectedDev));

  console.log("favs:", favs);
  return (
    <div>
      <h1>Web development resources</h1>
      <div className="counter-blocks">
        <Counter dataSource={devs} tag="developers" />
        <Counter dataSource={resources} tag="resources" />
      </div>
      <div className="select">
        <div>
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
        <div>
          <h1>
            What are
            <select onChange={(e) => setSelectedDev(parseInt(e.target.value))}>
              {devs.map((dev) => (
                <option key={dev.id} value={dev.id}>
                  {dev.name}
                </option>
              ))}
            </select>
            's favorites?
          </h1>
          <ul>
            {favs.map((fav) => (
              <li key={`fav ${fav.id}`}> {fav.name}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default App;
